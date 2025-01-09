function sign(n){
    if(n > 0) return 1
    else if(n == 0) return 0
    else return -1
}
function sameSign(m, n){
    if(sign(m) == sign(n)) return true
    else return false
}