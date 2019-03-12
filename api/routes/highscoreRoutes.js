'use strict';
module.exports = function(app) {
    var highScores = require('../controllers/highscoreController');
    app.route('/scores')
	.get(highScores.list_all_scores)
	.post(highScores.replace_scores);
};
