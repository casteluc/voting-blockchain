import calculateHash from '../utils/calculateHash.js'

class Vote {
    constructor(voterCPF, optionChosen) {
        this.voterEncodedCPF = calculateHash(voter)
        this.optionChosen = optionChosen
    }
}

export default Vote