document.getElementById('delete_Form').addEventListener('submit', async function(event) {
    event.preventDefault(); //防止頁面刷新
    const id = document.getElementById('id').value;

    const response = await fetch(`http://127.0.0.1:8000/todo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const data = await response.json();
        displaylist();
        document.getElementById('d_response').innerText = `${data.detail}`;
    } else {
        const error = await response.json();
        document.getElementById('d_response').innerText = `Error: ${error.detail}`;
    }
});