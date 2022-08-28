var json = [{
    "empname" : "Person1", 
    "empid" : 8098,
    "district" : "Dindigul",
    "pincode" : 624003,
    "state" : "Tamilnadu" 
},
{
  "empname" : "Person2",
  "empid" : 8099, 
  "district" : "Chennai",
  "pincode" : 620001,
  "state" : "Tamilnadu" 
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.empname);
    console.log(obj.empid)
    console.log(obj.district);
    console.log(obj.pincode);
    console.log(obj.state);

}
//for In
for (var key in json) {
  if (json.hasOwnProperty(key)) {
    console.log(json[key].empname);
    console.log(json[key].empid);
   
  }
  }
//for Of
for (var x of json)
{
  console.log(x.empname);
  }
 
//for Each
json.forEach(function(obj) { console.log(obj.empname);
console.log(obj.district) });