const $ = require('jquery');
$(document).ready(function () {
    let sayHello = () => {return console.log('hello')};

    sayHello();

    $('body').css({
        "background-color": "red"
    });
});



