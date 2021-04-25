import Block from './block.js'

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
        this.pushBlock = this.pushBlock
    }

    createGenesisBlock() {
        return new Block(0, {}, 0)
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    pushBlock() {
        let {hash: lastBlockHash, id: lastBlockId} = this.getLastBlock()
        this.chain.push(new Block(lastBlockId + 1, {}, lastBlockHash))
    }
}

let blockchain = new Blockchain()
blockchain.pushBlock()
blockchain.pushBlock()
blockchain.pushBlock()
console.log(blockchain.chain) 
