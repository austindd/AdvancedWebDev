$(document).ready(function () {

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
        'the (not-so-)secret lair',
    ];

    var weapons = [
        'the boomerang', 'the spear', 'the flamethrower', 'the golden gun', 'the bayonet',
        'a DDOS attack', 'the quarterstaff', 'the ICBM', 'the longbow', 'the depth charge',
        'the battering ram', 'the trebuchet', 'the musket', 'the table saw', 'the stress ball',
        'large cut of ham', 'smallpox', 'the syringe full of air', 'the vat of hydrocholoric acid', 'kindness',
    ];


    for (var i = 0; i < 100; i++) {
        $('#main-container').append(`<h3 id='accusation${i + 1}' class='accusation-header'>Accusation ${i + 1}</h3>`);
        accusationMaker(i)
    };
    function accusationMaker(i) {
        var accusation = {
            element: $(`#accusation${i + 1}`),
            person: friends[i % 5],
            place: locations[i % 10],
            thing: weapons[i % 20],
            createAlert: function () {
                this.element.on('click', function () {
                    alert(`I think ${accusation.person} killed her with ${accusation.thing} in ${accusation.place}.`);
                });
            },
        };
        accusation.createAlert()
    };
});