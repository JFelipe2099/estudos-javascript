class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chat = db.collection('chat');
        this.unsub;
    }

    async addChat(message){
        const now = new Date();
        const data = {
            username: this.username,
            message,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };

        const response = await this.chat.add(data)
        return this;
    }

    //.where(campo a ser observado, lógica, valor que queremos)
    //. orderBy(forma de ordenar os dados)
    getChat(callback){
        this.unsub = this.chat
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added'){
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateName(username){
        this.username = username;
        localStorage.setItem('chat_username', username);
    }

    updateRoom(room){
        this.room = room;
        console.log('room updated');
        if (this.unsub){
            this.unsub();
        }
    }
}
