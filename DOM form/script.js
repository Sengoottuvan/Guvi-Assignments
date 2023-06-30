let div=document.createElement("div");
document.body.append(div);
div.setAttribute("class","container");
let form=document.createElement("form");
div.append(form);
form.setAttribute("id","Detailsform");
//First Name
let firstnamelabel=document.createElement("label");
form.append(firstnamelabel);
firstnamelabel.innerHTML="<b>First Name</b>";
let firstname=document.createElement("input");
form.append(firstname);
firstname.setAttribute("id","firstname");
//Last Name
let Lastnamelabel=document.createElement("label");
form.append(Lastnamelabel);
Lastnamelabel.innerHTML="<b>Last Name</b>";
let Lastname=document.createElement("input");
form.append(Lastname);
Lastname.setAttribute("id","Lastname");
//Address
let Addresslabel=document.createElement("label");
form.append(Addresslabel);
Addresslabel.innerHTML="<b>Address</b>";
let Addressname=document.createElement("input");
form.append(Addressname);
Addressname.setAttribute("id","Address");
//Pincode
let Pincodelabel=document.createElement("label");
form.append(Pincodelabel);
Pincodelabel.innerHTML="<b>Pincode</b>";
let Pincode=document.createElement("input");
form.append(Pincode);
Pincode.setAttribute("id","Pincode");
//Gender

let genderpara=document.createElement("p");
form.append(genderpara);
genderpara.innerHTML="<b>Select Gender</b>";
genderpara.setAttribute("class","genderpara")
var linebreak=document.createElement("br");
genderpara.append(linebreak);
//Gender Male
let gendermalelabel=document.createElement("label");
genderpara.append(gendermalelabel);
gendermalelabel.innerText="Male";
let gendermale=document.createElement("input");
genderpara.append(gendermale);
gendermale.setAttribute("type","radio");
gendermale.setAttribute("name","GENDER");
gendermale.setAttribute("value","MALE");
gendermale.setAttribute("class","form-check-input");
gendermale.setAttribute("class","genderRadio");

//Gender Female
let genderFemalelabel=document.createElement("label");
genderpara.append(genderFemalelabel);
genderFemalelabel.innerText="Female";
let genderFemale=document.createElement("input");
genderpara.append(genderFemale);
genderFemale.setAttribute("type","radio");
genderFemale.setAttribute("name","GENDER");
genderFemale.setAttribute("value","Female");
genderFemale.setAttribute("class","form-check-input");
genderFemale.setAttribute("class","genderRadio");
// var linebreak=document.createElement("br");
// genderpara.append(linebreak);
//Gender Other
let genderOtherlabel=document.createElement("label");
genderpara.append(genderOtherlabel);
genderOtherlabel.innerText="others";
let genderOther=document.createElement("input");
genderpara.append(genderOther);
genderOther.setAttribute("type","radio");
genderOther.setAttribute("name","GENDER");
genderOther.setAttribute("value","Others");
genderOther.setAttribute("class","form-check-input");
genderOther.setAttribute("class","genderRadio");
var linebreak=document.createElement("br");
genderpara.append(linebreak);
//Checkbox choice of food
let Choiceoffood=document.createElement("p");
form.append(Choiceoffood);
Choiceoffood.innerHTML="<b>Choose your Favourite Food</b>";
let foodchoicepara=document.createElement("p");
form.append(foodchoicepara);
foodchoicepara.setAttribute("class","foodchoicepara");

//Checkbox food choices
function foodcheckbox(labeltext,idname,classname,typevalue){
    var choiceoffoodlabel=document.createElement("label");
    foodchoicepara.append(choiceoffoodlabel);
    choiceoffoodlabel.innerText=labeltext;
    var choiceoffoodlabel=document.createElement("input");
    foodchoicepara.append(choiceoffoodlabel);
    choiceoffoodlabel.setAttribute("type","checkbox");
    choiceoffoodlabel.setAttribute("id",idname);
    choiceoffoodlabel.setAttribute("class",classname);
    choiceoffoodlabel.setAttribute("value",typevalue);
    return choiceoffoodlabel;
}
//choice1
let choice1=foodcheckbox("Dosa","Choiceoffood","favouritefood","Dosa");
let choice2=foodcheckbox("Vada","Choiceoffood","favouritefood","Vada");
let choice3=foodcheckbox("Pav bhajj","Choiceoffood","favouritefood","Pav bhajj");
let choice4=foodcheckbox("Biryani","Choiceoffood","favouritefood","Biryani");
let choice5=foodcheckbox("Bisbillabath","Choiceoffood","favouritefood","Bisbillabath");

