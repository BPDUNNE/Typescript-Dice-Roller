// enum numberz {
// "one","two", "three", "four", "five", "six"
// }

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

enum numberz {"one","two", "three", "four", "five", "six"};

class CreateDie implements dieTypes{
button:HTMLElement;
div: HTMLElement;
height: string;
width:string;
border: string;
color: string;
dieValue: string;
constructor(div:HTMLElement, height:string, width:string, border:string, color:string, dieValue:string){
this.div = div;
this.height = height;
this.width = width;
this.border = border;
this.color = color;
this. dieValue = dieValue;

};


}
interface dieTypes {
div: HTMLElement;
button:HTMLElement;

}

class DieRoller extends CreateDie{

constructor(div:HTMLElement, height:string, width:string, border:string, color:string, dieValue:string){

    super(div,height,width,border,color,dieValue);
    this.div.style.width = width;
    this.div.style.height = height;
    this.div.style.backgroundColor = color;
    this.div.style.border = border;
    this.div.innerHTML = dieValue
}

rollDie(){
this.dieValue = numberz[getRandomNumber()];
// this.dieValue = dieValue;
this.div.innerHTML = this.dieValue;
}
}

 function getRandomNumber():number{
let randomNumber:number ;

randomNumber=Math.floor(Math.random()*6);

    return randomNumber;
}
let height = "100px";
let width = "100px";
let color = "white";
let border = "5px solid black";
let dieValue = numberz[0];
let dieArray :Array <dieTypes> = [];

for (let index:number = 0; index<4;index ++){
dieArray.push({'div': document.createElement("div"),
'button':document.createElement("button")})
}

dieArray.map((elem,index)=>{
    let dieRollClass = new DieRoller(elem.div,height,width,border,color,dieValue)
    document.body.appendChild(elem.div);
// document.body.appendChild(elem.button);

    // elem.button.onclick = (event) =>{dieRollClass.rollDie()};
});

let button = document.createElement("button");

button.textContent = "Roll the Dice";
document.body.appendChild(button);
button.onclick = (event) =>{dieArray.map((elem,index)=>{
    let dieRollClass = new DieRoller(elem.div,height,width,border,color,dieValue)
    document.body.appendChild(elem.div);

dieRollClass.rollDie();
    // elem.button.onclick = (event) =>{dieRollClass.rollDie()};
});};