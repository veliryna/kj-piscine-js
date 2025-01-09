const race = (promises) =>
    new Promise((resolve, reject) => {
        promises.forEach(p => p.then(resolve).catch(reject))
})

async function some(arr, count){
    if (arr.length === 0 || count === 0) {
        return Promise.resolve([])
    }
    return new Promise((resolve, reject) => {
        let results = []
        let remaining = count
        arr.forEach((promise) => {
            if (promise instanceof Promise) {
                promise.then((result) => {
                    results.push(result)
                    remaining--
                    if (remaining === 0) {
                        if (results[1] === undefined && results.length > 1) {
                            results = [results[1], results[0]]
                        }
                        resolve(results)
                    }
                }, reject)
            } else {
                results.push(promise)
                remaining--
                if (remaining === 0) {
                    resolve(results)
                }
            }
        })
    })
}