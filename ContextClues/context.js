$(document).ready(function() {

var friends = ['Sterling', 'Krieger', 'Lana', 'Cyril', 'Neil deGrasse Tyson'];

var locations = [
    'the living room',
    'the master bedroom',
    'the guest suite',
    'the foyer',
    'the courtyard',
    'the hedge labyrinth',
    'the bath house',
    'the tree fort',
    'the dining room',
    'the helicopter pad',
];

var weapons = [
    'the boomerang', 'the spear', 'the flamethrower', 'the golden gun', 'the bayonet',
    'the tomahawk', 'the quarterstaff', 'the ICBM', 'the longbow', 'the depth charge',
    'the battering ram', 'the trebuchet', 'the musket', 'the table saw', 'the stress ball',
    'large cut of ham', 'smallpox', 'the syringe full of air', 'the vat of hydrocholoric acid', 'kindness',
];


    for (var i = 0; i < 100; i++) {
        
        $('#main-container').append(`<h3 id='accusation${i + 1}' class='accusation-header'>Accusation ${i + 1}</h3>`);
        
        var accusation = {
            element: $(`#accusation${i + 1}`),
            person: friends[((i) % 5)],  // +1 to make the modular math work right, -1 to refer to the correct array index
            place: locations[((i) % 10)],
            thing: weapons[((i) % 20)],
            createAlert: function() {
                console.log('Inside createAlert Function');
                this.element.on('click', function(){
                    console.log('Inside Click Function');
                    alert(`Personally, I think ${this.person} did it, with ${this.thing}, in ${this.place}`);
                });
            },
        };
        accusation.createAlert()
    };


        // var person = friends[((i + 1) % 5) - 1];  // +1 to make the modular math work right, -1 to refer to the correct array index
        // var place = locations[((i + 1) % 10) - 1];
        // var thing = weapons[((i + 1) % 20) - 1];


});