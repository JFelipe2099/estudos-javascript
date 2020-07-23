const films = async () => {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json();

    if (response.status >= 400){
        throw new Error('Something is wrong');
    }

    return data;
}

const root = document.querySelector('.root');
const img = document.createElement('img');
const container = document.createElement('div');

img.src = 'https://github.com/taniarascia/sandbox/blob/master/ghibli/logo.png?raw=true';
root.appendChild(img);

container.setAttribute('class', 'container');
root.appendChild(container)

films()
    .then(data => {
        data.forEach(movie => {
            const html = `
                <div class="card">
                    <h1>${movie.title}</h1>
                    <p>${movie.description.substring(0, 300)}...</p>
                </div>
            `;

            container.innerHTML += html;
        })
    })
    .catch(err => console.log(err));