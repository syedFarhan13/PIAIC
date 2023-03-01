"use strict";
function describe_city(city, Country = " USA") {
    console.log(city + " is in " + Country);
}
describe_city("Newyork"); // default country
describe_city("Lahore", " Pakistan");
describe_city("Karachi", " Pakistan");
