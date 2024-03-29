class person{
	constructor(FN,LN,age,phone){
		this.FirstName = FN;
		this.LastName = LN;
		this.Age = age;
		this.phone = phone;
	}
	greet(){
	return `Hello ${this.FirstName}`;
	}
	returnname(){
	    return `your full Name is #{this.FirstName} #{this.LastName}`;
	}
	returnphone(){
	    return `Your Phone No is #{this.phone}`;
	}
	returnfull(){
	    return `your name is ${this.FirstName} ${this.LastName}, your age is ${this.Age} and your Phone No is ${this.phone}`;
	}
}
	
var obj = new person("Sathish","Kumar",19,"9080664480");

console.log(obj.greet());
console.log(obj.returnfull());

