import Block from './Block.js'

class Blockchain {
    constructor(options) {
        this.chain = [this.createGenesisBlock()]
        this.options = options
    }

    createGenesisBlock() {
        return new Block(0, "This is the Genesis Block", 0)
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    pushBlock(vote) {
        if (this.isChainValid()) {
            let {hash: lastBlockHash, id: lastBlockId} = this.getLastBlock()
            this.chain.push(new Block(lastBlockId + 1, vote, lastBlockHash))
        } 
    }

    isChainValid() {
        for (let i = 0; i < this.chain.length; i++) {
            let currentBlock = this.chain[i]

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }
        }

        return true
    }
}

export default Blockchain