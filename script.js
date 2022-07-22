let quote = document.getElementById('quote');
let wri = document.getElementById('name');

const random_quotes = [
    {
        quo:"I am not in danger, I am the danger! ",
        name:"-Hiesenberg"
    },
    {
        quo:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        name:"-Nelson Mandela"
    },
    {
        quo:"The way to get started is to quit talking and begin doing.",
        name:"-Walt Disney"
    },
    {
        quo:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        name:"-James Cameron"
    },
    {
        quo:"When you reach the end of your rope, tie a knot in it and hang on.",
        name:"-Franklin D. Roosevelt"
    },
    {
        quo:"You miss 100% of the shots you don't take.",
        name:"-Wayne Gretzky"
    },
    {
        quo:"Nothing is impossible, the word itself says, ‘I'm possible!' ",
        name:"-Audrey Hepburn"
    },
    {
        quo:"Believe you can and you're halfway there. ",
        name:"-Theodore Roosevelt"
    },
    {
        quo:"How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        name:"-Anne Frank"
    },
    {
        quo:"An unexamined life is not worth living.",
        name:"-Socrates"
    }
]

quote.addEventListener('click',function(){
    const i = [Math.floor(Math.random()*10)];
    quote.innerHTML = random_quotes[i].quo;
    wri.innerHTML = random_quotes[i].name;
})