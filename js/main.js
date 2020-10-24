var salon = {
    name: "The Fashion Pet",
    address: {
        street: "Ave University",
        number: "2543",

    },
    hours: {
        open: "8:00 am",
        close: "8:00 pm"
    },
    pets: []
}



//document.write() to display the assignment

//console.table(salon.pets[0].service);

/*Constructor*/
class Pet {
    constructor(name, age, gender, type, breed, immunizations, sterile, service, price, ownersName, contactPhone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.type = type;
        this.breed = breed;
        this.immunizations = immunizations;
        this.sterile = sterile;
        this.service = service;
        this.price = price;
        this.ownersName = ownersName;
        this.contactPhone = contactPhone;

    }
}

var scooby = new Pet("Scooby", 15, "Male", "Dog", "GreatDane", "current", "yes", "Full Service", 19, "Shaggy", "210-333-1223");
var patron = new Pet("Patron", 10, "Male", "Dog", "Chihuahua", "current", "yes", "Nail clip", 10, "Raven", "210-555-9999");
var mineaux = new Pet("Mineaux", 12, "Female", "Cat", "Calico", "current", "yes", "Bath", 12, "Karen", "210-444-6667");
/*
console.log(scooby);
console.log(patron);
console.log(mineaux);
*/





/*Register Function*/

const txtName = document.getElementById('petName');
const txtAge = document.getElementById('petAge');
const txtGender = document.getElementById('petGender');
const txtType = document.getElementById('petType');
const txtBreed = document.getElementById('petBreed');
const txtImmunizations = document.getElementById('petImmunizations');
const txtSterile = document.getElementById('petSterile');
const txtService = document.getElementById('petService');
const txtPrice = document.getElementById('servicePrice');
const txtOname = document.getElementById('ownersName');
const txtContact = document.getElementById('contactPhone');

function register() {
    var thePet = new Pet(txtName.value, txtAge.value, txtGender.value, txtType.value, txtBreed.value, txtImmunizations.value, txtSterile.value, txtService.value, txtPrice.value, txtOname.value, txtContact.value);

    salon.pets.push(thePet);
    display(thePet);
    clear();
    registeredPets();
    profitCalculation();
    petTable();


}

function clear() {
    txtName.value = "";
    txtAge.value = "";
    txtGender.value = "";
    txtType.value = "";
    txtBreed.value = "";
    txtImmunizations.value = "";
    txtSterile.value = "";
    txtService.value = "";
    txtPrice.value = "";
    txtOname.value = "";
    txtContact.value = "";

}

function registeredPets() {
    document.getElementById('registeredPets').innerHTML = `Number of pets: ${salon.pets.length}`;

}


function profitCalculation() {
    var total = 0;
    for (var i = 0; i < salon.pets.length; i++) {
        total = total + Number(salon.pets[i].price);
    }

    document.getElementById('profits').innerHTML = `Profits $ ${total}`;
}


function init() {

    //Display this information in the footer
    text = `
    ${salon.name}, ${salon.address.street}, ${salon.address.number} <br>
    It is open from ${salon.hours.open} to ${salon.hours.close}

    `;
    document.getElementById('footer-info').innerHTML = text;

    salon.pets.push(scooby);
    display(scooby);
    salon.pets.push(patron);
    display(patron);
    salon.pets.push(mineaux);
    display(mineaux);
    registeredPets();
    profitCalculation();

};

window.onload = init;