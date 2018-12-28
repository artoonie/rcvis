import plotly.offline as py
import pandas as pd
import numpy as np

label = []
color = []
sources = []
target = []
value = []

class Member:
    def __init__(self, name, color):
        self.name = name
        self.color = color

class Elimination:
    def __init__(self, member, transfers):
        self.member = member
        self.transfers = transfers

class Step:
    def __init__(self, eliminations):
        self.eliminations = eliminations

class MemberNode:
    def __init__(self, member, numVotes, index):
        self.member = member
        self.numVotes = numVotes
        self.index = index

class NodeFactory:
    def __init__(self):
        self.currIndex = 0

    def makeNode(self, member, numVotes):
        memberNode = MemberNode(member, numVotes, self.currIndex)
        self.currIndex += 1
        label.append(member.name)
        color.append(member.color)
        return memberNode

armin = Member("Armin", "#FF0000")
kim = Member("Kim", "#00CCCC")
breed = Member("Breed", "#CCCC00")
leno = Member("Leno", "#CCFFCC")
members = [armin, kim, breed, leno]

elimination0 = Elimination(armin, {kim: 100, breed: 100})
elimination1 = Elimination(leno, {kim: 180, breed: 20})
elimination2 = Elimination(kim, {breed: 180+100+200})
step0 = [elimination0]
step1 = [elimination1]
step2 = [elimination2]
steps = (step0, step1, step2)

# TODO plotly ignores the sort order...
eliminationOrder = []
membersRemaining = set(members)
for step in steps:
    for elimination in step:
        eliminationOrder.append(elimination.member)
        membersRemaining.remove(elimination.member)
for member in membersRemaining:
    eliminationOrder.append(member)

nodeFactory = NodeFactory()
nodes = {}
for m in sorted(members, key=lambda m:eliminationOrder.index(m)):
    nodes[m] = nodeFactory.makeNode(m, 200)

nodesLastRound = nodes
for step in steps:
    nodesThisRound = {}

    eliminatedMembers = set([elimination.member for elimination in step])
    for member in sorted(nodesLastRound, key=lambda m:nodes[m].index):
        if member in eliminatedMembers:
            continue
        startingVotes = nodesLastRound[member].numVotes
        nodesThisRound[member] = nodeFactory.makeNode(member, startingVotes)

    for elimination in step:
        for transferMember, transferNumber in elimination.transfers.items():
            sourceNode = nodesLastRound[elimination.member]
            targetNode = nodesThisRound[transferMember]
            sources.append(sourceNode.index)
            target.append(targetNode.index)
            value.append(transferNumber)
            targetNode.numVotes += transferNumber

    for member in nodesLastRound:
        if elimination.member == member:
            continue
        sources.append(nodesLastRound[member].index)
        target.append(nodesThisRound[member].index)
        value.append(nodesLastRound[member].numVotes)

    nodesLastRound = nodesThisRound

print(label, sources, target, value)

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
      label = label,
      color = color
    ),
    link = dict(
      source = sources,
      target = target,
      value = value,
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
py.plot(fig, validate=True)
