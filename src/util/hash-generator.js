import { sha256 } from 'js-sha256'

export const calculateHash = (...teste) => sha256(teste.toString()) 
