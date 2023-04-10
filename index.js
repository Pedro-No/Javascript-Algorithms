
// Iteration 1: Names and Input
const hacker1 = "João Madeira"
const hacker2 = "Pedro Nogueira"
console.log("The driver name is ",hacker1,", and the navigator name is ",hacker2) 


// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, is has ${hacker1.length} characters`)
}
else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`WOW! You both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let newName ="" 
for(i=0; i<hacker1.length;i++){
    const space = " "
    
    newName += hacker1[i]+space
}
console.log(newName.toUpperCase())

let reverseName =""
for(i=hacker2.length-1; i>=0;i--){
    reverseName += hacker2[i]
}

console.log(reverseName)

if (hacker1.localeCompare(hacker2)===-1){
    console.log("The drivers name goes first");
}
else if (hacker1.localeCompare(hacker2)===1){
    console.log("Yo, the navigators goes first definitely")
}
else{
    console.log("What?! You both have the same name??")
}

//Bonus Time Exercises

//Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat ligula a malesuada egestas. Sed semper tellus eu felis facilisis, sed bibendum ante ullamcorper. Donec tellus ex, cursus eget leo vehicula, faucibus viverra quam. Suspendisse accumsan risus quis tempor eleifend. Nulla iaculis nec turpis at tempus. Aliquam enim urna, venenatis eget augue id, venenatis faucibus risus. Donec vel scelerisque eros. Integer est nibh, finibus quis orci sed, varius dignissim quam. Mauris quis pharetra sem. Suspendisse eget mi vitae enim elementum vehicula eget in enim. Pellentesque sit amet porta massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel maximus eros. Proin odio tellus, fermentum non lacus ut, accumsan sodales nunc. Morbi blandit ante id magna mollis euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam quis eros velit. Duis dignissim velit non dui lacinia porttitor. Nulla quis porta nibh. Curabitur nisi diam, ultrices quis pharetra quis, malesuada in nibh. Nam id tempor justo, ac eleifend arcu. Integer vestibulum diam nibh, ac commodo mauris faucibus quis. Morbi fermentum feugiat pulvinar. Nulla ut auctor libero. In id ligula turpis. Mauris porttitor convallis libero, ac sollicitudin dolor."
let count =1 // Starts at 1 because we are counting the spaces between words which is always going to be #words -1
for (i=0;i<longText.length;i++){
    if (longText[i]=== " "){
        count++
    }
}
console.log(`The number of words in the paragraphs is ${count}`)

// Bonus 2
const phraseToCheck = "A man, a p'lan, a canal, Panama!";
let cleanPhraseToCheck=""
let reverseCleanPhrase ="";


for (i=0;i<phraseToCheck.length;i++) {
    if (phraseToCheck[i]=== " " || phraseToCheck[i]==="," || phraseToCheck[i]==="!" || phraseToCheck[i]=== "'" || phraseToCheck[i]==="?") {
        continue;
    }
    else{
            cleanPhraseToCheck+=phraseToCheck[i].toLocaleLowerCase()
    }
        
};
for(i=cleanPhraseToCheck.length-1; i>=0;i--){
    reverseCleanPhrase += cleanPhraseToCheck[i]
}

if(cleanPhraseToCheck===reverseCleanPhrase){
    console.log("This phrase is a Palindrome");

}
else {
    console.log("This phrase is NOT a Palindrome");
};
