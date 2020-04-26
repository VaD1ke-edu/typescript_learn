"use strict";
console.log('Hello world');
var qwe;
qwe = [1, 'qwe'];
var tuple;
tuple = [1, 'qwe'];
function add(num1, num2, cb) {
    return cb(num1 + num2);
}
add(1, 2, function (result) {
    return true;
});
var foo;
var bar;
var convType;
var u1 = { name: 'Vlad', age: 23 };
// unions & literals
function calc(a, b, conversion) { }
// enums
var Role;
(function (Role) {
    Role["ADMIN"] = "a";
    Role["READ_ONLY"] = "ro";
    Role["USER"] = "u";
})(Role || (Role = {}));
// unknown
var myUnknown;
var myString;
myUnknown = 4; // ok
myUnknown = 'qwe'; // ok
// myString = myUnknown; // not ok, но с any такое бы прокатило
// можно разрулить через typeof
if (typeof myUnknown === 'string') {
    myString = myUnknown; // ok
}
