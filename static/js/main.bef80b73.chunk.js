(this["webpackJsonpfcc-calculator"]=this["webpackJsonpfcc-calculator"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),i=a(5),s=a.n(i),r=(a(14),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))}),l=a(1),d=a(6),o=a(7),u=a(3),h=a(9),b=a(8);function m(e){var t=String(e);if(t.length>16){var a=t.split(".");if(2===a.length){var c=16-a[0].length;return Math.round((e+Number.EPSILON)*Math.pow(10,c))/Math.pow(10,c)}return"TOO LARGE"}return e}var k=function(e,t){if(2===e.length){var a=Number(e[0]),c=Number(e[1]);switch(t[0]){case"x":return m(a*c);case"+":return m(a+c);case"-":return m(a-c);case"\xf7":return m(a/c);default:return}}else{if(3!==e.length){for(var n=0;n<t.length;){var i=t[n];if("x"===i||"\xf7"===i){var s=Number(e[n]),r=Number(e[n+1]),l=void 0;l="x"===i?s*r:s/r,e.splice(n,2,String(l)),t.splice(n,1)}else n+=1}return 0===t.length?m(e[0]):1===t.length?"+"===t[0]?m(Number(e[0])+Number(e[1])):m(Number(e[0])-Number(e[1])):function(e,t){var a,c=t[0];a="+"===c?Number(e[0])+Number(e[1]):e[0]-e[1];e.splice(0,2),t.splice(0,1);for(var n=0;n<t.length;n++){c=t[n];var i=Number(e[n]);"+"===c?a+=i:a-=i}return m(a)}(e,t)}a=Number(e[0]),c=Number(e[1]);var d=Number(e[2]),o=t[0],u=t[1];switch(o){case"x":case"\xf7":if("x"===o)var h=a*c;else h=a/c;switch(u){case"x":return m(h*d);case"+":return m(h+d);case"\xf7":return m(h/d);case"-":return m(h-d);default:return}case"-":switch(u){case"x":case"\xf7":return m(a-(h="x"===u?c*d:c/d));case"+":return m(a-c+d);default:return m(a-c-d)}case"+":switch(u){case"x":h=c*d;break;case"+":h=c+d;break;case"\xf7":h=c/d;break;case"-":h=c-d;break;default:h=0}switch(o){case"+":return m(a+h);case"-":return m(a-h);default:return m(h)}default:return-1}}},f=a(0),v=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={display:"",on:!1,operators:[],operands:[],negative:!1,eval:!1,decimal:!1},e.handleClick=e.handleClick.bind(Object(u.a)(e)),document.onkeypress=e.handleKeyPress,e}return Object(o.a)(a,[{key:"handleClick",value:function(e){var t=this;if("off"!==e)if("AC"!==e){if(this.state.on){var a=this.state.display,c=this.state.operators,n=this.state.operands,i=this.state.negative,s=this.state.decimal,r=this.state.eval;if(console.log(["display is: ".concat(a),"operators: ".concat(c),"operands: ".concat(n),"negative: ".concat(i),"decimal: ".concat(s),"eval: ".concat(r)]),"TOO LARGE"!==a)switch(e){case"x":case"+":case"\xf7":case"-":if("-"===e)switch(a){case"x":case"+":case"-":case"\xf7":return void this.setState({operators:[].concat(Object(l.a)(c),[a]),display:"-",negative:!0});case"0":if(0===n.length)return void this.setState({display:"-",negative:!0,eval:!1});break;default:return void this.setState({display:"-",operands:[].concat(Object(l.a)(n),[a]),eval:!1})}else switch(a){case"x":case"+":case"\xf7":return void this.setState({display:e});case"-":return i?void(c.length>0?this.setState({operators:c.slice(0,-1),display:e,negative:!1}):this.setState({display:"0",negative:!1})):void this.setState({display:e});case"0":if(0===n.length)return;break;default:return void this.setState({display:e,operands:[].concat(Object(l.a)(n),[a]),eval:!1})}break;case".":switch(a){case"x":case"+":case"\xf7":return void this.setState({display:"0.",decimal:!0,operators:[].concat(Object(l.a)(c),[a])});case"-":return i?void this.setState({display:"-0.",decimal:!0}):void this.setState({display:"0.",decimal:!0,operators:[].concat(Object(l.a)(c),[a])});default:return r?void this.setState({display:"0.",eval:!1}):s?void 0:void this.setState({display:a.concat("."),decimal:!0})}case"=":switch(a){case"x":case"+":case"-":case"\xf7":break;default:n.push(a)}var d=k(n,c);return void this.setState({display:d,operators:[],operands:[],negative:!1,eval:!0,decimal:!1},(function(){return console.log(t.state)}));default:switch(a){case"0":return void this.setState({display:e,decimal:!1});case"x":case"+":case"\xf7":return void this.setState({operators:[].concat(Object(l.a)(c),[a]),display:e,decimal:!1});case"-":return i?void this.setState({negative:!1,display:"-".concat(e),decimal:!1}):void this.setState({operators:[].concat(Object(l.a)(c),["-"]),display:e,decimal:!1});default:if(r)return void this.setState({display:e,eval:!1});if(a.length>=16)return;this.setState({display:a.concat(e)})}}}}else this.setState({display:"0",on:!0,operators:[],operands:[],negative:!1,eval:!1,decimal:!1});else this.setState({display:"",on:!1,operators:[],operands:[],negative:!1,eval:!1,decimal:!1})}},{key:"handleKeyPress",value:function(e){switch(e.key){case"=":case"Enter":document.getElementById("equals").click();break;case"0":document.getElementById("zero").click();break;case"1":document.getElementById("one").click();break;case"2":document.getElementById("two").click();break;case"3":document.getElementById("three").click();break;case"4":document.getElementById("four").click();break;case"5":document.getElementById("five").click();break;case"6":document.getElementById("six").click();break;case"7":document.getElementById("seven").click();break;case"8":document.getElementById("eight").click();break;case"9":document.getElementById("nine").click();break;case"+":document.getElementById("add").click();break;case"-":document.getElementById("subtract").click();break;case"x":case"*":document.getElementById("multiply").click();break;case"/":document.getElementById("divide").click();break;case".":document.getElementById("decimal").click();break;case"b":document.getElementById("off").click();break;case" ":document.getElementById("clear").click();break;default:return}}},{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("div",{id:"main-container",children:[Object(f.jsx)("div",{id:"display",children:this.state.display}),Object(f.jsxs)("div",{id:"on-off-container",children:[Object(f.jsx)("button",{className:"on-off",id:"clear",onClick:function(){return e.handleClick("AC")},children:"AC/ON"}),Object(f.jsx)("button",{className:"on-off",id:"off",onClick:function(){return e.handleClick("off")},children:"OFF"})]}),Object(f.jsxs)("div",{id:"main-grid",children:[Object(f.jsx)("button",{className:"number",id:"one",onClick:function(){return e.handleClick("1")},children:"1"}),Object(f.jsx)("button",{className:"number",id:"two",onClick:function(){return e.handleClick("2")},children:"2"}),Object(f.jsx)("button",{className:"number",id:"three",onClick:function(){return e.handleClick("3")},children:"3"})," ",Object(f.jsx)("button",{className:"operation",id:"divide",onClick:function(){return e.handleClick("\xf7")},children:"\xf7"}),Object(f.jsx)("button",{className:"number",id:"four",onClick:function(){return e.handleClick("4")},children:"4"}),Object(f.jsx)("button",{className:"number",id:"five",onClick:function(){return e.handleClick("5")},children:"5"}),Object(f.jsx)("button",{className:"number",id:"six",onClick:function(){return e.handleClick("6")},children:"6"})," ",Object(f.jsx)("button",{className:"operation",id:"multiply",onClick:function(){return e.handleClick("x")},children:"x"}),Object(f.jsx)("button",{className:"number",id:"seven",onClick:function(){return e.handleClick("7")},children:"7"}),Object(f.jsx)("button",{className:"number",id:"eight",onClick:function(){return e.handleClick("8")},children:"8"}),Object(f.jsx)("button",{className:"number",id:"nine",onClick:function(){return e.handleClick("9")},children:"9"})," ",Object(f.jsx)("button",{className:"operation",id:"subtract",onClick:function(){return e.handleClick("-")},children:"-"})," ",Object(f.jsx)("button",{className:"operation",id:"decimal",onClick:function(){return e.handleClick(".")},children:"."}),Object(f.jsx)("button",{className:"number",id:"zero",onClick:function(){return e.handleClick("0")},children:"0"}),Object(f.jsx)("button",{id:"equals",onClick:function(){return e.handleClick("=")},children:"="}),Object(f.jsx)("button",{className:"operation",id:"add",onClick:function(){return e.handleClick("+")},children:"+"})]})]})})}}]),a}(n.a.Component);s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),r()}},[[16,1,2]]]);
//# sourceMappingURL=main.bef80b73.chunk.js.map