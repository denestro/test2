function extractNumbers(str) {
    return str.match(/\d+/g)?.map(Number) || [];
}

console.log(extractNumbers("a1fg5hj6")); // [1, 5, 6]



function fibonacci(limit, a = 0, b = 1) {
    if (a > limit) return;
    console.log(a);
    setTimeout(() => fibonacci(limit, b, a + b), 1000);
}

fibonacci(144);









async function fetchTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach(product => console.log(product.title));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchTitles();

const buttons = ['red', 'green', 'blue', 'yellow', 'purple'];
const container = document.createElement('div');

buttons.forEach(color => {
    const button = document.createElement('button');
    button.textContent = color;
    container.appendChild(button);
});

document.body.appendChild(container);

container.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
});

let count = 0;

const interval = setInterval(() => {
    console.log(count);
    if (count >= 100) {
        clearInterval(interval);
    }
    count++;
}, 1);


button.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})

