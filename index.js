function scuberGreetingForFeet(distance){
  // Write your code here!
  let price;

  if (distance <= 400) {
    price = 'This one is on me!';
  }

  else if (distance >= 400 && distance <= 2000) {
    price = 'That will be twenty bucks.';
  }
  
  else if (distance >= 2001 && distance <= 2500) {
    price = 'I will gladly take your thirty bucks.';
  } 
  
  else if (distance > 2500) {
    price = 'No can do.';
  }

  else {
    price = "N/A";
  }

  distance = 199;
  return price;

}


function ternaryCheckCity(city){
  // Write your code here!
  
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'

}


function switchOnCharmFromTip(tip){
  // Write your code here!

switch(tip) {
  case 'generous':
    return 'Thank you so much.'
  case 'not as generous':
    return 'Thank you.'
  default:
    return 'Bye.'
}

}