import { sha256 } from 'js-sha256'


const Block = function(id, previousHash) {
    this.id = id
    this.timestamp = Date.now()
    this.previousHash = previousHash
    this.hash = calculateHash(this.id, this.data, this.timestamp, this.previousHash)
    
    function calculateHash(...blockInfo) {
        return sha256(blockInfo.toString()) 
    }
}

let block = new Block(0, 0)
console.log(block.hash)
