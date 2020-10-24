function validate() {
    var username = document.getElementById("user");
    var password = document.getElementById("pass");
    if (username.value.trim() == "" || password.value.trim() == "") {
        alert("no blank values");
        return false;
    } else if (password.value.trim().length < 8) {
        alert("enter more stronger password")
        return false;

    } else {
        return true;
    }

}