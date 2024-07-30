(function ()
{
	function askRandomQuestion(array,countCorrectAnswer)
	{
		const question = array[parseInt(Math.random() * 4)];
		question.askQuestion(countCorrectAnswer);
	}
	function Question(question, answers, correctNum)
	{
		this.question = question;
		this.answers = answers;
		this.correctNum = correctNum;
	}
	Question.prototype.displayQuestion = function(){
		
	}

	let q1 = new Question("Какая должность у Максима?", ["Программист" ,"Водитель" ,"Учитель","Пекарь"], 1);
	let q2 = new Question("Сколько Максиму лет?", ["26" ,"27","28" ,"29"], 4);
	let q3 = new Question("На кого учился Максим?", ["Программист" ,"Инженер" ,"Доктор","Няня"], 2);
	let q4 = new Question("Какой самый лучший язык программирования?", ["C#" ,"PHP", "JS"], 3);

	const allQuestions = [q1,q2,q3,q4]
	askRandomQuestion(allQuestions);
})();

