const isValid = (date) =>{
    if (new Date(date).toString() === "Invalid Date") {
        return false
    }
    if (!(date instanceof Date) && typeof date !== "number") {
        return false
    }
    return true
}

const isAfter = (date1, date2) =>{
    if(date1 > date2){
        return true
    }
    return false
}

const isBefore = (date1, date2) =>{
    if(date2 > date1){
        return true
    }
    return false
}

const isFuture = (date) => {
    if(isValid(date)){
        let now = Date.now()
        if(new Date(date).getTime() > now){
            return true
        }
        return false
    }
    return false
}

const isPast = (date) => {
    if(isValid(date)){
        let now = Date.now()
        if(new Date(date).getTime() < now){
            return true
        }
        return false
    }
    return false
}