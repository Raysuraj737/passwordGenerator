let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '?', '*', '+']
let pass = [num, alpha, abc, symbols]
document.getElementById("pass1-el").textContent = "PASSWORD 1"
document.getElementById("pass2-el").textContent = "PASSWORD 2"

if(localStorage.getItem("prevPass")===null){
    localStorage.setItem("prevPass","No Records")
}

function savedPassword(){
    let prevRec=localStorage.getItem("prevPass")
    document.getElementById("saved").textContent=prevRec
}

function generator() {
    let pass1 = ""
    for (i = 0; i < 8; i++) {
        let n = Math.floor(Math.random() * 4)
        if (n === 0) {
            let s = Math.floor(Math.random() * 10)
            pass1 += pass[n][s]
        } else if (n === 3) {
            let s = Math.floor(Math.random() * 17)
            pass1 += pass[n][s]
        } else {
            let s = Math.floor(Math.random() * 26)
            pass1 += pass[n][s]
        }
    }
    return pass1
}

let pass1El
let pass2El
function password_generator() {
    let pass1 = generator()
    let pass2 = generator()
    pass1El = document.getElementById("pass1-el")
    pass2El = document.getElementById("pass2-el")
    pass1El.textContent = pass1
    pass2El.textContent = pass2
}

function call(message="Password Copied") {
    document.querySelector(".text-msg").textContent = message
}

function textCopy1() {
     if (!pass1El) return call("Generate a password first!");
    localStorage.setItem("prevPass",pass1El.textContent)
    navigator.clipboard.writeText(pass1El.textContent)
    .then(() => call("Password 1 Copied!"))
}

function textCopy2() {
     if (!pass2El) return call("Generate a password first!");
    localStorage.setItem("prevPass",pass2El.textContent)
    navigator.clipboard.writeText(pass2El.textContent)
    .then(() => call("Password 2 Copied!"))
}
