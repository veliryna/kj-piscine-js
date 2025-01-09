export const pick = () => {
    let Div = document.createElement("div")
    Div.className = "text"
    Div.classList.add("hsl")
    document.body.appendChild(Div)

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS(null, 'height', window.innerHeight)
    svg.setAttributeNS(null, 'width', window.innerWidth)

    let lineX = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    lineX.setAttributeNS(null, 'id', 'axisY')
    lineX.setAttributeNS(null, 'x1', 0)
    lineX.setAttributeNS(null, 'y1', 0)
    lineX.setAttributeNS(null, 'x2', 0)
    lineX.setAttributeNS(null, 'y2', 0)
    lineX.style.stroke = "white"
    lineX.style.strokeWidth = 1;

    let lineY = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    lineY.setAttributeNS(null, 'id', 'axisX')
    lineY.setAttributeNS(null, 'x1', 0)
    lineY.setAttributeNS(null, 'y1', 0)
    lineY.setAttributeNS(null, 'x2', 0)
    lineY.setAttributeNS(null, 'y2', 0)
    lineY.style.stroke = "white"
    lineY.style.strokeWidth = 1

    svg.appendChild(lineY)
    svg.appendChild(lineX)

    document.body.appendChild(svg)

    addEventListener("mousemove", (e) => {
        document.querySelectorAll(".hue", ".hsl").forEach(e => {
            e.remove()
        })
        document.querySelectorAll(".hsl").forEach(e => {
            e.remove()
        })
        document.querySelectorAll(".luminosity").forEach(e => {
            e.remove()
        })

        let lineY = document.getElementById('axisX')
        let lineX = document.getElementById('axisY')

        lineX.setAttributeNS(null, 'x1', 0)
        lineX.setAttributeNS(null, 'y1', e.clientY)
        lineX.setAttributeNS(null, 'x2', window.innerWidth)
        lineX.setAttributeNS(null, 'y2', e.clientY)

        lineY.setAttributeNS(null, 'x1', e.clientX)
        lineY.setAttributeNS(null, 'y1', 0)
        lineY.setAttributeNS(null, 'x2', e.clientX)
        lineY.setAttributeNS(null, 'y2', window.innerHeight)

        let x = e.clientX / window.innerWidth * 360
        let y = e.clientY / window.innerHeight * 100
        document.body.style.background = "hsl(" + x + ",50%," + y + "%)"
        let hue = document.createElement("div")
        hue.className = "hue"
        hue.classList.add("text")
        hue.innerHTML = "hue" + "<br>" + Math.round(x)
        document.body.appendChild(hue)

        let hsl = document.createElement("div")
        hsl.className = "hsl"
        hsl.classList.add("text")
        hsl.innerHTML = "hsl(" + Math.round(x) + ", 50%, " + Math.round(y) + "%)"
        document.body.appendChild(hsl)

        let luminosity = document.createElement("div")
        luminosity.className = "luminosity"
        luminosity.classList.add("text")
        luminosity.innerHTML = Math.round(y) + "<br>luminosity"
        document.body.appendChild(luminosity)

    })

    addEventListener("click", () => {
        let val = document.getElementsByClassName('hsl')[0].innerHTML
        let input = document.createElement('input')
        document.body.appendChild(input)
        input.value = val
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
    })
}   