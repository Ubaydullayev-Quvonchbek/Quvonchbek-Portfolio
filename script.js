const getData = async () => {
    const URL = await fetch("http://localhost:3000/data")
    const json_data = await URL.json();
    const htmlPOST = document.querySelector(".HTML-POST");
    json_data.forEach(element => {
        console.log(element);
        htmlPOST.innerHTML += `
        <div class="col-10">
            <div class="commentary-card">
                <h5>${element.name}</h5>
                <h6>${element.comment}</h6>
            </div>
        </div>`
    });
}
getData()
let inp_btn = document.querySelector(".button");
inp_btn.onclick = () => {
    let inp_name = document.querySelector(".name");
    let inp_comment = document.querySelector(".comment");
    fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: inp_name.value, comment: inp_comment.value })
    });
}