const watches=["patek philippe", "audmare piguet", "jacob n co"];

const uppercase=watches.map((upps)=>upps.toUpperCase())

console.log(uppercase);

let num=[20,30,40];

const result=num.filter((nums)=>nums>20);

console.log(result)

let num2=[30,40,10];

const result2=num2.map((add)=>add+5);

console.log(result2);


const cllbck=(a)=>{

    setTimeout(() => {
         console.log("cll bck working")
         a();
    }, 2000);
}


const cllbck2=(a)=>{
    setTimeout(()=>{
        console.log("2 is working")
    },3000)
}

cllbck();
