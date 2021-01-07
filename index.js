var randomQuote = "";
var randomAuthor = "";

function getQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
      method: "GET",
      dataType: "jsonp",
      success: function(request) {
        randomQuote = request.quoteText;
        randomAuthor = request.quoteAuthor;
        $('#text').html(`<i class="fa fa-quote-left fa-2x"></i> `+ randomQuote + ` <i class="fa fa-quote-right fa-2x"></i>`);
        if (randomAuthor === "")        { randomAuthor="Unknown";
        }    $('#author').html("- " + randomAuthor);
 },
      error: function(xhr, status, error) 
{
    $('#quoteText').text('Not sure what happened there! Click again to generate a new quote!');
        $('#quoteAuthor').text('Click Below!');
}
  });
}
  

$(document).ready(function() {
    $("#new-quote").click(function() {
      getQuote();
    });
   $("#tweet").click(function(){
    var url="https://twitter.com/intent/tweet?text=\"" + randomQuote + "\" -" + randomAuthor;
$("#tweet").attr('href', url);
window.open(url);});
  });