import { sha256 } from 'js-sha256'

class Vote {
    constructor(voterCPF, optionChosen) {
        this.voterEncodedCPF = this.calculateHash(voterCPF)
        this.optionChosen = optionChosen
    }

    calculateHash(voterCPF) {
        return sha256(voterCPF.toString()) 
    }
}

export default Vote