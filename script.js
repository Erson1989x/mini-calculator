        const calculatorForm = document.querySelector('.calculator-form');
        const calculatorResult = document.querySelector('.calculator-result');

        calculatorForm.addEventListener('submit', calculate);

        function calculate(e) {
            e.preventDefault();

            const formData = new FormData(calculatorForm);
            const firstNumber = parseFloat(formData.get('first-number'));
            const secondNumber = parseFloat(formData.get('second-number'));
            const operator = formData.get('operator');

            if (isNaN(firstNumber) || isNaN(secondNumber)) {
                alert('Please enter valid numbers.');
                return;
            }

            let result;
            switch (operator) {
                case '+':
                    result = firstNumber + secondNumber;
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    break;
                case '/':
                    if (secondNumber === 0) {
                        alert('Cannot divide by zero.');
                        return;
                    }
                    result = firstNumber / secondNumber;
                    break;
                default:
                    alert('Invalid operator.');
                    return;
            }

            calculatorResult.innerText = `Result: ${result}`;
        }