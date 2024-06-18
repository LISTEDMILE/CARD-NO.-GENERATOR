//hiding unhiding div of diff inputs...._____
var l=1;
function next(){
    l=l+1;
    if (l==2){
    document.getElementById('mid1').style.display="none";
    document.getElementById('mid2').style.display="flex";
    }
    else if (l==3){
        document.getElementById('mid2').style.display="none";
  
    document.getElementById('mid3').style.display="flex";
  
    }
    else{
        
    document.getElementById('mid3').style.display="none";
  document.getElementById('mid4').style.display="flex";
  
}}

function previous(){
    l=l-1;
    if(l==1){
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
}
var cartype;
var carcat;
var carbank;
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