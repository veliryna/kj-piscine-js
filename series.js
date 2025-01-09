async function series(arr){
    let results = []
    for(let func of arr){
        const res = await func()
        results.push(res)
    }
    return results
}
//I did it, did it myself!