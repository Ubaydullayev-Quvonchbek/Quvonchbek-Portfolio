const getData = async () => {
    const URL = await fetch("http://localhost:3000/data")
    const json_data = await URL.json();
    const htmlPOST = document.querySelector(".HTML-POST");
    json_data.forEach(element => {
        htmlPOST.innerHTML += `
        <div class="col-12 col-sm-10">
            <div class="commentary-card" title="Comment">
                <h5>${element.name}</h5>
                <h6>${element.comment}</h6>
            </div>
        </div>`
    });
}
getData();
let inp_btn = document.querySelector(".button");
inp_btn.onclick = () => {
    let inp_name = document.querySelector(".name");
    let inp_comment = document.querySelector(".comment");
    let inp_so = document.querySelector("select");
    console.log(inp_so.value);
    if (inp_name.value === "" || inp_comment.value == "" || inp_so.value == "") {
        inp_name.style.border = "1px solid #dc3545";
        inp_name.style.borderRight = "0px solid transparent";
        inp_comment.style.border = "1px solid #dc3545";
        inp_comment.style.borderRight = "5px solid #dc3545";
        inp_btn.style.border = "1px solid #dc3545";
        inp_btn.style.borderRight = "5px solid #dc3545";
        inp_so.style.border = "1.5px solid #dc3545";
        inp_so.style.borderRight = "5px solid #dc3545";
    } else {
        inp_so.style.border = "1.5px solid #142850";
        inp_so.style.borderRight = "5px solid #142850";
        inp_name.style.border = "1px solid #142850";
        inp_name.style.borderRight = "0px solid #142850";
        inp_comment.style.border = "1px solid #142850";
        inp_comment.style.borderRight = "5px solid #142850";
        inp_btn.style.border = "1px solid #142850";
        inp_btn.style.borderRight = "5px solid #142850";
        fetch("http://localhost:3000/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: `${inp_name.value}${inp_so.value}`, comment: inp_comment.value })
        });
        inp_comment.value = "";
        inp_name.value = "";
    }
}