'use strict';

var times= ['Locations','6:am ','7:am ',' 8:am ','9:am ','10:am ','11:am ','12:pm ','1:pm ','2:pm ','3:pm ','4:pm ','5:pm ',' 6:pm ',' 7:pm '];
var cities =[];
function Cities(name,minRes,maxRes,avgRes){
    this.name=name;
    
    this.sum=0;
    this.ranNum=0;
    this.minRes=minRes;
    this.maxRes=maxRes;
    this.avgRes=avgRes;
    
    cities.push(this);
}
Cities.prototype.getRan =function(min,max){
    this.ranNum= Math.floor((Math.floor(Math.random() * (max - min + 1)) + min)*this.avgRes);
}
Cities.prototype.render =function(){
    var container=document.getElementById('sales');
        
    //var h2e=document.createElement('h2');
   //container.appendChild(h2e);
   //h2e.textContent= this.name;
  /*  var ule=document.createElement('ul');
   h2e.appendChild(ule);
     
   for(var i=0; i< times.length; i++){
       this.sum+=this.ranNum;
       var lie=document.createElement('li');
   ule.appendChild(lie);
   lie.textContent= times[i]+this.ranNum+' cookies';
          this.getRan(this.minRes,this.maxRes);// min customer=23,  max customer=65
   
   
   } 
   var li2=document.createElement('li');
   lie.appendChild(li2);
   li2.textContent= 'Total:'+this.sum; */



   var tableh=document.createElement('table');
   container.appendChild(tableh);

   var tr1=document.createElement('tr');
   tableh.appendChild(tr1);

   var th1=document.createElement('th');
   tr1.appendChild(th1);
   th1.textContent= times.join("")+ '  Daily Location Total';
   
   var tr2=document.createElement('tr');
  tableh.appendChild(tr2);

   var td1=document.createElement('td');
   tr2.appendChild(td1);
   var td2 =document.createElement('td');
   tr2.appendChild(td2);
   for(var i=0;i<14;i++){
       td1.textContent=this.name+this.ranNum;
       
      


   }

  
   

   //td2.textContent=this.name+this.ranNum;
};
   //var td3=document.createElement('td');
   //row1.appendChild(td3);

   //var row2=document.createElement('tr');
  // tableh.appendChild(row2);




   //for(var i=0)
     
  // for(var i=0; i< times.length; i++){
       //this.sum+=this.ranNum;
      // var th1e=document.createElement('th');
   //tableHead.appendChild(th1e);
   //th1e.textContent= times[i]+ 'cookies';
  //th1e.textContent= times[i]+this.ranNum+' cookies';
          //this.getRan(this.minRes,this.maxRes);// min customer=23,  max customer=65
  // }
   
  // } 
  // var li2=document.createElement('li');
  // lie.appendChild(li2);
  // li2.textContent= 'Total:'+this.sum;
//}

var seattle =new Cities('Seattle',23,65,6.3);
//console.log(seattle);
var tokyo =new Cities('Tokyo',3,24,1.2);
//console.log(tokyo);
var dubai =new Cities('Dubai',11,38,3.7);
//console.log(dubai);
var paris =new Cities('Paris',20,38,2.3);
//console.log(paris);
var lima =new Cities('Lima',2,16,4.6);
//console.log(lima);

  //seattle.getRan(this.minRes,this.maxRes);
//seattle.render();

/*tokyo.getRan(this.minRes,this.maxRes);
tokyo.render();

dubai.getRan(this.minRes,this.maxRes); 
dubai.render();

paris.getRan(this.minRes,this.maxRes); 
paris.render();

lima.getRan(this.minRes,this.maxRes); 
lima.render(); */
 

   cities = [seattle,tokyo,dubai,paris,lima];
   
   console.log(cities);
 for(var i=0;i<cities.length;i++){
     cities[i].getRan(cities[i].minRes,cities[i].maxRes);
     cities[i].render();
     console.log(cities[i].avgRes);
 }  
    


   

