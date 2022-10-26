
    function getValue(id){
    return document.getElementById(id).value.trim();
}


    function showError(key, mess){
    document.getElementById(key + '_error').innerHTML = mess;
}

    function validate()
    {
        var flag = true;

        var username = getValue('username');
        if ( username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)){
        flag = false;
        showError('username', 'try again);
    }

        var password = getValue('password');
        var repassword = getValue('repassword');
        if (password == '' || password.length < 8 || password != repassword){
        flag = false;
        showError('password', 'try again');
    }

        var email = getValue('email');
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!mailformat.test(email)){
        flag = false;

        showError('email', 'try again);
    }

        return flag;
    }