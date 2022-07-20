$(document).ready(function(){
    $('#usernameValidation').hide();
    $('#passwordValidation').hide();
    $('#confirmPasswordValidation').hide();

    var error = true, emailError = true, passwordError = true, confirmPasswordError = true;

    // option 1->username, 2->password, 3->confirmPassword
    // function check(val, option){
    //     var flag = false;
    //     if(option === 1){
            
    //     }
    // }

    // Username
    $('#username').keyup(function(){
        validateUsername();
    });

    function checkUsernameError(val){
        if(val == '' || val.length<4) return true;
        return false;
    }

    function validateUsername(){
        var username_val = $('#username').val();
        if(checkUsernameError(username_val)){
            $('#usernameValidation').show();
            $('#usernameValidation').css('color', 'red');

            if(username_val === ''){
                $('#usernameValidation').html('Username cannot be empty.');
            }
            else if(username_val.length<4){
                $('#usernameValidation').html('Username should be atleast 4 characters.');
            }
            error = true;
        }
        else{
            $('#usernameValidation').hide();
            error = false;
        }
        return error;
    }

    // E-mail
    var emailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    $('#email').keyup(function(){
        validateEmail();
    });

    function checkEmailError(val){
        if(val == '' || emailregex.test(val) === false) return true;
        return false;
    }

    function validateEmail(){
        var email_val = $('#email').val();
        if(checkEmailError(email_val)){
            $('#emailValidation').show();
            $('#emailValidation').css('color', 'red');

            if(email_val === ''){
                $('#emailValidation').html('E-mail cannot be empty.');
            }
            else{
                $('#emailValidation').html('Email should be in the form of "example@abc.xyz".');
            }
            emailError = true;
        }
        else{
            $('#emailValidation').hide();
            emailError = false;
        }
        return emailError;
    }

    // Password
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    // ^.*              : Start
    // (?=.{8,})        : Length
    // (?=.*[a-zA-Z])   : Letters
    // (?=.*\d)         : Digits
    // (?=.*[!#$%&? "]) : Special characters
    // .*$              : End

    $('#password').keyup(function(){
        validatePassword();
    });

    function checkPasswordError(val){
        if(val === '' || val.length<8 || strongRegex.test(val) === false) return true;
        return false;
    }

    function validatePassword(){
        var password_val = $('#password').val();
        if(checkPasswordError(password_val)){
            $('#passwordValidation').show();
            $('#passwordValidation').css('color', 'red');

            if(password_val === ''){
                $('#passwordValidation').html('Password cannot be empty.');
            }
            else if(password_val.length<8){
                $('#passwordValidation').html('Password should have atleast 8 characters.');
            }
            else{
                $('#passwordValidation').html('Password should have atleast one of (a-z), (A-Z), (0-9) and a special character.');
            }
            passwordError = true;
        }
        else{
            $('#passwordValidation').hide();
            passwordError = false;
        }
        return passwordError;
    }

    // Confirm Password
    $('#confirmPassword').keyup(function(){
        validateConfirmPassword();
    });

    function validateConfirmPassword(){
        var password_val = $('#password').val();
        var confirmPassword_val = $('#confirmPassword').val();
        if(password_val !== confirmPassword_val){
            $('#confirmPasswordValidation').show();
            $('#confirmPasswordValidation').html('Password should be same.');
            $('#confirmPasswordValidation').css('color', 'red');
            confirmPasswordError = true;
        }
        else{
            $('#confirmPasswordValidation').hide();
            confirmPasswordError = false;
        }
        return confirmPasswordError;
    }

    $('#submitValidation').click(function(){
        validateUsername();
        validateEmail();
        validatePassword();
        validateConfirmPassword();

        if(error || emailError || passwordError || confirmPasswordError) return false;
        return true;
    });

    // var show_password = 1, temp = "";
    // $('#togglePassword1').click(function(){
    //     var password_val = $('#password').val();
    //     var len = password_val.length;
    //     var s = new String('*', len);
    //     if(show_password & 1){
    //         $('#password') = temp;
    //     }
    //     else{
    //         temp = $('#password').val();
    //         $('#password') = s;
    //     }
    // });

    // var show_confirm_password = 0;
    // $('#toggle_password2').click(function(){
    //     var confirm_password_val = $('#confirmPassword').val();
    //     if(confirm_password_val & 1){

    //     }
    // });

});