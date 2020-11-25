const data = {
    frontend: 'Miguel',
    backend: 'Olga',
    design: 'Oma'
}
//Object entries
const entries = Object.entries(data);
console.log(entries);
    //con .length sabemos cuantos elementos tiene en vez de tener que recorrerlo
console.log(entries.length);

//Object values
const values = Object.values(data);
console.log(values)

//Padding
const string = 'hello';
console.log(string.padStart(7,'¡¡'));
console.log(string.padEnd(7,'!!'));

//Async Await
const helloworld = () => {
    return new Promise((resolve,reject)=>{
        if (true){
            setTimeout(()=>resolve('HelloWorld'),3000);
        } else{
            reject(new Error('Test Error'));
        }
    })
};

//PORPUESTA 1
//la llamamos como asincrona
const helloAsync = async () => {
    //con await detallamos que tiene que esperar
    const hello = await helloworld();
    console.log(hello);
}
helloAsync();

//PORPUESTA 2
const anotherFunction = async () => {
    try {
        const hello = await helloworld();
        console.log(hello);
    }catch (error){
        console.log(error)
    }
}
anotherFunction();