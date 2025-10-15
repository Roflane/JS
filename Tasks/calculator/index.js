function change_font_size() {
    document.addEventListener("change", function() {
        const value = document.querySelector(".font-slider").value;
        const buttons = document.querySelectorAll("button");

        buttons.forEach(button => {
            button.style.fontSize = `${value}px`;
        });
    });
}

function push_element_to_display(button) {
    const display = document.getElementById("res");
    const value = button.value;

    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculate_result() {
    document.getElementById("res").textContent = eval(document.getElementById("res").textContent);
}

function clear_result() {
    document.getElementById("res").textContent = '0';
}