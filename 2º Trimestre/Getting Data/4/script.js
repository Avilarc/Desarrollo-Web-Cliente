document.getElementById('fetch').addEventListener('click', () => {
    document.getElementById('status').textContent = "";
    document.getElementById('response').textContent = "";
    document.getElementById('data').textContent ="";

    let url = 'https://jsonplaceholder.typicode.com/posts/1'; // URL de prueba

    fetch(url)
        .then (response => {
            document.getElementById('status').textContent = `Status: ${response.status}`;
            document.getElementById('response').textContent = `Response: ${response.statusText}`;
            return response.text();
        })
        .then (data => {
            document.getElementById('data').textContent = `Data: ${data}`;
        })
        .catch (error => {
            document.getElementById('status').textContent = `Status: ${error.status}`;
            document.getElementById('response').textContent = `Response: ${error.statusText}`;
        });
});