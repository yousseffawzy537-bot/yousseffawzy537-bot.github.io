let dataList = JSON.parse(localStorage.getItem("attendance")) || [];

function saveData() {
    let name = document.getElementById("name").value;
    let seat = document.getElementById("seat").value;

    if (name === "" || seat === "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        seat: seat
    };

    dataList.push(student);

    localStorage.setItem("attendance", JSON.stringify(dataList));

    displayData();

    // clear inputs
    document.getElementById("name").value = "";
    document.getElementById("seat").value = "";
}

function displayData() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    dataList.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.seat;
        list.appendChild(li);
    });
}

// load data on page open
displayData();