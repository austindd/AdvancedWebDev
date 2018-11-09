$(document).ready(function() {


    // =================== DOCUMENT-WIDE VARIABLES ===================

    let die_count = 0;
    let die_object_map = [];

    // ========================== CLASSES ==========================
    class Die {
        constructor(name, value = Math.floor(Math.random() * 6) + 1) {
            this.name = name;
            this.value = value;
            
            $(`#die-container`).append(`<div id='die${die_count}' class='die'>${this.value}</div>`);
            this.element = $(`#die${die_count}`);
        }
        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            console.log(this.value);
        }
    }

    console.log(Die);


    // ====================== EVENT LISTENERS/HANDLERS ======================
    $('#btn-generate').click(function() {
        die_count++;
        let newDie = new Die();
        
        die_object_map.push(this.element);
        

        return;
    });
    $('#btn-roll').click(function() {

        return;
    });
    $('#btn-remove').click(function() {

        return;
    });

    // ======================== HELPER FUNCTIONS ========================

});