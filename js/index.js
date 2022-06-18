function save(){
    var checkbox = document.getElementsByClassName("checkbox");
    localStorage.setItem("checkbox", checkbox.checked);
}

function load(){    
    var checked = JSON.parse(localStorage.getItem("checkbox"));
    document.getElementsByClassName("checkbox").checked = checked;
}

function wis(){
    location.reload();
    localStorage.clear()
}

load();