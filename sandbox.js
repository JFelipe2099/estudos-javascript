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

console.log(!true);
console.log(!false);