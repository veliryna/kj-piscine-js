const isFriday = (date) => {
    let today = new Date(date)
    return (today.getDay() == 5) ? true : false
}

const isWeekend = (date) => {
    let today = new Date(date)
    return (today.getDay() == 6 || today.getDay() == 0) ? true : false
}

const isLeapYear = (date) => {
    let year = new Date(date).getFullYear()
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
    } else {
        return false
    }
}

const isLastDayOfMonth = (date) => {
    let d1 = new Date(date)
    d1.setDate(d1.getDate() + 1);
    if(d1.getDate() === 1){
        return true
    }
    return false
}