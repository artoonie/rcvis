import plotly.offline as py
import pandas as pd
import numpy as np

class Item:
    def __init__(self, name, color):
        self.name = name
        self.color = color

class Elimination:
    def __init__(self, item, transfers):
        self.item = item
        self.transfers = transfers

class Step:
    def __init__(self, eliminations):
        self.eliminations = eliminations

class ItemNode:
    def __init__(self, item, numVotes, index):
        self.item = item
        self.numVotes = numVotes
        self.index = index

class Graph:
    def __init__(self):
        self.sources = []
        self.target = []
        self.value = []
        self.label = []
        self.color = []
        self.currIndex = 0

    def addConnection(self, sourceNode, targetNode, value):
        self.sources.append(sourceNode.index)
        self.target.append(targetNode.index)
        self.value.append(value)

    def addNode(self, item, numVotes):
        self.label.append(item.name + " " + str(numVotes))
        self.color.append(item.color)
        itemNode = ItemNode(item, numVotes, self.currIndex)
        self.currIndex += 1
        return itemNode

    def createPlotlyFigure(self):
        data_trace = dict(
            type='sankey',
            domain = dict(
              x =  [0,1],
              y =  [0,1]
            ),
            orientation = "v",
            valueformat = ".0f",
            node = dict(
              pad = 10,
              thickness = 30,
              line = dict(
                width = 0
              ),
              label = self.label,
              color = self.color
            ),
            link = dict(
              source = self.sources,
              target = self.target,
              value = self.value,
          )
        )

        layout =  dict(
            title = "Scottish Referendum Voters who now want Independence",
            height = 772,
            font = dict(
              size = 10
            ),    
        )

        fig = dict(data=[data_trace], layout=layout)

        return fig

def generateTestData():
    armin = Item("Armin", "#FF0000")
    kim = Item("Kim", "#00CCCC")
    breed = Item("Breed", "#CCCC00")
    leno = Item("Leno", "#CCFFCC")
    items = [armin, kim, breed, leno]

    elimination0 = Elimination(armin, {kim: 100, breed: 100})
    elimination1 = Elimination(leno, {kim: 180, breed: 20})
    elimination2 = Elimination(kim, {breed: 180+100+200})
    step0 = [elimination0]
    step1 = [elimination1]
    step2 = [elimination2]
    steps = (step0, step1, step2)
    return steps, items

def getEliminationOrder(steps, items):
    # TODO plotly ignores the sort order, but let's leave this in here
    # in case we find a workaround
    eliminationOrder = []
    itemsRemaining = set(items)
    for step in steps:
        for elimination in step:
            eliminationOrder.append(elimination.item)
            itemsRemaining.remove(elimination.item)
    for item in itemsRemaining:
        eliminationOrder.append(item)
    return eliminationOrder

def generateInitialTestNodes(graph, items, eliminationOrder):
    nodes = {}
    for m in sorted(items, key=lambda m:eliminationOrder.index(m)):
        nodes[m] = graph.addNode(m, 200)
    return nodes

def runStep(nodesLastRound, step, graph):
    nodesThisRound = {}
    sources, target, value = [], [], []

    def getPassthroughVotes():
        eliminatedItems = set([elimination.item for elimination in step])
        for item in nodesLastRound:
            if item in eliminatedItems:
                continue
            votes = nodesLastRound[item].numVotes
            for elimination in step:
                if item in elimination.transfers:
                    votes += elimination.transfers[item]
            nodesThisRound[item] = graph.addNode(item, votes)

            graph.addConnection(sourceNode = nodesLastRound[item],
                                targetNode = nodesThisRound[item],
                                value  = nodesLastRound[item].numVotes)

    def getTransferVotes():
        for elimination in step:
            for transferItem, transferNumber in elimination.transfers.items():
                sourceNode = nodesLastRound[elimination.item]
                targetNode = nodesThisRound[transferItem]
                graph.addConnection(sourceNode = sourceNode,
                                    targetNode = targetNode,
                                    value  = transferNumber)

    getPassthroughVotes()
    getTransferVotes()
    return nodesThisRound

graph = Graph()
steps, items = generateTestData()
eliminationOrder = getEliminationOrder(steps, items)
nodes = generateInitialTestNodes(graph, items, eliminationOrder)

nodesLastRound = nodes
for step in steps:
    nodesLastRound = runStep(nodesLastRound, step, graph)

fig = graph.createPlotlyFigure()
py.plot(fig, validate=True)
