import React, { Component } from "react";
import evaluate from './evaluate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
      current: "0",
      on: false
    };
    this.handleClick = this.handleClick.bind(this);
    document.onkeypress = this.handleKeyPress;
  }

  handleClick(x) {
    if (x  === "off") {
      this.setState({
        display: "",
        on: false
      })
      // const operands = ["-2.5","3.243","4"];      used for testing evaluate function in evaluate.js
      // const operators = ["+","÷"];
      // console.log(evaluate(operands, operators));
      return;
    }
    if (x === "AC") {
      this.setState({
        display: "0",
        on: true
      })
      return;
    }
    if (!this.state.on) {
      return;
    }
    var ret;
    let dis = this.state.display.slice();
    if (dis === "0") {
      switch (x) {
        case "x":
        case "=":
        case "÷":
        case "-":
        case "+":
          return;
        case ".":
          this.setState({
            display: "0."
          })
          return;
        default:
          this.setState({
            display: x
          });
          return;
      }
    } else {
      switch (x) {
        case "=":
          ret = "=";
          break;
        case "0":
          ret = "0";
          break;
        case "1":
          ret = "1";
          break;
        case "2":
          ret = "2";
          break;
        case "3":
          ret = "3";
          break;
        case "4":
          ret = "4";
          break;
        case "5":
          ret = "5";
          break;
        case "6":
          ret = "6";
          break;
        case "7":
          ret = "7";
          break;
        case "8":
          ret = "8";
          break;
        case "9":
          ret = "9";
          break;
        case "+":
          ret = "+";
          break;
        case "-":
          ret = "-";
          break;
        case "x":
          ret = "x";
          break;
        case "÷":
          ret = "÷";
          break;
        case ".":
          ret = ".";
          break;
        default:
          return;
      }
      this.setState({
        display: dis.concat(ret)
      });
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
      default:
        return;
    }
  }

  render() {
    return (
      <div className="App">
        <div id="main-container">
          <display id="display">{this.state.display}</display>
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
