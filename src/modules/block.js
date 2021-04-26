import calculateHash from '../utils/calculateHash.js'

class Block {
    constructor(id, data, previousHash) {
        this.id = id
        this.data = data
        this.timestamp = Date.now()
        this.previousHash = previousHash
        this.hash = calculateHash(this.id, this.data, this.timestamp, this.previousHash)
    }


}

export default Block