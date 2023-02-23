


//2
let list =  ["hand", "leg", "head", "finger", "eye"];
let example1 = document.createElement("ul");
document.body.append(example1); 
for (let i = 1; i<list.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = list[i];
  example1.append(listItem);
}













//4
var arr=[
  {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6},
  {one: 7, two: 8, three: 9, four: 10, five: 11, six: 12},
  {one: 13, two: 14, three: 15, four: 16, five: 17, six: 18},
  {one: 19, two: 20, three: 21, four: 22, five: 23, six: 24},
  {one: 25, two: 26, three: 27, four: 28, five: 29, six: 30},
  ] ;

  var tb = document.getElementById("someTable");
  var tr = document.getElementById("someTr");
  var td = someTable.getElementsByTagName("td");
  
  var tdRank = someTable.getElementsByClassName("one");
  var tdNick = someTable.getElementsByClassName("two");
  var tdId = someTable.getElementsByClassName("three");
  var tdRank = someTable.getElementsByClassName("four");
  var tdNick = someTable.getElementsByClassName("five");
  var tdId = someTable.getElementsByClassName("six");
  
  
  for(var i=0; i<tdOne.length; i++){
    tdOne[i].innerHTML = arr[i].one
  };
  
  for(var i=0; i<tdTwo.length; i++){
    tdTwo[i].innerHTML = arr[i].two
  };
  
  for(var i=0; i<tdThree.length; i++){
    tdThree[i].innerHTML = arr[i].three
  };
  for(var i=0; i<tdFour.length; i++){
    tdFour[i].innerHTML = arr[i].four
  };
  
  for(var i=0; i<tdFive.length; i++){
    tdFive[i].innerHTML = arr[i].five
  };
  
  for(var i=0; i<tdSix.length; i++){
    tdSix[i].innerHTML = arr[i].six
  };

