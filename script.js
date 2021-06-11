
// defining all necessary elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('button');
const newQuoteBtn = document.getElementById('new-quote');

//  Get Quotes From API.
let apiQuotes = [];
function showQuote() {
  //Pick a random quote from apiQuotes array.
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    authorText.textContent = 'Unknown';
  } else {
    authorText.textContent = quote.author;
  }
  quoteText.textContent = quote.text;
  console.log(quote);
}


async function getQuotes() {
  const apiURL = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    console.log("get quotes called");
    showQuote();
  } catch (error) {
    // handle errors here
    alert(error);
  }
}


//Tweet quote
function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterURL,"_blank");
  console.log("Im in");
}

//Event Listener
twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click",showQuote);

// load 
getQuotes();

