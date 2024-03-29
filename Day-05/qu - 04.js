class Uberprice{
    constructor(distance, type){
        this.distance = distance;
        this.type = type;
    }
    calculatePrice(){
        let baseprice, costPerKM;
        
        if(this.type === "UberX"){
            baseprice = 2;
            costPerKM = 5;
        }
        else if(this.type === "UberXl"){
            baseprice = 5;
            costPerKM = 10;
        }
        else{
            return `Invalid`;
        }
        
        let totalfare = (baseprice + costPerKM * this.distance);
        return `Your Total Price for your Ride is ${totalfare}.`;
    }
}

var pass1 = new Uberprice(10,"UberX");

var pass2 = new Uberprice(20,"UberXl");

console.log(pass1.calculatePrice());
console.log(pass2.calculatePrice());