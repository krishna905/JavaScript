let btn=document.querySelector('#new-quote')
let quote=document.querySelector('.quote');
let person=document.querySelector('.person')

const quotes=[
    {
        quote: " PIVOT!, In Vegas. I was so drunk, I could've married Joey",
        person: 'Ross Geller'
    },
    {
        quote: " How you doin , Could I BE wearing anymore clothes?",
        person: 'Joey Tribbbiani'
    },
    {
        quote: " Welcome to the real world. It sucks. You're gonna love it.",
        person: 'Monica Geller'
    },
    {
        quote: " I don't want my baby's first words to be 'How You Doing?",
        person: 'Rachel Green'
    },
    {
        quote: " I can handle this. 'Handle' is my middle name. Actually, 'handle' is the middle of my first name",
        person: 'Chandler Bing'
    },
    {
        quote: " Oh, Pheebs is short for Phoebe I thought that's just what we called each other.",
        person: 'Phoebe Boofay'
    },

]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length)
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;

})