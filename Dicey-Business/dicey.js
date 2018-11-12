$(document).ready(function () {

    // =================== DOCUMENT-WIDE VARIABLES ===================

    let die_object_map = [];
    let die_index = 0;

    // ========================== CLASSES ==========================

    class Die {
        constructor(name, value = Math.floor(Math.random() * 6) + 1) {

            let thisDie = this;  // saving 'this' context to a local variable in case 'this' changes during function execution
            this.name = name;
            this.id = die_index;
            this.value = value;
            this.deletion_flag = false;

            // Add new die inside wrapper <div>, styling with Bootstrap 4.
            $(`#die-container`).append(`<div id='die-wrapper-${this.id}' class ='col-1 die-wrapper flex-item'></div>`);
            this.elementWrapper = $(`#die-wrapper-${this.id}`);
            this.elementWrapper.append(`<div id='${this.id}' class='btn die flex-item' data-toggle='tooltip' title='Click to select die' ></div>`);
            this.element = $(`#${this.id}`);
            this.element.css({'background-image': `url('Blue-Dice/dice_blue_${this.value}.png')`}); // Normal die image

            $('#die-counter').empty();
            $('#die-counter').append(`<h6 class='text-center'>Count: ${die_object_map.length + 1}</h6>`);

            this.element.click(() => {
                if (this.deletion_flag === false) {
                    $(this.element).addClass('deletion-flag');
                    this.deletion_flag = true;
                    this.element.css({
                        'background-image': `url('Yellow-Dice/dice_yellow_${this.value}.png')`, // New color image
                    });
                } else if (this.deletion_flag === true) {
                    $(this.element).removeClass('deletion-flag');
                    this.deletion_flag = false;
                    this.element.css({
                        'background-image': `url('Blue-Dice/dice_blue_${this.value}.png')`, // Back to normal image
                    });
                };
            });

            this.pushSelfToArray();
        };
        pushSelfToArray() {
            die_object_map.push(this);
        }
        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
            if (this.deletion_flag === false) {
                this.element.css({
                    'background-image': `url('Blue-Dice/dice_blue_${this.value}.png')`,
                });    
            } else if (this.deletion_flag === true)
            this.element.css({
                'background-image': `url('Yellow-Dice/dice_yellow_${this.value}.png')`,
            });

        };
    };
    console.log(Die);

    // ====================== EVENT HANDLERS / FUNCTIONS ======================

    $('#btn-generate').click(function () {
        let newDie = new Die(`die${die_index}`);
        // die_object_map[die_object_map.length] = newDie;
        console.log(die_object_map);
        die_index++;
        return;
    });
    $('#btn-roll').click(function () {
        die_object_map.forEach(function (item) {
            item.roll();
        });
        return;
    });
    $('#btn-remove').click(function () {

        let removed_dice = die_object_map.filter((val) => { return (val.deletion_flag === true) });

        //  While (there is still any dice flagged for deletion in the array) {
        //      - Find the index of the first flagged instance in the array.
        //      - Remove that one flagged instance from array.
        //  }
        while (die_object_map.some((val) => { return (val.deletion_flag === true) })) {
            let myIndex = die_object_map.findIndex((val) => { return (val.deletion_flag === true) });
            die_object_map.splice(myIndex, 1);
        };
        $('.deletion-flag').parent().remove(); // Remove selected dice from screen
        console.log(die_object_map);

        // Reset Die Counter <div>
        $('#die-counter').empty();
        $('#die-counter').append(`<h6 class='text-center'>Count: ${die_object_map.length}</h6>`);

    });
    $('#btn-getsum').click(function () {

        $(`#msg-banner-wrapper`).empty() // Clear message banner
        let die_value_array = die_object_map.map((item, i) => item.value); // return 'value' property of each object in object map.
        let sumOfAllFears = die_value_array.reduce((total, num) => { return total + num }); // add all values in new array.

        // Add message banner
        $('#msg-banner-wrapper').append(`<h3 id="msg-banner" class='text-center' data-toggle='tooltip' title='Click to clear'>SUM: ${sumOfAllFears}</h3>`);
        $(`#msg-banner-wrapper`).click((e) => {
            $('#msg-banner').remove();
        });
    });

    // ======================== HELPER FUNCTIONS ========================

});