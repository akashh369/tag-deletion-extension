const highlight = `
    .highlight {
    transition: 0.2s;
    background-color: yellow;
    border: 2px solid red;
    border-radius: 10px;
    transform: translate(-2px, -2px);
    cursor: grab;
    transform: scale(1.1);
    }

    .highlight:active {
    cursor: grabbing;
    }
    `

const style = document.createElement('style');
style.appendChild(document.createTextNode(highlight));
document.head.appendChild(style);

document.body.addEventListener('mouseover', (e) => {
    document.querySelectorAll('.highlight').forEach(element => {
        element.classList.remove('highlight');
    });


    console.log('event=>', e);
    e.target.classList.add('highlight')
})

document.body.addEventListener('click', (e) => {
    e.target.remove();
    e.stopPropagation();
    e.preventDefault();
})