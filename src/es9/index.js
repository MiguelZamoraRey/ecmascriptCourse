//Operador de reposo
const obj = {
    name: 'Miguel',
    age: 30,
    country: 'SP'
};
let {name, ...all} = obj;
console.log(name,all);

//Union por propagacion
const objA = {
    name: 'Miguel',
    age: 30,
};
const objB = {
    ...objA,
    country: 'SP'
};
console.log(objB);

//Promise.finally
const helloWorld = ()=>{
    return new Promise((resolve,reject)=> {
        if(true){
            setTimeout(()=>{
                resolve('hello Worold')
            },3000);
        }else{
            reject(new Error('Test Error'));
        }
    })
};
helloWorld()
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(()=>console.log('finalizo la peticion'));

//regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year,month,day);
