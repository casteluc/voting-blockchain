import Block from './Block.js'

class Blockchain {
    constructor(options) {
        this.chain = [this.createGenesisBlock()]
        this.options = options
        this.difficulty = 5
    }

    createGenesisBlock() {
        return new Block(0, "This is the Genesis Block", 0)
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    pushBlock(data) {
        if (this.isChainValid()) {
            let {hash: lastBlockHash} = this.getLastBlock()

            let newBlock = new Block(data, lastBlockHash)
            newBlock.mineBlock(this.difficulty)

            this.chain.push(newBlock)
        } 
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            let currentBlock = this.chain[i]

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }
        }

        return true
    }

    updateDifficulty(newDifficulty) {
        this.difficulty = newDifficulty
    }
}

export default Blockchain