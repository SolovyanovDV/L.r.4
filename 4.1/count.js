var buttons = document.getElementsByClassName('myButton');
var addClickListener = function (button) {
    var clicki = 0;
    button.addEventListener('click', function() {
        clicki++;
        button.textContent = "Число кликов: " + clicki;
    });
}
for (var i=0; i<buttons.length; i++) {
    var button = buttons[i];
    addClickListener(button);
}