import { calculateHash } from '../util/hash-generator.js'

const Block = function(id, data, previousHash) {
    this.id = id
    this.timestamp = Date.now()
    this.previousHash = previousHash
    this.hash = calculateHash(this.id, this.data, this.timestamp, this.previousHash)
}

let block = new Block(1, 0, 0)
console.log(block.hash)