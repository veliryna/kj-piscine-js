const retry = (count, afunc) => {
    return async function(...args){
        try {
            let res = await afunc(...args)
            return res
        } catch (e) {
            if (count > 0) {
                return retry(count - 1, afunc)(...args)
            } else {
                throw e
            }
        }
    }
}

const timeout = (delay, afunc) => {
    return async function(...args){
        let time = new Promise((resolve) =>
            setTimeout(resolve, delay, Error('timeout'))
        )
        let funcCall = new Promise((resolve) =>
            resolve(afunc(...args))
        )
        let result = await Promise.race([time, funcCall]).then(
            (result) => result
        )
        if (result instanceof Error) {
            throw result
        }
        return result
    }
}

