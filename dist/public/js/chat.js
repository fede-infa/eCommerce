
function renderMessages(data){
    console.log(data);
    let html = data.map( msg =>{
        return(`<div>
                <b style="color: blue;">${msg.userEmail}</b>
                <span style="color: brown;">${msg.userMessageDate}</span>
                <i style="color: green;">${msg.userMessage}</i>
                </div>`)
    }).join(' ');
    console.log(html);
    document.querySelector('#chat').innerHTML = html;
}

function addMessage(e){
    const chatEmail = document.querySelector('#userEmail'); // Email input
    const chatMessage = document.querySelector('#userMessage'); // Message input

    // Creating message object with date
    let message = {
        userEmail: chatEmail.value,
        userMessageDate: new Date().toLocaleString(),
        userMessage: chatMessage.value
    };
    
    socket.emit('chat:new-message', message);

    chatMessage.value = '';
    chatMessage.focus();

    return false;
}

socket.on('chat:messages', messages =>{ return renderMessages(messages)});