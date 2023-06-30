//Div element 
let div1 =document.createElement("div");
document.body.append(div1);
div1.setAttribute("class","container");
//butons div
let div2 =document.createElement("div");
div1.append(div2);
div2.setAttribute("class","Buttons");
//button elements
let inputbox= document.createElement("input");
div2.append(inputbox);
inputbox.setAttribute("type","text");
inputbox.setAttribute("placeholder","0");
inputbox.setAttribute("id","Screen");
//C button
let Cbutton=document.createElement("button");
Cbutton.innerText="C";
Cbutton.setAttribute("onclick","deleteall()");
div2.append(Cbutton);
//Delete button
let Delbutton=document.createElement("button");
Delbutton.innerText="Del";
Delbutton.setAttribute("style","font-size: 15px;");
Delbutton.setAttribute("onclick","Delete()");
div2.append(Delbutton);
//Dot button
let Dotbutton=document.createElement("button");
Dotbutton.innerText=".";
Dotbutton.setAttribute("onclick","print('.')");
div2.append(Dotbutton);
//Multiply button
let Multiplicationbutton=document.createElement("button");
Multiplicationbutton.innerText="x";
Multiplicationbutton.setAttribute("onclick","print('*')");
div2.append(Multiplicationbutton);
//no Seven button
let noSevenbutton=document.createElement("button");
noSevenbutton.innerText="7";
noSevenbutton.setAttribute("onclick","print('7')");
div2.append(noSevenbutton);
//no Eight button
let noEightbutton=document.createElement("button");
noEightbutton.innerText="8";
noEightbutton.setAttribute("onclick","print('8')");
div2.append(noEightbutton);
//no nine button
let noninebutton=document.createElement("button");
noninebutton.innerText="9";
noninebutton.setAttribute("onclick","print('9')");
div2.append(noninebutton);
//Division button
let Divisionbutton=document.createElement("button");
Divisionbutton.innerText="/";
Divisionbutton.setAttribute("onclick","print('/')");
div2.append(Divisionbutton);
//no four button
let nofourbutton=document.createElement("button");
nofourbutton.innerText="4";
nofourbutton.setAttribute("onclick","print('4')");
div2.append(nofourbutton);
//no five button
let nofivebutton=document.createElement("button");
nofivebutton.innerText="5";
nofivebutton.setAttribute("onclick","print('5')");
div2.append(nofivebutton);
//no Six button
let noSixbutton=document.createElement("button");
noSixbutton.innerText="6";
noSixbutton.setAttribute("onclick","print('6')");
div2.append(noSixbutton);
//Subtaction button
let Subtactionbutton=document.createElement("button");
Subtactionbutton.innerText="-";
Subtactionbutton.setAttribute("onclick","print('-')");
div2.append(Subtactionbutton);
//no onebutton
let noonebutton=document.createElement("button");
noonebutton.innerText="1";
noonebutton.setAttribute("onclick","print('1')");
div2.append(noonebutton);
//no two button
let notwobutton=document.createElement("button");
notwobutton.innerText="2";
notwobutton.setAttribute("onclick","print('2')");
div2.append(notwobutton);
//no three button
let nothreebutton=document.createElement("button");
nothreebutton.innerText="3";
nothreebutton.setAttribute("onclick","print('3')");
div2.append(nothreebutton);
//Addition button
let Additionbutton=document.createElement("button");
Additionbutton.innerText="+";
Additionbutton.setAttribute("onclick","print('+')");
div2.append(Additionbutton);
//Doublezero button
let Doublezerobutton=document.createElement("button");
Doublezerobutton.innerText="00";
Doublezerobutton.setAttribute("onclick","print('00')");
div2.append(Doublezerobutton);
//Singlezero button
let Singlezerobutton=document.createElement("button");
Singlezerobutton.innerText="0";
Singlezerobutton.setAttribute("onclick","print(0)");
div2.append(Singlezerobutton);
//Modulus button
let Modulusbutton=document.createElement("button");
Modulusbutton.innerText="%";
Modulusbutton.setAttribute("onclick","print('%')");
div2.append(Modulusbutton);
//Equalto button
let Equaltobutton=document.createElement("button");
Equaltobutton.innerText="=";
Equaltobutton.setAttribute("onclick","calculate()");
// Equaltobutton.setAttribute("keypress","enterkey(event)");
div2.append(Equaltobutton);
Equaltobutton.setAttribute("class","Equalbutton")

let OutputScreen=document.getElementById("Screen");
function print(event){
//         if (event.key == 96 ){
//              OutputScreen.value +=event;
//     }
//     else{
//                 alert("Only Numbers are Allowed");
//             }
// }
    OutputScreen.value +=event;
}

//     if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)){
// OutputScreen.value +=event;
//     }
//     else{
//                 alert("Only Numbers are Allowed");
//             }
// }
function Delete(){
    OutputScreen.value=OutputScreen.value.slice(0,-1);
}
function deleteall(){
    OutputScreen.value="";
}
function calculate(){
    try{
        OutputScreen.value=eval(OutputScreen.value);
    }
    catch{
        alert("Invalid Operation");
    }
}
// function enterkey(event){
//     if(event.keycode == 32){
//             OutputScreen.value=(eval(OutputScreen.value));
//              }
//              else{
//         alert("Only Numbers are Allowed");
//     }
// }
document.addEventListener("keypress", event => {
    if (event.keycode == 32){
      calculate();
    }
  });
document.addEventListener("keypress", event => {
    if (event.code == 8){
      Delete();
    }
  });
  
  
