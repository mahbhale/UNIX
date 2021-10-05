var incart = [];
var intotal = 0;

function subcat(text1){
    let x = document.getElementById('froze_sub')
    
    if( text1=="froze_food" ){
        x.src="froze_categories.png"
        x.useMap="#froze_map"
        
    }
    else if(text1=="fresh_food"){
         x.src="fresh_categories.png"
        x.useMap="#fresh_map"
        
    }

    else if(text1=="beverages_food"){
         x.src="bev_categories.png"
        x.useMap="#beverages_map"
        
    }
    else if(text1=="health_food"){
         x.src="health_categories.png"
        x.useMap="#health_map"
        
    }
    else if(text1=="pet_food"){
         x.src="pet_categories.png"
        x.useMap="#pet_map"
        
    }
    
}

function subcat1(text2){
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("db1").innerHTML = this.responseText;
        }
    }
    let x1="/php1.php?db11="+text2
     xhttp.open("GET", x1, true);
    xhttp.send();
    
}

function addincart(text3){
    
    let add= document.getElementById("cart1");
    let quantity=document.getElementById("value1").value;
    incart.push(text3[0],text3[1],text3[2],text3[3],quantity);
    let tblelement=document.getElementById("cart1");
    var row = tblelement.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = text3[0];
    cell2.innerHTML = text3[1];
    cell3.innerHTML = text3[3];
    cell4.innerHTML = quantity;
    cell5.innerHTML = text3[2];
 
    let add1= document.getElementById("subtotal");
    let tt = ((parseFloat(text3[2])*quantity));
    intotal += tt;
    add1.innerHTML = intotal.toFixed(2);
    

}

function removed(){
    let w = document.getElementById("cart1");
    for(let z= (w.rows.length-3); z!=0; z--){
        
        w.deleteRow(z)
    }
    document.getElementById("subtotal").innerHTML =0
    intotal=0;
    incart=[];
    
}

function proceed(){
    if(incart.length == 0){
        alert("Your Cart is empty !");
    }
    
    else{
        
        document.getElementById("finalcart").hidden = false;
       var x = document.getElementById("cart1").rows.length-1;
  
      let row = document.getElementById("cart1").rows;
      let s = "<table>";
      
      for (let i = 0; i < x; ++i){
      	s+= row[i].outerHTML;
      }
      s += "</table>";

      document.getElementById("finalcart").innerHTML = s;

        
        
        let refvar = document.getElementById("lastcheck");
        let refimg = document.getElementById("mainimange");
        let refimg2 = document.getElementById("froze_sub");
        refimg.classList="";
        refimg2.classList="";
        refimg.classList.add("check");
        refimg2.classList.add("check");
        refvar.classList="";
        refvar.classList.add("big")
        refvar.src="form.html";
        
        let ref3 = document.getElementById("db1");
        let ref4 = document.getElementById("out");
        ref3.classList="";
        ref4.classList="";
        ref3.classList.add("check");
        ref4.classList.add("check");
        
        
    }
}



