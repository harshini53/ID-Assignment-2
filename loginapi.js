/*
const APIKEY = "62073a121b941c73ff397ab1";
const login = JSON.parse(localStorage.getItem('login'));


$(document).ready(function() {
    $('.mobile-line').append(`<hr/>`);

    if (login != null) { // Check if the user is logged in
        $('#login-text').hide(); // Hide login text in nav bar
        $('#name-text').html(login[1]); // Set it to account name
        $('#name-text').show(); // Display the account name in nav bar
    }

    
    $("#login-text").on("click", function() { // Hide error messages on nav bar login button click
        $('#login-form-text-error').hide();
        $('#create-form-text-error').hide();
    });

    $("#createModalButton").on("click", function() { // Close login modal when create modal open
        $('#login-modal').modal('hide');
        $('#create-modal').modal('show');
        $('#login-form-text-error').hide();
    });
    
    $("#loginModalButton").on("click", function() { // Close create modal when login modal open
        $('#create-modal').modal('hide');
        $('#login-modal').modal('show');
        $('#create-form-text-error').hide();
    });
    

    $("#login-page").submit(function(e) {
        e.preventDefault();
        loginAccount();
    });

    $("#create-page").submit(function(e) {
        e.preventDefault();
        createAccount();
    });
});

function loginAccount() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-f43a.restdb.io/rest/account",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        }
    })

    .done(function(response) {
        var accountFound = false; 
        response.map((account) => {
            if ($("#login-username").val() === account.Username && $("#login-password").val() === account.Password) {
                setAccount(account._id, account.Username);
                accountFound = true;
            }
        });

        if (accountFound == false) {
            $('#create-form-text-error').hide();
            $('#login-form-text-error').html('Invalid Account Name or Password!');
            $('#login-form-text-error').css('color','red');
            $('#login-form-text-error').show();
        }

        console.log(response);
    });

}

function setAccount(id, Username) {
    $('#login-form-text-error').hide();
    localStorage.setItem("login", JSON.stringify([id, Username]));
    $('#loginModal').modal('hide');
    location.reload();
}

function validateNewAccount() {
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-f43a.restdb.io/rest/account",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        }
    })
    .done(function(response) {
        var CheckUserName = true;

        response.map((account) => {
            if ($("#signup-username").val() === account.Username) {
                $('#login-page-text-error').hide();
                $('#create-page-text-error').html('Account Name Already Exists!');
                $('#create-page-text-error').css('color','red');
                $('#create-page-text-error').show();
                CheckUserName = false;
            }
        });
    });
}

function createAccount() {
    var jsondata = { 
        "Username": $("#signup-username").val(), 
        "Email": $("#signup-email").val(), 
        "Password": $("#signup-password").val(),
        "Score": 0,
        "Rank": 0
    }; 
    console.log(APIKEY);
    /*
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-f43a.restdb.io/rest/account",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
        })
    
    .done(function() {
        console.log()
        $('#login-form-text-error').html('Account created successfully! Please log in again.');
        $('#login-form-text-error').css('color','green');
        $('#create-modal').modal('hide');
        $('#login-modal').modal('show');
        $('#create-form-text-error').hide();
        $('#login-form-text-error').show();
    });
    
    let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://idasg2-f43a.restdb.io/rest/account",
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
    }

    
    $.ajax(settings).done(function (response) {
    console.log(response);
    });
    

}
*/


const APIKEY = "62073a121b941c73ff397ab1";
const login = JSON.parse(localStorage.getItem('login'));

$(document).ready(function() {

    $('#account-username').html(login[1]); // Set it to account name

    $("#loginSubmitButton").click(function(){
        loginToAccount()
    });

    $("#registerSubmitButton").click(function(){
        createAccount()
    });
});


function loginToAccount()
{
    /*Assign variables*/
    let loginUser = $("#login-username").val();
    let loginPwd = $("#login-password").val();

    /*Retrieve data from RestDB*/
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-f43a.restdb.io/rest/account",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        //Checking if account matches
        response.map(account =>{
            if(account.Username === loginUser && account.Password === loginPwd)
            //setAccount(account._id, account.Username);
            localStorage.setItem("login", JSON.stringify([id, Username]));
            accountFound = true;
        });
        
        //Error Messages
        accountFound = false;
        $("#errMsgLogin").html("Account does not exist!")
        $('#login-form-text-error').css('color','red');

        console.log(response)

    });

}
   

function createAccount(){
    /*Assign variables*/
    let registerUser = $("#register-username").val();
    let registerEmail = $("#register-email").val();
    let registerPwd = $("#register-password").val();

    var jsondata = { 
        "Username": registerUser,
        "Email": registerEmail,
        "Password": registerPwd
    }

    /*Post data to RestDB*/
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-f43a.restdb.io/rest/account",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
    }
    
    $.ajax(settings).done(function (response) { 
        findAccount = false, 
        localStorage.setItem("login", Username);
        $('#success-msg').html('Unsucessful! Please try again!');

        if(findAccount){
        $('#success-msg').html('Account created successfully!');
        $('#success-msg').css('color','green');
        console.log(response);
        }
    });

}

//Check if account exist
function existingAccounts(){

    /*Retrieve data from RestDB*/
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-f43a.restdb.io/rest/account",
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        accountExist = true;
        response.map((account) => {
            if (registerUser === account.Username) {
                $('#exist-error-name').html('Account Name Already Exists!');
                $('#exist-error-name').css('color','red');
                accountExist = false;
            }

            if(registerPwd === account.Password){
                $('#exist-error-pwd').html('Password Already Exists!');
                $('#exist-error-pwd').css('color','red');
                accountExist = false;
            }
        });
        if(accountExist){
            createAccount();
        }

    });

}
    
