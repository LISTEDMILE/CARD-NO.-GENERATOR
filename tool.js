//hiding unhiding div of diff inputs...._____
var l=1;
function next(){
    if(l==5){
        l=0;
    }
    l=l+1;
    if(l==1){
      
       document.getElementById('mid1').style.display="flex";
       document.getElementById('mid5').style.display="none";
     
       document.getElementById('finaldiv').style="border:none; padding:0px 0px";

    }
    else if (l==2){
    document.getElementById('mid1').style.display="none";
    document.getElementById('mid2').style.display="flex";
    }
    else if (l==3){
        document.getElementById('mid2').style.display="none";
  
    document.getElementById('mid3').style.display="flex";
  
    }
    else if(l==4){
        
    document.getElementById('mid3').style.display="none";
  document.getElementById('mid4').style.display="flex";
  
}
else {
    document.getElementById('mid4').style.display="none";
  document.getElementById('mid5').style.display="flex";
  
    document.getElementById('finaldiv').style="border-right:2px solid rgba(45, 215, 238, 0.74); border-bottom:2px solid rgba(45, 215, 238, 0.74); padding:8px 20px";
}
}

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
    else{
        document.getElementById('mid5').style.display="none";
  document.getElementById('mid4').style.display="flex";
  
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