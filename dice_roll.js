// enum numberz {
// "one","two", "three", "four", "five", "six"
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let div:HTMLElement = document.createElement("div");
// let button:HTMLElement = document.createElement("button");
// button.textContent="Roll the Dice";
// div.style.width = "100px";
// div.style.height="100px";
// div.style.borderStyle="solid";
// div.style.borderColor="black";
// div.style.borderWidth="10px";
// div.style.textAlign = "center";
// div.style.paddingTop = div.style.paddingRight = "20px";
// document.body.appendChild(div);
// document.body.appendChild(button);
// button.onclick = (event)=>{div.innerHTML=numberz[getRandomNumber()];};
//  function getRandomNumber():number{
// let randomNumber:number ;
// randomNumber=Math.floor(Math.random()*6);
//     return randomNumber;
// }
// div.innerHTML = numberz[0];
var numberz;
(function (numberz) {
    numberz[numberz["one"] = 0] = "one";
    numberz[numberz["two"] = 1] = "two";
    numberz[numberz["three"] = 2] = "three";
    numberz[numberz["four"] = 3] = "four";
    numberz[numberz["five"] = 4] = "five";
    numberz[numberz["six"] = 5] = "six";
})(numberz || (numberz = {}));
;
var CreateDie = /** @class */ (function () {
    function CreateDie(div, height, width, border, color, dieValue) {
        this.div = div;
        this.height = height;
        this.width = width;
        this.border = border;
        this.color = color;
        this.dieValue = dieValue;
    }
    ;
    return CreateDie;
}());
var DieRoller = /** @class */ (function (_super) {
    __extends(DieRoller, _super);
    function DieRoller(div, height, width, border, color, dieValue) {
        var _this = _super.call(this, div, height, width, border, color, dieValue) || this;
        _this.div.style.width = width;
        _this.div.style.height = height;
        _this.div.style.backgroundColor = color;
        _this.div.style.border = border;
        _this.div.innerHTML = dieValue;
        return _this;
    }
    DieRoller.prototype.rollDie = function () {
        this.dieValue = numberz[getRandomNumber()];
        // this.dieValue = dieValue;
        this.div.innerHTML = this.dieValue;
    };
    return DieRoller;
}(CreateDie));
function getRandomNumber() {
    var randomNumber;
    randomNumber = Math.floor(Math.random() * 6);
    return randomNumber;
}
var height = "100px";
var width = "100px";
var color = "white";
var border = "5px solid black";
var dieValue = numberz[0];
var dieArray = [];
for (var index = 0; index < 4; index++) {
    dieArray.push({ 'div': document.createElement("div"),
        'button': document.createElement("button") });
}
dieArray.map(function (elem, index) {
    var dieRollClass = new DieRoller(elem.div, height, width, border, color, dieValue);
    document.body.appendChild(elem.div);
    // document.body.appendChild(elem.button);
    // elem.button.onclick = (event) =>{dieRollClass.rollDie()};
});
var button = document.createElement("button");
button.textContent = "Roll the Dice";
document.body.appendChild(button);
button.onclick = function (event) {
    dieArray.map(function (elem, index) {
        var dieRollClass = new DieRoller(elem.div, height, width, border, color, dieValue);
        document.body.appendChild(elem.div);
        dieRollClass.rollDie();
        // elem.button.onclick = (event) =>{dieRollClass.rollDie()};
    });
};
