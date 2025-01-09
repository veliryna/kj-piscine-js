let untrapped = true
let x
let y
let circle
let box

export const setBox = () => {
    box = document.createElement("div")
    box.setAttribute("class", "box")
    document.getElementsByTagName("body")[0].appendChild(box)
}

export const createCircle = () => {
    addEventListener("click", () => {
        circle = document.createElement("div")
        circle.setAttribute("class", "circle")
        if (untrapped) {
            circle.style.background = "white"
            circle.style.left = x
            circle.style.top = y
        } else {
            circle.style.background = 'var(--purple)'
            circle.style.left = x
            circle.style.top = y
        }
        document.body.appendChild(circle)
        untrapped = true
    })
}

export function moveCircle() {
    addEventListener("mousemove", e => {
        document.querySelectorAll(".circleRem").forEach((elem) => {
            elem.remove()
        })
        x = e.clientX - 25 + "px"
        y = e.clientY - 25 + "px"
        let circle = document.createElement("div")
        circle.className = "circle"
        circle.classList.add("circleRem")
        if (untrapped) {
            circle.style.background = "white"
        } else {
            circle.style.background = 'var(--purple)'
        }
        circle.style.left = e.clientX - 25 + "px"
        circle.style.top = e.clientY - 25 + "px"

        document.body.appendChild(circle)
        if ((e.clientX >= box.getBoundingClientRect().left + 25 && e.clientX <= box.getBoundingClientRect().right - 25) && (e.clientY >= box.getBoundingClientRect().top + 25 && e.clientY <= box.getBoundingClientRect().bottom - 25)) {
            document.querySelector(".circle").style.background = 'var(--purple)'
            untrapped = false
        }
        if (!untrapped) {
            if (e.clientX - 25 < box.getBoundingClientRect().left) {
                circle.style.left = box.getBoundingClientRect().left + "px"
                document.querySelector(".circle").style.background = 'var(--purple)'
            }
            if (e.clientX + 25 > box.getBoundingClientRect().right) {
                circle.style.left = box.getBoundingClientRect().right - 50 + "px"
                document.querySelector(".circle").style.background = 'var(--purple)'
            }
            if (e.clientY - 25 < box.getBoundingClientRect().top) {
                circle.style.top = box.getBoundingClientRect().top + "px"
                document.querySelector(".circle").style.background = 'var(--purple)'
            }
            if (e.clientY + 25 > box.getBoundingClientRect().bottom) {
                circle.style.top = box.getBoundingClientRect().bottom - 50 + "px"
                document.querySelector(".circle").style.background = 'var(--purple)'
            }
        }
    })
}