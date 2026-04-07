function submitForm() {
    let name = document.getElementById("name").value;
    let event = document.getElementById("event").value;
    let msg = document.getElementById("msg");

    if (name === "") {
        msg.innerText = "Name is required";
        msg.style.color = "red";
        return;
    }

    if (event === "") {
        msg.innerText = "Please select an event";
        msg.style.color = "red";
        return;
    }

    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, event })
    })
    .then(res => res.json())
    .then(data => {
        msg.innerText = data.message;
        msg.style.color = "green";

        // Clear form after submit
        document.getElementById("name").value = "";
        document.getElementById("event").value = "";
    })
    .catch(err => {
        msg.innerText = "Server error";
        msg.style.color = "red";
    });
}