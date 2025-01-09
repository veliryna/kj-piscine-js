const format = (date, fmt) => {
    let d = new Date(date)
    let longMonths = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    let shortMonths = longMonths.map((m) => m.slice(0, 3))
    let longDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    let shortDays = longDays.map((d) => d.slice(0, 3))


    fmt = fmt.replace(/dd/g, ("0" + d.getDate()).slice(-2))
    fmt = fmt.replace(/d/g, d.getDate())
    fmt = fmt.replace(/HH/g, ("0" + d.getHours()).slice(-2))
    fmt = fmt.replace(/H/g, d.getHours())
    fmt = fmt.replace(/hh/g, ("0" + (d.getHours() % 12 || 12)).slice(-2))
    fmt = fmt.replace(/h/g, d.getHours() % 12 || 12)
    fmt = fmt.replace(/mm/g, ("0" + d.getMinutes()).slice(-2))
    fmt = fmt.replace(/m/g, d.getMinutes())
    fmt = fmt.replace(/ss/g, ("0" + d.getSeconds()).slice(-2))
    fmt = fmt.replace(/s/g, d.getSeconds())
    fmt = fmt.replace(/GGGG/g, d.getFullYear() < 0 ? "Before Christ" : "Anno Domini")
    fmt = fmt.replace(/G/g, d.getFullYear() < 0 ? "BC" : "AD")
    if (d.getFullYear() < 0) d.setFullYear(-d.getFullYear())
    fmt = fmt.replace(/yyyy/g, d.getFullYear().toString().padStart(4, "0"))
    fmt = fmt.replace(/y/g, d.getFullYear().toString().replace(/^0+/, ""))
    fmt = fmt.replace(/a/g, d.getHours() < 12 ? "AM" : "PM")

    fmt = fmt.replace(
        /(?<!M)MM(?!M)/g,
        (d.getMonth() + 1).toString().length < 10
            ? "0" + (d.getMonth() + 1)
            : d.getMonth() + 1
    )

    fmt = fmt.replace(/(?<!(M|P|A))M(?!M)/g, d.getMonth() + 1)
    fmt = fmt.replace(/MMMM/g, longMonths[d.getMonth()])
    fmt = fmt.replace(/MMM/g, shortMonths[d.getMonth()].slice(0, 3))
    fmt = fmt.replace(/EEEE/g, longDays[d.getDay()])    
    fmt = fmt.replace(/E/g, shortDays[d.getDay()].slice(0, 3))

    return fmt
}