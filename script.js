function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
    let result = '';
    
    // Loop through each value and subtract it from num
    for (let i = 0; i < romanSymbols.length; i++) {
        while (num >= romanSymbols[i].value) {
            result += romanSymbols[i].symbol;  // Add the Roman numeral symbol
            num -= romanSymbols[i].value;     // Subtract the value from num
        }
    }
    
    return result;
  //your code here

}
console.log(toRoman(number)); 
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
