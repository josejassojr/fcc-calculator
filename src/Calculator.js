import React from "react";
import evaluate from "./evaluate";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
      on: false,
      operators: [],
      operands: [],
      negative: false,
      eval: false,
      decimal: false
    };
    this.handleClick = this.handleClick.bind(this);
    document.onkeypress = this.handleKeyPress;
  }

  handleClick(x) {
    if (x === "off") {
      this.setState({
        display: "",
        on: false,
        operators: [],
        operands: [],
        negative: false,
        eval: false
      });
      // const operands = ["-2.5", "3.243", "4","2"];     /* used for testing evaluate function in evaluate.js */
      // const operators = ["+","+","+"];
      // console.log("hello");
      // console.log(evaluate(operands, operators));
      console.log(this.state);

      return;
    }
    if (x === "AC") {
      this.setState({
        display: "0",
        on: true,
        operators: [],
        operands: [],
        negative: false,
        eval: false
      });
      console.log(this.state);
      return;
    }

    if (!this.state.on) {
      return;
    }
    console.log(this.state.display);
    var dis = this.state.display.slice();
    switch (x) {
      // case that its an operator button clicked
      case "x":
      case "+":
      case "÷":
      case "-":
        if (x === "-") {
          /* minus sign check because you could be inputting the beginning of a negative number instead of subtracting */
          switch (dis) {
            // means i am beginning a negative number so add operator to operator list and set display to '-'
            case "x":
            case "+":
            case "-":
            case "÷":
              this.setState({
                operators: [...this.state.operators, dis],
                display: "-",
                negative: true
              });
              return;
            case "0":
              if (this.state.operands.length === 0) {
                this.setState({
                  display: "-",
                  negative: true
                });
                return;
              }
            default:
              this.setState({
                display: "-",
                operands: [...this.state.operands, dis]
              });
              return;
          }
        } else {
          /* means i pressed any other operator button */
          switch (dis) {
            case "x":
            case "+":
            case "÷":
              this.setState({
                display: x
              });
              return;
            case "-":
              if (this.state.negative) {
                if (this.state.operators.length > 0) {
                  this.setState({
                    operators: this.state.operators.slice(0, -1),
                    display: x,
                    negative: false
                  });
                } else {
                  this.setState({
                    display: "0",
                    negative: false
                  });
                }
                return;
              } else {
                this.setState({
                  display: x
                });
                return;
              }
            case "0":
              if (this.state.operands.length === 0) {
                return;
              }
            default:
              this.setState({
                display: x,
                operands: [...this.state.operands, dis]
              });
              return;
          }
        }
      case ".":
        switch (dis) {
          case "x":
          case "+":
          case "÷":
            this.setState({
              display: "0.",
              decimal: true,
              operators: [...this.state.operators, dis]
            });
            return;
          case "-":
            if (this.state.negative) {
              this.setState({
                display: "-0.",
                decimal: true
              });
              return;
            } else {
              this.setState({
                display: "0.",
                decimal: true,
                operators: [...this.state.operators, dis]
              });
              return;
            }
          default:
            /* a number is being currently displayed */
            if (this.state.decimal) {
              return;
            } else {
              this.setState({
                display: dis.concat("."),
                decimal: true
              });
              return;
            }
        }

      case "=":
        switch (dis) {
          case "x":
          case "+":
          case "-":
          case "÷":
            break;
          default:
            this.setState(
              {
                operands: [...this.state.operands, dis]
              },
              () => {
                console.log("hello");
                console.log(this.state);
              }
            );
        }
        var ret = evaluate(this.state.operands, this.state.operators);
        this.setState({
          display: ret,
          operators: [],
          operands: [],
          negative: false,
          eval: true,
          decimal: false
        });
        return;

      default:
        /* pressed any digit */
        switch (dis) {
          case "0":
            this.setState({
              display: x
            });
            console.log(this.state);
            return;
          case "x":
          case "+":
          case "÷":
            this.setState({
              operators: [...this.state.operators, dis],
              display: x
            });
            console.log(this.state);
            return;
          case "-":
            if (this.state.negative) {
              this.setState({
                negative: false,
                display: "-".concat(x)
              });
              console.log(this.state);
              return;
            } else {
              this.setState({
                operators: [...this.state.operators, "-"],
                display: x
              });
              console.log(this.state);
              return;
            }
          default:
            this.setState({
              display: dis.concat(x)
            });
        }
    }
  }

  handleKeyPress(event) {
    let k = event.key;
    switch (k) {
      case "=":
      case "Enter":
        document.getElementById("equals").click();
        break;
      case "0":
        document.getElementById("zero").click();
        break;
      case "1":
        document.getElementById("one").click();
        break;
      case "2":
        document.getElementById("two").click();
        break;
      case "3":
        document.getElementById("three").click();
        break;
      case "4":
        document.getElementById("four").click();
        break;
      case "5":
        document.getElementById("five").click();
        break;
      case "6":
        document.getElementById("six").click();
        break;
      case "7":
        document.getElementById("seven").click();
        break;
      case "8":
        document.getElementById("eight").click();
        break;
      case "9":
        document.getElementById("nine").click();
        break;
      case "+":
        document.getElementById("add").click();
        break;
      case "-":
        document.getElementById("subtract").click();
        break;
      case "x":
      case "*":
        document.getElementById("multiply").click();
        break;
      case "/":
        document.getElementById("divide").click();
        break;
      case ".":
        document.getElementById("decimal").click();
        break;
      case "b":
        document.getElementById("off").click();
        break;
      case " ":
        document.getElementById("clear").click();
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div id="main-container">
          <div id="display">{this.state.display}</div>
          <div id="on-off-container">
            <button
              className="on-off"
              id="clear"
              onClick={() => this.handleClick("AC")}
            >
              AC/ON
            </button>
            <button
              className="on-off"
              id="off"
              onClick={() => this.handleClick("off")}
            >
              OFF
            </button>
          </div>
          <div id="main-grid">
            <button
              className="number"
              id="one"
              onClick={() => this.handleClick("1")}
            >
              1
            </button>
            <button
              className="number"
              id="two"
              onClick={() => this.handleClick("2")}
            >
              2
            </button>
            <button
              className="number"
              id="three"
              onClick={() => this.handleClick("3")}
            >
              3
            </button>{" "}
            <button
              className="operation"
              id="divide"
              onClick={() => this.handleClick("÷")}
            >
              ÷
            </button>
            <button
              className="number"
              id="four"
              onClick={() => this.handleClick("4")}
            >
              4
            </button>
            <button
              className="number"
              id="five"
              onClick={() => this.handleClick("5")}
            >
              5
            </button>
            <button
              className="number"
              id="six"
              onClick={() => this.handleClick("6")}
            >
              6
            </button>{" "}
            <button
              className="operation"
              id="multiply"
              onClick={() => this.handleClick("x")}
            >
              x
            </button>
            <button
              className="number"
              id="seven"
              onClick={() => this.handleClick("7")}
            >
              7
            </button>
            <button
              className="number"
              id="eight"
              onClick={() => this.handleClick("8")}
            >
              8
            </button>
            <button
              className="number"
              id="nine"
              onClick={() => this.handleClick("9")}
            >
              9
            </button>{" "}
            <button
              className="operation"
              id="subtract"
              onClick={() => this.handleClick("-")}
            >
              -
            </button>{" "}
            <button
              className="operation"
              id="decimal"
              onClick={() => this.handleClick(".")}
            >
              .
            </button>
            <button
              className="number"
              id="zero"
              onClick={() => this.handleClick("0")}
            >
              0
            </button>
            <button id="equals" onClick={() => this.handleClick("=")}>
              =
            </button>
            <button
              className="operation"
              id="add"
              onClick={() => this.handleClick("+")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
