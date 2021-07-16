// time
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const year = 365.25 * day;

const _units = {
    second,
    minute,
    hour,
    day,
    week,
    year,
};

console.log(`${year} years is ${year / year} years`); // that didn't go so well

// distances
const meters = 1;
const km = 1000 * meters;
const mile = 1609.34 * meters;
const feet = 3.28084 * meters;
const inch = 0.0254 * meters;

console.log(`${meters} meters is ${km} kilometers`); // lol
console.log(`${meters} meters is ${mile} miles`);
console.log(`${meters} meters is ${feet} feet`);
console.log(`${meters} meters is ${inch} inches`);

// temperatures
const celsius = 1;
const fahrenheit = 1.8 * celsius;
const kelvin = 1;
const rankine = 1.8 * kelvin;

console.log(`${celsius} celsius is ${fahrenheit} fahrenheit`); // at least this one is correct
