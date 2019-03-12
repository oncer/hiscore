'use strict';

var scores = [
	{'name': 'Aaron', 'score': 10},
	{'name': 'Beatrice', 'score': 8},
	{'name': 'Caesar', 'score': 6},
	{'name': 'Donald', 'score': 4},
	{'name': 'Esther', 'score': 2},
];

exports.list_all_scores = function(req, res) {
	res.type('json').send(JSON.stringify({scores: scores}, null, 2));	
};

exports.replace_scores = function(req, res) {
	var input = req.body.scores;
	if (input.length >= 5 && typeof input[0]["name"] === "string") {
		console.log("replacing scores!");
		scores = input;
		console.log(scores);
		res.type('json').send(JSON.stringify({scores: scores}, null, 2));
	}
};

