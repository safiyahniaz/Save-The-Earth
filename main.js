const quoteSource = [
    {
        quote: "“Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it is the only thing that ever has.”",
        author:"Margaret Mead"
    },
    {
        quote: "”The Earth will not continue to offer its harvest, except with faithful stewardship. We cannot say we love the land and then take steps to destroy it for use by future generations. ”"
        , 
        author: "John Paul II"
    },
    {
        quote: "“You cannot get through a single day without having an impact on the world around you. What you do makes a difference and you have to decide what kind of a difference you want to make.”",
        author:"Jane Goodall"
    },
    {
        quote: "“The ultimate test of man’s conscience may be his willingness to sacrifice something today for future generations whose words of thanks will not be heard.”" ,
        author: "Gaylord Nelson" ,
    },
    {
        quote: "“What’s the use of a fine house if you haven’t got a tolerable planet to put it on.”" ,
        author:"Henry David Thoreau" ,
    },
     {
        quote: "“We have forgotten how to be good guests, how to walk lightly on the earth as its other creatures do.”" ,
        author: "Barbara Ward" ,
    },
    { 
        quote:"“I really wonder what gives us the right to wreck this poor planet of ours.”" ,
        author:"Kurt Vonnegut Jr." ,
    },
];

function getRandomQuote(){
    const randomNumber = getRandomNumber();
    const quoteObject = quoteSource[randomNumber];
    elementSetter('saying', quoteObject.quote);
    elementSetter('author', quoteObject.author);
}

function elementSetter(elementId, innerHTMLValue){
    document.getElementById(elementId).innerHTML = innerHTMLValue;
}

let currentRandomNumber = 0;
function getRandomNumber(){
    const sourceLength = quoteSource.length;
    const randomNumber = Math.floor(Math.random()*sourceLength);

    if(randomNumber === currentRandomNumber){
        return getRandomNumber();
    } else {
        currentRandomNumber = randomNumber;
        return randomNumber;
    }
}

// create func (getRandomNumber)
// const sourceLength = quoteSource.length;
// const randomNumber= Math.floor(Math.random()*sourceLength); 

//onclick funct (when called)
// random num
//get by index array[rand num]
// getelement => chg innerhtml