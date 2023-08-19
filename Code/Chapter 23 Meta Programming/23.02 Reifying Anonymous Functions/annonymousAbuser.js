sortFunction = function(arr, fn) {
  var len = arr.length;
    
  for (var i = 0; i < len ; i++) {
    for(var j = 0 ; j < len - i - 1; j++) {
      if (fn(arr[j], arr[ j+ 1])) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

scores = [9, 5, 2, 7, 23, 1, 3];  
sorted = sortFunction(scores, (a,b) => {return a > b});