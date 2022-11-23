const express = require('express')
const router = express.Router()


router.get('', (req, res) => {

    const number1 = parseInt(req.query.a);
    const number2 = parseInt(req.query.b);
    let op = req.query.op;

    let result = calculate(number1, number2, op);

    res.send(result.toString());
})

router.post('', (req, res) => {

    const number1 = req.body.a;
    const number2 = req.body.b;
    let op = req.body.op;

    let result = calculate(number1, number2, op);
    
    res.send(result.toString());
})

function calculate(a, b, op) {
    let result = 0;

    if (op == 'SUM')
        result = a + b;
    else if (op == 'SUBT')
        result = a - b;
    else if (op == 'MULT')
        result = a * b;
    else if (op == 'DIV')
        result = a / b;
    
    return result;
}

module.exports = router;
