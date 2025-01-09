const currify = (func) => {
    let len = func.length                                                                                                                                                               
    return function _f() {                                                                  
        let old_args = arguments                                                                                                                                              
        return function() {                                                                   
            let args = []                                                                      
            for (let i = 0; i < old_args.length; i++) args[args.length] = old_args[i]  
            for (let i = 0; i < arguments.length; i++) args[args.length] = arguments[i]                                                                                     
            return (args.length >= len ? func : _f).apply(this, args)                             
        }                                                                                    
    }()
}