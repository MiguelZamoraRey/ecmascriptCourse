//Arreglos
let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat(2));

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));

let hello = '      hello World       ';
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

//try/catch
try{
}catch{
    console.log(error);
    //ahora error ya viene por defecto definido
}

//Generar objetos a través de entries
let entries = [["name", "oscar"],["age",32]];
console.log(Object.fromEntries(entries));

//Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

