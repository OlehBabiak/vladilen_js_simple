const person = Object.create({
    calculateAge(){ // метод додається в прототип
        console.log('Age:', new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Oleh',
        enumerable: true, // property descriptor який відповідає за видимість ключів при ітеріції в циклі
        writable: true, // property descriptor який відповідає за можливість зміни значень ключів
        configurable: true // property descriptor який відповідає за можливість видалення ключів
    },
    birthYear: {
        value: 1981,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age:', value)
        }
    }
})

// person.name = 'Maxim'

for (key in person){
    console.log(
        is(person.hasOwnProperty(key)){  // умова відображає власні ключіобєкта, не враховує прототипів
        console.log('Key', key, person[key])
    }
    )
}

