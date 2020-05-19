'use strict';

var Seattle= {
    name: 'Seattle',
    times: ['6am:','7am:',' 8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:',' 6pm:',' 7pm:'],
    sum:0,        
    ranNum:0,
    
    getRan : function(min,max){
        this.ranNum= Math.floor((Math.floor(Math.random() * (max - min + 1)) + min)*(6.3));
        //console.log(this.getRan);
        //Seattle.ranNum=Math.floor(Math.random() * (max - min+ 1)) + min;
        return this.getRan;
    
    },
    render: function(){
        var container=document.getElementById('sales');
        
    var h2e=document.createElement('h2');
    container.appendChild(h2e);
    h2e.textContent= Seattle.name;
    var ule=document.createElement('ul');
    h2e.appendChild(ule);
    console.log(ule);
    
    for(var i=0; i< Seattle.times.length; i++){
        this.sum+=this.ranNum;
        var lie=document.createElement('li');
    ule.appendChild(lie);
    lie.textContent= Seattle.times[i]+this.ranNum+' cookies';
        console.log(lie);
    Seattle.getRan(23,65);
    console.log(Seattle);
    
    } 
    var li2=document.createElement('li');
    lie.appendChild(li2);
    li2.textContent= 'Total:'+this.sum;
}
}
Seattle.getRan(23,65);
Seattle.render();
//for(var i=0; i<Seattle.times.length;i++){

//console.log(Seattle);

//function getRanNum(min,max){
 // return  Math.floor(Math.random() * (max - min+ 1)) + min;
//}




var Tokyo= {
    name: 'Tokyo',
    times: ['6am:','7am:',' 8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:',' 6pm:',' 7pm:'],
    sum:0,        
    ranNum:0,
    
    getRan : function(min,max){
        this.ranNum= Math.floor((Math.floor(Math.random() * (max - min + 1)) + min)*(1.2));
       
        return this.getRan;
    
    },
    render: function(){
        var container=document.getElementById('sales');
        
    var h2e=document.createElement('h2');
    container.appendChild(h2e);
    h2e.textContent= Tokyo.name;
    var ule=document.createElement('ul');
    h2e.appendChild(ule);
    console.log(ule);
    
    for(var i=0; i< Seattle.times.length; i++){
        this.sum+=this.ranNum;
        var lie=document.createElement('li');
    ule.appendChild(lie);
    lie.textContent= Seattle.times[i]+this.ranNum+' cookies';
        console.log(lie);
        Tokyo.getRan(3,24);
    console.log(Seattle);
    
    } 
    var li2=document.createElement('li');
    lie.appendChild(li2);
    li2.textContent= 'Total:'+this.sum;
}
}
Tokyo.getRan(3,24);
Tokyo.render();



var Dubai= {
    name: 'Dubai',
    times: ['6am:','7am:',' 8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:',' 6pm:',' 7pm:'],
    sum:0,        
    ranNum:0,
    
    getRan : function(min,max){
        this.ranNum= Math.floor((Math.floor(Math.random() * (max - min + 1)) + min)*(3.7));
        
        return this.getRan;
    
    },
    render: function(){
        var container=document.getElementById('sales');
        
    var h2e=document.createElement('h2');
    container.appendChild(h2e);
    h2e.textContent= Dubai.name;
    var ule=document.createElement('ul');
    h2e.appendChild(ule);
    console.log(ule);
    
    for(var i=0; i< Seattle.times.length; i++){
        this.sum+=this.ranNum;
        var lie=document.createElement('li');
    ule.appendChild(lie);
    lie.textContent= Dubai.times[i]+this.ranNum+' cookies';
        console.log(lie);
        Dubai.getRan(11,38);
    console.log(Seattle);
    
    } 
    var li2=document.createElement('li');
    lie.appendChild(li2);
    li2.textContent= 'Total:'+this.sum;
}
}
Dubai.getRan(11,38);
Dubai.render();








var Paris= {
    name: 'Paris',
    times: ['6am:','7am:',' 8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:',' 6pm:',' 7pm:'],
    sum:0,        
    ranNum:0,
    
    getRan : function(min,max){
        this.ranNum= Math.floor((Math.floor(Math.random() * (max - min + 1)) + min)*(2.3
            ));
        
        return this.getRan;
    
    },
    render: function(){
        var container=document.getElementById('sales');
        
    var h2e=document.createElement('h2');
    container.appendChild(h2e);
    h2e.textContent= Paris.name;
    var ule=document.createElement('ul');
    h2e.appendChild(ule);
    console.log(ule);
    
    for(var i=0; i< Paris.times.length; i++){
        this.sum+=this.ranNum;
        var lie=document.createElement('li');
    ule.appendChild(lie);
    lie.textContent= Paris.times[i]+this.ranNum+' cookies';
        console.log(lie);
        Paris.getRan(20,38);
    console.log(Seattle);
    
    } 
    var li2=document.createElement('li');
    lie.appendChild(li2);
    li2.textContent= 'Total:'+this.sum;
}
}
Paris.getRan(20,38);
Paris.render();






var Lima= {
    name: 'Lima',
    times: ['6am:','7am:',' 8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:',' 6pm:',' 7pm:'],
    sum:0,        
    ranNum:0,
    
    getRan : function(min,max){
        this.ranNum= Math.floor((Math.floor(Math.random() * (max - min + 1)) + min)*(4.6));
        
        return this.getRan;
    
    },
    render: function(){
        var container=document.getElementById('sales');
        
    var h2e=document.createElement('h2');
    container.appendChild(h2e);
    h2e.textContent= Lima.name;
    var ule=document.createElement('ul');
    h2e.appendChild(ule);
    console.log(ule);
    
    for(var i=0; i< Lima.times.length; i++){
        this.sum+=this.ranNum;
        var lie=document.createElement('li');
    ule.appendChild(lie);
    lie.textContent= Lima.times[i]+this.ranNum+' cookies';
        console.log(lie);
        Lima.getRan(2,16);
    console.log(Seattle);
    
    } 
    var li2=document.createElement('li');
     lie.appendChild(li2);
    li2.textContent= 'Total:'+this.sum;
}
}
Lima.getRan(2,16);
Lima.render();