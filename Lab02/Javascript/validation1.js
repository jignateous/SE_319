/**
 * Created by Jgn on 8/25/16.
 */
// Just testing out the waters!
console.log("Validation Check");
var regex = new RegExp("[A-Z]");
var name = "";
function fnameCheck(firstname) {
    console.log("fname");
    name = firstname;
    regex = new RegExp("[a-z0-9A-Z]")
    // Check for uppercase first
    if(regex.test(name) == true) {
        return true;
    }
    else{
        return false;
    }
}

// function lnameCheck(lastname) {
//     console.log("lname");
//     name = lastname;
//      // Check for uppercase first
//     if(regex.test(name) == true) {
//         regex = new RegExp("[0-9]"); // Now we check for numbers
//         if(regex.test(name) == true) {
//             regex = new RegExp("[a-z]"); // checking now for lowercase
//             if(regex.test(name) == true) {
//                 return true;
//             } else return false;
//         } else return false;
//     } else return false;
// }

function lnameCheck(lastname) {
    console.log("lname");
    name = lastname;
    regex = new RegExp("[a-z0-9A-Z]")
    // Check for uppercase first
    if(regex.test(name) == true) {
        return true;
    }
    else{
        return false;
    }

}

