setInterval(() => {
let time = new Date()

let h = document.getElementById("hour-clock")
let hour = String(time.getHours()).padStart(2,'0')
h.innerHTML = hour

let m = document.getElementById("minute-clock")
let minute = String(time.getMinutes()).padStart(2,'0')
m.innerHTML = minute

let s = document.getElementById("second-clock")
let second = String(time.getSeconds()).padStart(2,'0')
s.innerHTML = second

let ms = document.getElementById("Millisecond-clock")
let Millisecond = time.getMilliseconds()
ms.innerHTML = Millisecond

},1)

document.getElementById("Millisecond-toggle").addEventListener("click", toggle)

function toggle(){
    let a = document.getElementById("Millisecond-toggle").innerHTML
    let b = "Show MilliSecond"
    if( a == b){
        document.getElementById("Millisecond-toggle").innerHTML = "Hide MilliSecond"
        document.getElementById("Millisecond-clock").style.display = "flex"
        
        
    }
    else if( a!=b){
        document.getElementById("Millisecond-toggle").innerHTML = "Show MilliSecond"
        document.getElementById("Millisecond-clock").style.display = "none"

    }
}