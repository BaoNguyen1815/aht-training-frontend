function setHeight(){
  var topSellingWidth = $(".top-selling-img").first().outerWidth();
  $(".top-selling-img").css({ height: topSellingWidth + "px" });
}
function setNewsHeight(){
  var newsWidth = $(".news-img").first().outerWidth();
  newsWidth = newsWidth*75/100;
  $(".news-img").css({ height: newsWidth + "px" });
  console.log(newsWidth)
}


window.onload = ()=>{
  setHeight();
  setNewsHeight();
}
