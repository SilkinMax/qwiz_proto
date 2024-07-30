(function ()
{
	function askRandomQuestion(array,countCorrectAnswer)
	{
		const question = array[parseInt(Math.random() * 4)];
		question.askQuestion(countCorrectAnswer);
	}
	function Question(question, answers, correctAnswerNum)
	{
		this.question = question;
		this.answers = answers;
		this.correctAnswerNum = correctAnswerNum;
		this.countCorrectAnswer = 0;
		this.isCorrectAnswer = function (number)
		{
			return this.answers.find((elem) => elem.number == number) != undefined;
		}
		this.setCountCorrectAnswers = function ()
		{
			console.log(`Количество правильных ответов = ${this.countCorrectAnswer}`);
		}
		this.askQuestion = function (countCorrectAnswer)
		{
			this.countCorrectAnswer = parseInt(countCorrectAnswer);
			console.log(this.question);
			this.answers.forEach(elem =>
			{
				console.log(`${elem.number}. ${elem.value}`);
			});
			const userAnswer = prompt('Введите номер правильного ответа');

			if (userAnswer === null || userAnswer === 'exit')
				return true;
			if (!this.isCorrectAnswer(userAnswer))
			{
				console.log("Вы ввели некорректный ответ");
			}
			else
			{
				if (this.correctAnswerNum == userAnswer){
					console.log("Вы правильно ответили. Молодец");
					this.countCorrectAnswer++;
				}
				else
					console.log("Вы не правильно ответили. Неужели так сложно?");
			}
			this.setCountCorrectAnswers();
			askRandomQuestion(allQuestions,this.countCorrectAnswer);
		}
	}
	let allQuestions = [];

	const textQuetion1 = "Какая должность у Максима?";
	const answersQuetion1 = [
		{ number: 1, value: "Программист" },
		{ number: 2, value: "Водитель" },
		{ number: 3, value: "Учитель" },
		{ number: 4, value: "Пекарь" },
	];
	const correctNumQuetion1 = 1;
	let question1 = new Question(textQuetion1, answersQuetion1, correctNumQuetion1);
	allQuestions.push(question1);

	const textQuetion2 = "Сколько Максиму лет?";
	const answersQuetion2 = [
		{ number: 1, value: "26" },
		{ number: 2, value: "27" },
		{ number: 3, value: "28" },
		{ number: 4, value: "29" },
	];
	const correctNumQuetion2 = 4;
	let question2 = new Question(textQuetion2, answersQuetion2, correctNumQuetion2);
	allQuestions.push(question2);

	const textQuetion3 = "На кого учился Максим?";
	const answersQuetion3 = [
		{ number: 1, value: "Программист" },
		{ number: 2, value: "Инженер" },
		{ number: 3, value: "Доктор" },
		{ number: 4, value: "Няня" },
	];
	const correctNumQuetion3 = 2;
	let question3 = new Question(textQuetion3, answersQuetion3, correctNumQuetion3);
	allQuestions.push(question3);

	const textQuetion4 = "Какой самый лучший язык программирования?";
	const answersQuetion4 = [
		{ number: 1, value: "C#" },
		{ number: 2, value: "PHP" },
		{ number: 3, value: "JS" },
		{ number: 4, value: "Python" }
	];
	const correctNumQuetion4 = 3;
	let question4 = new Question(textQuetion4, answersQuetion4, correctNumQuetion4);
	allQuestions.push(question4);

	askRandomQuestion(allQuestions,0);
})();

