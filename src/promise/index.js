const something = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Correcto");
        }else{
            reject("Ocurrió un error");
        }
    });
};


something()
    .then(response => console.log(response))
    .catch(err => console.log(err))



const something2= () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(()=>{
                resolve('True');
            }, 200)
        }else{
            const error = new Error('Algo pasó');
            reject(error);
        }
    })
}


something2()
    .then(response => console.log(response))
    .catch(err => console.log(err))



Promise.all([something(), something2()])
    .then(response=> {
        console.log('Todo', response)})
    .catch(err=>{
        console.log(err);
    })