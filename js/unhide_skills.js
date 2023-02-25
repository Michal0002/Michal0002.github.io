const buttons = document.querySelectorAll('.button');
const description = document.querySelector('.description');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (description.innerText === button.getAttribute('data-description') && !description.hasAttribute('hidden')) {
            description.setAttribute('hidden', '');
            description.innerText = null;
        } else {
            description.innerText = button.getAttribute('data-description');
            description.removeAttribute('hidden');
        }
    });
});


// const lis = document.querySelectorAll('.languages li');
// lis.forEach(li => {
//     li.addEventListener('mouseover', () => {
//         const description = li.nextElementSibling;
//         description.removeAttribute('hidden');
//     });
//     li.addEventListener('mouseout', () => {
//         const description = li.nextElementSibling;
//         description.setAttribute('hidden', '');
//     });
// });

//     const buttons = document.querySelectorAll('.button');
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const description = button.nextElementSibling;
//         if (description.hasAttribute('hidden')) {
//             description.removeAttribute('hidden');
//         } else {
//             description.setAttribute('hidden', '');
//         }
//     });
// });