$(document).ready(function() {

    // =================== DOCUMENT-WIDE VARIABLES ===================

    let die_object_map = [];
    let die_count = 0;

    // ========================== CLASSES ==========================

    class Die {
        constructor(name, value = Math.floor(Math.random() * 6) + 1) {

            let thisDie = this;  // saving 'this' context to a local variable in case 'this' changes during function execution
            this.name = name;
            this.id = die_count;
            this.value = value;
            this.deletion_flag = false;

            $(`#die-container`).append(`<div id='${this.id}' class='btn die'>${this.value}</div>`);
            this.element = $(`#${this.id}`);

            this.element.click(() => {
                if (this.deletion_flag === false) {
                    $(this.element).addClass('deletion-flag');
                    this.deletion_flag = true;
                } else if (this.deletion_flag === true) {
                    $(this.element).removeClass('deletion-flag');
                    this.deletion_flag = false;
                };
            });
    

            this.pushSelfToArray();
        };
        pushSelfToArray() {
        die_object_map.push(this);
    }
        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            console.log(this.value);
        };
    };
    console.log(Die);

    // ====================== EVENT LISTENERS/HANDLERS ======================

    $('#btn-generate').click(function() {
        let newDie = new Die(`die${die_count}`);
        // die_object_map[die_object_map.length] = newDie;
        console.log(die_object_map);
        die_count++;
        return;
    });
    $('#btn-roll').click(function() {
        die_object_map.forEach(function(item) {
            item.roll();
            item.element.text(item.value);
        });
        return;
    });
    $('#btn-remove').click(function() {

        let removed_dice = die_object_map.filter( (val) => {return (val.deletion_flag === true)});
        
        //  While (there is still any dice flagged for deletion in the array) {
        //      - Find the index of the first flagged instance in the array.
        //      - Remove that one flagged instance from array.
        //  }
        while (die_object_map.some((val) => {return (val.deletion_flag === true)})) {
            let myIndex = die_object_map.findIndex((val) => {return (val.deletion_flag === true)});
            die_object_map.splice(myIndex, 1);
            console.log('Culling die_object_map', die_object_map);
        };






        console.log('removed_dice: ', removed_dice);

        $('.deletion-flag').remove();

        // for(i = die_object_map; i > 0; i--) {
        //     if(i.deletion_flag === true) {
        //         die_object_map.splice(i, 1);
                
        //     };
        // };
        console.log(die_object_map);

    });
    // ======================== HELPER FUNCTIONS ========================

});