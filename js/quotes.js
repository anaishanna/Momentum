const quotes = [
    {
        quote: "You complete me",
        author: "Jerry Maguire, 1996"
    },
    {
        quote: "Nobody's perfect",
        author: "Some Like It Hot, 1959"
    },
    {
        quote: "I don't want to survive. I want to live.",
        author: "12 Years a Slave, 2013"
    },
    {
        quote: "You is kind. You is smart. You is important",
        author: "The Help, 2011"
    },
    {
        quote: "After all, tomorrow is another day!",
        author: "Gone With the Wind, 1939"
    },
    {
        quote: "Play it, Sam. Play 'As Time Goes By'",
        author: "Casablanca, 1942"
    },
    {
        quote: "Carpe diem. Seize the day, boys",
        author: "Dead Poets Society, 1989"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;