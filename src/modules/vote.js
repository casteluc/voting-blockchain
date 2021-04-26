import { sha256 } from 'js-sha256'

class Vote {
    constructor(voterCPF, optionChosen, isSecret = true) {
        this.isSecret = isSecret
        this.voterCPF = voterCPF
        this.optionChosen = optionChosen
        
        if (this.isSecret) {this.encodeVoterCPF()}
    }

    encodeVoterCPF() {
        this.voterCPF = sha256(this.voterCPF.toString()) 
    }
}

export default Vote