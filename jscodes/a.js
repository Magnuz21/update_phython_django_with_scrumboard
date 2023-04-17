// const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
// // const checker = text.includes("Lorem"); 

// const checker = text.split("o").length;



// let nums = new Array(10).fill(0);
// nums = nums.map((_, i) => {
//     return 9 - i  ;})
// console.log(nums)

// let todos = [

//     {name: 'Todo 1', description: ''},

//     {name: 'Todo 2', description: ''},

// ];

// function markAsDone(selectedIndex){

//     return todos.map((todo, index) => {

//         if(selectedIndex === todo[index]
// ){

//         return {todos, done: 'true'
// }

//         }
//         return todo
// ;
//     })
// }
// todos = markAsDone(0);

// console.log(todos);


// let characters = 'Hello World'.split('');

// const vowels = ['a', 'e', 'i', 'o', 'u'];

// characters = characters.filter((char) => {

//     if(vowels.includes(char)
// ){

//         return char;

//     }

// });

// console.log(characters.length, characters);




// let words = "racecar".split('');
// let guessed = new Array(words.lenght).fill('_');
// let lives = 5;

// function guessCharacter(character){
//     if (words.includes(character))
//     {
//         guessed = guessed.map((data, i) => {
//             if (character === words[i] )
//             {
//                 return data;
//             }
//             return guessed;
//         })

//     } else{
//         lives--;
//     }
// }
// guessCharacter ("r");
// guessCharacter ("e");
// guessCharacter ("a");
// guessCharacter ("b");
// console.log(`Guessed Characters : ${guessed}`,`| Remaining Lives ${lives}`);

// let nums = new Array(10).fill(0); 

// nums = nums.map((_, i) => { 

// return nums.length-1 - i; 

// })

// console.log(nums)

const ref = useRef('Hello World');
console.log(useRef)