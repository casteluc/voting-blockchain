import Block from './Block.js'

class Blockchain {
    constructor(options) {
        this.chain = [this.createGenesisBlock()]
        this.options = options
    }

    createGenesisBlock() {
        return new Block(0, {}, 0)
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    pushBlock(vote) {
        if (this.checkProofOfWork()) {
            let {hash: lastBlockHash, id: lastBlockId} = this.getLastBlock()
            this.chain.push(new Block(lastBlockId + 1, vote, lastBlockHash))
        } else {
            throw "The current blockchain is not valid"
        }
    }

    checkProofOfWork() {
        let isApproved = true
        let chainLength = this.chain.length

        if (chainLength > 0) {
            for (let i = 1; i < chainLength; i++) {
                if (this.chain[i].previousHash !== this.chain[i - 1].hash) {
                    isApproved = false
                }
            }
        }

        return isApproved
    }
}

export default Blockchain