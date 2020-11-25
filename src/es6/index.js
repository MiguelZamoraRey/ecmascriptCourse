//Default params
function oldDefaultParams(name, age, country){
    var name = name || 'default';
    var age = age || 00;
    var country = country || 'spain';
    console.log(name,age,country);
}
function newDefaultParams(name='default',age=00,country='SPAIN'){
    console.log(name,age,country);
}

newDefaultParams();
newDefaultParams('Miguel',30,'SPAIN');

//Template iterals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let templateLiteralPhrase = `${hello} ${world}`;

//Multiline --> Multilínea
let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the /n";
"standard dummy text ever since the 1500s, when an unknown printer took ";
let multilinealorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
standard dummy text ever since the 1500s, when an unknown printer took `;

//Elements desestructuration --> Desestructuración de elementos
let person = {
    'name':'Miguel',
    'edad':30,
    'country': 'SP'
}
console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age, country);

//Spread Operator --> operador de propagación
let team1 = ['Miguel', 'Manel', 'David'];
let team2 = ['Olga', 'Oma', 'Angel'];

let education = ['Oscar', ...team1, ...team2];


//Better object propertis 
let name = 'Miguel';
let age = 30;
objOLD = {name: name, age:age};
objECMA = {name, age};

//ArrowFunction
const names = [
    {
        name: 'Miguel',
        age: 30
    },
    {
        name: 'Olga',
        age: 27
    }
];
let listOfNamesOLD = names.map(function(item){
    console.log(item.name);
});
let listOfNamesECMA = names.map(item => console.log(item.name));
const listOfNameECMA2 = (name,age) => {
    ...
}
const square = num => num * num;

//Promise
const helloPromise = () => {
    return new Promise((resolve,reject)=>{
        if(true){//turn to false to test
            resolve('Promesa resuelta')
        }else{
            reject('Promesa retrasada')
        }
    })
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error))


//CLASS --> Clases
class calculator{
    constructor (){
        this.valerA = 0;
        this.valorB = 0;
    }

    sum(operadorA, operadorB){
        this.valueA = operadorA;
        this.valueB = operadorB;
        return this.valerA + this.valorB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,6));

//MODULES --> modulo
import {hello} from './modulo';
hello();

//Generators --> Generadores
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);