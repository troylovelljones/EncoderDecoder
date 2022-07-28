/*

'0h2xce5ngbrdy' => 'hey'
'3vdfn' => 'n'
'0r' => 'r'
'2bna0p1mp2osl0e' => 'apple'
'0y4akjfe0s' => 'yes'


*/
"use strict";

let DEBUG = false;

const setCharAt = (str, index, char) => {
    //if(index > str.length-1) return str;
    const result = str.substring(0,index) + char + str.substring(index+1);
    if (DEBUG) console.log(`modifying password: ` + result);
    return result;
}


const ASCII_MAX_NUM_ENCODING = 57;
const ASCII_MIN_NUM_ENCODING = 48;
const ASCII_MIN_CHAR_ENCODING = 58;

const ASCII_MAX_CHAR_ENCODING = 126;

const scramble = (char) => {
    
    const ascII = Math.max(Math.floor(Math.random() * ASCII_MAX_CHAR_ENCODING),
        ASCII_MIN_CHAR_ENCODING);
    if (DEBUG) {
        console.log(`AscII value from scramble: ${ascII}`);
        console.log(`scrambled value that will be prepended to ${char} is ${String.fromCharCode(ascII)}`);
    }
    return String.fromCharCode(ascII);
}

const decodePasswordCharForNumbers = passwordChar => {
    let ascIICode = 
        passwordChar.charCodeAt(0);
    ascIICode = ascIICode < ASCII_MIN_CHAR_ENCODING ? ASCII_MIN_CHAR_ENCODING
        + String.fromCharCode(ascIICode) : ascIICode;
}

const encodePasswordCharForNumbers = number =>
    String.fromCharCode(ASCII_MAX_NUM_ENCODING - number);


const decode = (password) => {
    
    

    let decodedPassword = '';

    const decodePassword = (passwordIndex) => {
  
        //base condition
        if (passwordIndex >= password.length) return decodedPassword;     
        
        let numToSkip = 0;
        
        do {
            numToSkip = parseInt(password[passwordIndex]);
            passwordIndex++;

        } while (isNaN(numToSkip) && passwordIndex <= password.length);

        passwordIndex = numToSkip + passwordIndex;

        decodePasswordCharForNumbers(password[passwordIndex]);
   
        decodedPassword = setCharAt(decodedPassword, passwordIndex, password[passwordIndex]);
        
        passwordIndex++;     
        
        return decodePassword(passwordIndex);

    }    
     
    return decodePassword(0);  
}

const encode = (password, encoder, maxEncodingLength = 3) => {

    let encodedPassword = '';
    let encodedStringIndex = 0;



    const encodeChar = (char) => {
        
      const ascIICode = char.charCodeAt(0);

        if (DEBUG) console.log(char, ascIICode);

        if ( ascIICode < ASCII_MIN_NUM_ENCODING || ascIICode > ASCII_MAX_CHAR_ENCODING) 
            throw new Error(`Your password cannot be encoded because it contains` +
                ` invalid characters!`);
        const number = parseInt(char);

        if (isNaN(number)) 
            encodePasswordCharForNumbers(number);
            
        let doneCharEncoding = false;
        //genrate a random cypher
        const randomCypher = 
            Math.floor(Math.random() * maxEncodingLength);

        //the cypher index has to be between the current index of the encoding
        //and the end of max length of the encoding
        const randomCypherIndex = Math.max(Math.floor(Math.random()
             * maxEncodingLength), encodedStringIndex);
        
        //the original password character will be located at the position =
        //cypher index + the cypher
        const encodedCharIndex = randomCypherIndex + randomCypher + 1;
          
        //encode string with randomly generated characters until the cypher
        //and the original password character are placed
        while (!doneCharEncoding) {
            //pad the encoded string with randomly generated characters;
            encodedPassword = 
                setCharAt(encodedPassword, encodedStringIndex, scramble(char));
            
            if (DEBUG) {
                console.log(`encoded string index : ${encodedStringIndex}`);
                console.log(`encoding string = ${encodedPassword}` +
                    ` random cypher = ${randomCypher}` +
                    ` random cypher index = ${randomCypherIndex}` +
                    ` new char position = ${encodedCharIndex}` );
            }
            //set the randomly generated cypher at a randomly 
            //generated position in the encoding string
            if (encodedStringIndex === randomCypherIndex)  {              
                encodedPassword = 
                    setCharAt(encodedPassword, encodedStringIndex, randomCypher);
                    encodedStringIndex += (randomCypher + '').length;
                if (DEBUG) console.log(`placing cypher encoding ${randomCypher}` +
                    ` at ${randomCypherIndex}`);    
            }
            //set the password character in the encoded string
            //at the randomly generated positon
            if (encodedStringIndex === encodedCharIndex) {
                encodedPassword = 
                    setCharAt(encodedPassword, encodedStringIndex, char);
                if (DEBUG) 
                    console.log(`placing the original character ${char} ` +
                        `at index: ${encodedStringIndex}`);
                doneCharEncoding = true;
            }
            //if the character is encoded then we're done
            //otherwise we increment the index of the encoded
            //string    
            encodedStringIndex++;    
        }     
    
    }      
    
    //set a default encoder if one isn't passed to us
    encoder = encoder || encodeChar;

    [...password].forEach((char) => encoder(char));
    
    if (DEBUG) console.log(`Password '${password}' encoded is '${encodedPassword}'`);
    return encodedPassword;


}  







const passwords = [`KelvinCorpDrainsTheLifeOutOfMe`, `YourName2022`, `password`, `IloveDevMountain`];


const testPasswordEncoding = (passwords) => {
    const testEncoding = (password) => {
        const encodedPassword = encode(password);
        const consoleMessage = password === decode(encodedPassword) ? `Password '${password}' ` +
            `successfully encoded as '${encodedPassword}'` : `There was a serious problem during the password encoding of '${password}'.`;
        console.log(consoleMessage);
    } 

    Array.of(...passwords).forEach((password) => testEncoding(password));
 }


 DEBUG = false;
 //console.log(encode([`password`]));
 testPasswordEncoding(passwords);


//  try {
//     testPasswordEncoding([`YourName2022`, `YOUR90--\\`]);
//  } catch (err) {
//     console.log(`\nPassword encoding encoutered an unexpected error!`);
//     console.log(`Error: ${err.message}`);
// }   
// console.log(decode('0h2xce5ngbrdy')); // returns - >hey
// console.log(decode('3vdfn')); // returns -> n
// console.log(decode('0r')); // returns -> r
// console.log(decode('2bna0p1mp2osl0e')); // returns -> apple
// console.log(decode('0y04akjfe0s'));// returns -> y4s
// console.log(decode('0y4akjfe0s')); //returns -> yes
// console.log(decode('yff0yakjf0e0s')); // -> also returns yes
