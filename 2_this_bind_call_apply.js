const person = {
	name: 'Oleh',
	age: 39,
	budget: 3550,
	greeting(){console.log('Hello, my name is',  this.name)}
}
const  timeout = setTimeout(() => {person.greeting()}, 5000)


const logger = {
	keys(){
		console.log('object keys: ', Object.keys(this))
	},
	keysAndValues(){
		Object.keys(this).forEach(key => {
			console.log(`${key}: ${this[key]}`)
		})
	},
	withParams(top = false, between = false, bottom = false){
		if(top){
			console.log('===========start==========')
		}
		Object.keys(this).forEach((key, index, array) => {
			console.log(`${key}: ${this[key]}`)
			if(between  && index !== array.length-1){
				console.log('--------------------')
			}
		})
		if(top){
			console.log('===========end==========')
		}
	}
}
logger.withParams.call(person, true, true, true)
// logger.withParams.apply(person, [true, false, true])
