const RNA = (dna) => {
    let arr = dna.split("")
    for(let i = 0; i < arr.length; i++){
        switch (arr[i]) {
            case "G":
                arr[i] = "C"
                break;
            case "C":
                arr[i] = "G"
                break;
            case "T":
                arr[i] = "A"
                break;
            case "A":
                arr[i] = "U"
                break;
            default:
                break;
        }
    }
    return arr.join("")
}
const DNA = (rna) => {
    let arr = rna.split("")
    for(let i = 0; i < arr.length; i++){
        switch (arr[i]) {
            case "C":
                arr[i] = "G"
                break;
            case "G":
                arr[i] = "C"
                break;
            case "A":
                arr[i] = "T"
                break;
            case "U":
                arr[i] = "A"
                break;
            default:
                break;
        }
    }
    return arr.join("")
}