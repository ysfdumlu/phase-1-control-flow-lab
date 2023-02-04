function scuberGreetingForFeet(x){
  // Write your code here!
   let price
 if(x<=400) price ="This one is on me!"
 else if (x>400 && x<=2000) price = "That will be twenty bucks."
 else if (x>2000 && x<=2500) price = "I will gladly take your thirty bucks."
 else if (x>2500) price = "No can do."
 return price
}
console.log(scuberGreetingForFeet(500))

function ternaryCheckCity(city){
  // Write your code here!
    if(city==="NYC") return "Ok, sounds good."
  else return "No go."
}
console.log(ternaryCheckCity("NYC"))


function switchOnCharmFromTip(tip){
  if(tip==="generous") return "Thank you so much."
  else if(tip==="not as generous") return "Thank you."
  else return "Bye."
  // Write your code here!
}
console.log(switchOnCharmFromTip("not as genorous"))