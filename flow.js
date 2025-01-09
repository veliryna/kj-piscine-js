const flow = (funcs) => {
    return function(...args){
        if (args.length > 1) {
            args = [funcs[0](...args)]
        }
        let res = args[0]
        for(let f of funcs){
           res = f(res)
        }
        return res
    }
}
