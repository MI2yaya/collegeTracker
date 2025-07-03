
function handleCredentialResponse(response) {
    const idToken = response.credential;

    fetch("/google-login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id_token: idToken })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Server response:", data);
        // redirect or update UI here
    })
    .catch(err => console.error("Login failed", err));
}