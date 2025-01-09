const filterShortStateName = (arr) => {
    return arr.filter(item => {
        return item.length < 7
    })
}

const filterStartVowel = (arr) => {
    return arr.filter(item => {
        return /[aouieAOUIE]/.test(item[0])
    })
}

const filter5Vowels = (arr) => {
    return arr.filter(item => {
        let s = item.split("")
        let count = 0
        for(let i = 0; i < s.length; i++){
            if(/[aouieAOUIE]/.test(s[i])) count++
        }
        return count >= 5
    })
}

const filter1DistinctVowel = (arr) => {
    return arr.filter(item => {
        let v = ''
        item = item.toLowerCase()
        let s = item.split("")
        let dist = true
        for(let i = 0; i < s.length; i++){
            if(/[aouieAOUIE]/.test(s[i]) && v === ''){
                v = s[i]
            }
            if(/[aouieAOUIE]/.test(s[i]) && v !== '' && s[i] !== v){
                dist = false
            }
        }
        return dist
    })
}

const multiFilter = (arr) => {
    return arr.filter(obj =>{
        return obj.capital.length >= 8 && !/[aouieAOUIE]/.test(obj.name[0]) && /[aouieAOUIE]/.test(obj.tag) && obj.region !== 'South'
    })
}
