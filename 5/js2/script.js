
console.log(rawdata);

rawschools = rawdata.data;
console.log(rawschools);


// convert to a more usable dictionary
school_scores = []
for (var i = 0; i < rawschools.length;i++){
		var t = {code: rawschools[i][8],
						 name: rawschools[i][9],
						 num: rawschools[i][10],
						 eng: rawschools[i][11],
						 math: rawschools[i][12],
						 writing: rawschools[i][13]
						};
		school_scores.push(t);
};
console.log(school_scores);

// pull out all of the math scores
