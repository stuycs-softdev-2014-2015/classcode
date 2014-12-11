
var quoteFactory = function() {

		var addQuote = function(d){
				var q = "<blockquote><p>"+d.quote+"</p></blockquote>";
				$("#aquote").append(q);
		};

		return { add : addQuote
					 };
};


var quotes;
$(document).ready(function(){
		console.log("HELLO");
		quotes = quoteFactory();
});

