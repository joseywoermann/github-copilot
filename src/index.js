// Create a function that takes a name, a job title, and a language as input
// and outputs the input as a sentence using the inputs.
// Language: javascript
// Path: src\index.js
function makeSentence(name, jobTitle, language) {
    return `${name} is a ${jobTitle} who speak ${language}`;
}

console.log(makeSentence("John", "Software Engineer", "JavaScript"));
