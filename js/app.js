'use strict'


var times = ['6:am','7:am','8:am','9:am','10:am','11:am','12:pm','1:pm','2:pm','3:pm','4:pm','5:pm','6:pm','7:pm','The sum of Daily Location Total'];

times.unshift('Locations ');
//times.push('The sum of Daily Location Total');

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

    var avgOfCooki = Math.round(this.cusEachHour[i] * this.avgCookies);

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



  var salesForm=document.getElementById('salesfrom');
salesForm.addEventListener('submit', function(event){
  event.preventDefault();
  
   var shopName= event.target.ShopName.value;
  console.log(shopName); 

  var MinHourlyCustomer= event.target.MinHourlyCustomer.value;
  console.log(MinHourlyCustomer); 

  var MaxHourlyCustomer= event.target.MaxHourlyCustomer.value;
  console.log(MaxHourlyCustomer); 

  var AverageCookies= event.target.AverageCookies.value;
  console.log(AverageCookies); 

  var newShops = new Cities(shopName, parseInt(MinHourlyCustomer), parseInt(MaxHourlyCustomer), parseInt(AverageCookies));

  newShops.getCusEachHour();
  newShops.avgHour();

  table1.removeChild(table1.lastChild);
  newShops.render();
  rendTheLastRow();




});


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

  for (var j = 0; j < times.length-2 ; j++) {
    var totalElement = 0;
    for (var i = 0; i < locations.length; i++) {
      var elementsOfColoumn = locations[i].avgEachHour[j];
      totalElement += elementsOfColoumn;
}

 timesTotal.push(totalElement);

        var theTotalSumOfDays=0;
for(var i=0 ;i<timesTotal.length;i++)
{
  theTotalSumOfDays +=timesTotal[i];

}

  }
  timesTotal.push(theTotalSumOfDays);
  console.log(timesTotal[14]);
  console.log(theTotalSumOfDays);

  for (var i = 0; i < times.length-1 ; i++) {

    var totalRowElement = document.createElement('td');
    totRow.appendChild(totalRowElement);
    totalRowElement.textContent = timesTotal[i];
  }
}




function rendAll() {

  
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









