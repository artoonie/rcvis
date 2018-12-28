import plotly.offline as py
import pandas as pd
import numpy as np

label = []
sources = []
target = []
value = []

class Member:
    def __init__(self, name, numVotes):
        self.name = name
        self.numVotes = numVotes

class Elimination:
    def __init__(self, member, transfers):
        self.member = member
        self.transfers = transfers

class Step:
    def __init__(self, eliminations):
        self.eliminations = eliminations

class MemberNode:
    def __init__(self, member, index):
        self.member = member
        self.lastIndex = None
        self.currIndex = index

    def step(self, numEliminated):
        self.lastIndex = self.currIndex
        self.currIndex += numEliminated

class NodeFactory:
    def __init__(self):
        self.currIndex = 0

    def makeNode(self, member):
        memberNode = MemberNode(member, self.currIndex)
        self.currIndex += 1
        return memberNode

armin = Member("Armin", 100)
kim = Member("Kim", 1000)
breed = Member("Breed", 1000)
leno = Member("Leno", 1000)
members = [armin, kim, breed, leno]

elimination0 = Elimination(armin, {kim: 50, breed: 50})
elimination1 = Elimination(leno, {kim: 900, breed: 100})
elimination2 = Elimination(kim, {breed: 50})
step0 = [elimination0]
step1 = [elimination1]
step2 = [elimination2]

nodeFactory = NodeFactory()
nodes = {}
for m in members:
    nodes[m] = nodeFactory.makeNode(m)

steps = (step0, step1, step2)

for member in sorted(nodes, key=lambda m:nodes[m].currIndex):
    label.append(member.name)

for step in steps:
    numInCurrentRound = len(nodes)
    for member in sorted(nodes, key=lambda m:nodes[m].currIndex):
        nodes[member].step(numInCurrentRound)
        label.append(member.name)

    for elimination in step:
        for transferMember, transferNumber in elimination.transfers.items():
            sourceNode = nodes[elimination.member]
            targetNode = nodes[transferMember]
            sources.append(sourceNode.lastIndex)
            target.append(targetNode.currIndex)
            value.append(transferNumber)
            targetNode.member.numVotes += transferNumber

    for member, node in nodes.items():
        if elimination.member == member:
            continue
        sources.append(node.lastIndex)
        target.append(node.currIndex)
        value.append(node.member.numVotes)
        print("On step", step, "we have member", node.member.name)

    for elimination in step:
        del nodes[elimination.member]

    for member in sorted(nodes, key=lambda m:nodes[m].currIndex):
        label.append(member.name)

print(label, sources, target, value)

data_trace = dict(
    type='sankey',
    domain = dict(
      x =  [0,1],
      y =  [0,1]
    ),
    orientation = "h",
    valueformat = ".0f",
    node = dict(
      pad = 10,
      thickness = 30,
      line = dict(
        width = 0
      ),
      label = label
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
