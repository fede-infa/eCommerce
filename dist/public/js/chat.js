
function renderMessages(data){
    console.log(data);
    let html = data.map( msg =>{
        return(`<div>
                <b style="color: blue;">${msg.author.user_name}</b>
                <span style="color: brown;">${msg.createdAt}</span>
                <i style="color: green;">${msg.message}</i>
                </div>`)
    }).join(' ');
    document.querySelector('#chat-window').innerHTML = html;
}

function addMessage(e){
    const message = {
        author: {
            first_name: document.querySelector('#first_name').value,
            last_name: document.querySelector('#last_name').value,
            age: document.querySelector('#age').value,
            email: document.querySelector('#email').value,
            user_name: document.querySelector('#username').value,
        },
        message: document.querySelector('#message').value
    }
    
    socket.emit('chat:new-message', message);

    document.querySelector('#message').value = '';
    document.querySelector('#message').focus();

    return false;
}

socket.on('chat:messages', messages =>{ return renderMessages(messages)});