function matchCron(cron, date){
    let cronNums = cron.split(" ")
    let minute = cronNums[0]
    let hour = cronNums[1]
    let day = cronNums[2]
    let month = cronNums[3]
    let weekday = cronNums[4]

    let isValid = false

    if(minute === '*'|| minute == date.getMinutes()){
        isValid = true
    }
    else return false

    if(hour === '*'|| hour == date.getHours()){
        isValid = true
    }
    else return false
    
    if(day === '*'|| day == date.getDate()){
        isValid = true
    }
    else return false

    if(month === '*'|| month == date.getMonth()+1){
        isValid = true
    }
    else return false
    
    if(weekday === '*'){
        isValid = true
    }else if(weekday === 7 && date.getDay === 0){
        isValid = true
    }else if(date.getDay !== 0 && Number(weekday) === date.getDay()){
        isValid = true
    }
    else return false
    
    return isValid
}