//Country Select
fetch("https://restcountries.com/v2/all").then((data)=> data.json()).then((response)=>{
  countryoptions(response);
}).catch((error)=> console.log(error));

let selectcountry=document.getElementById("Countryselect");
form.append(selectcountry);
function countryoptions(response){
       for ( let i=0;i<response.length;i++){
        let countryoptions=document.createElement("option");
        selectcountry.append(countryoptions);
        countryoptions.innerHTML=`${response[i].name}`;
        countryoptions.setAttribute("value",response[i].name);
       }
                     }

//state select
let statepara=document.createElement("p");
form.append(statepara);
let state=document.createElement("label");
statepara.append(state);
let stateselect = document.getElementById("Stateselect");
statepara.append(stateselect);
stateselect.setAttribute("id","Stateselect")
function stateoptions(valuename,statename){
    var stateoption=document.createElement("option");
    stateselect.append(stateoption);
    stateoption.setAttribute("value",valuename);
    stateoption.innerText=statename;
}
var AndhraPradesh = stateoptions("AndhraPradesh","AndhraPradesh");
var ArunachalPradesh	= stateoptions("ArunachalPradesh","ArunachalPradesh");
var Assam	= stateoptions("Assam","Assam");
var Bihar	= stateoptions("Bihar","Bihar");
var Chhattisgarh	= stateoptions("Chhattisgarh","Chhattisgarh");
var Goa	= stateoptions("Goa","Goa");
var Gujarat	= stateoptions("Gujarat","Gujarat");
var HimachalPradesh	= stateoptions("HimachalPradesh","HimachalPradesh");
var JammuandKashmir	= stateoptions("JammuandKashmir","JammuandKashmir");
var Jharkhand	= stateoptions("Jharkhand","Jharkhand");
var Karnataka	= stateoptions("Karnataka","Karnataka");
var Maharashtra	= stateoptions("Maharashtra","Maharashtra");
var Manipur	= stateoptions("Manipur","Manipur");
var Meghalaya	= stateoptions("Meghalaya","Meghalaya");
var Mizoram	= stateoptions("Mizoram","Mizoram");
var Nagaland	= stateoptions("Nagaland","Nagaland");
var Odisha	= stateoptions("Odisha","Odisha");
var Punjab	= stateoptions("Punjab","Punjab");
var Rajasthan	= stateoptions("Rajasthan","Rajasthan");
var Sikkim	= stateoptions("Sikkim","Sikkim");
var TamilNadu	= stateoptions("TamilNadu","TamilNadu");
var Telangana	= stateoptions("Telangana","Telangana");
var Tripura	= stateoptions("Tripura","Tripura");	
var Bengali= stateoptions("Bengali","Bengali");
var UttarPradesh= stateoptions("UttarPradesh","UttarPradesh");
var Uttarakhand	= stateoptions("Uttarakhand","Uttarakhand");
var WestBengal= stateoptions("WestBengal","WestBengal");
//Submit Button
let submitbtn = document.createElement("button");
form.append(submitbtn);
submitbtn.innerText="SUBMIT";
submitbtn.setAttribute("class","btn btn-primary");
submitbtn.setAttribute("type","submit")
submitbtn.setAttribute("onclick","formvalidate(event)");

//Submit to Table conversion
let tablediv=document.createElement("div");
document.body.append(tablediv);
tablediv.setAttribute("class","container");
 let table= document.createElement("table");
