function calculate(operation) {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;

    if ((operation !== 'sqrt' && operation !== 'mod') && (isNaN(value1) || isNaN(value2))) {
        alert("Введите числа");
        return;
    }

    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    var result;
    switch(operation) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if (value2 === 0) {
                alert("Не делай так");
                return;
            }
            result = value1 / value2;
            break;
        case 'sqrt':
            result = Math.sqrt(value1);
            break;
        case 'pow':
            result = Math.pow(value1, value2);
            break;
        case 'mod':
            result = Math.abs(value1);
            break;
        default:
            result = "Чего?";
    }

    document.getElementById('result').value = result;
}