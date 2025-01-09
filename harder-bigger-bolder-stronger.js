export function generateLetters(){
    let body = document.getElementsByTagName("body")[0]
    for(let i = 0; i < 120; i++){
        let container = document.createElement("div")
        container.textContent = randomLetter()
        let size = i + 11
        container.style.fontSize = size+"px"
        if (i < 40) {
            container.style.fontWeight = "300"
        } else if (i < 80) {
            container.style.fontWeight = "400"
        } else {
            container.style.fontWeight = "600"
        }
        body.appendChild(container)
    }
}

const randomLetter = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}