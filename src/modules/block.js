import { sha256 } from 'js-sha256'

class Block {
    constructor(id, data, previousHash) {
        this.id = id
        this.data = data
        this.timestamp = Date.now()
        this.previousHash = previousHash
        this.hash = this.calculateHash(this.id, this.data, this.timestamp, this.previousHash)
    }

    calculateHash() {
        return sha256(this.id + JSON.stringify(this.data) + this.timestamp + this.previousHash) 
    }
}

export default Block