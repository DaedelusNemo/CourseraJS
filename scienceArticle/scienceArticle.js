var xhr = new XMLHttpRequest();
var url = './scienceArticle.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var capabilitiesHeader = document.createElement('h3');
        capabilitiesHeader.textContent = 'Capabilities:';

        var capabilitiesList = document.createElement('ul');
        article.capabilities.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.textContent = item;
            capabilitiesList.appendChild(listItem);
        });

        var requirementsHeader = document.createElement('h3');
        requirementsHeader.textContent = 'Requirements:';

        var requirementsList = document.createElement('ul');
        article.requirements.forEach(function(item) {
            var listItem = document.createElement('li');
            listItem.textContent = item;
            requirementsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(capabilitiesHeader);
        articleDiv.appendChild(capabilitiesList);
        articleDiv.appendChild(requirementsHeader);
        articleDiv.appendChild(requirementsList);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();