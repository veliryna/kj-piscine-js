function addWeek(date){
    const newWeek = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
        7: "secondMonday",
        8: "secondTuesday",
        9: "secondWednesday",
        10: "secondThursday",
        11: "secondFriday",
        12: "secondSaturday",
        13: "secondSunday",
    }

    let fromBeginning = date.getTime() + 62135596800000
    return newWeek[(fromBeginning / 86400000) % 14]
}

function timeTravel(obj){
    return new Date(obj.date.setHours(obj.hour, obj.minute, obj.second))
}