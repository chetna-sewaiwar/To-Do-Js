// let arr = [];
function myFunction() {
    let getdatalocal = localStorage.getItem("localdata")
    // console.log(getdatalocal)
    if (getdatalocal != null) {
        arr = JSON.parse(getdatalocal)
    } else {
        arr = []
    }
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("num").value;

    let obj = {
        "name": name,
        "email": email,
        "contact": contact
    }
    console.log(obj)
    arr.push(obj);
    console.log(arr)

    //storing data in localStorage
    localStorage.setItem("localdata", JSON.stringify(arr))
    getdata()
}


function getdata() {

    let getdatalocal = localStorage.getItem("localdata")
    // console.log(getdatalocal)
    if (getdatalocal != null) {
        localdataget = JSON.parse(getdatalocal)
    } else {
        localdataget = []
    }

    console.log(localdataget)

    let showdata = document.getElementById("show");
    showdata.innerHTML = "";

    arr.forEach((val) => {
        let display =
            `<div class="card">
            <div class="card-header"><h2 style="color: teal;">Details:</h2></div>
            <div class="card-body">Name:${val.name}<br>Email:${val.email}<br>Contact NO.:${val.contact}</div>
            <div class="card-footer"><button class="close" onclick="">Close</button></div>
        </div>`;

        showdata.innerHTML += display;
    });



}


