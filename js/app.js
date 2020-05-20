'use strict'

<<<<<<< HEAD
var times = ['6:am','7:am','8:am','9:am','10:am','11:am','12:pm','1:pm','2:pm','3:pm','4:pm','5:pm','6:pm','7:pm',] ; 

times.unshift('Locations ');
times.push('The sum of Daily Location Total');

var locations = [];

function Cities(name, customerMin, customerMax, avgCookies) {
  this.name = name;
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.avgCookies = avgCookies;
  this.totalCookiesNum = 0;
  this.cusEachHour = [];
  this.avgEachHour = [];
  locations.push(this);
}

var seattle = new Cities('Seattle', 23, 65, 6.3);
var tokyo = new Cities('Tokyo', 3, 24, 1.2);
var dubai = new Cities('Dubai', 11, 38, 3.7);
var paris = new Cities('Paris', 20, 38, 2.3);
var lima = new Cities('Lima', 2, 16, 4.6);



Cities.prototype.getCusEachHour = function () {

  for (var i = 0; i < times.length; i++) {
    var randCusHour = Math.round(Math.random() * (this.customerMax - this.customerMin + 1)) + this.customerMin;
    this.cusEachHour.push(randCusHour);
  }
};


Cities.prototype.avgHour = function () {

  for (var i = 0; i < this.cusEachHour.length - 2; i++) {

    var avgOfCooki = Math.round(this.cusEachHour[i] * this.avgCookies)

    this.avgEachHour.push(avgOfCooki);
    this.totalCookiesNum += this.avgEachHour[i];
  }

};

var container = document.getElementById('sales');
var table1 = document.createElement('table');
container.appendChild(table1);

var headerRow = document.createElement('tr');
table1.appendChild(headerRow);

Cities.prototype.render = function () {

  var tr1 = document.createElement('tr');
  table1.appendChild(tr1);
  tr1.textContent = this.name;

  for (var i = 0; i < times.length - 1; i++) {
    var td1 = document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = this.avgEachHour[i];
 
    if (i === times.length - 2) {
      td1.textContent = this.totalCookiesNum;
    } 
  }
};

//for the first row (head table)
function rendOneRow() {

  for (var i = 0; i < times.length; i++) {

    var th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = times[i];

  }
}

// for the totall row
function rendTheLastRow() {


  var totRow = document.createElement('tr');
  table1.appendChild(totRow);

  var tatalName = document.createElement('td');
  totRow.appendChild(tatalName);
  tatalName.textContent = 'The Total';

  var timesTotal = [];

  for (var j = 0; j < times.length - 2; j++) {
    var totalElement = 0;
    for (var i = 0; i < locations.length; i++) {
      var elementsOfColoumn = locations[i].avgEachHour[j];
      totalElement += elementsOfColoumn;
      
    }

    timesTotal.push(totalElement);
    
  }
  

  for (var i = 0; i < times.length - 2; i++) {
    var totalRowElement = document.createElement('td');
    totRow.appendChild(totalRowElement);
    totalRowElement.textContent = timesTotal[i];
  }
}
=======
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
>>>>>>> 9ebe7c56cc6299931ba48c30189f86ed570cfcbf

function rendAll() {

<<<<<<< HEAD
  rendOneRow();

  for (var i = 0; i < locations.length; i++) {
    locations[i].render();
  }

  rendTheLastRow();
}



for (var i = 0; i < locations.length; i++) {
  locations[i].getCusEachHour();
  locations[i].avgHour();
  
}

rendAll();
=======




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
>>>>>>> 9ebe7c56cc6299931ba48c30189f86ed570cfcbf
