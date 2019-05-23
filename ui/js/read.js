const commentsContainer = document.getElementsByClassName('comments')[0];

for (let i = 0; i < 5; i++) {
    const imageHolder = document.createElement("img");
    const content = document.createElement('div');
    const dateHolder = document.createElement('p');
    const commentHolder = document.createElement('div');
    const del = document.createElement('i');
    const iconHolder = document.createElement('div');
    const edit = document.createElement('i');
    
    const text = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has 
    roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
    Richard McClintock, a Latin professor at Hampden-Sydney`;
    const date = new Date('May '+(i+1)+' 2019');
    imageHolder.classList += 'image';
    content.classList += 'comment_text';
    dateHolder.classList += 'date';
    commentHolder.classList += 'comment';
    imageHolder.src = 'images/generic.png';
    del.classList += 'fas fa-trash-alt';
    edit.classList += 'far fa-edit';

    content.appendChild(document.createTextNode(text));
    dateHolder.appendChild(document.createTextNode(date));
    commentHolder.appendChild(imageHolder);
    commentHolder.appendChild(content);
    content.appendChild(dateHolder);
    iconHolder.appendChild(del);
    iconHolder.appendChild(edit);
    commentHolder.appendChild(iconHolder);
    commentsContainer.appendChild(commentHolder);
}

const follow = document.getElementsByClassName('follow')[0];

follow.addEventListener('click', () => {
    const text = follow.innerHTML;
    text == 'follow' ? follow.innerHTML = 'un'+text : follow.innerHTML = 'follow';
});