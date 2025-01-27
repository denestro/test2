const button = document.createElement('button');
button.textContent = 'Fetch Data';
document.body.appendChild(button);

button.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
});