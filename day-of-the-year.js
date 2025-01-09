function dayOfTheYear(date){
    let now = new Date(date)
    let start = new Date(now.getFullYear(), 0, 0)
    let diff = now - start
    if(diff < 0){
        diff = 1000 * 60 * 60 * 24
    }
    let oneDay = 1000 * 60 * 60 * 24
    let day = Math.floor(diff / oneDay)
    return day
}
