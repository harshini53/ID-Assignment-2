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

    if (login != null)
    {
        $('#navbar-username').html(login[0])
        $('#account-username').html(login[0]); // Set it to account name
        $('#account-email').html(login[3]);
        $('#account-score').html(login[2]);
    }

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
                localStorage.setItem("login", JSON.stringify([account.Username,account.Score,account.Email]));
                console.log(response);
                console.log(localStorage.getItem("login")); //Codes working check
                $("#errMsgLogin").html("Account does not exist!");
                window.location.assign('index.html');
                accountFound = true;
            }
            
            $("#errMsgLogin").html("Account does not exist!");
            $('#errMsgLogin').css('color','red');
            accountFound = false;
        

        });
        
        //console.log(localStorage.getItem("login")); //Codes working check
        //console.log(login);

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
        accountFound = false;
        window.location.assign("login.html");
        $("#loginAgain").text("Please log in")

        if(accountFound = true)
        {
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
        accountFound = true
        response.map((account) => {
            if (registerUser === account.Username) {
                $('#exist-account-msg').html('Account Already Exists!');
                $('#exist-account-msg').css('color','red');
                accountFound = false;
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

        for(var l = 0;l <leadershipBoard.length && l < 10;l++)
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

        console.log(l);

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
    
