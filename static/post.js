document.getElementById('todoForm').addEventListener('submit', async function(event) {
    event.preventDefault(); //防止頁面刷新
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const completed = document.getElementById('completed').checked;

    const response = await fetch('http://127.0.0.1:8000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            description: description,
            completed: completed,
        }),
    });

    if (response.ok) {
        const data = await response.json();
        displaylist();
        document.getElementById('response').innerText = `Todo created: ${data.title}`;
    } else {
        const error = await response.json();
        document.getElementById('response').innerText = `Error: ${error.detail}`;
    }
});