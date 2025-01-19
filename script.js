let password1El = document.getElementById("pass1")
let password2El = document.getElementById("pass2")
let copyButton1 = document.getElementById("copy-btn1")
let copyButton2 = document.getElementById("copy-btn2")
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

function generatePasswords() {
    let password1 = ""
    let password2 = ""
    for (let i = 0; i < 16; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }

    password1El.textContent = password1
    password2El.textContent = password2
    copyButton1.style.display = "block"
    copyButton2.style.display = "block"
}

function copyToClipboard(id) {
    // added code to make multiple copies
    if (window.getSelection) {
        if (window.getSelection().empty) { // Chrome
            window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges) { // Firefox
            window.getSelection().removeAllRanges();
        }
    } else if (document.selection) { // IE?
        document.selection.empty();
    }

    // code to copy to clickboard
    if (document.selection) {
        let range = document.body.createTextRange()
        range.moveToElementText(document.getElementById(id))
        range.select().createTextRange()
        document.execCommand("copy")
    } else if (window.getSelection) {
        let range = document.createRange()
        range.selectNode(document.getElementById(id))
        window.getSelection().addRange(range)
        document.execCommand("copy")
        alert("Password has been copied")
    }
}