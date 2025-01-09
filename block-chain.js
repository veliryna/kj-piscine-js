function blockChain(givendata, prev){
    let block = {}
    if(prev === undefined){
        block.prev = { index: 0, hash: "0" }
    }
    else {
        block.prev = prev
    }
    block.index = block.prev.index + 1
    block.data = givendata
    block.hash = hashCode(""+block.index+block.prev.hash+JSON.stringify(block.data))
    block.chain = function(somedata){
        return blockChain(somedata, block)
    }
    return block
}
