var quoteFactory = function() {

		var makeQuoteElt = function(d) {
				var q =  "<blockquote><p>"+d.quote+"</p></blockquote>";
				return q;
		};
		
		/* 
		 takes a json blob including a quote from quotes.com
		 and add it to the aquote div.
		 */
		var insertQuote = function(d) {
				/* Make a new element with the quote */
				var elt = makeQuoteElt(d);
				$("#aquote").append(elt);
		};

		var addQuote = function(d) {
				$.getJSON("/quote",insertQuote);
		};

		var clearQuotes = function() {
				$("#aquote").empty();
		};

		var changeRandomQuote = function() {
				$.getJSON("/quote",function (d){
						var q = makeQuoteElt(d);
						var elt = $("#rquote");
						elt.fadeOut(2000,function(){
								elt.empty();
								elt.append(q);
								elt.fadeIn(2000);
						});
				});
		};
		
		var interval;
		return {
				add: addQuote,
				interval : interval,
				rand: changeRandomQuote,
				clear: clearQuotes
		};
};

$(document).ready(function() {
		console.log("HELLO");
		var quotes = quoteFactory();
		$("#add").bind('click',quotes.add);
		$("#clear").bind('click',quotes.clear);
		quotes.interval  = setInterval(quotes.rand,7000);
});
