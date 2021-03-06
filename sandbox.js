// Sumário das aulas e seus assuntos

// Aula 06 - console
// Aula 07 - variáveis
// Aula 09 - strings
// Aula 10 - string methods
// Aula 11 - números
// Aula 12 - template strings
// Aula 13 - arrays
// Aula 14 - null e undefined
// Aula 15 - boolean e comparação
// Aula 16 - comparação estrita
// Aula 17 - conversão de tipo
// Aula 19 - for loop
// Aula 20 - while loop
// Aula 21 - do while loop
// Aula 22 - if
// Aula 23 - else & else if
// Aula 24 - operadores lógicos (&& and; || or)
// Aula 25 - NOT (tornar true em false e false em true !)
// Aula 26 - Break & Continue
// Aula 27 - switch statements
// Aula 28 - variaveis e escopo
// Aula 30 - função
// Aula 31 - argumentos e parametros
// Aula 32 - retonando valores
// Aula 33 - arrow functions
// Aula 34 - funções vs methods
// Aula 35 - foreach method & callbacks
// Aula 36 - fazendo uso de callback functions
// Aula 37 - Conceito textual de Objetos
// Aula 38 - Criando Object Literal
// Aula 39 - adicionando methods para o Object Literal
// Aula 40 - 'this' keyword
// Aula 41 - objects nas arrays
// Aula 42 - math object
// Aula 43 - primitive vs reference types
// Aula 44 - interagindo com o browser (nada)
// Aula 45 - DOM [Document Object Model] (nada)
// Aula 46 - query selector
// Aula 47 - outras formas de pegar elementos com o DOM
// Aula 48 - adicionando e alterando conteúdos da página
// Aula 49 - recolhendo e setando atributos
// Aula 50 - mudando estilos css
// Aula 51 - adicionando e removendo classes
// Aula 52 - parents, children, siblings
// Aula 53 - eventos básicos (eventos de click)
// Aula 54 - criando e removendo elementos
// Aula 55 - event bubbling (and delegation)
// Aula 56 - mais eventos do DOM
// Aula 57 - criando um popup (na pasta pop-up)
// Aula 58 - eventos dentro de formulários (nada)
// Aula 58 - eventos dentro de formulários
// Aula 59 - enviando eventos
// Aula 60 - expressões regulares
// Aula 61 - testando padrões RegEx (nada, tudo feito no curso de RegEx)
// Aula 62 - validação de formulário simples
// Aula 63 - eventos de teclas
// Aulas 54-70 - quiz project
// ------------------ ARRAY METHODS --------------------
// Aula 71 - método filter
// Aula 72 - método map
// Aula 73 - método reduce
// Aula 74 - método find
// Aula 75 - método sort
// Aula 76 - encadeando métodos
// -----------------------------------------------------
// Aulas 77-81 (todos project)
// ------------------ DATA E TEMPO ---------------------
// Aulta 82 - data e tempo
// Aula 83 - timestamp e comparação
// Aula 84 - construindo um relógio digital
// Aula 85 - biblioteca Date-fns
// ------------------ ASYNC JAVASCRIPT -----------------
// Aula 86 e 87 - O que Javascript Assíncrono? código Async em ação
// ------------------ HTTP REQUESTS --------------------
// Aula 88 - o que são http requests? (/mapas-conceituais/requisicoes_http.camp)
// Aula 89 - fazendo requisições http (XHR)
// Aula 90 - response status
// Aula 91 - callback functions para requesições http
// Aula 92 - dados JSON
// Aula 93 - callback hell
// Aula 94 - básico sobre promises
// Aula 95 - encadeando promises
// Aula 96 - a função Fetch API
// Aula 97 - Async & Await
// Aula 98 - throwing & catching erros
// ------------------ FIM DE ASYNC JAVASCRIPT -----------
// Aulas 99-108 Weather App
// Aula 109 - operador ternário
// ------------------ LOCAL STORAGE ---------------------
// Aula 110 - local storage
// Aula 111 - armazenando e pegando dados
// Aula 112 - apagando dados armazenados
// Aula 113 - stringifying & parsing data
// ------------------ OBJECT ORIENTED PROGRAMMING --------
// Aula 117 - classes
// Aula 118 - class constructors
// Aula 119 - class methods & method chaining
// Aula 120 - herança de classes (subclasse)
// Aula 121 - Super()
// -------- COMO CLASSS FUNCIONA (under the hood) --------
// Aula 122 - construtores (como funcionam de verdade)
// Aula 123 - prototype model
// Aula 124 - herança de prototype
// ----------- FIM OBJECT ORIENTED PROGRAMMING -----------


// Aula 06 - console

// console.log(1);
// console.log(2);





// Aula 07 - variáveis

// let, cria uma variável que o valor pode ser alterado depois no progama.
// let age = 21;
// let year = 2020;

// const, cria uma variável que o valor NÃO pode ser alterado depois no programa.
// const points = 100;

// var é a sintaxe mais antiga para se criar uma variável em JS. Melhor usar let, caso seja uma variável ou const se for uma constante e deixar var em paz.
// var score = 75;

// console.log(score);
// score = 32;
// console.log(score);

// console.log(age, year);

// age = 32;
// console.log(age);

// console.log(points);

// retorna um erro, uma vez que não podemos alterar o valor de uma variável constante.
//points = 99;





// Aula 9 - strings
// console.log('hello, world');

// let email = 'joaofelipe2099@hotmail.com';
// console.log(email);

// Concatenação
// let firstName = 'João';
// let lastName = 'Silva';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// Pegando caracter 
// console.log(firstName[0]);
// Para slicing usar .slice
// console.log(lastName.slice(0, 3));

// Tamanho de string
// console.log(fullName.length);

// String methods
// console.log(lastName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log(result);

// let index = email.indexOf('@');
// console.log(index);





// Aula 10 - string methods
// let email = 'joaofelipe0www01@hotmail.com';
// let result = email.lastIndexOf('e');

// let result = email.slice(0, 10);

// slice(do index, up to but not including index)
// substr(do index, até completar quantidade de caracteres)
// let result = email.substr(4, 10);

// apenas a primeira aparição
// let result = email.replace('e', '#');

// includes procura por uma substring em uma string maior
// let result = email.includes('felipe')

// console.log(result);




// Aula 11 - números
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %
// console.log(10 / 2);

// let result = radius % 3;
// let result = pi * radius ** 2;
// console.log(result);
// order of operation: (), **, / *, + -

// let likes = 10;
// igual python
// likes += 1;
// soma 1
// likes++;
// subtrai 1
// likes--;

// console.log(likes);


// NaN

// retorna NaN (Not a Number). Sginifica que orroceu algum erro.
// console.log(5 / 'hello');

// let result = 'the blog has '+ likes + ' likes';
// console.log(result);




// Aula 12 - template strings
// template strings
// const title = 'Harry Potter and the Half-Blood Prince';
// const author = 'J.K Rowling';
// const likes = 9000000;

// concatenação
// let result = 'The book ' + title + ' by ' + author + ' has sold ' + likes + '+ copies.';
// template string
// let result = `The book ${title} by ${author} has sold ${likes}+ copies.`;

// console.log(result);

// criando tamplate html
// let html = `
//     <h2>${title}</h2>
//     <p>${author}</p>
//     <span>This book has ${likes}+ copies sold</span>
// `;
// document.write(html);




