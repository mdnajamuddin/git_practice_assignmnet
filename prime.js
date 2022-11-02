let a=16;
function prime(a){
    sum=0;
    for(let i=1;i<=a;i++){
        if(a%i==0){
            sum++;
        }
    }
  if(sum==2){
    return true;
  }else {
    return false;
  }
    
}
let z=prime(a);

if(true == z){
    console.log("this is prime number "+a)
}else(
    console.log("this is not prime number "+a)
)