tablediv.append(table);
table.setAttribute("class","table")
 let tablehead = document.createElement("thead");
 table.append(tablehead);
 let tableheadcol1 =document.createElement("th");
 tablehead.append(tableheadcol1);
 tableheadcol1.innerText="FIRST NAME";
 let tableheadcol2=document.createElement("th");
 tablehead.append(tableheadcol2);
 tableheadcol2.innerText="LAST NAME";
 let tableheadcol3 =document.createElement("th");
 tablehead.append(tableheadcol3);
 tableheadcol3.innerText="ADDRESS";
 let tableheadcol4 =document.createElement("th");
 tablehead.append(tableheadcol4);
 tableheadcol4.innerText="PINCODE";
 let tableheadcol5 =document.createElement("th");
 tablehead.append(tableheadcol5);
 tableheadcol5.innerText="GENDER";
 let tableheadcol6 =document.createElement("th");
 tablehead.append(tableheadcol6);
 tableheadcol6.innerText="FOVOURITE FOOD";
 let tableheadcol7 =document.createElement("th");
 tablehead.append(tableheadcol7);
 tableheadcol7.innerText="COUNTRY";
 let tableheadcol8 =document.createElement("th");
 tablehead.append(tableheadcol8);
 tableheadcol8.innerText="STATE";
 let tablebody=document.createElement("tbody");
 table.append(tablebody);


 function createtablerow(FirstName,LastName,Address,Pincode,gender,favouritefoodlist,countryname,statename){
    let tablebodyrow = document.createElement("tr");
    tablebody.append(tablebodyrow);
    tablebodyrow.setAttribute("colspan","2");
    let tablebodyrowdata1 = document.createElement("td");
    tablebodyrow.append(tablebodyrowdata1);
    tablebodyrowdata1.innerHTML=FirstName;
    let tablebodyrowdata2 = document.createElement("td");
    tablebodyrow.append(tablebodyrowdata2);
    tablebodyrowdata2.innerHTML=LastName;
    let tablebodyrowdata3 = document.createElement("td");
    tablebodyrow.append(tablebodyrowdata3);
    tablebodyrowdata3.innerHTML=Address;
    let tablebodyrowdata4 = document.createElement("td");
    tablebodyrow.append(tablebodyrowdata4);
    tablebodyrowdata4.innerHTML=Pincode;
    let tablebodyrowdata5 = document.createElement("td");
    tablebodyrow.append(tablebodyrowdata5);
    tablebodyrowdata5.innerHTML=gender;
    let tablebodyrowdata6 = document.createElement("td");
    tablebodyrow.append(tablebodyrowdata6);
    tablebodyrowdata6.innerHTML=favouritefoodlist;

    
    let tablebodyrowdata7 = document.createElement("td");
    tablebodyrow.append(tablebodyrowdata7);
    tablebodyrowdata7.innerHTML=countryname;
    let tablebodyrowdata8 = document.createElement("td");
    tablebodyrow.append(tablebodyrowdata8);
    tablebodyrowdata8.innerHTML=statename;
 }

function formvalidate(event){
    event.preventDefault();
    if((document.getElementById("firstname").value) == "" ) {
        alert("Please Enter your FirstName!");
        document.getElementById("firstname").value.focus();
        return false;
     }
     if((document.getElementById("Lastname").value) == "" ) {
        alert("Please Enter your LastName!");
        document.getElementById("Lastname").value.focus();
        return false;
     }
     if((document.getElementById("Address").value) == "" ) {
        alert("Please Enter your Address!");
        document.getElementById("Address").value.focus();
        return false;
     }
     if((document.getElementById("Pincode").value) == "" ) {
        alert("Please Enter Pincode!");
        document.getElementById("Pincode").value.focus();
        return false; 
     }
     if((document.getElementById("Pincode").value) == "" ) {
        alert("Please Enter Pincode!");
        document.getElementById("Pincode").value.focus();
        return false; 
     }
     let favouritefood = document.querySelectorAll(".favouritefood:checked");
     let favouritefoodoflist = [];
     favouritefood.forEach((ele) =>{favouritefoodoflist = [...favouritefoodoflist, ele.value]
        if( favouritefoodoflist.length > 2){
        alert("Choose Only 2 Favourite FOOD!");
        return false;
     }
    });
     if ( ( form.GENDER[0].checked == false ) && ( form.GENDER[1].checked == false ) && (form.GENDER[2].checked == false ) ) {
     alert ( "Please choose your Gender" ); 
     document.getElementsByName("GENDER").value.focus();
     return false;
     }
     if(document.getElementById("Countryselect").value==""){
     alert ( "Please select Your Country!");
     document.getElementById("Countryselect").value.focus();
     return false;
     }
     if(document.getElementById("Stateselect").value==""){
    alert ( "Please select Your State!");
    document.getElementById("Stateselect").value.focus();
    return false;
    }
    // if( (document.getElementById("firstname").value == "") || (document.getElementById("Stateselect").value=="") || ((document.getElementById("Lastname").value) == "")||((document.getElementById("Address").value) == "" )||(document.getElementById("Pincode").value == "") || (document.getElementById("Stateselect").value=="")){
    //     alert ( "Please Fill the form and Submit!");
    // }
    let FirstName=document.getElementById("firstname").value;
    let LastName=(document.getElementById("Lastname").value);
    let Address=(document.getElementById("Address").value);
    let Pincode=(document.getElementById("Pincode").value);
    let gender=document.querySelector(".genderRadio:checked").value;
    let favouritefoodlist = [];
    favouritefood.forEach((ele) => (favouritefoodlist = [...favouritefoodlist, ele.value]));
    let countryname=document.getElementById("Countryselect").value;
    let statename=document.getElementById("Stateselect").value;
    // console.log(FirstName,LastName,Address,Pincode,gender,favouritefoodlist,countryname,statename);
    createtablerow(FirstName,LastName,Address,Pincode,gender,favouritefoodlist,countryname,statename);
    document.getElementById("Detailsform").reset();
}