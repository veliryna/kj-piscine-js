document.addEventListener("keydown", (event) => {
    compose(event)
})

export function compose(event) {
    if(event === undefined){return}
    if ([...Array(26).keys()].map((i) => i + 97).includes(event.key.charCodeAt(0))){
        let div = document.createElement("div")
        div.classList.add("note")
        div.style.backgroundColor = `rgb(${
            (255 / 26) * (event.key.charCodeAt(0) - 97)}, 
            ${(255 / 26) * (event.key.charCodeAt(0) - 97)}, 
            ${(255 / 26) * (event.key.charCodeAt(0) - 97)})`
        div.innerHTML = event.key
        document.body.appendChild(div)
    } 
    else if(event.key === "Backspace"){
        let notes = document.getElementsByClassName("note")
        notes[notes.length - 1].remove()
    }
    else if(event.key === "Escape"){
        let notes = document.getElementsByClassName("note")
        while (notes.length > 0) { notes[0].remove() }
    }
}