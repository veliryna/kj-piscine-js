function defaultCurry(obj1){
    return function(obj2){
        let result = {}
        let iter = Object.keys(obj1).length >= Object.keys(obj2).length ? obj1 : obj2
        for(let key in iter){
            if(obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)){
                result[key] = obj2[key]
            }
            else if(obj1.hasOwnProperty(key)){
                result[key] = obj1[key]
            }
            else if(obj2.hasOwnProperty(key)){
                result[key] = obj2[key]
            }
        }
        return result
    }
}

function mapCurry(func){
    return function(obj){
        let copy = {}
        for(let [key, value] of Object.entries(obj)){
            let [nk, nv] = func([key, value])
            copy[nk] = nv
        }
        return copy
    }
}

function filterCurry(func){
    return function(obj){
        let copy = {}
        for(let [key, value] of Object.entries(obj)){
            if(func([key, value])){
                copy[key] = value
            }
        }
        return copy
    }
}

function reduceCurry(func){
    return function(obj, acc){
        for(let [key, value] of Object.entries(obj)){
            acc = func(acc, [key, value])
        }
        return acc
    }
}

function reduceScore(table, init){
    return reduceCurry((acc, [k, v]) =>
        table[k].isForceUser ? acc + table[k].pilotingScore + table[k].shootingScore : acc
    )(table, init)
}

function filterForce(table){
    return filterCurry(([k, v]) =>
        table[k].isForceUser && table[k].shootingScore >= 80)(table)
}

function mapAverage(table){
    let avg = mapCurry(([k, v]) => [k, (v.shootingScore + v.pilotingScore)/2])(table)
    for(let [key, value] of Object.entries(avg)){
        table[key].averageScore = value
    }
    return table
}
