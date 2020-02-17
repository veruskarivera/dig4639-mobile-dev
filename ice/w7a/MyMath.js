//Produces the sum of the 2 parameters
/** 
*The two parameters must be numbers, otherwise
* @param a the first number
* @param b the second number
*/
export function Sum (a, b) {
  if(typeof a == 'number' && typeof b =='number')
    return (a+b);
  else
    return undefined;
}
export function AddList(list){
  var result =0;
  for(var i=0; i < list.length; i++){
    if(list[i]==undefined)
      return undefined;
    result =result +list [i];
  }
return result;
}




let op1= "Ten";
let op2= 2;
let result =Sum(op1,op2);
if(result==op1+op2){
 console.log("It worked!");
}else{
  console.log("expected"+op1+op2+", but got"+ result);
}