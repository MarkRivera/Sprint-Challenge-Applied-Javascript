// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const node = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    let articles = response.data.articles;
    console.log(articles);
    for(article in articles) {
        articles[article].map(element => {
            // Create elements

            let card = document.createElement('div');
            card.classList.add('card');

            let headline = document.createElement('div');
            headline.classList.add('headline');
            headline.textContent = element.headline;

            let author = document.createElement('div');
            author.classList.add('author');

            let imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');

            let img = document.createElement('img');
            img.src = element.authorPhoto;

            let span = document.createElement('span');
            span.textContent = element.authorName;

            // Put it all together
            imgContainer.appendChild(img);
            author.appendChild(imgContainer);
            author.appendChild(span);
            card.appendChild(headline);
            card.appendChild(author);

            node.appendChild(card);
        });
    }

}).catch(err => {
    console.log('An error has occurred!');
})
