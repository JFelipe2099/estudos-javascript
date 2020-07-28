const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe, id) => {
    let time = String(recipe.created_at.toDate());
    let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time.substring(0, 24)}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;

    list.innerHTML += html;
}

// -------------- PEGAR DADOS DO BACO DE DADOS --------------
// db === referência ao banco de dados
// collection === procura a coleção pelo nome dado
// get === pega os dados da coleção
// db.collection('recipes').get()
//     .then(snapshot => {
//         // snapshot é um objeto que guarda vários outros objetos, um deles sendo o docs, onde está quardado os dados do banco de dados
//         snapshot.docs.forEach(item => {
//             // nós usamos .data() para podermos converter os dados que estão no banco de dados
//             addRecipe(item.data(), item.id);
//         });
//     })
//     .catch(err => console.log(err));

// ------------- REAL-TIME LISTENERS -------------------------
// onSnapshot fica monitorando cada modificação que ocorre no banco de dados, seja de adicionar um doc ou de remover um doc.
// estamos usando isso para ao mesmo tempo criar um novo doc e mostra-lo na página, sem que seja necessário recarregá-la
// podemos guardar em uma variável, porque nos retorna uma função. Essa função serve para desconectar com o real-time liestener
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        if (change.type === 'added'){
            const doc = change.doc;
            addRecipe(doc.data(), doc.id);
        }
    });
});

// ------------- SALVANDO DADOS DO BACO DE DADOS -------------
form.addEventListener('submit', event => {
    event.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    }

    db.collection('recipes').add(recipe)
        .then(() => console.log('recipe added'))
        .catch(err => console.log(err));

    form.reset();
});

// ------------- APAGANDO DADOS DO BACO DE DADOS -------------
list.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete()
            .then(e.target.parentElement.remove())
            .catch(err => console.log(err));
    }
})

// ------------- DESLIGANDO UI UPDATA ------------------------
// isso vai nos desconectar das mudanças em tempo real. Nao significa que paramos de manipular o banco de dado, só significa que paramos de atualizar a interface do usuário
button.addEventListener('click', () => {
    unsub();
    console.log('unsubscribed from collection changes');
});