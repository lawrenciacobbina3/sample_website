
function saveDetails() {
    var fnameStore = document.getElementById("fname");
    localStorage.setItem("fname",fnameStore.value);

    var mnameStore = document.getElementById("mname");
    localStorage.setItem("mname",mnameStore.value);

    var lnameStore = document.getElementById("lname");
    localStorage.setItem("lname",lnameStore.value);

    var emailStore = document.getElementById("email");
    localStorage.setItem("email",emailStore.value);

    var telStore = document.getElementById("contact");
    localStorage.setItem("contact",telStore.value);

    var addStore = document.getElementById("address");
    localStorage.setItem("address",addStore.value);
 


    var fnameGet = localStorage.getItem("fname");
    var lnameGet = localStorage.getItem("lname");
    var mnameGet = localStorage.getItem("mname");
    var emailGet = localStorage.getItem("email");
    var telGet = localStorage.getItem("contact");
    var addGet = localStorage.getItem("address");

    alert(fnameGet);
}
