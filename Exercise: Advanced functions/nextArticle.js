function getArticleGenerator(articles) {
    
    const slicedArticles = articles.slice();
    const outputElement = document.getElementById('content');

    return function showNext() {
      
        if(slicedArticles[0]) {
            const article = document.createElement('article');
            article.textContent = slicedArticles.shift();
            outputElement.appendChild(article);
        };
    };
}
