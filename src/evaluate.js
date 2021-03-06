const evaluate = (operands, operators) => {
  if (operands.length === 2) {
    var firstOperand = Number(operands[0]);
    var secOperand = Number(operands[1]);
    var operator = operators[0];
    switch (operator) {
      case "x":
        return roundEval(firstOperand * secOperand);
      case "+":
        return roundEval(firstOperand + secOperand);
      case "-":
        return roundEval(firstOperand - secOperand);
      case "÷":
        return roundEval(firstOperand / secOperand);
      default:
        return;
    }
  } else if (operands.length === 3) {
    /* must be 3 operands and 2 operators if its not 2 and 1 */
    // console.log("hello")
     firstOperand = Number(operands[0]);
     secOperand = Number(operands[1]);
    var thirdOperand = Number(operands[2]);

    var firstOperator = operators[0];
    var secOperator = operators[1];

    switch (firstOperator) {
      case "x":
      case "÷":
        if (firstOperator === "x") {
          var temp = firstOperand * secOperand;
        } else {
           temp = firstOperand / secOperand;
        }
        switch (secOperator) {
          case "x":
            return roundEval(temp * thirdOperand);
          case "+":
            return roundEval(temp + thirdOperand);
          case "÷":
            return roundEval(temp / thirdOperand);
          case "-":
            return roundEval(temp - thirdOperand);
          default:
            return;
        }
      case "-":
        switch (secOperator) {
          case "x":
          case "÷":
            if (secOperator === "x") {
               temp = secOperand * thirdOperand;
            } else {
               temp = secOperand / thirdOperand;
            }
            return roundEval(firstOperand - temp);
          case "+":
            return roundEval(firstOperand - secOperand + thirdOperand);
          default:
            return roundEval(firstOperand - secOperand - thirdOperand);
        }
      case "+":
        switch (secOperator) {
          case "x":
             temp = secOperand * thirdOperand;
            break;
          case "+":
             temp = secOperand + thirdOperand;
            break;
          case "÷":
             temp = secOperand / thirdOperand;
            break;
          case "-":
             temp = secOperand - thirdOperand;
            break;
          default:
             temp = 0;
            break;
        }
        switch (firstOperator) {
          case "+":
            return roundEval(firstOperand + temp);
          case "-":
            return roundEval(firstOperand - temp);
          default:
            return roundEval(temp);
        }
      default:
        return -1;
    }
  } else {
    var i = 0;
    while (i < operators.length) {
      // console.log(oper);
      let oper = operators[i];
      if (oper === "x" || oper === "÷") {
        let num1 = Number(operands[i]);
        let num2 = Number(operands[i + 1]);
        let temp;
        if (oper === "x") {
          temp = num1 * num2;
          // console.log(temp);
        } else {
          temp = num1 / num2;
          // console.log(temp);
        }
        operands.splice(i, 2, String(temp));
        operators.splice(i, 1);
      } else {
        i += 1;
      }
    }
    if (operators.length === 0) {
      return roundEval(operands[0]);
    }
    if (operators.length === 1) {
      if (operators[0] === "+") {
        return roundEval(Number(operands[0]) + Number(operands[1]));
      } else {
        return roundEval(Number(operands[0]) - Number(operands[1]));
      }
    } else {
      return evalImmediate(operands, operators);
    }
    // console.log(operators);
    // console.log(operands);
  }
};

function evalImmediate(operands, operators) {
  var oper = operators[0];
  let ret;
  if (oper === "+") {
    ret = Number(operands[0]) + Number(operands[1]);
  } else {
    ret = operands[0] - operands[1];
  }
  operands.splice(0, 2);
  operators.splice(0, 1);
  // console.log(operands);
  // console.log(operators);

  for (let i = 0; i < operators.length; i++) {
    oper = operators[i];
    var num = Number(operands[i]);
    if (oper === "+") {
      ret += num;
    } else {
      ret -= num;
    }
  }
  return roundEval(ret);
}

function roundEval(x) {
  let strEval = String(x);
  let ret;
  if (strEval.length > 16) { 
    let parts = strEval.split(".");
    if (parts.length === 2) {
      let round = 16 - parts[0].length;
      // Math.round((num + Number.EPSILON) * 100) / 100;
      ret = Math.round((x + Number.EPSILON) * (10 ** round)) / (10 ** round);
      return ret
    } else { /* means that eval is greater than 16 and yet the answer is too long. Need to return answer too big and start over */
      return "TOO LARGE";
    }
  } else {
    return x;
  }
}
export default evaluate;
