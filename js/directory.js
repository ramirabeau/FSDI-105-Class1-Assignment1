function display(aPet) {

    var text = "";
    var icon = "";
    var dogIcon = '<i class="fas fa-dog"></i>';
    var catIcon = '<i class="fas fa-cat"></i>';
    var birdIcon = '<i class="fas fa-crow"></i>';
    var unknown = '<i class="fas fa-question-circle"></i>';

    if (aPet.type === "Dog") {
        icon = dogIcon;
    } else if (aPet.type === "Cat") {
        icon = catIcon;
    } else if (aPet.type === "Bird") {
        icon = birdIcon;
    } else {
        icon = unknown;
    }


    // Create the HTML text
    text = `
        <div class="pet">
            ${icon}
            <h2> Name: ${aPet.name} </h2>
            <p> Age: ${aPet.age} </p>
            <p> Gender: ${aPet.gender} </p>
            <p> Type: ${aPet.type} </p>
            <p> Breed: ${aPet.breed} </p>
            <p> Immunizations: ${aPet.immunizations} </p>
            <p> Sterile: ${aPet.sterile} </p>
            <p> Service: ${aPet.service} </p>
            <p> Price: ${aPet.price} </p>
            <p> Owners Name: ${aPet.ownersName} </p>
            <p> Contact Phone: ${aPet.contactPhone} </p>

        </div>
        `;
    $('#pets').append(text);
}


function petTable() {
    document.getElementsByTagName('petTable').innerHTML = `List of pets: ${salon.pets.name}`;
    document.getElementsByTagName('petTable').innerHTML = `List of owners: ${salon.pets.ownersName}`;


    $('h3').html('petTable');

    /*    var petInfo = `
        <tr>
            <td> ${salon.pet.name} </td>
            <td> ${salon.pet.ownersName} </td>
        </tr>    
        `;
        $('footer').append(petInfo);
        $('footer').append(petInfo); */

}

/*
function profitCalculation() {
    var total = 0;
    for (var i = 0; i < salon.pets.length; i++) {
        total = total + Number(salon.pets[i].price);
    }

    document.getElementById('profits').innerHTML = `Profits $ ${total}`;
} */