

async function request(){
    const response = await fetch("http://localhost:8080/test");
    const responseJSON = await response.json();
    console.log(responseJSON);

    document.querySelector('.box').innerHTML = `<pre>${JSON.stringify(responseJSON)}</pre>`;
}