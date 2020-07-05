let array = [1,2,3,[1,2,3,[1,2,3]]]
console.log(array.flat(2))
let array = [1,2,3,4,5]
console.log(array.flatMap(value=>[value,value*2]))

let hello ='     hello     '
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())
try{

}catch{
    error
}

let entries =[['name' , 'Juan'],['age',20]]
console.log(Object.fromEntries(entries))

let mySybl =`my Symbol`
let symbol = Symbol(mySybl)
console.log(symbol.description)