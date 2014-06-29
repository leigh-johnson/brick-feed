google.load("feeds", "1");

function initialize() {

      var scienceNews = new google.feeds.Feed("http://feeds.reuters.com/reuters/scienceNews");
      scienceNews.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("grid");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var li = document.createElement("li");
            var h3 = document.createElement("h3");
            var p = document.createElement("p");
            var a = document.createElement("a");
            var category = document.createElement("p")

            category.className = "feed-category";
            category.innerHTML = "Science";

            li.className = "feed-entry science mix";
            h3.className = "feed-header";
            p.className = "feed-snippet";
            h3.innerHTML = entry.title;
            p.innerHTML = entry.contentSnippet;
            a.setAttribute('href', encodeURI(entry.link));

            a.appendChild(h3);
            li.appendChild(a);
            li.appendChild(p);
            li.appendChild(category);
            container.appendChild(li);
          }
        }
      });

      var artsNews = new google.feeds.Feed("http://feeds.reuters.com/news/artsculture");
      artsNews.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("grid");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var li = document.createElement("li");
            var h3 = document.createElement("h3");
            var p = document.createElement("p");
            var a = document.createElement("a");
            var category = document.createElement("p")

            category.className = "feed-category";
            category.innerHTML = "Arts";

            li.className = "feed-entry art mix";
            h3.className = "feed-header";
            p.className = "feed-snippet";
            h3.innerHTML = entry.title;
            p.innerHTML = entry.contentSnippet;
            a.setAttribute('href', encodeURI(entry.link));

            a.appendChild(h3);
            li.appendChild(a);
            li.appendChild(p);
            li.appendChild(category);
            container.appendChild(li);
          }
        }
      });

      var businessNews = new google.feeds.Feed("http://feeds.reuters.com/reuters/businessNews");
      businessNews.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("grid");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var li = document.createElement("li");
            var h3 = document.createElement("h3");
            var p = document.createElement("p");
            var a = document.createElement("a");
            var category = document.createElement("p")

            category.className = "feed-category";
            category.innerHTML = "Business";

            li.className = "feed-entry business mix";
            h3.className = "feed-header";
            p.className = "feed-snippet";
            h3.innerHTML = entry.title;
            p.innerHTML = entry.contentSnippet;
            a.setAttribute('href', encodeURI(entry.link));

            a.appendChild(h3);
            li.appendChild(a);
            li.appendChild(p);
            li.appendChild(category);
            container.appendChild(li);
          }
        }
      });

      var environmentNews = new google.feeds.Feed("http://feeds.reuters.com/reuters/environment");
      environmentNews.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("grid");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var li = document.createElement("li");
            var h3 = document.createElement("h3");
            var p = document.createElement("p");
            var a = document.createElement("a");
            var category = document.createElement("p")

            category.className = "feed-category";
            category.innerHTML = "Environment";

            li.className = "feed-entry environment mix";
            h3.className = "feed-header";
            p.className = "feed-snippet";
            h3.innerHTML = entry.title;
            p.innerHTML = entry.contentSnippet;
            a.setAttribute('href', encodeURI(entry.link));

            a.appendChild(h3);
            li.appendChild(a);
            li.appendChild(p);
            li.appendChild(category);
            container.appendChild(li);
          }
        }
      });

      // https://mixitup.kunkalabs.com/docs/
      $('#grid').mixItUp({
      //callbacks: {
    //onMixEnd: function(state){
     // console.log(state)
    //} 
   //}
});


}


google.setOnLoadCallback(initialize);


// Hierarchy of google.feeds.Feed.JSON_FORMAT
// feed {feedUrl, title, link, description, author, 
// entries[mediaGroup, title, link, content, contentSnippet, publishedDate, categories[]
// entry.content contains HTML tags, access with elem.innerHTML = entry.content
// entry.contentSnippet does not contain HTML tags
// entry.publishedDate string "13 Apr 2007 12:40:04 -0700" parse with newDate(entry.publishedDate)
//]}