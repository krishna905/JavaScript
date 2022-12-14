const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
    addComment(ev);
});

function addComment(ev) {
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    if (hasClass(ev.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "rgba(244, 242, 242, 0.877);";
        textBox.style.border = "0.001px solid black";
        textBox.style.padding = "5px";

        textBox.style.borderRadius = "10px";
        textBox.style.minWidth = "200px";
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "rgb(3, 2, 3)";
        textBox.style.minWidth = "300px";
        textBox.style.backgroundColor = "black";
        textBox.style.border = "0.2px solid white";
        textBox.style.color = "white";
        textBox.style.padding = "5px";
        textBox.style.borderRadius = "5px";
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    }

}
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '20px';
        textArea.style.backgroundColor = 'rgb(64, 76, 99)';
        textArea.style.color = 'white';
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Add';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className = 'cancelReply';
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);

    } else if (hasClass(e.target, 'addReply')) {
        addComment(e);
    } else if (hasClass(e.target, 'likeComment')) {
        const likeBtnValue = e.target.innerHTML;
        e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 + ' likes' : 1 + ' likes';

    } else if (hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';

    } else if (hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});
