async function displaylist(){
    const response = await fetch('http://127.0.0.1:8000/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (response.ok) {
        const data = await response.json(); // 解析 JSON 資料

        // 提取所有的 title
        const titles = data.map(todo => todo.title);
        const descriptions = data.map(todo=>todo.description);
        const  completeds= data.map(todo=>todo.completed);
        const ids = data.map(todo=>todo.id);
        const due_dates = data.map(todo=>todo.id);

        let tablehtml =
        `<div id="table-container"></div>
        <table border="1" cellpadding="10" cellspacing="0" >
            <thead>
                <tr>
                    <th>title</th>
                    <th>descriprion</th>
                    <th>completed</th>
                    <th>id</th>
                    <th>due_dates</th>
                </tr>
            </thead>
            
            <tbody>`;
        for(var i=0;i<titles.length;i++){
            tablehtml+=
            `<tr>
                <th>${titles[i]}</th>
                <th>${descriptions[i]}</th>
                <th>${completeds[i]? `YEs`:`NO`}</th>
                <th>${ids[i]}</th>
                <th>${due_dates[i]}</th>
            </tr>`;
        }
        tablehtml+=
         `</tbody>
        </table>`;
        //將每個 title 顯示在網頁中
        document.getElementById('showlist').innerHTML = tablehtml
    } 
    else {
        const error = await response.json();
        document.getElementById('showlist').innerText = `Error: ${error.detail}`;
    }
}
window.onload = function(){
    displaylist();
};