// Aula 13 - arrays

// básicamente, é uma lista do python
// let ninjas = ['shuan', 'ryu', 'chun-li'];
// console.log(ninjas.length);

// array methods
// let result = ninjas.join('#');
// let result = ninjas.indexOf('ryu');
// let result = ninjas.concat(['jackie chan', 'crystal', 'ken']);

// faz um append na lista e retorna o número de elementos
// let result = ninjas.push('ken');
// remove o último elemento
// result = ninjas.pop();

// console.log(result, ninjas);

// ninjas[1] = 'jackie chan';

// console.log(ninjas);

// let ages = [21, 25, 30, 35];
// console.log(ages.slice(1, 3));

// let random = ['shaun', 'crystal', 21, 16];
// console.log(random);




// Aula 14 - null e undefined

// dessa forma, age irá, automaticamente, assumir o valor de undefined. este, é simplesmente um valor que o brawser passa para ele. Neste caso no console.log, nós teremos com resposta undefined NaN (já que não é um valor válido ocorre um erro na soma, thus NaN) undefined.
// let age;

// null, é um valor explicito que passamos. Neste caso no console.log, nós teremos null 3 (quando passamos null, para fórmulas matemáticas, é como se tivessimos passado o valor 0) null.
// let age = null;

// console.log(age, age + 3, `the age is ${age}`);




// Aula 15 - boolean e conparação
// console.log(true, false);

// metodos rodam valores boolean
// let email = 'joaofelipe@hotmail.com';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('!');
// let result = names.includes('toad');
// console.log(result);

// operadores de comparação
// let age = 21;
// console.log(age == 21);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age <= 21);




// Aula 16 - comparação estrita
// let age = 21;

// observação: == e ===, fazem algo bem parecido. A diferença entre eles, é que == vai comparar os valores sem observar o data type, já ===, vai levar o data type em consideração.

// diferente de python, retornará true, já que os valores são iguais, mesmo que um seja int e o outro str.
// console.log(age == '21');
// esse sim retornará falso, tendo o mesmo comportamento que python, pois aqui, JS está levando em consideração os tipos.
// console.log(age === '21');
// console.log(age !== '21');




// Aula 17 - conversão de tipo
// let score = '100';

// conversão de string para número
// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = String(50);
// console.log(result, typeof result);




// Aula 19 - for loop
// for (let i = 0; i < 5; i+=2){
//     console.log(i);
// }

// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// não funciona tão bem quanto em python, mas dá pro gasto
// for (name in names){
//     console.log(names[name]);
// }

// let html = '';
// let n = 1;
// for (let i = 0; i < names.length; i++){
//     html += `<h${n}>${names[i]}</h${n}>`;
//     console.log(html);
//     n++;
// }

// document.write(html);




// Aula 20 - while loop
// let i = 0;
// while (i < 5){
//     console.log(i);
//     i++;
// }

// const names = ['luigi', 'shaun', 'mario'];

// let i = 0;
// let html = '';
// let n = 1;
// while (i < names.length){
//     html += `<h${n}>${names[i]}</h${n}>`;
//     let display = `<h${n}>${names[i]}</h${n}>`;
//     console.log(display);
//     i++;
//     n++;
// }

// document.write(html);




// Aula 21 - do while loop

// dada as condições, o código dentro do loop nunca ser´´a executado, uma vez que o valor de i é 5.
// let i = 5;
// while (i < 5){
//     console.log(`value of i: ${i}`);
//     i++;
// }
// console.log('loop finished');

// para que o código anterior dentro do loop seja executado pelo menos uma vez, usaremos DO WHILE LOOP. Nós dizemos o que queremos que aconteça primeiro e só então criamos a condição do loop. Dessa forma nós garantimos que o código será executado ao menos uma vez.
// let i = 5;
// do{
//     console.log(`value of i: ${i}`);
//     i++;
// }
// while (i < 5);




// Aula 22 - if
// const age = 39;

// if (age > 20){
//     console.log('You can buy bear');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'youshi'];

// if (ninjas.length > 3){
//     console.log("That's a lot of ninjas");
// }

// const password = 'passmethesalt';

// if (password.length >= 8){
//     console.log('That password is long enough');
// }


// Aula 23 - else & else if
// const password = 'passmethesalt';

// if (password.length >= 12){
//     console.log('This password is really STRONG');
// }
// else if (password.length >= 8){
//     console.log('That password is long enough');
// }
// else{
//     console.log('Password not long enough');
// }




// Aula 24 - operadores lógicos (&& and; || or)
// const password = 'p@ss';

// if (password.length >= 12 || password.includes('@')){
//     console.log('This password is really STRONG');
// } else if (password.length >= 8){
//     console.log('That password is long enough');
// } else{
//     console.log("That's not long enough");
// }




// Aula 25 - NOT (tornar true em false e false em true !)
// if (!false){
//     console.log('This makes this true');
// }

// console.log(!true);
// console.log(!false);




