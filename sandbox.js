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
let email = 'joaofelipe0www01@hotmail.com';
// let result = email.lastIndexOf('e');

// let result = email.slice(0, 10);

// slice(do index, up to but not including index)
// substr(do index, até completar quantidade de caracteres)
// let result = email.substr(4, 10);

// apenas a primeira aparição
let result = email.replace('e', '#');


console.log(result);