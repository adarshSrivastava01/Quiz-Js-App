window.onload = () => {

    const questions = [{
        question: 'Operators with the same precedence are evaluated in which manner?',
        choiceA: 'Left to Right',
        choiceB: 'Right to Left',
        choiceC: 'Can’t say',
        choiceD: 'None of the mentioned',
        correct: 'Left to Right'
    }, {
        question: 'What is the output of this expression, 3*1**3',
        choiceA: 27,
        choiceB: 9,
        choiceC: 3,
        choiceD: 1,
        correct: 3
    }, {
        question: 'Which of these in not a core data type?',
        choiceA: 'Lists',
        choiceB: 'Dictionary',
        choiceC: 'Tuples',
        choiceD: 'Class',
        correct: "Class"
    }, {
        question: 'What data type is the object > [1, 3.5, True]?',
        choiceA: 'Dictionary',
        choiceB: 'ByteArray',
        choiceC: 'Bool',
        choiceD: 'Lists',
        correct: "Lists"
    }, {
        question: 'In order to store values in terms of key and value we use what core data type.',
        choiceA: 'Dictionary',
        choiceB: 'Lists',
        choiceC: 'Integer',
        choiceD: 'Class',
        correct: "Dictionary"
    }];

    const currentQues = document.getElementById('quiz__question');
    const option1 = document.getElementById('quiz__option__1');
    const option2 = document.getElementById('quiz__option__2');
    const option3 = document.getElementById('quiz__option__3');
    const option4 = document.getElementById('quiz__option__4');

    function init() {
        currentQues.innerHTML = questions[0]['question'];
        option1.innerHTML = questions[0]['choiceA'];
        option2.innerHTML = questions[0]['choiceB'];
        option3.innerHTML = questions[0]['choiceC'];
        option4.innerHTML = questions[0]['choiceD'];
    }

    function showCurrentQuestion(i) {
    currentQues.innerHTML = questions[i]['question'];
    option1.innerHTML = questions[i]['choiceA'];
    option2.innerHTML = questions[i]['choiceB'];
    option3.innerHTML = questions[i]['choiceC'];
    option4.innerHTML = questions[i]['choiceD'];
    };

    function resetClass() {
        document.querySelector('.quiz__option__1').classList.remove('correct__answer');
        document.querySelector('.quiz__option__1').classList.remove('wrong__answer');
        document.querySelector('.quiz__option__2').classList.remove('correct__answer');
        document.querySelector('.quiz__option__2').classList.remove('wrong__answer');
        document.querySelector('.quiz__option__3').classList.remove('correct__answer');
        document.querySelector('.quiz__option__3').classList.remove('wrong__answer');
        document.querySelector('.quiz__option__4').classList.remove('correct__answer');
        document.querySelector('.quiz__option__4').classList.remove('wrong__answer');
    };

    function eventListener(i) {
        option1.addEventListener('click', ()=> {
            if(option1.textContent == questions[i]['correct']) {
                option1.classList.add('correct__answer');
                alert('Your Answer is Correct!!');
                i += 1;
                setTimeout(showCurrentQuestion(i), 3000);
                resetClass();
            } else {
                option1.classList.add('wrong__answer');
                setTimeout(showCurrentQuestion(i), 3000);
            }
        });
        option2.addEventListener('click', ()=> {
            if(option2.textContent == questions[i]['correct']) {
                option2.classList.add('correct__answer');
                alert('Your Answer is Correct!!');
                i += 1;
                setTimeout(showCurrentQuestion(i), 3000);
                resetClass();
            } else {
                option2.classList.add('wrong__answer');
                setTimeout(showCurrentQuestion(i), 3000);
            }
        });
        option3.addEventListener('click', ()=> {
            if(option3.textContent == questions[i]['correct']) {
                option3.classList.add('correct__answer');
                alert('Your Answer is Correct!!');
                i += 1;
                setTimeout(showCurrentQuestion(i), 3000);
                resetClass();
            } else {
                option3.classList.add('wrong__answer');
                setTimeout(showCurrentQuestion(i), 3000);
            }
        });
        option4.addEventListener('click', ()=> {
            if(option4.textContent == questions[i]['correct']) {
                option4.classList.add('correct__answer');
                alert('Your Answer is Correct!!');
                i += 1;
                setTimeout(showCurrentQuestion(i), 3000);
                resetClass();
            } else {
                option4.classList.add('wrong__answer');
                setTimeout(showCurrentQuestion(i), 3000);
            }
        });
    }

    init();
    eventListener(0);

}