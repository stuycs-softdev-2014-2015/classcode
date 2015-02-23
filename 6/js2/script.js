console.log(rawscores);

raw_school_data = rawscores.data;
console.log(raw_school_data);

school_scores = [];
for (var i=0; i < raw_school_data.length;i++){
		var t = {code:raw_school_data[i][8],
						 name:raw_school_data[i][9],
						 num:raw_school_data[i][10],
						 eng:raw_school_data[i][11],
						 math:raw_school_data[i][12],
						 writing:raw_school_data[i][13],
						};
		school_scores.push(t);
};

console.log(school_scores);
