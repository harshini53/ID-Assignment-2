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

//localStorage.setItem("login");

const APIKEY = "62073a121b941c73ff397ab1";
const login = JSON.parse(localStorage.getItem('login'));

$(document).ready(function() {

    $("#loginSubmitButton").click(function(){
        loginToAccount();
    });

    $("#registerSubmitButton").click(function(){
        createAccount();
    });

    $("#logout").click(function(){
        localStorage.clear();
        location.href="index.html"
    });

    $('#account-username').html(login[1]); // Set it to account name
    console.log(login)
    $('#account-email').html(login[3]);
    $('#account-password').html(login[4]);
    $('#account-score').html(login[2]);

    //$("#account-score")
    getaccounts();

    //scores();
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
            {
                localStorage.setItem("login", JSON.stringify([account.Username,account.Password,account.Score,account.Email,account.Password]));
                accountFound = true;
                //console.log(response);
                $("#errMsgLogin").text("Account created successfully!");
                //console.log(localStorage.getItem("login")); //Codes working check

                window.location.assign("account_page.html");
            }
            else
            {
                $("#errMsgLogin").text("Account does not exist!");
                $('#errMsgLogin').css('color','red');
                accountFound = false;

            }
        });
        
        //console.log(localStorage.getItem("login")); //Codes working check
        console.log(login);

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
        "Password": registerPwd,
        "Score": 0
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
        window.location.assign("account_page.html");

        if(findAccount = true){
            existingAccounts();
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
        accountExist = false;
        response.map((account) => {
            if (registerUser === account.Username) {
                $('#exist-error-name').html('Account Already Exists!');
                $('#exist-error-name').css('color','red');
                accountExist = true;
            }
        });
        
    });

}

function getaccounts() {

    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-f43a.restdb.io/rest/account",
        "method": "GET", 
        "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
        },
    }

    $.ajax(settings).done(function (response) {
        let content = "";
        let leadershipBoard = [];
        for (var i = 0; i < response.length; i++) {
            
            leadershipBoard[i] = {
                id: response[i]._id,
                rank: response[i].rank,
                name: response[i].Username,
                score: response[i].Score
            }
        }

        leadershipBoard.sort(function(a,b){return b.score - a.score})

        console.log(leadershipBoard);

        for(var l = 0;l <leadershipBoard.length && l < 15;l++)
        {
            content = `${content}
            <tr id='${response[l]._id}'>
            <td>${response[l].Rank}</td>
            <td>${response[l].Username}</td>
            <td>${response[l].Score}</td>
            </tr>`
        }

        $("#leadership_Board tbody").html(content);
        $("#leadership_Board").show();

    });
}

function scores()
{    
    //import{score_crossword} from "./crossword";
    //import{score_hangman} from "./hangman";
    //import{score_wordsearch} from "./wordsearch.js";

    if(login == null)
    {
        $("#notLoggedIn").show();
        $("#playCrossword").btn("disabled",true);
        $("#playHangman").btn("disabled",true)
        $("#playWordSearch").btn("disabled",true)
    }
    else
    {
        $("#notLoggedIn").hide();
        $("#playCrossword").btn("disabled",false);
        $("#playHangman").btn("disabled",false)
        $("#playWordSearch").btn("disabled",false)   
    }

    score = score_crossword + score_hangman + score_wordsearch 
}
    
