import foo from './other'
import styles from './test.scss'

// hello world
let title = document.createElement('h1')
title.innerHTML = 'Hello World!'
document.body.appendChild(title)

// test css modules
console.log(styles['class-name'])

// test class
class Foo {
  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log(`Hi, ${this.name}`)
  }
}

let bar = new Foo('Kevin')

bar.sayName()

// test default, spread

foo()

const arr1 = [1, 2, 3, 4]
const arr2 = [1, ...arr1, 'stop']

console.log(arr2)
