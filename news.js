async function fetchTopHeadlines() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9569296f75f3448b8e0266f03c09f0c1";

    try {
      const response = await fetch(url);
      const data = await response.json();
      displayNews(data.articles);
      console.log(data);
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    }
  }

  function displayNews(articles) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "";

    articles.map((article) => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");

      const title = document.createElement("h3");
      title.textContent = article.title;

      const description = document.createElement("p");
      description.textContent = article.description;

      const source = document.createElement("p");
      source.textContent = `Source: ${article.source.name}, Author: ${article.author}`; 

      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = "Read more";

      newsItem.appendChild(title);
      newsItem.appendChild(description);
      newsItem.appendChild(source);
      newsItem.appendChild(link);

      newsContainer.appendChild(newsItem);
    });
  }

  fetchTopHeadlines();