//hiding unhiding div of diff inputs...._____
var l=0;
var number;
var method1;

var cartype="";
var carcat="";
var carbank="";
anst="";

function next(){

    number=cartype+carcat+carbank+anst;
  
   
    l=l+1;
   
   if(l==1){

    if (method1==1){
        l=4;
        document.getElementById('mid0').style.display="none";
        document.getElementById('mid4').style.display="flex";
        document.getElementById('card').style.display="none";
    }
    else if(method1==2){
       
      number="";
       document.getElementById('mid1').style.display="flex";
       document.getElementById('mid0').style.display="none";
     
       document.getElementById('finaldiv').style="border:none; padding:0px 0px";
       document.querySelectorAll('.finaldiv')[0].innerHTML="";
       document.querySelectorAll('.finaldiv')[1].innerHTML="";
   }
    else{
        alert("Please select a value");
        l=0;
    }

    }
    

    else if (l==2){
        if(cartype!=""){
    document.getElementById('mid1').style.display="none";
    document.getElementById('mid2').style.display="flex";

    document.querySelectorAll('.finaldiv')[0].innerHTML="number";
    document.querySelectorAll('.finaldiv')[1].innerHTML="number";
    } 
    else{
        l--;
        alert("Please select one or use Bin no.")
    }}
    else if (l==3){
        if(carcat!=""){
        document.getElementById('mid2').style.display="none";
  
    document.getElementById('mid3').style.display="flex";

    document.querySelectorAll('.finaldiv')[0].innerHTML="number";
    document.querySelectorAll('.finaldiv')[1].innerHTML="number";
  
    } else{
        l--;
        alert("Please select one or use Bin no.")
    }}


    else if(l==4){
if(carbank!=""){
        l++;
    document.getElementById('mid3').style.display="none";
  document.getElementById('mid5').style.display="flex";
  document.querySelectorAll('.finaldiv')[0].innerHTML="number";
  document.querySelectorAll('.finaldiv')[1].innerHTML="number";
  
  
} else{
        l--;
        alert("Please select one or use Bin no.")
    }}
else {
    anst=toString(document.getElementById('an').innerHTML.value);
    document.getElementById('mid4').style.display="none";
  document.getElementById('mid5').style.display="flex";

  
    document.getElementById('finaldiv').style="border-right:2px solid rgba(45, 215, 238, 0.74); border-bottom:2px solid rgba(45, 215, 238, 0.74); padding:8px 20px";
}
}

function previous(){
    if(l==4){
        l=0;
        document.getElementById('card').style.display="flex";
        document.getElementById('mid4').style.display="none";
    document.getElementById('mid0').style.display="flex";
    }
    else{
    l=l-1;
    if(l==0){
        document.getElementById('mid1').style.display="none";
        document.getElementById('mid0').style.display="flex";
        }
    else if(l==1){
    document.getElementById('mid2').style.display="none";
    document.getElementById('mid1').style.display="flex";
    }
    else if(l==2){
    document.getElementById('mid3').style.display="none";
    document.getElementById('mid2').style.display="flex";
    }
    else if(l==3){

    document.getElementById('mid4').style.display="none";
    document.getElementById('mid3').style.display="flex";
    }
    else{
        document.getElementById('mid5').style.display="none";
  document.getElementById('mid4').style.display="flex";
  
    }
}}
function method(){
    if (method1==1){
    document.getElementById('method').innerHTML="Bin";
}
else{
    document.getElementById('method').innerHTML="Cridentials";
}}
function cartypeh(){
    document.getElementById('cartypeh').innerHTML=cartype;
    document.getElementById('cartypecardh').innerHTML=cartype;
}
function carcath(){
    document.getElementById('carcath').innerHTML=carcat;
    document.getElementById('carcatcardh').innerHTML=carcat;
}
function carbankh(){
    document.getElementById('carbankh').innerHTML=carbank;
    document.getElementById('insidebankh').innerHTML=carbank;
}









//logic.......

function logic(){
    var parentobj=new Map{
        ['visa':['credit':['OBC Bank':45]]]
    };
    console.log(parentobj.'visa'.'credit'.'OBC Bank'.value);
}
