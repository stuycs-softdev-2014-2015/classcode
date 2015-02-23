
console.log(rawscores);

rawschooldata = rawscores.data;
console.log(rawschooldata);

school_scores = [];
for (var i=0; i < rawschooldata.length;i++){
		var tmp = {
				code:rawschooldata[i][8],
				name:rawschooldata[i][9],
				num:rawschooldata[i][10],
				eng:rawschooldata[i][11],
				math:rawschooldata[i][12],
				writing:rawschooldata[i][13]
		};
		school_scores.push(tmp);
};


console.log(school_scores);
