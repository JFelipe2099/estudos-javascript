const answers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const displayScore = document.querySelector('.result');
// a mesma coisa que document.querySelector(), mas ao invés de procurar no documento inteiro, procura apenas nesta área
const span = displayScore.querySelector('span');

form.addEventListener('submit', event => {
    event.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === answers[index]){
            score += 25;
        }
    });

    // window.scrollTo(coordenada X, coordenada Y);
    // scrollTo(0, 0)
    // tem o mesmo resultado que o anterior, só que sobe com uma transição ao invés de simplesmente pular
    scrollTo({top: 0, left: 0, behavior: 'smooth'})
    displayScore.classList.remove('d-none');

    let i = 0;
    // parecido com setTimeout, a diferena é que executa constantemente em um intervalo de tempo. Se não tiver um clearInterval(), executa infinitamente. Colocamos setInterval dentro de uma varirável para podermos fazer o clearInterval.
    const timer = setInterval(() => {
        span.innerText = `${i}%`;

        if (i === score){
            clearInterval(timer);
        }
        i++
    }, 10);

    // window object
    // o window object, basicamente, é o objeto que contem toda a parte do front end do JavaScript

    // ambos tem o mesmo resultado
    // console.log('hello');
    // window.console.log('hello');

    // mais uma vez, tem o mesmo resultado
    // document.querySelector();
    // window.document.querySelector();

    // assim como nos exemplos anteriores, poderia colocar window.setTimeout()
    // setTimeout(função a ser executada, tempo em milesegundos)
    // executa uma vez após do tempo transcorrido
    // setTimeout(() => {
        // alert('hello');
    // }, 3000);
});