console.log('Hello world');

let qwe: (string|number)[];
qwe = [1, 'qwe'];

let tuple: [number, string];
tuple = [1, 'qwe'];


function add(num1: number, num2: number, cb: (response: number) => boolean): boolean {
    return cb(num1 + num2);
}

add(1, 2, (result: number) => {
    return true;
})


// aliases
type StrNum = string | number;
type ConversionType = 'as-number' | 'as-text';
type User = { name: string; age: number };

let foo: StrNum;
let bar: StrNum | boolean;
let convType: ConversionType;
const u1: User = { name: 'Vlad', age: 23 };


// unions & literals
function calc(a: string | number, b: string | number, conversion: 'as-number' | 'as-text') {}

// enums
enum Role { ADMIN = 'a', READ_ONLY = 'ro', USER = 'u' }

// unknown
let myUnknown: unknown;
let myString: string;

myUnknown = 4; // ok
myUnknown = 'qwe'; // ok

// myString = myUnknown; // not ok, но с any такое бы прокатило
// можно разрулить через typeof

if (typeof myUnknown === 'string') {
    myString = myUnknown; // ok
}

