// validation script
const inputs = document.querySelectorAll('input');

const patterns = {
    // \d === [0-9]
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    // \w -> caputura letras maiusculas e minusculas, números e underscore
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    // (\.[a-z]{2,8})? -> a interrogação, faz com o que está dentro dos parênteses opcional
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

// validation funcion
function validate(field, regex){
    if (regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', event => {
        // console.log(event.target.attributes.name.value);
        validate(event.target, patterns[event.target.attributes.name.value]);
    });
});