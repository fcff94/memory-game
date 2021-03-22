var boxes = document.querySelectorAll(".container .box");

const colors = [
    '#0099e5', '#34bf49', '#511378', '#d20962',
    '#ff4c4c', '#e4e932', '#00112c', '#52565e'
];

const noOfColors = colors.length;
const noOfBoxes = boxes.length;


var clickedElements = [];

function assignIndexToBox(box, i) {
    // box.innerText = i;
    box.id = i;
}

function assignColorToBox(box, i) {
    if (i >= noOfColors) {
        box.style.backgroundColor = colors[i - noOfColors];
    } else {
        box.style.backgroundColor = colors[i];
    }
}

function randomizeColor(box) {
    box.style.order = parseInt(Math.random() * noOfBoxes);
}

function freezeBoxes() {
    var box1ID = clickedElements[0].id;
    var box2ID = clickedElements[1].id;

    var box1 = document.getElementById(box1ID);
    var box2 = document.getElementById(box2ID);

    box1.classList.add("freeze");
    box2.classList.add("freeze");
}

function hideThem() {
    setTimeout(function () {

        var box1ID = clickedElements[0].id;
        var box2ID = clickedElements[1].id;

        var box1 = document.getElementById(box1ID);
        var box2 = document.getElementById(box2ID);

        box1.classList.add("hideColor");
        box2.classList.add("hideColor");

        clickedElements = [];
    }, 700);
}

function gameOver() {
    if (document.querySelectorAll(".freeze").length == noOfBoxes) {
        setTimeout(function () {
            alert("You won the game! Congratulations !!!")
            window.location.reload();
        }, 100);

    }
}

function handleBoxClick() {
    if (this.classList.contains("freeze") == false) {
        this.classList.remove("hideColor");

        var obj = { id: this.id, color: this.style.backgroundColor }
        clickedElements.push(obj);

        // console.log(this.id, this.style.backgroundColor);
        // console.log(clickedElements);

        if (clickedElements.length == 2) {
            if (clickedElements[0].color == clickedElements[1].color) {
                console.log("Same color!");
                /* freeze color */
                freezeBoxes();
                clickedElements = [];
            } else {
                console.log("Not the same color!");
                /* add hideColor class */
                hideThem();
            }
        }
        gameOver();
    }

}

function gameStart() {
    for (var i = 0; i < noOfBoxes; i++) {
        // console.log(i, noOfColors, i-noOfColors);
        assignIndexToBox(boxes[i], i)

        assignColorToBox(boxes[i], i);

        randomizeColor(boxes[i]);

        boxes[i].addEventListener('click', handleBoxClick);
    }
}

gameStart();


        // var obj = {
//     x: 1,
//     y: 'carol',
//     z: true,
//     a: null,
//     fn: function(){
//         console.log("hello");
//     },
//     innerObj: {
//         q: 1
//     },
//     arr: [1,2,3,4]
// // 