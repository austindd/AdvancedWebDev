$(document).ready(function() {

    // =================== DOCUMENT-WIDE VARIABLES ===================

    let die_object_map = [];
    let recently_deleted = [];
    let die_count = 0;

    // ========================== CLASSES ==========================

    class Die {
        constructor(name, value = Math.floor(Math.random() * 6) + 1) {

            let thisDie = this;  // saving 'this' context to a local variable in case 'this' changes during function execution

            this.name = name;
            this.value = value;
            this.deletion_flag = false;

            $(`#die-container`).append(`<div id='${this.name}' class='btn die'>${this.value}</div>`);
            this.element = $(`#die${die_object_map.length}`);


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

        newDie.element.click(function() {
            if (newDie.deletion_flag === false) {
                $(newDie.element).addClass('ready-to-delete');
                newDie.deletion_flag = true;
            } else if (newDie.deletion_flag === true) {
                $(newDie.element).removeClass('ready-to-delete');
                newDie.deletion_flag = false;
            };
        });

        return;
    });
    $('#btn-roll').click(function() {
        die_object_map.forEach(function(item) {
            i.roll();
            i.element.text(i.value);
        });
        return;
    });
    $('#btn-remove').click(function() {
        $('.ready-to-delete').remove();
        let item;
        die_object_map.forEach(function(item, i) {
            if(item.deletion_flag === true) {
                die_object_map.splice(i, 1);
                i--;
            };
        });
        die_count--;
    });
    // ======================== HELPER FUNCTIONS ========================

});