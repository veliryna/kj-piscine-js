function countLeapYears(date){
    let yearnow = date.getFullYear()
    let count = 0
    for(let i = 1; i < yearnow; i++){
        if(isLeapYear(i)) {
            count++
        }
    }
    return count
}

const isLeapYear = (year) => {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
    } else {
        return false
    }
}
