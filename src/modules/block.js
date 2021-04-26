import { sha256 } from 'js-sha256'

class Block {
    constructor(data, previousHash) {
        this.data = data
        this.timestamp = Date.now()
        this.previousHash = previousHash
        this.hash = this.calculateHash()
        this.nonce = 0
    }

    calculateHash() {
        return sha256(JSON.stringify(this.data) + this.timestamp + this.previousHash + this.nonce) 
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== "a".repeat(difficulty)) {
            this.nonce++
            this.hash = this.calculateHash()
        }
    }
}

export default Block