// Aula 26 - Break & Continue
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++){
//     if (scores[i] === 0){
//         // continue vai continuar o loop mas, ignorar o código dessa interação.
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if (scores[i] === 100){
//         console.log('Congratulations, you got the top score!');
//         break;
//     }
// }




// Aula 27 - switch statements
// const grade = 'A';

// if (grade === 'A'){
//     console.log('You got an A!');
// } else if (grade === 'B'){
//     console.log('You got a B!');
// } else if (grade === 'C'){
//     console.log('You got a C!');
// } else if (grade === 'D'){
//     console.log('You got a D!');
// } else if (grade === 'E'){
//     console.log('You got an E!');
// } else if (grade === 'F'){
//     console.log('You got an F!');
// }


// switch(variável a ser observada) -> faz basicamente as mesma coisa que if, else if & else. Simplesmente, é uma estrutura mais enxuta

// TEM que colocar um break, do contrário, quando encontrar um valor que bate, ele irá executar aquele valor e todos os outros que vier depois.
// default, funciona como o else
// switch(grade){
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got a B!');
//         break;
//     case 'C':
//         console.log('You got a C!');
//         break;
//     case 'D':
//         console.log('You got a D!');
//         break;
//     case 'E':
//         console.log('You got an E!');
//         break;
//     case 'F':
//         console.log('You got an F!');
//         break;
//     default:
//         console.log('Not a valid grade!');
// }




// Aula 28 - variaveis e escopo
// cria uma variável de escopo global
// let age = 30;

// isso não será permitido, retornando um erro. Isso acontece porque a declaração e definição, está sendo feita em um escopo onde, essa variável já foi declarada e definida
// let age = 21;

// if (true) {
    // mudou de forma gobal
    // age = 40;

    // aqui não haverá problmas, uma vez que essa variável passa a ter um escopo local, o que significa, que age só recebe o valor 21, dentro do if
    // let age = 21;
    // console.log('Inside 1st code block:', age);

    // if (true){
        // age irá assumir o valor de 66 apenas aqui pois, mais uma vez, estamos criando uma variável de escopo local que é único a esse if.
        // let age = 66;
        // console.log('Inside the 2nd code block:', age);
    // }
// }

// console.log('Outside code block:', age);




// Aula 30 - função
// function greet(){
//     console.log('Hello, world!');
// }

// Function Expression
// Quando temos uma Function Expression, nós colocamos ; depois de }
// const speak = function(){
//     console.log('Good day!');
// };

// speak();
// speak();
// speak();

// greet();
// greet();
// greet();

// Isso funciona por causa do hoisting
// kratos();

// function kratos(){
//     console.log('I am the god of war!');
// }

// Isso não funciona porqeu, function expression não recebe hoisting
// zeus();

// zeus = function(){
//     console.log("I'm the most powerfull god!");
// };




// Aula 31 - argumentos e parametros

// function func_name(parametro);
// func_name(argumento);
// function speak(name = 'visitor'){
//     console.log(`Have a good day, ${name}!`);
// }

// speak();
// speak('Marshall');




// Aula 32 - retonando valores
// const areaCircle = function(radius = 1){
//     let area = Math.PI * (radius ** 2);
//     return area.toFixed(2);
// };

// let result = areaCircle(7);
// console.log(result);




// Aula 33 - arrow functions

// uma arrow function é apneas uma forma mais reduzida de escrever uma função. Se na arrow function só tivermos 1 parâmetro, podemos omitir os parenteses mas, se tiver mais de um ou nenhum parametro, os parenteses são obrigatórios.
// simplificando ainda mais, podemos tirar as chaves e o return se colocarmos o que deve ser retornado na mesma linha que a arrow (=>) está
// const areaCircle = radius => (Math.PI * (radius ** 2)).toFixed(2);

// let a = areaCircle(21);
// console.log(a);

// Praticando arrow functions
// const greet = () => 'Hello, world!';

// const message = greet();
// console.log(message);


// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total.toFixed(2).replace('.', ',');
// };

// const pay = bill([10, 15, 30], 0.2);
// console.log('Total a pagar: R$' + pay);




// Aula 34 - funções vs methods
// const name = 'shaun';

// funções
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// methods - são funções relacionadads com um objeto
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);




// Aula 35 - foreach method & callbacks
// callback, é um callback function. O que siginifica, que passamos uma funrção como argumento em outra função

// const myFunc = callbackFunc => {
//     let value = 21;
    // é uma função que ainda não existe e será passda como argumento, quando myFunc, for chamada.
//     callbackFunc(value);
// };

// criei a função como uma função anônima no python, como uma função lambda.
// myFunc(function(value){
//     console.log(value);
// });

// dá pra fazer a mesma coisa do anterior com uma arrow function

// myFunc(value => console.log(value * 2));

// foreach
// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// o método forEach, tem o mesmo efeito que (for name in people), dessa vez retornando os valores ao invés do index. Mas também retorna o index se quiser, como o segundo valor.
// people.forEach((person, index) => console.log(index, person));




// Aula 36 - fazendo uso de callback functions
// const ul = document.querySelector('.people');
// let names = ['Victor', 'Allan', 'Arthur', 'Mateus'];
// let linha = '';

// names.forEach(person => {
//     linha += `<li>${person}</li>`;
// });

// ul.innerHTML = linha;




// Aula 37 - Conceito textual de Objetos

// Objetos em JS funcionam como objetos na vida real. Ambos tem propiedades e coisas que podem fazer. Um celular por exemplo, suas propriedades são: cor, marca, tamanho. Já o que pode fazer: fazer ligações, tirar fotos, ouvir música.
// Um objeto tem as mesmas coisas, propriedades e coisas que pode fazer, que chamamos de methods. Um objeto de usuário tem como propriedade: email, nome, idade. Já como method: login, logout, delete account.

// Essa idéia é transferível para qualquer linguagem de programação, incluindo Python.




// Aula 38 - Criando Object Literal
// isso é um dicionário, mas acessamos ele como um objeto com dot notation
// let user = {
//     name: 'Felipe',
//     age: 21,
//     email: 'joaofelipe2099@hotmail.com',
//     location: 'Brazil',
//     blogs: ['old song are better than new ones', 'love the guitar']
// };

// console.log(user);
// console.log(user.email);

// podemos mudar os valores simplesmente da seguinte maneira

// user.location = 'USA';
// console.log(user);

// também dá para acessar os valores como nos dicionários em python, da mesma forma, dá para trocar valores
// console.log(user['age']);
// user['email'] = 'joaofelipe0www01@hotmail.com';
// console.log(user);

// console.log(typeof(user));




// Aula 39 - adicionando methods para o Object Literal
// Aula 40 - 'this' keyword

// objeto user
// let user = {
//     name: 'Felipe',
//     age: 21,
//     email: 'joaofelipe2099@hotmail.com',
//     location: 'Brasil',
//     books: ['A Batalha do Apocalipse', 'OZOB'],
//     login: function(){
//         console.log('The user loged in');
//     },
//     logout: function(){
//         console.log('The user logged out');
//     },
//     // para criar um method, não é necessário escrever function, dessa forma já está válido
//     logBooks(){
//         // sem o 'this', aconteceria um erro
//         // funciona como o self nas classes em python
//         // 'this' possui diferentes valores dependendo de onde estiver. Aqui, ele vale o objeto 'user'. Fora desse objeto, ele valerá o objeto 'window'
//         this.books.forEach((book, index) => console.log(`${index + 1}: ${book}`));
//     }
// };

// user.login();
// user.logBooks();
// user.logout();

// console.log(this);




// Aula 41 - objects nas arrays

// como podemos ver, podemos guardar objetos dentro de uma array. Vamos substituir a array simples dentro de reader por uma array que contem objetos
// const books = [
//     {title: 'Filhos do Éden', author: 'Eduardo Spohr'},
//     {title: 'OZOB', author: 'Leonel Caldela & Deive Pazos'}
// ];

// console.log(books);

// let reader = {
//     name: 'Felipe',
//     age: 21,
//     email: 'joaofelipe2099@hotmail.com',
//     location: 'Brasil',
//     books: [
//         {title: 'Filhos do Éden', author: 'Eduardo Spohr'},
//         {title: 'OZOB', author: 'Leonel Caldela & Deive Pazos'}
//     ],
//     login(){
//         console.log('The user logged in');
//     },
//     logout(){
//         console.log('The user logged in');
//     },
//     logBooks(){
//         console.log('This user has read the following books:');
//         this.books.forEach((book, index) => console.log(`${index + 1}: ${book.title} by ${book.author}`));
//     }
// }

// reader.logBooks();




// Aula 42 - math object
// Pensar como os módulos em python
// console.log(Math.PI);
// número de Euler
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// random numbers

// const random = Math.random();
// console.log(random);
// console.log(Math.floor(random * 11));




// Aula 43 - primitive vs reference types

// funciona como esperávamos
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`);
// console.log(`scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`);
// console.log(`scoreTwo: ${scoreTwo}`);

//

// como podemos observar, quando mudamos a propriedade valor no playerOne, também mudamos no playerTwo. Isso acontece porque não é criado uma nova cópia, mas sim, uma referência a um objeto. Muito parecido com as listas no python que precisamos colocar listName.copy(), do contrário criamos uma ligação entre as duas e a alteração que fizermos em uma, será efetuada em todas.
// const playerOne = {
//     name: 'Kratus',
//     lifePoints: 1000000
// }

// const playerTwo = playerOne;

// console.log(`playerOne: ${playerOne.name}`);
// console.log(`playerTwo: ${playerTwo.name}`);

// playerOne.name = 'Atreus';

// console.log(`playerOne: ${playerOne.name}`);
// console.log(`playerTwo: ${playerTwo.name}`);




// Aula 44 - interagindo com o browser (nada)

// Aula 45 - DOM [Document Object Model] (nada)

// Aula 46 - query selector

// pegar elementos do DOM (página)
// seleciona o primeiro que aparecer
// querySelector(seletor como no css)
// const paragraph = document.querySelector('#error');

// a diferença desse para o anterior, é que este seleciona todas as ocorrencias do seletor que nós queremos. Além de retornar uma NodeList. OBS.: NodeList NÃO é uma array
// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(paragraph => console.log(paragraph));

// console.log(paragraphs[1]);




// Aula 47 - outras formas de pegar elementos com o DOM

// pelo ID
// const title = document.getElementById('page-title');
// console.log(title);
// pela CLASSE
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// console.log(errors[1]);
// pela TAG
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[0]);
// console.log(paras[1]);




// Aula 48 - adicionando e alterando conteúdos da página

// const para = document.querySelector('p');
// a diferença entre innerText e innerHTML, é que com o innerText, ao escrevermos tags, elas não terão funcionalidade e irá aparecer como texto
// para.innerText = ' Goodbye cruel world!';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += ' ;)';
// });

// let content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new h2</h2>';

// const people = ['Mario', 'Luigi', 'Yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });




// Aula 49 - recolhendo e setando atributos
// const link = document.querySelector('a');

// essa é a forma de recolher um atributo
// console.log(link.getAttribute('href'));
// essa é a forma de setar um atributo
// setAttribute(atributo, vaalor para o atributo)
// link.setAttribute('href', 'https://www.youtube.com');
// console.log(link.getAttribute('href'));
// link.innerText = 'YouTube';

// vai retornar null, porque o primeiro 'p', não tem uma class
// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', "Yow I'm a class");
// msg.setAttribute('style', 'color: orange');




// Aula 50 - mudando estilos css
// const title = document.querySelector('h1');
// esse comando, vai alterar as margins do h1, o problema, é que vai remover a cor dele.
// title.setAttribute('style', 'margin: 50px');

// para que isso não aconteça, nós usamos a propriedade style
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.color = 'crimson';
// quando for usar atributos css que são separados com ifem, usar camocasing. Se continuar errado, bastar olhar todas as propriedades de style console.log(title.style)
// title.style.fontSize = '60px';
// title.style.fontFamily = 'Courier';

// para remover uma propriedade, basta setar para uma string vazia
// title.style.margin = '';





// Aula 51 - adicionando e removendo classes
// const content = document.querySelector('p');

// lista de classes no objeto
// console.log(content.classList);
// adiciona classes ao objeto
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// DESAFIO DA AULA
// const paras = document.querySelectorAll('p');

// pode ocorrer problemas com o innerText, porque ele so mostra os textos visíveis em uma página. Então se tivéssimo  <span style: "display: none;">error</span>, innerText não iria considerar e onde tinha o error, não iria receber a classe. Para resolver esse problemas, podemos usar textContent.
// paras.forEach(para => {
//     if (para.innerText.includes('error')) {
//         para.classList.add('error');
//     } else if (para.innerText.includes('success')) {
//         para.classList.add('success');
//     } else {
//         console.log(para);
//     }
// });

// além de add e remove, nós temos toggle, que caso o objeto tenha a classe em questão, ela será removida e caso não tenha, ela será adicionada.

// const title = document.querySelector('h1');

// adiciona, uma vez que h1 não tem a classe test
// title.classList.toggle('test');
// remove, já que h1 tem a classe test
// title.classList.toggle('test');




// Aula 52 - parents, children, siblings
// const article = document.querySelector('article');
// retorna coleção html de todos os elementos filhos do blco article
// console.log(article.children);

// pega a coleção html e converte para uma array
// not in place
// console.log(Array.from(article.children));

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });

// const title = document.querySelector('h2');
// retorna o elemnto pai da tag
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);

// procura pelo elemnto irmão após da tag
// console.log(title.nextElementSibling);
// procura pelo elemnto irmão antes da tag
// nesse caso retora null, já que não tem um elemento irmão antes dele
// console.log(title.previousElementSibling);

// da pra fazer um encadeamento longo com as propriedades
// console.log(title.nextElementSibling.parentElement.children);




// Aula 53 - eventos básicos (eventos de click)
// const button = document.querySelector('button');

// monitora o elemento para o caso de determinado evento ocorra
//.addEventListener(evento, função);
// button.addEventListener('click', () => console.log('You clicked me'));

// const items = document.querySelectorAll('li');

// items.forEach(li => li.addEventListener('click', event => {
    // como eu fiz
    // li.style.textDecoration = 'line-through';
    // li.style.backgroundColor = 'limegreen';

    // event, é um parametro automático dado pelo browser, quando o evento do addEventListener ocorre
    // o target, mostra o que contem no elemento em que o evento ocorreu
    // console.log(event);
    // console.log(event.target);

    // como o instrutor sugere
    // manual
    // event.target.style.textDecoration = 'line-through';
    // event.target.style.backgroundColor = 'limegreen';

    // através de classes
    // event.target.classList.toggle('done');
// }));




// Aula 54 - criando e removendo elementos
// const ul = document.querySelector('ul');
// remove o elemento da página.
// ul.remove();

// const items = document.querySelectorAll('li');
// const button = document.querySelector('button');

// IMPORTANTE!!! Os elementos adicionados posteriormente, não receberão o addEventListener, então a mudança de cores ou remoção não irá funcionar para eles. Para que isso funcione, refereir a próxima aula
// button.addEventListener('click', () => {
    // tem essa opção
    // ul.innerHTML += '<li>something new</li>'

    // essa é a recomendada pelo instrutor
    // .createElement(tag a ser criada)
    // const li = document.createElement('li');
    // mesma coisa que innerText. Lembrando a vantagem de usar textContent, é que ele mostra todo texto, mesmo que tenha sido ocultado
    // li.textContent = 'something new todo';
    // adiciona ao fim
    // ul.append(li);
    // adiciona no inicio
    // ul.prepend(li);
// });

// items.forEach(item => item.addEventListener('click', event => {
    // event.target.classList.toggle('done');
    // event.target.remove();
// }));





// Aula 55 - event bubbling (and delegation)
// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
// const todo = document.querySelector('[type=text]');

// button.addEventListener('click', () => {
    // const li = document.createElement('li');
    // li.textContent = 'something new to do';
//     li.textContent = todo.value;
//     ul.append(li);
//     todo.value = '';
// });

// const items = document.querySelectorAll('li');


// event bubbling significa que quando um evento ocorre em um elemento, imediatamente depois, a página procura pelo elemento pai e verifica se tem um event listener, se tiver, ele é excutado e a página irá procurar pelo próximo elemento parente e executar a callback function do event listener, até que não existam mais eventos e parentes
// items.forEach(li => li.addEventListener('click', event => {
    // console.log('event in LI');
    // esse comando para o bubbling, então depois de executar essa callback function, a página não seguirá para o event listener do ul
    // event.stopPropagation();
    // event.target.remove();
// }));


// adiciona um evento para cada li pode dar problemas de carregamnto da página entre outras coisas então, ao invés de adicionar eventos individuas, podemos fazer um DELEGATION, onde ul irá por si só ser responsável por monitorar cada elemento detro dela, ou seja, monitorar cada li e seu bloco.
// nesse caso o bubbling entra em ação, quando clicamos em um li, acontece um bubble up e procuramos pela callback function do ul e a executamos
// ul.addEventListener('click', event => {
    // verifica se o nome da tag, é li, caso seja, nós a removemos se não, o bubble up ainda acontece, mas não vai ver alteração, já que nada foi especificado
//     if (event.target.tagName === 'LI'){
//         event.target.remove();
//     }

//     console.log(event.target);
// });




// Aula 56 - mais eventos do DOM
// const copy = document.querySelector('.copy-me');
// const box = document.querySelector('.box');

// copy.addEventListener('copy', () => {
//     console.log('Oi! I have copyright');
// });

// box.addEventListener('mousemove', event => {
//     box.innerHTML = `${event.x}, ${event.y}`;
// });

// document.addEventListener('wheel', event => {
//      console.log(event.x, event.y);
// });




// Aula 57 - criando um popup (na pasta pop-up)




// Aula 58 - eventos dentro de formulários (nada)




// Aula 59 - enviando eventos
// adicionaos eventos ao form
// const form = document.querySelector('.signup-form');
// const unsername = document.querySelector('#username');

// vai escutar pelo evento submit, que ocorrerá quando o input de type submit for clicado.
// form.addEventListener('submit', event => {
    // faz com que a ação padrão não seja executada
    // event.preventDefault();
    // console.log(unsername.value);
    
    // dessa forma, não precisamos criar uma referência ao input. Para que isso ocorre, basta que dentro do form que referenciamos tennha um input com um id ou name
    // console.log(form.username.value);
// });



// Aula 60 - expressões regulares (nada, assistir curso do net nija no youtube)
// pasta regex-study, tem tudo que precisa sobre regex




// Aula 61 - testando padores RegEx (nada, tudo feito no curso de RegEx)




// Aula 62 - validação de formulário simples
// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');

// form.addEventListener('submit', event => {
//     event.preventDefault();

//     usernamePattern =  /^[a-zA-Z]{6,12}$/

//     if (usernamePattern.test(form.username.value)){
//         feedback.innerText = 'Great';
//     } else{
//         feedback.innerText = 'Invalid username';
//     }
// });




// Aula 63 - eventos de teclas
// const form = document.querySelector('.signup-form');

// form.username.addEventListener('keyup', event => {
//     const regex = /^([a-z\d\.]+)@([a-z]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
//     const email = event.target.value;

//     if (regex.test(email)){
//         form.username.style.border = 'solid 5px limegreen';
//     } else{
//         form.username.style.border = 'solid 5px crimson';
//     }
// });




// Aulas 54-70 - quiz project




// Aula 71 - método filter
// const scores = [10, 30, 15, 25, 50, 40, 5];

// o método filter recebe como parametro uma call bakc function que deve retornar verdadeiro ou falso. Nos casos que retornar verdadeiro, ele mantém, e os que forem falsos, ele removo. Filter é non destructive, o que significa que não altera a lista em si, mas retorna os valores que sobraram nela, por isso precisamos salvar em outra variável
// let a = scores.filter(score => {
//     return score % 2 !== 0;
// });

// console.log(a);

// const users = [
//     {name: 'Felipe', premium: true},
//     {name: 'Arthur', premium: false},
//     {name: 'Victor', premium: false},
//     {name: 'Mateus', premium: true}
// ];

// console.log(users[1]['premium']);

// const premiumUsers = users.filter(user => {
    // ambos tem o mesmo resultado
    // return user.premium
    // return user['premium'] === true;
// });

// mesmo resultdado que o exemplo anterior
// const premiumUsers = users.filter(user => user.premium);

// console.log(premiumUsers);




// Aula 72 - método map
// const prices = [20, 10, 30, 25, 15, 40, 80,  5];

// o método map recebe uma call back function e retorna todos os valores com a alteração especificada na call back function. Non destructive
// const salePrices = prices.map(price => price / 2);

// console.log(salePrices);

// outro exemplo
// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mushroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50}
// ];

// const saleProducts = products.map(product => {
//     if (product.price > 30){
//         return {name: product.name, price: product.price / 2};
//     } else{
//         return product;
//     }
// })

// console.log(saleProducts);




// Aula 73 - método reduce
// const scores = [10, 20, 60, 40, 70, 90, 30];

// o método reduce recebe uma call back function e não retorna uma array, mas sim um número. Este número, será a quantidade de vezes que o que estamos observando aconteceu. No exemplo abaixo, será o total de scores acima de 50.
// .reduce(func(contador, param2), valor inicial do contador)
// const result = scores.reduce((contador, num) => {
//     if (num > 50){
//         contador++;
//     }

//     return contador;
// }, 0);

// é mesma cois do de cima e não e confuso. MINHA OPNIÃO, NÃO A DO INSTRUTOR
// const reducedScores = scores.filter(num => num > 50).length;

// console.log(result);

// outro exemplo
// const scores = [
//     {player: 'mario', score: 50},
//     {player: 'yoshi', score: 30},
//     {player: 'mario', score: 70},
//     {player: 'crystal', score: 60}
// ];

// // pra esse caso, reduce funciona melhor
// const mario = scores.reduce((contador, curr) => {
//     if (curr.player === 'mario'){
//         contador += curr.score;
//     }

//     return contador;
// }, 0);

// console.log(mario);




// Aula 74 - método find
// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// o método find recebe uma call back function que procura por um valor especificado de forma lógica, no exemplo abaixo se for maior que 50. Quando ecnontrar, se encontrar, o valor será retornado e o método para, não avaliando os outros valores da array
// const result = scores.find(num => num > 50);

// console.log(result);




// Aula 75 - método sort
// exemplo 1
// const names = ['mario', 'shaun', 'lugi', 'chun-li', 'yoshi'];

// // o método sort, tem um algoritimo que roda por padrão que organiza a array em ordem alfabética. Esse método é destructive. Takes in place.
// names.sort();
// // self explanatory
// names.reverse();

// console.log(names);
// // exemplo 2
// const scores = [10, 50, 20, 5, 35, 70, 45];
// // dessa forma ele coloca os números do menor para o maior mas, existe um problema. O método só olha para o primeiro número então, se o número tiver mais de 1 dígito, o método, nessa forma, irá ignorar os outros dígitos.
// scores.sort((a, b) => a - b);

// console.log(scores);
// // exemplo 3
// const players = [
//     {name: 'mario', score: 10},
//     {name: 'luigi', score: 70},
//     {name: 'chun-li', score: 50},
//     {name: 'yoshi', score: 20},
//     {name: 'shaun', score: 30}
// ];

// // como dentro de players estão guardados objetos, sort não sabe o que fazer, por iso passamos uma função de comparação.
// // players.sort((a, b) => {
//     // if (a.score > b.score){
//         // para a vir antes de b
//         // return -1;
//     // } else if (b.score > a.score){
//         // para b vir antes de a
//         // return 1;
//     // } else {
//         // não precisa mudar de lado
//         // return 0;
//     // }
// // });

// // resulta na mesma coisa por causa da lógica. Se (b - a) > 0, b vem primeiro. Se (b - a) < 0, a vem primeiro. Se (b - a) = 0, não precisa mudar
// players.sort((a, b) => b.score - a.score);

// console.log(players);




// Aula 76 - encadeando métodos
// const products = [
//     {name: 'gold star', price: 30},
//     {name: 'green shell', price: 10},
//     {name: 'red shell', price: 40},
//     {name: 'banana skin', price: 5},
//     {name: 'mushroom', price: 50}
// ];

// // feito dessa forma por questões de facilitar a leitura
// const promo = products
//     .filter(product => product.price > 20)
//     .map(product => `The ${product.name} is US$${product.price / 2}`);

// console.log(promo);





// Aulas 77-81 (todos project)




// Aulta 82 - data e tempo
// const now = new Date();
// console.log(now);

// // métodos para, ano, mês, dia, tempo
// console.log('getFullYear: ', now.getFullYear());
// // janeiro === 0
// console.log('getMonth: ', now.getMonth());
// console.log('getDate: ', now.getDate());
// // domingo === 0
// console.log('getDay: ', now.getDay());
// console.log('getHours: ', now.getHours());
// console.log('getMinutes: ', now.getMinutes());
// console.log('getSeconds: ', now.getSeconds());

// // timestamps
// // número de milisegundos desde 01 de Janeiro de 1970 até hoje
// console.log('timestamp: ', now.getTime());

// // strings de data
// console.log(now.toDateString());
// console.log(now.toTimeString());
// // data e hora
// console.log(now.toLocaleString());




// Aula 83 - timestamp e comparação
// const before = new Date('January 30 1999 17:08:00');
// const now = new Date();

// // console.log(now.getTime(), before.getTime());

// const diff = now.getTime() - before.getTime();
// console.log(diff);

// const mins = Math.round(diff / (60 * 1000));
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);
// console.log(mins, hours, days);
// if (days >= 365){
//     console.log(Math.round(days / 365));
// }

// console.log(`The blog was writen ${days} ago`);

// // convertendo um timestamp em um date object
// const timestamp = 1675938474990;
/// console.log(new Date(timestamp));




// Aula 84 - construindo um relógio digital

// meu código antes da aula
// const now = new Date();

// let s = now.getSeconds();
// let m = now.getMinutes();
// let h = now.getHours();

// // console.log(`${h}:${m}:${s}`);
// const clock = setInterval(() => {
//     document.body.innerHTML = `${h}:${m}:${String(s++).padStart(2, '0')}`;

//     if (s === 60){
//         m++;
//         s = 0;
//     }
//     if (m == 60){
//         h++;
//         m = 0;
//     }
// }, 1000);

// meu código durante a aula
// const tick = () => {
//     const now = new Date();
//     document.body.innerHTML = now.toTimeString().split(' ')[0];
// };

// const clock = setInterval(tick, 1000);

// código do instrutor
// const div = document.querySelector('.clock');

// const tick = () => {
//     const now = new Date();
    
//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();

//     const html = `
//         <span>${h}</span> : 
//         <span>${m}</span> : 
//         <span>${s}</span>
//     `;

//     div.innerHTML = html;
// };

// const clock = setInterval(tick, 1000);




// Aula 85 - biblioteca Date-fns
// const now = new Date();

// // console.log(dateFns.isToday(now));

// // opções de formatação das datas
// console.log(dateFns.format(now, 'YYYY'));
// console.log(dateFns.format(now, 'MMM'));
// console.log(dateFns.format(now, 'dddd'));
// console.log(dateFns.format(now, 'Do'));
// console.log(dateFns.format(now, 'dddd Do, MMMM YYYY'));

// // comparando datas
// const before = new Date('January 30 2020 08:36:00');
// // o terceiro parâmetro, é opcional. É um ojeto.
// console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));




// Aula 86 e 87 - O que Javascript assíncrono? código Async em ação

// // primeiro devemos entender que o Javascript é uma linguagem de programação sincrona, o que significa que ela executa seus comando em linha reta, um após o outro, sem pular e depois voltar nele.
// // Ex.: será executado um de cada vez. log -> 1 2 3 4
// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);

// // mas isso pode trazer alguns problemas como, demora no carregamento de uma página. Imagine que um dos comandos precisa acessar um banco de dados e carregar informações, isso pode demorar alguns segundo e dessa forma, o Javascript terá que esperar até que esse comando seja termianado, até que o próximo comando possa ser executado. Aí é que entra o Javascript assíncrono, com ele nós podemos executar esses comando e quando encontre um comando que demorará um tempo até que ele termie, o Javascript vai deixar ele rodando no background, enquanto executa os outros que pode ser executados rápidamente, e quando o que precisava esperar estiver pronto, será executado através de um callback.
// // Ex.: log -> 1 2 3 4 [(callback function fires) : depois de 3 segundos]
// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log('callback function fired')
// }, 3000);
// console.log(3);
// console.log(4);

// // no exemplo acima, nós podemos ver que setTimeout tem um comportamento assíncrono, deixando que os outros sejam executados, mesmo que ele venha antes deles e mesmo que ele tenha que esperar um tempo.




// Aula 88 - o que são http requests? (/mapas-conceituais/requisicoes_http.camp)




// Aula 89 - fazendo requisições http (XHR)
// const request = new XMLHttpRequest();

// // esse evento vai ser disparado toda vez que ouver uma mudança no estado do nosso request. Mudança de estado === diferentes fases do request (4 fases no total)
// request.addEventListener('readystatechange', () => {
//     // readyState === estado em que o request está
//     // console.log(request, request.readyState);

//     // nesse estado podemos manipular os dados, antes dele, não.
//     if (request.readyState === 4){
//         // responseText  retorna json no formato string
//         console.log(request.responseText);
//     }
// });

// // esse aqui só arma o request que nós queremos fazer. O primeiro param é o tipo de método que queremos usar e o segundo é onde nós queremos usar esse método.
// // iremos usar o método GET no site, procurando todos os todos
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// // com o método send, é que fazemos o request
// request.send();

// // estados do request: 
// //     0 (UNSET) - objeto criado MSAssertion, o open() não foi chamado;
// //     1 (OPENED) - opne() foi chamado;
// //     2 (HEARDERS_RECEIVED) - send() foi chamado, e os headers e status estão disponíveis;
// //     3 (LOADING) -  downloading, responseText tem dados parciais;
// //     4 (DONE) - a operação foi concluída;




// Aula 90 - response status
// const request = new XMLHttpRequest();

// // além do readyState, precisamos checar o status, para termos certeza de que estamos encontrando o json que procuramos.

// // códigos possiveis:
//     // Informational responses (100–199),
//     // Successful responses (200–299),
//     // Redirects (300–399),
//     // Client errors (400–499),
//     // and Server errors (500–599).

// // para melhores informações, consultar (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200){
//         console.log(request, request.responseText);
//     } else if (request.readyState === 4){
//         document.body.innerHTML = '<h1>Could not fetch data. Check end point</h1>';
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();




// Aula 91 - callback functions para requesições http

// para que o código seja mais reutilizável, nós o guradamos em uma função, como argumento nós damos uma callback function que tem dois argumento (erro, dados). Quando o erro não existe (readyState === 4 && status === 200), nós temos callback(undefined, dados), no outro caso nós temos callback(mensagem de erro, undefined). Nós passamos undefined, para o argumento que não temos uso em cada situação
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200){
//             callback(undefined, request.responseText);
//         } else if (request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// };

// // tem um comportamento assíncrono
// getTodos((error, data) => {
//     console.log('callback fired');
//     if (error){
//         // vai rodar o código de erro, else if
//         console.log(error);
//     } else{
//         // código de sucesso if
//         console.log(data);
//     }
// });




// Aula 92 - dados JSON
//JSON, nóe temos que usar aspas duplas em tudo que for texto. Números e booleans não levam aspas

// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200){
//             // converte JSON string para um objeto javascript. JSON ==== (JavaScript Object Notation)
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4){
//             callback('could not fecth data', undefined);
//         }
//     });

//     // só funciona com live server
//     // request.open('GET', 'json-cripts/todos.json');
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// };

// getTodos((err, data) => {
//     if (err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// });




// Aula 93 - callback hell
// const getTodos = (resources, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if (request.readyState === 4){
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open('GET', resources);
//     request.send();
// };

// // esse é o tipo de callback hell. Quando nós temos a chamada de uma funcção dentro de uma callback function, que por sua vez tem uma nova chamada de uma função e assim por diante.
// // quebra a assincronidade, porque um tem que esperar pelo outro, ao invés de carregar os mais rápidos e deixar os mais lentos para depois.
// // além de não ser prático semânticamente, ele pode nos dar alguns probblemas. Para resolvermos isso usaremos as PROMISES (ver na próxima aula)
// getTodos('json-scripts/felipe.json', (err, data) => {
//     console.log(data);
//     getTodos('json-scripts/celyne.json', (err, date) => {
//         console.log(data);
//         getTodos('json-scripts/gustavo.json', (err, data) => {
//             console.log(data);
//         })
//     })
// });




// Aula 94 - básico sobre promises
// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText);
//             resolve(data);
//         } else if (request.readyState === 4){
//             reject('error getting resource');
//         }
//     });

//     request.open('GET', resource);
//     request.send();
//     });
// };

// getTodos('json-scripts/felipe.json')
// .then(data => console.log('promise resolved: ', data))
// .catch(err => console.log('promise rejected: ', err));

// exmplo de promise

// promise === algo que levará um tempo para ser feito.
// uma promise pode ter dois resultados:
//  1. RESOLVED, nós conseguimos os dados que procurávamos;
//  2. REJECTED, erro ocorre e rejeitamos o ponto.
// primeira coisa que vasemos é return new Promise();
// const getSomething = () => {


//     return new Promise((resolve, reject) => {
//         // pega algo em uma network
//         resolve('some data');
//         // reject('some error');
//     });
// };

// um jeito de fazer uma chama de promise
// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// outro jeito de fazer uma chamada de promise
// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });




// Aula 95 - encadeando promises
// const getTodos = (resource) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if (request.readyState === 4){
//                 reject('error getting resource');
//             }
//         });

//         request.open('GET', resource);
//         request.send();
//     });
// };

// // nós pdemos usar apenas um catch, já que toda vez que retornamos o getTodos(), nós estamos retornando uma nova promise. só será pego o erro, na promise que ele ocorre, as outras serão executadas normalmente.
// // dessa foma, nós continuamos com o js assíncrono e carregado cada um de uma vez.
// getTodos('json-scripts/felipe.json')
// .then(data => {
//     console.log('promise 1 resolved:', data);
//     return getTodos('json-scripts/gustavo.json');
// })
// .then(data => {
//     console.log('promise 2 resolved:', data);
//     return getTodos('json-scripts/celyne.json');
// })
// .then(data => {
//     console.log('promise 3 resolved:', data);
// })
// .catch(err => {
//     console.log('promise rejected:', err);
// });




// Aula 96 - a função Fetch API

// a função fetch, vai fazer todo o processo de requesiçao http de forma direta e nos retorna uma promise
// fetch só retorna o REJECT se ouver um network error, do contrário retornará RESOLVE, mesmo que exista um erro com a URL. Mas, mesmo retornando RESOLVE, ocorrerá um erro e o status === 404.
// fetch('json-scripts/felipe.json')
// .then(response => {
//     // essa é uma das formas de levantar um erro caso exista uma falha na requisição http.
//     // if (response.status === 200){
//     //     console.log('resolved:', response);
//     //     // dessa forma nós retornamos o json que procurávamos e no próximo .then(), trabalhamos com ele
//     //     return response.json();
//     // } else {
//     //     throw new Error('Something went wrong');
//     // }

//     // outra forma de levantar um erro.
//     // .ok é fornecido pela função fetch
//     if (!response.ok){
//         throw Error('Something went wrong!');
//     }

//     console.log('resolved:', response);
//     return response.json();
// })
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.log(err);
// });




// Aula 97 - Async & Await

// para criarmos uma função assíncrona, basta adicionarmos a palavra chave ASYNC. Uma função assíncrona sempre retorna uma PROMISE.
// não bloquea o código
// const getTodos = async () => {
//     // AWAIT faz o javascript esperar de forma assíncrona a atribuição de valor da variável response, fazendo com que uma callback logo que FETCH tenha tido o seu RESOLVE ou REJECTED executados.
//     // adicionamos await onde retornar uma PROMISE, assim podemos processar essa parte do código em outro lugar (de forma assíncrona), e não bloquear o código.

//     // AWAIT substitui .then(). Como ele tem esse comportamento, existe o processo de execução do código um atrás do outro (de forma síncrona), mas como a função é assíncrona, não existe um block para o restante do código. Essa é uma forma mais efetiva de encadear PROMISES do que usado .then e .catch, ou do que criando uma callback hell.
//     const response = await fetch('json-scripts/felipe.json');
//     const data = await response.json();
//     return data;
// };

// // getTodos() retorna uma promise, então aqui nós usamos .then e .catch para podermos lidar com os dados dentro da função e com o resoled e reject
// // NON-BLOCKING
// getTodos()
//     .then(data => console.log('resolved:', data));

// // fetch('json-scripts/felipe.json')
// // .then(response => {
// //     if (!response.ok){
// //         throw new Error('Something went wrong!');
// //     }

// //     console.log('resolved:', response);
// //     return response.json();
// // })
// // .then(data => {
// //     data.forEach((element, index) => {
// //         console.log(`${index}. ${element.title} by ${element.author}`);
// //     });
// // })
// // .catch(err => console.log(err));




// Aula 98 - throwing & catching erros
// const getTodos = async () => {
//     const response = await fetch('json-scripts/felipe.json');

//     if (!response.ok){
//         throw new Error('Cannot fetch the data!');
//     }

//     const data = await response.json();
//     return data;
// };

// getTodos()
//     .then(data => console.log('resolved:', data))
//     .catch(err => console.log('rejected:', err.message));




// Aula 109 - operador ternário
// const variável = condição ? resultado se true : resultado se false;
// const result = (1 + 2 === 2) ? 'It is 2!' : 'Well math just got wrong';
// console.log(result);



// Aula 110 - local storage
// local storage é o armazenamento local, na máquina (browser) do usuário de informações





// Aula 111 - armazenando e pegando dados

// armazenar
// localStorage.setItem(key, value);
// localStorage.setItem('name', 'Felipe');
// mesmo que tenha sido passado um integer, ele será convertido para uma string, uma vez que localStorage só aceita strings
// localStorage.setItem('age', 21);

// pegar
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// console.log(name, age);

// atualizar
// podemos fazer tanto da mesma forma como criamos novos dados ou com dot notation
// localStorage.setItem('name', 'Celyne');
// localStorage.age = '16';

// mesmo que todo o código anterior tenha sido comentado, essas três linhas não causaram um erro. Se tivermos dados armazenados localmente, irá procurar pela key, se não tivermos ou não encontrarmos, retorna null
// name = localStorage.getItem('name');
// age = localStorage.getItem('age');

// console.log(name, age);




// Aula 112 - apagando dados armazenados
// console.log(localStorage);

// remove um por vez
// localStorage.removeItem('age');

// remove tudo do armazenamento local
// localStorage.clear();
// console.log(localStorage);




// Aula 113 - stringifying & parsing data
// const todos = [
//     {text: 'play mariokart', author: 'shaun'},
//     {text: 'buy some milk', author: 'mario'},
//     {text: 'buy some bread', author: 'luigi'}
// ];

// converte array para uma string no formato json
// const j = JSON.stringify(todos);
// localStorage.setItem('todos', j);


// const stored = localStorage.getItem('todos');
// converte array para uma array
// console.log(JSON.parse(stored));

// const form = document.querySelector('.signup-form');

// const result = [
//     {jogador: 'Felipe', ponto: 1},
//     {jogador: 'André', ponto: 4},
//     {jogador: 'Pereira', ponto: 8},
//     {jogador: 'Gustavo', ponto: 6}
// ];

// form.addEventListener('submit', event => {
//     event.preventDefault();

//     localStorage.setItem(form.username.value, JSON.stringify(result));
// });






// Aula 117 - classes
// uma classe é como uma blueprint. Ela possui todos os detalhes e funcionalidades que um grupo de elementos pode possuir.
// na classe user criada abaixo, USERNAME e EMAIL, são as propriedades que um usuário tem, já LOGIN e LOGOUT, são funcionalidades (methods) que os usuários tem.





// Aula 118 - class constructors
// class User{
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//     }
// }

// const felipe = new User('jfelipe2099', 'joaofelipe2099@hotmail.com');
// // new User(...) retorna um objeto (dicionário) com as propriedades da classe User e com a possibilidade de usar os métodos da classe User
// console.log(felipe);

// console.log(felipe.username, felipe.email);




// Aula 119 - class methods & method chaining
// class User{
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }

