const $ = require('jquery');
import sayHello from "./say-hello.js";
$(document).ready(function () {
    // let sayHello = () => {return console.log('hello')};
    //
    // sayHello();

    $('body').css({
        "background-color": "blue"
    });
});
console.log(sayHello());



