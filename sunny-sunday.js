function sunnySunday(date){
    const newWeek = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday"
    }

    let fromBeginning = date.getTime() + 62135596800000
    return newWeek[(fromBeginning / 86400000) % 6]
}