//     login(){
//         console.log(`${this.username} just logged in.`);
//         return this;
//     }

//     logout(){
//         console.log(`${this.username} just logged out.`);
//         return this;
//     }

//     mood(userMood){
//         console.log(`I feel ${userMood}.`);
//         return this;
//     }

//     incScore(){
//         this.score++;
//         console.log(`${this.username} has a score of ${this.score}.`);

//         return this;
//     }
// }

// const felipe = new User('Felipe', 'joaofelipe2099@hotmail.com');

// felipe.login();
// felipe.mood('happy');
// felipe.logout();

// // essa linha só funciona se login retornar o próprio objeto, ao invés de retornar undefined. Quando não especificamos algo para ser retornado, JS retorna altomaticamente undefined.
// // para retornarmos o próprio objeto usamos (return this;)
// // felipe.login().logout();

// // o (return this;), irá retornar o objeto já com o score atualizado.
// felipe.incScore().incScore().incScore().incScore();

// não é recessário retornar this. Podemos retornar qualquer outra coisa ou simplesmente não retornar nada. o (return this;) só é necessário se quisermos que o método possa se encadear com outro método.




// Aula 120 - herança de classes (subclasse)
// class User{
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }

//     login(){
//         console.log(`${this.username} just logged in.`);
//         return this;
//     }

