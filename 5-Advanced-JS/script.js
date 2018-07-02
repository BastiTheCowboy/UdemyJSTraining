/////////////////////////////
// CODING CHALLENGE


(function() {
	var Question = function(nummer, frage, antworten, richtigeAntwort) {
		this.nummer = nummer;
		this.frage = frage;
		this.antworten = antworten;
		this.richtigeAntwort = richtigeAntwort;
	}

	Question.prototype.printme = function () {
		console.log(this.frage)
		for (var i = 0; i < this.antworten.length ; i++) {
			console.log(i + ': ' + this.antworten[i]);
		}
	}

	Question.prototype.right = function () {
		if (antwort == this.richtigeAntwort) {
			console.log(antwort + ' - Richtig !!!');
			score++;
		} else {
			console.log(antwort + ' - Falsch! Richtig ist: ' + this.richtigeAntwort);
		}
	}

	var Erste = new Question (0, 'Wer ist der Vater?', ['Basti', 'Mimi', 'Coco'], 0);
	var Zweite = new Question (1, 'Wer ist die Mutter?', ['Basti', 'Mimi', 'Coco'], 1);
	var Dritte = new Question (2, 'Wer ist das Kind?', ['Basti', 'Mimi', 'Coco'], 2);

	var Fragen = [Erste, Zweite, Dritte];
	var welcheFrage, antwort, score;

	score = 0;

	function nextQuestion () {
		welcheFrage = Math.floor(Math.random()*Fragen.length);
		console.log(welcheFrage);
		Fragen[welcheFrage].printme();
		antwort = prompt('Bitte Antwort eingeben:');
		if (antwort != 'exit') { 
			Fragen[welcheFrage].right();
			console.log('Your score is: '+ score);
			nextQuestion ();
		};
	}

	// var RandomQuestion = Math.floor(Math.random()*Fragen.length);

	// Erste.printme();

	// Fragen[RandomQuestion].printme();

	nextQuestion ();

})()


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/



