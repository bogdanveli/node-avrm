function c2F(cells){

    let rezultat = (cells * 9/5) + 32
    console.log(rezultat);
 };
 function f2c(cells){
    let rezultat = (cells - 32) * 5/9;
    console.log(rezultat);
 };
 function temp(temperatura, f){
    console.log(f(temperatura));
 };
 //temp(28, c2F);
 //temp(82.4, f2c);
 
 const promiseExample = (num) =>{
     return new Promise( (success, fail) => {
         //promise logic
         if(num == 0){
             throw "Zero (0) cannont be neither even or odd;";
         }
         if(num%2==0){
             success();
         }
         else {
             fail();
         }
     });
 };
 /*
 promiseExample(0)
 .then(
     () => {
         console.log("Sucess! Number is even")
     }
  )
 .catch(err => {
     console.log("Ann error has occured!!", err)
 });
*/
 module.exports = {
    c2F,
    f2c,
    temp,
    promiseExample
 };