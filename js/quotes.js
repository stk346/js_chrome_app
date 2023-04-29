const quotes = [
    {
        quote: "hello",
        author: "author1"
    },
    {
        quote: "how are you?",
        author: "author2"
    },
    {
        quote: "안녕하세요?",
        author: "저자1"
    },
    {
        quote: "오늘 기분은 어때요?",
        author: "저자2"
    },
    
    {
        quote: "hello",
        author: "author1"
    },
    {
        quote: "how are you?",
        author: "author2"
    },
    {
        quote: "안녕하세요?",
        author: "저자1"
    },
    {
        quote: "오늘 기분은 어때요?",
        author: "저자2"
    },
    {
        quote: "안녕하세요?",
        author: "저자1"
    },
    {
        quote: "오늘 기분은 어때요?",
        author: "저자2"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;