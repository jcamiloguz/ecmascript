function newFunction(name, age, country) {
  var name = name || `Juan`
  var age = age || 20
  var country = country || 'COL'
  console.log(name, age, country)
}

//es6
function newFunction2(name = 'Juan', age = 20, country = 'COL') {
  console.log(name, age, country)
}
newFunction2()
newFunction2('Pedro', 22, 'USA')

let hello = 'Hello'
let world = 'World'

let EpicPhrase = hello + ' ' + world
let EpicPhrase2 = `${hello} ${world}`
console.log(EpicPhrase)
console.log(EpicPhrase2)

let lorem = 'Esto es un lorem \n' + ' aqui sigue el lorem'
let lorem2 = `Esto es un lorem 
 aqui sigue el lorem`
console.log(lorem)

let person = {
  name: 'Juan',
  age: 20,
  country: 'COL',
}

console.log(person.name, person.age)

let { name, age, country } = person
console.log(name, age, country)

let team1 = [`Oscar`, `Juan`, `Ricardo`]
let team2 = [`Valeria`, `Yesica`, `Camila`]

let education = [`Juan`, ...team1, ...team2]
console.log(education)

{
  var globalVar = 'Global Var'
}
{
  let globalLet = 'Global Let'
  console.log(globalLet)
}
console.log(globalVar)

const a = 'b' //No change
a = 'a' //error
var name1 = 'juan'
var age1 = 20
var obj = {
  name: name1,
  age: age1,
}
var obj = { name1, age1 }

const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Juan', age: 20 },
]
let listOfNames = names.map(function (item) {
  console.log(item.name)
})
let listOfNames2 = names.map((item) => console.log(item.name))
let listOfNames3 = (name, age, country) => {
  console.log()
}
let listOfname4 = (name) => {}
const square = (num) => num * num

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!')
    } else {
      reject('Ups!')
    }
  })
}

helloPromise()
  .then((response) => console.log(response))
  .then((response) => console.log('q tal?'))
  .catch((error) => console.log(error))

class calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }
  sum(valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}
const calc= new calculator()
console.log(calc.sum(2,2))

import hello  from `./module`
hello()

const hello=require('./module')
console.log(hello())

function* helloWorld(){
  if(true){
    yield `hello, `
  }
  if(true){
    yield `World`
  }
}
const generator=helloWorld();
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)