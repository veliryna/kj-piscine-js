export function build(amount) {
    let body = document.getElementsByTagName("body")[0]
    let i = 1
    let interval = setInterval(() => {
        let brick = document.createElement("div")
        brick.setAttribute("id", "brick-" + i)
        if(i % 3 === 2){
            brick.dataset.foundation = true
        }
        body.appendChild(brick)
        i++
        if (i > amount) {
            clearInterval(interval)
        }
    }, 100)
}

export const repair = (...ids) => {
    ids.forEach((id) => {
        let brick = document.getElementById(id)
        if(brick.getAttribute("foundation")){
            brick.dataset.repaired = "in progress"
        }
        else{
            brick.dataset.repaired = true
        }  
    })
}

export const destroy = () => {
    let bricks = document.getElementsByTagName("div")
    bricks[bricks.length - 1].remove()
}