function Convert() {
    
    const StringValue = document.getElementById('coinvalue').value;
    const Value = parseFloat(StringValue);
    const FinallyValue = (Value + 285.83 * 5).toFixed(2)
    const result = document.getElementById('result');
    console.log(FinallyValue);

    
    if (FinallyValue !== '') {
        result.textContent = 'Your have Real coin: ' + FinallyValue
    }
}

start.addEventListener('click', Convert);