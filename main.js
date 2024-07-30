(function ()
{
	function score(){
		let countCorrectAnswer = 0;
		return function(correct){
			if(correct)
			{
				countCorrectAnswer++
			}
			console.log("Количество правильных ответов = " + countCorrectAnswer)
		}
	}
	function askRandomQuestion()
	{
		const n = parseInt(Math.random() * 4);
		allQuestions[n].displayQuestion();
	
		const answer = prompt("Выберите правильный вариант ответа");

		if(answer !== null && answer !== 'exit'){
			allQuestions[n].checkAnswer(parseInt(answer),keppScore);
			askRandomQuestion();
		}
	}
	function Question(question, answers, correctNum)
	{
		this.question = question;
		this.answers = answers;
		this.correctNum = correctNum;
	}
	Question.prototype.displayQuestion = function ()
	{
		console.log(this.question);
		this.answers.forEach(function (elem, index) 
		{
			console.log(`${index}. ${elem}`);
		});
	};
	Question.prototype.checkAnswer = function (answerNum,callBack)
	{
		if (this.correctNum == answerNum)
		{
			console.log("Вы правильно ответили. Молодец");
			callBack(true);
		}
		else
		{
			console.log("Вы не правильно ответили. Неужели так сложно?");
			callBack(false);
		}
	}
	let q1 = new Question("Какая должность у Максима?", ["Программист", "Водитель", "Учитель", "Пекарь"], 0);
	let q2 = new Question("Сколько Максиму лет?", ["26", "27", "28", "29"], 3);
	let q3 = new Question("На кого учился Максим?", ["Программист", "Инженер", "Доктор", "Няня"], 1);
	let q4 = new Question("Какой самый лучший язык программирования?", ["C#", "PHP", "JS"], 2);

	const keppScore = score();

	const allQuestions = [q1, q2, q3, q4];
	askRandomQuestion();

})();

