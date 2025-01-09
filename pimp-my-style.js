import { styles } from "./pimp-my-style.data.js"
let counter = 0
export const pimp = () => {
    let btn = document.querySelector("button.button")
    if(!btn.classList.contains("unpimp")){
        btn.classList.add(styles[counter])
        counter++
    } 
    else{
        counter--
        btn.classList.remove(styles[counter])
        if (counter === 0) {
            btn.classList.toggle("unpimp")
        }
    }
    if(counter === styles.length) btn.classList.toggle("unpimp")
}