let expr = '';

function append(val) {
  expr += val;
  document.getElementById('expression').value = expr;
}

function calculate() {
  try {
    const result = eval(expr);
    document.getElementById('expression').value = result;

    fetch('http://localhost:3000/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression: expr, result: result.toString() })
    });

    expr = result.toString();
  } catch (e) {
    alert('Invalid Expression');
  }
}
