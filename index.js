const { get } = require("lodash")

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
// console.log(person1)
// console.log(person1.sayHello())
// console.log(person2)
// console.log(person2.sayHello())

//-----------------------------------------------------------------------------------------

class Calculator {
	constructor(params) {
		//Конструктор принимает параметры и мы этим параметрам передаем значения num1 и num2
		this.num1 = params.num1
		this.num2 = params.num2
	}

	add() {
        let res = this.num1 + this.num2
		return `Сумма: ${res}`
	}
    
	subtract() {
        let res = this.num1 - this.num2
        return `Разность: ${res}`
	}
    
	multiple() {
        let res = this.num1 * this.num2
        return `Произведение: ${res}`
    }
    
    divide() {
        let res = this.num1 / this.num2
        return `Частное: ${res}`
    }
}

//Создаем первые значения с помощью объекта
const firstValues = {
	num1: 2,
	num2: 5,
}

const res1 = new Calculator(firstValues) //Создаем экземпляр, принимающий объект
// console.log(res1.add())
// console.log(res1.subtract())
// console.log(res1.multiple())
// console.log(res1.divide())

//----------------------------------------------------------------------------------

class Car {
    constructor(params) {
        this.brand = params.brand
        this.model = params.model
        this.year = params.year
    }
    
    getAge() {
        let currentDate = new Date()
        return currentDate.getFullYear() - this.year
    }

    printDetails() {
        return `Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}, Возраст: ${this.getAge()} лет`
    }
}

const car = {
    brand: 'Volkswagen',
	model: 'Touareg',
    year: 2014
}

const newCar = new Car(car)
// console.log(newCar.printDetails());

//-----------------------------------------------------------------------------------------------------------------------------
