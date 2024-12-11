function Login(event) {
    event.preventDefault();

    const req = {
        email: document.querySelector('input#email').value,
        password: document.querySelector('input#password').value
    }
    console.log(req);
    
    fetch('/api/test/login', {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
            'Content-type' : 'application/json'
        }
    })
    .then(result => result.json())
    .then(json => {
        console.log(json);
        localStorage.setItem('authToken', json.token);

        alert('Logged in!')
    });
}

async function ShowData() {
        const response = await fetch('/private', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
    });

    //console.log(await response.text());

    const htmlResponse = await response.text();

    document.querySelector('#showData').innerHTML = htmlResponse;

}