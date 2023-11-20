let  btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person= document.querySelector('.person');

const quotes =[{
    quote: "When you have a dream, you’ve got to grab it and never let go.",
    person:"Carol Burnett"
},{
    quote: "You can't wait for the storm to pass; you must learn to dance in the rain.",
    person:"Walt Disney"
},{
    quote: "The only way out is through",
    person:"Robert Frost"
},
{
    quote: "If at first you don't succeed, destroy all evidence that you tried",
    person:"Mark Twain"
},
{
    quote: "Don't watch the TV, read the book", 
    person:"Stephen King"
},
{
    quote: "Life isn't about getting and having, it's about giving and being given",
    person:"Maya Angelou"
},
{
    quote: "I am not afraid of death, I just wish it would come quickly and do its job",    
    person:"Ernest Hemingway"
},{
    quote: "Do what you love with passion. Never give up on your dreams",
    person:"Chris Hemsworth"
},{
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts", 
    person:"Winston Churchill"
},
{
    quote: "A successful man is one who uncovers his strength by overcoming obstacles",
    person:"Zig Ziglar"
},{
    quote: "It does not matter how slowly you go as long as you do not stop",
    person:"Confucius"
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(randomNumber);
    quote.innerText= quotes[random].quote;
    person.innerText= quotes[random].person;

});