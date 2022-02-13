
const APIKEY = "62073a121b941c73ff397ab1";
const login = JSON.parse(localStorage.getItem('Login'));


$(document).ready(function() {
    //$('.mobile-line').append(`<hr/>`);

    if (login != null) { // Check if the user is logged in
        $('#login-text').hide(); // Hide login text in nav bar
        $('#name-text').html(login[1]); // Set it to account name
        $('#name-text').show(); // Display the account name in nav bar
    }

    /*
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
    */

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
            if ($("#login-username").val() === account.name && $("#login-password").val() === account.password) {
                setAccount(account._id, account.name);
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

function setAccount(id, name) {
    $('#login-form-text-error').hide();
    localStorage.setItem("login", JSON.stringify([id, name]));
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
        var checkName = true;

        response.map((account) => {
            if ($("#signup-username").val() === account.name) {
                $('#login-page-text-error').hide();
                $('#create-page-text-error').html('Account Name Already Exists!');
                $('#create-page-text-error').css('color','red');
                $('#create-page-text-error').show();
                checkName = false;
            }
        });
    });
}

function createAccount() {
    var jsondata = { 
        "Username": $("#signup-username").val(), 
        "Email": $("#signup-email").val(), 
        "Password": $("#signup-password").val()
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
    */

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