//     logout(){
//         console.log(`${this.username} just logged out.`);
//     }

//     incScore(){
//         this.score++;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }

//     mood(feel){
//         console.log(`I fell ${feel}.`);
//         return this;
//     }
// }

// // extends é usado para herdar parâmetros e métodos e de uma outra classe
// class Admin extends User{
//     deleteUser(user){
//         users = users.filter(u => u.username !== user.username);
//     }
// }


// const felipe = new User('Felipe', 'joaofelipe2099@hotmail.com');
// const gustavo = new Admin('Gustavo', 'gustavo@hotmail.com')

// // // console.log(gustavo);
// // // felipe.login().mood('good').incScore().logout();

// let users = [felipe, gustavo];
// console.log(users);

// gustavo.deleteUser(felipe);
// console.log(users);




// Aula 121 - Super()
// class User{
//     constructor(username, email){
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }

//     login(){
//         console.log(`${this.username} just logged in.`);
//         return this;
//     }

//     logout(){
//         console.log(`${this.username} just logged out.`);
//     }

//     incScore(){
//         this.score++;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
// }

// // como a classe Admin tem um constructor, ela não irá mais ler o constructor de User, sendo assim, não terá mais o parâmetros de username e email, por isso, precisamos pedir novamente nesse constructor os parâmetros.
// // super() trata esses parâmetros da mesma forma que eles são tratados na classe parente.
// class Admin extends User{
//     constructor(username, email, title){
//         super(username, email);
//         this.title = title;
//     }

