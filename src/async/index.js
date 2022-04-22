const doSomethingAsynchronously = () =>{
    return new Promise((resolve, reject) =>{
        (true) ? setTimeout(() => resolve('Do something'), 3000) : reject(new Error('Test Error'));
    })
}


const funcionAsync = async ()=>{
    const something = await doSomethingAsynchronously();
    console.log(something);
}


console.log('Before');
funcionAsync();
console.log('After');


const anotherFunction = async ()=>{
    try{
        const something = await doSomethingAsynchronously();
        console.log(something);
    }catch(err){
        console.log(err);
    }
}

console.log('Before');
anotherFunction();
console.log('After');