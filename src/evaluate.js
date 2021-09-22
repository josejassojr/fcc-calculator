const evaluate = (operands, operators) => {
  if (operands.length === 2) {
    var firstOperand = Number(operands[0]);
    var secOperand = Number(operands[1]);
    var operator = operators[0];
    switch (operator) {
      case "x":
        return firstOperand * secOperand;
      case "+":
        return firstOperand + secOperand;
      case "-":
        return firstOperand - secOperand;
      case "÷":
        return firstOperand / secOperand;
      default:
        return;
    }
  } else {
    /* must be 3 operands and 2 operators if its not 2 and 1 */
    // console.log("hello")
    var firstOperand = Number(operands[0]);
    var secOperand = Number(operands[1]);
    var thirdOperand = Number(operands[2]);

    var firstOperator = operators[0];
    var secOperator = operators[1];

    switch (firstOperator) {
      case "x":
      case "÷":
        if (firstOperator === "x") {
          var temp = firstOperand * secOperand;
        } else {
          var temp = firstOperand / secOperand;
        }
        switch (secOperator) {
          case "x":
            return temp * thirdOperand;
          case "+":
            return temp + thirdOperand;
          case "÷":
            return temp / thirdOperand;
          case "-":
            return temp - thirdOperand;
          default:
            return;
        }
      case "-":
        switch (secOperator) {
          case "x":
          case "÷":
            if (secOperator === "x") {
              var temp = secOperand * thirdOperand;
            } else {
              var temp = secOperand / thirdOperand;
            }
            return firstOperand - temp;
          case "+":
            return firstOperand - secOperand + thirdOperand;
          default:
            return firstOperand - secOperand - thirdOperand;
        }
      case "+":
        switch (secOperator) {
          case "x":
            var temp = secOperand * thirdOperand;
            break;
          case "+":
            var temp = secOperand + thirdOperand;
            break;
          case "÷":
            var temp = secOperand / thirdOperand;
            break;
          case "-":
            var temp = secOperand - thirdOperand;
            break;
          default:
            var temp = 0;
            break;
        }
        switch (firstOperator) {
          case "+":
            return firstOperand + temp;
          case "-":
            return firstOperand - temp;
          default:
            return temp;
		}
		default:
			return -1;
    }
  }
};
export default evaluate;
