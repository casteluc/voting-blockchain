import { sha256 } from 'js-sha256'

export default function calculateHash(...info) {
    return sha256(info.toString()) 
}