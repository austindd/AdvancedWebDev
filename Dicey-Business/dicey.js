$(document).ready(function() {


    // =================== DOCUMENT-WIDE VARIABLES ===================

    let die_count = 0;
    let die_object_map = [];

    // ========================== CLASSES ==========================
    class Die {
        constructor(name, value = Math.floor(Math.random() * 6) + 1) {

            let self = this;  // saving 'this' context to a local variable in case 'this' changes during function execution

            this.name = name;
            this.value = value;
            this.deletion_flag = false;

            $(`#die-container`).append(`<div id='${this.name}' class='btn die'>${this.value}</div>`);
            this.element = $(`#die${die_count}`);

            this.element.click(function() {
                if (self.deletion_flag == false) {
                    $(self.element).addClass('ready-to-delete');
                    self.deletion_flag = true;
                } else if (self.deletion_flag == true) {
                    $(self.element).removeClass('ready-to-delete');
                    self.deletion_flag = false;
                };
            });
        };
        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            console.log(this.value);
        };
    };

    console.log(Die);


    // ====================== EVENT LISTENERS/HANDLERS ======================
    $('#btn-generate').click(function() {
        let newDie = new Die(`die${die_count}`);
        die_object_map[die_count] = newDie;
        console.log(die_object_map);
        die_count++;
        return;
    });
    $('#btn-roll').click(function() {
        die_object_map.forEach(function(i) {
            i.roll();
            i.element.text(i.value);
        });
        return;
    });
    $('#btn-remove').click(function() {
        
        return;
    });

    // ======================== HELPER FUNCTIONS ========================

});