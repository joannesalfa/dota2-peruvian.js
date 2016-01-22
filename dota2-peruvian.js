//Traits of a peruvian
var peruvianFace = {
  1:"Inca hair",
  2:"Bird nose",
  3:"Small eyes",
  4:"Upper cheeks",
  5:"Injun mouth"
};

//Pick random peruvian trait
function peruvianFaceRandom(){
  var randomize = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  return peruvianFace[randomize];
}

//Call number of peruvian trait
function peruvianFaceNum(num){
  if (peruvianFace.hasOwnProperty(num) === true){
   return peruvianFace[num]
  }
  else {
   return "agg tmr gg";
  }
};
