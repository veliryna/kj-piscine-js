function cutFirst(str){
    return str.split("").slice(2).join("")
}
function cutLast(str){
    return str.split("").slice(0, -2).join("")
}
function cutFirstLast(str){
    return str.split("").slice(2, -2).join("")
}
function keepFirst(str){
    return str.split("").slice(0, 2).join("")
}
function keepLast(str){
    return str.split("").slice(-2).join("")
}
function keepFirstLast(str){
    if(str.length >= 4){
        return str.split("").slice(0, 2).join("") + str.split("").slice(-2).join("")
    }
    else{
        return str
    }
}