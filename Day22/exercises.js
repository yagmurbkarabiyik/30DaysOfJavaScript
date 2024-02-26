function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }
  
  var table = document.getElementById("numberTable");
  var counter = 1;
  
  for (var i = 0; i < 100; i += 6) {
    var row = table.insertRow();
    for (var j = 0; j < 6; j++) {
      var cell = row.insertCell();
      cell.textContent = counter;
  
      if (counter % 2 === 0) {
        cell.classList.add("even");
      } else {
        cell.classList.add("odd");
      }
      if (isPrime(counter)) {
        cell.classList.add("prime");
      }
      
      counter++;
    }
  }
  