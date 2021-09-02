function joinRoom(name) {
    location.href = `/room?name=${name}`;
}

function deleteRoom(name) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            removeRoomFromTable(name);
        }
    };

    xhttp.open("DELETE", `/room`, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    const json = JSON.stringify({ name: name });
    xhttp.send(json);
}

function removeRoomFromTable(name) {
    const roomsParent = document.getElementById("my-rooms-body");
    const rooms = roomsParent.childNodes;
    for (let i = 0; i < rooms.length; ++i) {
        if (rooms[i].id == name) {
            roomsParent.removeChild(rooms[i]);
        }
    }
}