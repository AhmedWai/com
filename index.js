let starts = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let ahmed = document.querySelector(".ahmed")
window.onscroll = function () {
    let value = scrollY
    starts.style.left = value + "px"
    moon.style.top = value * 3 + "px"
    mountains3.style.top = value * 2 + "px"
    mountains4.style.top = value * 1.5 + "px"
    river.style.top = value + "px"
    boat.style.top = value + "px"
    boat.style.left = value * 3 + "px"
    ahmed.style.fontSize = value + "px"
    if (scrollY >= 67) {
        ahmed.style.fontSize = 67 + "px"
        ahmed.style.position = "fixed"
        if (scrollY >= 476) {
            ahmed.style.display = "none"
        } else {
            ahmed.style.display = "block"
        }
        if (scrollY >= 127) {
            document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f)"
        } else {
            document.querySelector(".main").style.background = "linear-gradient(#200016, #10001f)"
        }
    }
}