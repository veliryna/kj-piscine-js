let trapped = false

export const setBox = () => {
    let box = document.createElement("div")
    box.setAttribute("class", "box")
    document.getElementsByTagName("body")[0].appendChild(box)
}

document.addEventListener("click", (event) => {
    createCircle(event)
})
document.addEventListener("mousemove", (event) => {
    moveCircle(event)
})

export const createCircle = (event) => {
    trapped = false
    let x = event.clientX-25
    let y = event.clientY-25
    let circle = document.createElement("div")
    circle.setAttribute("class", "circle")
    circle.style.left = x +'px'
    circle.style.top = y +'px'
    circle.style.background = "white"
    document.getElementsByTagName("body")[0].appendChild(circle)
}

export const moveCircle = (event) => {
    let last = document.getElementsByTagName("body")[0].lastChild
    let elem = document.querySelector(".box")
    let box = elem.getBoundingClientRect()
    if(last !== undefined && last.className !== "box"){
    event.preventDefault()
    let mp = {x : event.clientX-25, y : event.clientY-25}
    if(mp.x > box.left+1 && mp.y > box.top+1 && 
    mp.x < box.right-last.clientWidth-1 && 
    mp.y < box.bottom-last.clientHeight-1){
        last.style.background = "var(--purple)"
        trapped = true
    }
    if(trapped){
        if(inRectangle(mp.x, mp.y, box)){
        last.style.left = mp.x + 'px'
        last.style.top  = mp.y + 'px'
        }
        else if((mp.x < box.left || mp.x > box.right) && (mp.y > box.top || mp.y < box.bottom)){
        last.style.top  = mp.y + 'px'
        }
        else if((mp.x > box.left || mp.x < box.right) && (mp.y < box.top || mp.y > box.bottom)){
        last.style.left = mp.x + 'px'
        }  
    }
    else{
        last.style.left = mp.x + 'px'
        last.style.top  = mp.y + 'px'
    }
    }
}

const inRectangle = (x, y, box) => {
    return (
        x > box.left &&
        x + 25 < box.right &&
        y > box.top &&
        y + 25 < box.bottom
    ) ? true : false
}