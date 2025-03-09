var x=5;
let y="5";
const c=5;

if(!(x===y) && x==c)// (!(0) && 1 )--> (1 && 1 )--> true
   {
     y=Number(y);          // explicit type conversion 
     ans=y+x+c-"1"-false;  // implicit type conversion  
   }
 // ans --> function scope
 console.log(`Answer is : ${ans} `);// output: Answer is : 14
 