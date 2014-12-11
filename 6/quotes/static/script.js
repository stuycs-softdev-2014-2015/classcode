
var quoteFactory = function() {

		var makeQuoteElt = function(d) {
				var q = "<blockquote><p>"+d.quote+"</p></blockquote";
				return q;
		};
		
		var insertQuote = function(d){
				var q = makeQuoteElt(d);
				$("#aquote").append(q);
		};

		var getAddQuote = function() {
				$.getJSON("/quote",function(d) {
						insertQuote(d);
				});
		};

		var clearQuotes = function() {
				$("#aquote").empty();
		};

		var changeRandomQuote = function() {
				$.getJSON("/quote",function(d){
						var q = makeQuoteElt(d);
						var elt = $("#rquote");
						elt.slideUp(2000, function(){
								elt.empty();
								elt.append(q);
								elt.slideDown(2000);
						});
						
				});
				
		};

		var interval;
		return {
				interval : interval, //public variable to store timer
				add : getAddQuote,
				clear: clearQuotes,
				rand : changeRandomQuote
		};
		
};

$(document).ready(function() {
		console.log("HELLO");
		var quotes = quoteFactory();
		$("#add").bind('click',quotes.add);
		$("#clear").bind('click',quotes.clear);
		quotes.interval = setInterval(quotes.rand,7000);
});