//     deleteUser(user){
//         users = users.filter(u => u.username !== user.username);

//         return this;
//     }
// }

// const felipe = new User('Felipe', 'felipe@domain.com');
// const gustavo = new Admin('Gustavo', 'gustavo@domain.com', 'adm');
// const celyne = new User('Celyne', 'celyne@domain.com');

// console.log(gustavo);
// // users = [felipe, gustavo, celyne];

// // gustavo.login().incScore().deleteUser(felipe).logout();
// // console.log(users);




// Aula 122 - construtores (como funcionam de verdade)

// função construtora
// function User(username, email){
//     this.username = username;
//     this.email = email;

//     this.login = function(){
//         console.log(`${this.username} has logged in.`)
//     }
// }

// const felipe = new User('Felipe', 'felipe@domain.com');
// console.log(felipe);
// felipe.login();




// Aula 123 - prototype model
// function User(username, email){
//     this.username = username;
//     this.email = email;
// }

// User.prototype.login = function(){
//     console.log(`${this.username} has just logged in.`);
//     return this;
// }

// User.prototype.logout = function(){
//     console.log(`${this.username} has just logged out.`);
// }

// const felipe = new User('Felipe', 'felipe@domain.com');
// console.log(felipe);
// felipe.login();




// Aula 124 - herança com prototype
// function User(username, email){
//     this.username = username;
//     this.email = email;
// }

// User.prototype.login = function(){
//     console.log(`${this.username} has just logged in.`);
//     return this;
// }

// User.prototype.logout = function(){
//     console.log(`${this.username} has just logged out.`);
// }

// function Admin(username, email, title){
//     // faz o mesmo que super
//     User.call(this, username, email);
//     this.title = title;
// }

// // cria uma cópia do prototype de User para Admin
// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.deleteUser = function(user){
//     users = users.filter(u => u.username !== user.username);
//     return this;
// }

// const felipe = new User('Felipe', 'joaofelipe2099@hotmail.com');
// const gustavo = new Admin('Gustavo', 'gustavo@domain.com', 'adm');

// users = [felipe, gustavo];

// gustavo.login().deleteUser(felipe).logout();
