function regex() {
    const number = new RegExp("^\\+994(50|51|55|70|77)\\d{7}$");
    console.log(number.exec("+994504441122"));

    const floatingNumber = new RegExp("^\\d+([.,]\\d+)?$");
    console.log(floatingNumber.exec("89123891839,30910103"));

    const ipAddress = new RegExp("^(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}$");
    console.log(ipAddress.exec("192.168.0.1"));

    const macAddress = new RegExp("^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$");
    console.log(macAddress.exec("00:1A:2B:3C:4D:5E"));
}

let selectedDot = "dot1";
function selectColor() {
    const dots = document.querySelectorAll("span");
    dots.forEach((dot) => {
        dot.onclick = () => {
            if (dot.id === "dot-plus") return;
            selectedDot = dot.id;
            setColor();
        };
    });
}

function setColor() {
    const dots = document.querySelectorAll("span");
    dots.forEach((d) => d.classList.remove("selected"));

    const dot = document.getElementById(selectedDot);
    if (dot) {
        dot.classList.add("selected");
    }
}

function applyColor() {
    const textField = document.getElementById("text-color");
    if (textField == null) return;

    textField.onkeydown = (event) => {
        if (event.key == "Enter") {
            const dot =  document.getElementById(selectedDot);
            if (dot == null) return;
            dot.style.backgroundColor = textField.value;
            console.log(textField.value);
        }
    }
}

// function initDotPlus() {
//     const dotPlus = document.getElementById("dot-plus");
//     if (dotPlus == null) return;
//
//     dotPlus.textContent = "+";
// }

!function() {
    // regex();
    selectColor();
    applyColor();
}()