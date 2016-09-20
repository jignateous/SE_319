function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone){
    var stripped = phone.replace(/[\(\)\.\-\ ]/g, '');

    if (phone == "") {
        return false;
    } else if (isNaN(parseInt(stripped))) {
        return false;
    } else if (!(stripped.length == 10)) {
        return false;
    }
    return true;
}

function validateAddress(address){
    if(address.includes(", ") == true){
        return true;
    }
    else{
        return false;
    }
}