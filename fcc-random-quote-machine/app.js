const quote = document.querySelector('div.quote');
const author = document.querySelector('div.author');
const tweetMe = document.querySelector('.tweet');

const tweetConfig = {
  'iurl': 'https://twitter.com/intent/tweet',
  'url': 'https://github.com/fy2be/fcc-random-quote-machine',
  'hashtags': 'fcc,freecodecamp,randomquotemachine'
};

function getQuote() {
  fetch('https://talaikis.com/api/quotes/random')
    .then(
      (response) => {
        response.json().then((data) => {
          quote.textContent = data.quote;
          author.textContent = data.author;
          
          let text = encodeURI(quote.textContent) + '%20-%20' + encodeURI(author.textContent);
          let tweetHref = `${tweetConfig.iurl}/?text=${text}&url=${tweetConfig.url}&hashtags=${tweetConfig.hashtags}`
          tweetMe.href = tweetHref;
        });
      }
  )
}

getQuote();
