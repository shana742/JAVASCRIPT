// 51) Use indexOf to determine the position of the first occurrence of a in 30 Days Of
// JavaScript ?
    
  const text = "30 Days Of JavaScript";
const searchString = "a";

const position = text.indexOf(searchString);

if (position !== -1) {
    console.log(`The first occurrence of '${searchString}' is at position ${position}.`);
} else {
    console.log(`'${searchString}' is not found in the string.`);
}