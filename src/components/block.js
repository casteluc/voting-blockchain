import { sha256 } from 'js-sha256'

class Block {
    constructor(id, vote, previousHash) {
        this.id = id
        this.vote = vote
        this.timestamp = Date.now()
        this.previousHash = previousHash
        this.hash = this.calculateHash(this.id, this.vote, this.timestamp, this.previousHash)
    }

    calculateHash(...blockInfo) {
        return sha256(blockInfo.toString()) 
    }
}

export default Block