//Store the locations in a array. Make sure the array is not in alphabetical order.
let place = ["london", "paris", "america", "sydny", "france"];

//Print your array in its original order.
console.log(place);

//Print your array in alphabetical order without modifying the actual list.
let sortplace = [...place].sort()
console.log(sortplace);

//Show that your array is still in its original order by printing it.
console.log(place);

//Print your array in reverse alphabetical order without changing the order of the original list.
let sort1place = [...place].sort().reverse()
console.log(sort1place);

//show that your array is still in its original order by printing it again.
console.log (place);

//Reverse the order of your list. Print the array to show that its order has changed.
 place.reverse();
console.log(place);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
place.reverse();
console.log(place);


//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

place.sort();
console.log(place);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

place.sort();
place.reverse();

console.log(place);

