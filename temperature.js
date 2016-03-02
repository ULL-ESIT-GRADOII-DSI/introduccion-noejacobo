"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFcC])(e|el|els|elsi|elsiu|elsiu|elsius|a|ar|are|aren|arenh|arenhe|arenhei|arenheit)?\s*$/;

  var m = temp.match(regexp);

  if (m) {

    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
    return false;
    //console.log(result.toFixed(1));
    

  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
  //return false;
}
