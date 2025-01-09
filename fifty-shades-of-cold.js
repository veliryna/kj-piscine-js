import { colors } from "./fifty-shades-of-cold.data.js"

export const generateClasses = () => {
    let head = document.getElementsByTagName("head")[0]
    let style = document.createElement("style")
    colors.forEach((color) => {
        style.innerHTML += `.${color} {\n  background: ${color};\n }\n\n`
    })
    head.appendChild(style)
}

export const generateColdShades = () => {
    let body = document.getElementsByTagName("body")[0]
    colors.forEach((color) => {
        if(color.match(/(aqua|blue|turquoise|green|cyan|navy|purple)/) !== null){
            let elem = document.createElement("div")
            elem.classList.add(color)
            elem.innerHTML = color
            body.appendChild(elem)
        }
    })
}

export const choseShade = (shade) => {
    document.querySelectorAll("div").forEach((div) => { div.className = shade })
}