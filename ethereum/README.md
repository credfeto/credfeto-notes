# Ethereum

## Geth

## Node

* list peers: ``admin.peers``
* Node Info: ``admin.nodeInfo``

### Sealers

* list sealers ``clique.getSigners()``
* list propositions: ``clique.proposals``
* discard a proposition: ``clique.discard("0x1234234234234")``
* add a new sealer: ``clique.propose("0x1234243214312", true)``
* remove a sealer: ``clique.propose("0x1234243214312", false)``

