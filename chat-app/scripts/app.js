const chatForm = document.querySelector('.new-chat');
const nameForm = document.querySelector('.new-name');
const chatRooms = document.querySelector('.chat-rooms');
const updateMssg = document.querySelector('.update-mssg');

let username = localStorage.chat_username ? localStorage.chat_username : 'Anônimo';

// ---------------- DOM QUERY ----------------------
const chatList = document.querySelector('.chat-list');

// ---------------- CLASS INSTANCES ----------------
const chatroom = new Chatroom('general', username);
const chatUI = new ChatUI(chatList);

// -------------- GET CHAT AND RENDER --------------
chatroom.getChat(data => chatUI.render(data));

// ---------------- EVENT LISTENERS ----------------
chatRooms.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON'){
        chatroom.updateRoom(e.target.id);
        chatUI.clear();
        chatroom.getChat(data => chatUI.render(data));
    }
})

nameForm.addEventListener('submit', e => {
    e.preventDefault();

    username = nameForm.name.value;
    chatroom.updateName(username);
    nameForm.reset();
    updateMssg.innerHTML = `Username update to ${username}`;
    setTimeout(() => updateMssg.innerHTML = '', 3000);
});

chatForm.addEventListener('submit', e => {
    e.preventDefault();

    // const now = new Date();
    const message = chatForm.message.value;
    chatroom.addChat(message)
        .then(() => chatForm.reset())
        .catch(err => console.log(err));
});


