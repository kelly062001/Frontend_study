const quotes =[
    {
        quote: 'pedri',
        author: 'fc barcelona',
    },
    {
        quote: 'kang in',
        author: 'psg',
    },
    {
        quote: 'min jae',
        author: 'fc bayren',
    },
    {
        quote: 'halland',
        author: 'mancity',
    },
    {
        quote:'casemiro',
        author:'man united',
    },
    {
        quote: 'saka',
        author: 'arsenal',
    },
    {
        quote: 'tripper',
        author: 'newcastle',
    },
    {
        quote: 'heung min',
        author: 'tottenham',
    },
    {
        quote: 'modric',
        author: 'real madrid',
    },
    {
        quote: 'griezmann',
        author: 'atletico madrid',
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
