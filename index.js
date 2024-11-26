class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	sayHello() {
		return `Привет, меня зовут ${this.name} и мне ${this.age} лет`
	}
}

const person1 = new Person('Толя', 22)
const person2 = new Person('Арина', 21)
console.log(person1)
console.log(person1.sayHello())
console.log(person2)
console.log(person2.sayHello())

//-----------------------------------------------------------------------------------------
