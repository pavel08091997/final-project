const num = ""

if(typeof num === 'number'){
  if(num>=1 && num <=100){
    console.log(`${num}`)
  } else{
    console.log("не находиться в диапазоне от 1 до 100")
  }
  }else{
    console.log("не число")
  }