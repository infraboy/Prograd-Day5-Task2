function press(val) {
    console.log("executed")
    const disp = document.getElementById("display")
    if(disp.textContent === '0') {
        if(val != '0') {
            disp.textContent = val
        }
    } else {
        disp.textContent += val
    }
}

function clearall() {
    document.getElementById("display").textContent = "0"
}

function calculate() {
    const disp = document.getElementById("display")
    disp.textContent = Math.round(eval(disp.textContent)*1000)/1000
}