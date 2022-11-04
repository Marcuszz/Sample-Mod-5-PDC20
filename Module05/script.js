let car = {
    Brand : "Toyota",
    Variant : "Wigo",
    Transmission : "Automatic",
    Lights : { //nested
        Front :"LED",
        Rear :"LED/Bulb",
        Signal :"Bulb"
    },

    displayBrand(){ //this method
        alert(this.Brand);
        //document.writeline(this.Transmission);
    }
}
//classes
class myCar {
    constructor (brand, variant, transmission){
        this.brand =  brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}

function vehicle() //ABSTRACTION
{
 this.vehicleType="vehicleType";
}
vehicle.prototype.display=function()
{
 return "The Brand is: "+this.vehicleType;
}

function MyCar(vehicleType)
{
 this.vehicleType = vehicleType;
}

MyCar.prototype=Object.create(vehicle.prototype);
var mycar = new MyCar("Toyota");