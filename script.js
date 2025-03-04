// Отслеживание начала ввода (должно отправлять `begin_checkout`)
document.querySelectorAll("#value1, #value2").forEach(input => {
    input.addEventListener("focus", function() {
        console.log("Отправляется begin_checkout"); // Проверка
        gtag('event', 'begin_checkout', {
            'event_category': 'Калькулятор',
            'event_label': 'Начало ввода данных'
        });
    });
});

// Отправка события "generate_lead" при расчете результата
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

    switch (operation) {
        case '+': result = value1 + value2; break;
        case '-': result = value1 - value2; break;
        case '*': result = value1 * value2; break;
        case '/': result = value2 === 0 ? "Ошибка" : value1 / value2; break;
        case 'sqrt': result = Math.sqrt(value1); break;
        case 'pow': result = Math.pow(value1, value2); break;
        case 'mod': result = Math.abs(value1); break;
        default: result = "Ошибка";
    }

    document.getElementById('result').value = result;

    // Логирование в консоль
    console.log("Отправляется generate_lead");

    // Отправка события "generate_lead" в GA4
    gtag('event', 'generate_lead', {
        'event_category': 'Калькулятор',
        'operation': operation,
        'value1': value1,
        'value2': value2,
        'result': result
    });

    // Отправка события "result_calculated" в GA4
    gtag('event', 'result_calculated', {
        'event_category': 'Калькулятор',
        'operation': operation,
        'value1': value1,
        'value2': value2,
        'result': result
    });
}
