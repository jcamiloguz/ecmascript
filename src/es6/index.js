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


const a ='b'//No change
a = 'a' //error
var name1='juan'
var age1=20
var obj={
  name:name1,
  age:age1
}
var obj={name1,age1}