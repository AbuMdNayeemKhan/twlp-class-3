//====================FUNCTION====================//
let color = "Global color is Green"; // GLOBAL VARIABLE
function myFunction(){ // CREATE A FUNCTION
    color = "Local color is Red"; // LOCAL VARIABLE
    maincontent.innerHTML=(color); // PRINT LOCAL COLOR
}
myFunction(); //CALL FUNCTION
//maincontent.innerHTML = (color); // PRINT GOLOBAL COLOR