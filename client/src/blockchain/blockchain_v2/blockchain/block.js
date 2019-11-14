// Import Cryptography Libraries
// import { SHA256 } from "crypto-js";
const SHA256 = require('crypto-js/sha256');


class Block {
  constructor(timestamp, previousHash, hash, data) {
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = hash;
    this.data = data;
  }

  toString(){
    return `
      Block - 
      Timestamp : ${this.timestamp}
      Last Hash : ${this.previousHash.substring(0,10)}
      Hash      : ${this.hash.substring(0,10)}
      Data      : ${this.data}
    `;
  }

  static genesis(){
    return new this('Genesis time','----','genesis-hash',[]);
  }

  static hash(timestamp, previousHash, data) {
    return SHA256(`${timestamp}${previousHash}${data}`).toString();
  }

  static mineBlock(previousBlock, data) {
    console.log(data);
    let hash;
    let timestamp = Date.now();
    const previousHash = previousBlock.hash;
    hash = Block.hash(timestamp, previousHash, data);
    return new this(timestamp, previousHash, hash, data);
  }

  static blockHash(block) {
    const { timestamp, previousHash, data } = block;
    return Block.hash(timestamp, previousHash, data);
  }
}

module.exports = Block;