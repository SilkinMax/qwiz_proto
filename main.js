(function ()
{
	function askRandomQuestion(array)
	{
		const question = array[parseInt(Math.random() * 4)];
		question.displayQuestion();
	}
	function Question(question, answers, correctNum)
	{
		this.question = question;
		this.answers = answers;
		this.correctNum = correctNum;
	}
	Question.prototype.displayQuestion = function(){
			console.log(this.question);
			this.answers.forEach(function(elem,index) 
			{
				console.log(`${index}. ${elem}`);
			});
	}

	let q1 = new Question("Какая должность у Максима?", ["Программист" ,"Водитель" ,"Учитель","Пекарь"], 0);
	let q2 = new Question("Сколько Максиму лет?", ["26" ,"27","28" ,"29"], 3);
	let q3 = new Question("На кого учился Максим?", ["Программист" ,"Инженер" ,"Доктор","Няня"], 1);
	let q4 = new Question("Какой самый лучший язык программирования?", ["C#" ,"PHP", "JS"], 2);

	const allQuestions = [q1,q2,q3,q4]
	askRandomQuestion(allQuestions);

	const answerNum = prompt("Выберите правильный вариант ответа");

})();

