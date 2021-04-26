import Blockchain from './modules/Blockchain.js'
import Vote from './modules/Vote.js'

let voteOptions = []
voteOptions.push("Denu")
voteOptions.push("Gabi")

let blockchain = new Blockchain()

let v1 = new Vote("17796014767", 0)

console.log("Mining block 1...")
blockchain.pushBlock(v1)

console.log("Mining block 2...")
blockchain.pushBlock(v1)




