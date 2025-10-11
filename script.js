const button = document.getElementById("convert-btn");


button.addEventListener("click", function(){
  const input = document.getElementById("number");
  const value = parseInt(input.value);
  const output = document.getElementById("output");
  if(isNaN(value)){
    output.textContent = "Please enter a valid number"
    return;
  };
  if(value < 1){
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  };
  if(value >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumerals = [
   {value :1000 , numeral : "M" },
   {value :900 , numeral : "CM"},
   {value :500 , numeral : "D"},
   {value :400 , numeral : "CD"},
   {value :100 , numeral : "C"},
   {value :90 , numeral : "XC"},
   {value :50 , numeral : "L"},
   {value :40 , numeral : "XL"},
   {value :10 , numeral : "X"},
   {value :9 , numeral : "IX"},
   {value :5 , numeral : "V"},
   {value :4 , numeral : "IV"},
   {value :1 , numeral : "I"}
];

let result = "";
let num = value;
for(let i = 0; i < romanNumerals.length; i++ ) {
  while(num >= romanNumerals[i].value){
    result += romanNumerals[i].numeral;
    num -= romanNumerals[i].value;
  }
}
output.textContent = result;
output.style.animation = "none";
output.offsetHeight;
output.style.animation = "fadeIn 0.5s ease-in-out";
});
