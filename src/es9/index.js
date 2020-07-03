const obj = {
  name: `Juan`,
  age: 20,
  country: `Col`,
}

let { name, ...all } = obj
console.log(all)
const obj = {
    name: `Juan`,
    age: 20,
}
const obj1 = {
    ...obj,
    country : `COL`
}

const helloWorld = () => {
    return new Promise((resolve, reject)=>{
    (true)
        ? setTimeout(()=>resolve(`Hello World`),3000)
        : reject(new Error(`Test error`))
    })
}

helloWorld()
    .then(response =>console.log(response))
    .catch(error=> console.log(error))
    .finally(() =>console.log(`finalizo`))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(` Hoy es ${day} de ${month} del ano ${year}` )

