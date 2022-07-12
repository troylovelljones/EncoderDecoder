/*  Lexical Structure 
        describes how the language rules */

/*  Case sensitivity, spaces, and line breaks
        -language keywords, variables, function names and other identifiers must be consistent
        -most part JS ignores whitespace /*

    //comments
        // and long comments /* any code inside is ignored */ 

    //Literals
        //A literal is a data value that appears directly in a program
        // 12
        // "hello"
        // []
        // {}

/*  Identifiers and reserved words
        An identifier is simply a name and JS as reserved names like if, while, for */

/*  Unicode
        -JavaScript programs are written using the Unicode character set, and you can use any Unicode characters 
        -in strings and comments. For portability and ease of editing, it is common to use only ASCII letters and 
        -digits in identifiers */
        const café = 1;  // This constant is named "caf\u{e9}"
        const café = 2;  // This constant is different: "cafe\u{301}"
        console.log(café); // => 1: this constant has one value
        console.log(café);  // => 2: this indistinguishable constant has a different value

/*  Optional semicolons
        -Like many programming languages, JavaScript uses the semicolon (;) to separate statements
        - you should as well as some unintented things can happen */
        return
        true;  //-> return; true;

/*  Types Values And variables
    - Js can be divided into two categories PRIMITIVE and OBJECT Types
    - booleans, strings, numbers, null, undefined IMMUTABLE primitive types
    - arrays, objects, functions MUTABLE object types */

//numbers
//  declaration    initializing    assigning
    let            number          =12
    const number2 = 11
    // console.log(11+3); //add
    // console.log(11-3); //subtract
    // console.log(11*3); //multiply
    // console.log(11/3); //divide
    // console.log(11%3); //divide
    // console.log(11**3); //divide
    // console.log(-Infinity === Infinity);
    
//Strings
    console.log(`the number is ${number}`);
    ""
    ''
    // let x = "feas"
    // x.
//booleans
    // true false
    if (true) {
        console.log("that was true");
    }
    //truthy and falsy
    // ""
    // 0

//null and undefined
    //- null value that is usually used to indicate the absence of a value
    
//OBJECT TYPES
    //Arrays
        let b = [12, "the", true, [0,12,12], {p: [12,0]}]
        //0   1     2     ......
        
    //Objects
        {
            prop: []
        }
    //functions
        //set of an instructions
        function greet(name) {
            console.log(`hello ${name}`);
        }
        greet("Duke")

//expressions and statements
    //Expressions are evaluated to produce a value, but statements are executed to make something happen.
    //4 + 5
    //-primary expressions are those that stand alone, literals, reserved words, refrence to a variables
    // if () {

    // }
