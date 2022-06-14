// DOM elements:
let twitterUsername = document.getElementById('twitter-username');
let tweetBox        = document.getElementById('tweet');
let submit          = document.getElementById('tweet-submit');
let tweets          = document.getElementById('tweets');
let tweetFeed      = document.querySelector('#twitter-posts');
let retweet        =document.getElementById('retweet');
let like        =document.getElementById('like');


//This function first creates 2 variables called "tweet" and "username" and then grabs the value of the tweetBox and the username .Then, we check to see if the length of the string is more than 0. If it is, we call another function called "addNewTweet()"
submit.onclick=function(e){
  e.preventDefault();
  let username = twitterUsername.value;
  let tweet = tweetBox.value;
  let inputData=[];
  if (username.length > 0 && tweet.length > 0) {
    addNewTweet(username,tweet);
    inputData.push(username,tweet);
    retweetfun(username,tweet);
  }
}
function addNewTweet(username,tweet) {
  let tweetHTML = document.createElement('div');
  tweetHTML.setAttribute('class', 'tweet','username');
  tweetHTML.innerHTML = `
            <div class="tweet-left">
              <span class="tweet-avatar fa-stack">
                <i class="fas fa-circle fa-stack-2x">
                  <i class="fas fa-user fa-stack-1x"></i> 
                </i>
              </span>
            </div>
            
            <div class="tweet-right">
              <div class="tweet-top-meta">
                <div class="tweet-top-name-and-handle">
                  <p class="name">${username}</p>
                  <span> &nbsp 1 min</span>  
                </div>
                <i class="fa fa-angle-down"></i>
              </div>
              
              <p class="tweet-text">${tweet}</p>

              <div class="tweet-bottom-meta">
                <input  type="submit" id="retweet" value="retweet">  
                <input type="submit" id="like" value="like">               
              </div>
            </div>
`;
tweetFeed.prepend(tweetHTML);
twitterUsername.value="";
  tweetBox.value="";
}

like.onclick=function likefun(e) {
  e.preventDefault();
  let tweet = tweetBox.value;
  tweet.style.color= red;
}
retweet.onclick=function retweetfun(username,tweet) {
  e.preventDefault();
  addNewTweet(username,tweet);
  
}

