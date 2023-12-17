let current_font_info = document.getElementById("current_font_info");
let inputPad = document.querySelector('.input_pad');
let input_label = document.getElementById("inputShow")
let output_Show = document.getElementById("outputShow")

let header1 = document.getElementById("header_to_capture");

function onPageLoad() {
    current_font_info.innerHTML = `Current Font: ${window.getComputedStyle(header1).fontFamily}`
}

function onButtonInput() {

}

onPageLoad();

inputPad.addEventListener('click', function (event) {
    if (event.target.type === 'button') {
        if (event.target.value === 'clear') {
            input_label.innerHTML = '';
        } else if (event.target.value === '=') {
            let inputExpression = input_label.innerHTML;
            let tokens = inputExpression.match(/(\d+|\+|\-|\*|\/)/g);
            if (!tokens || tokens.length % 2 === 0) {
                output_Show.innerHTML = 'Invalid Expression';
                return;
            }
            let result = parseFloat(tokens[0]);
            for (let i = 1; i < tokens.length; i += 2) {
                let operator = tokens[i];
                let operand = parseFloat(tokens[i + 1]);

                switch (operator) {
                    case '+':
                        result += operand;
                        break;
                    case '-':
                        result -= operand;
                        break;
                    case '*':
                        result *= operand;
                        break;
                    case '/':
                        if (operand === 0) {
                            output_Show.innerHTML = 'Error: Division by zero';
                            return;
                        }
                        result /= operand;
                        break;
                    default:
                        output_Show.innerHTML = 'Error: Unsupported operator';
                        return;
                }
            }
            output_Show.innerHTML = `Result: ${result}`;
        } else {
            input_label.innerHTML += event.target.value;
        }
    }
});
