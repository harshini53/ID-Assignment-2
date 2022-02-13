//Leadership board

//[STEP 0]: Make sure our document is A-OK
$(document).ready(function () {
  //what kind of interface we want at the start 
  const APIKEY = "62073a121b941c73ff397ab1";

 // getContacts();
  leaderboard();
  //$("#update-contact-container").hide();
  //$("#add-update-msg").hide();

  //[STEP 1]: Create our submit form listener
  //$("#contact-submit").on("click", function (e) {
    //prevent default action of the button (submit value)
    //e.preventDefault();

    //[STEP 2]: let's retrieve form data
    //for now we assume all information is valid
    //you are to do your own data validation

    //storing values
    
    let rank = $("#contact-rank").val();
    let username = $("#contact-username").val();
    let level = $("#contact-level").val();
    let score = $("#contact-score").val();

    //[STEP 3]: get form values when user clicks on send
    //Adapted from restdb api
    let jsondata = {
      "rank": contactRank,
      "username": contactUsername,
      "level": contactLevel,
      "score": contactScore
    };


    //[STEP 4]: Create our AJAX settings. Take note of API key
    
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idasg2-f43a.restdb.io/rest/leadershipboard",
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

      leaderboard();
    });




    /*let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://interactivedev-adbb.restdb.io/rest/contact",
      "method": "POST", //[cher] we will use post to send info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata),
      "beforeSend": function(){
        //@TODO use loading bar instead
        //disable our button or show loading bar
        $("#contact-submit").prop( "disabled", true);
        //clear our form using the form id and triggering it's reset feature
        $("#add-contact-form").trigger("reset");
      }
    }
    

    //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
    $.ajax(settings).done(function (response) {
      console.log(response);
      
      $("#contact-submit").prop( "disabled", false);
      
      //@TODO update frontend UI 
      $("#add-update-msg").show().fadeOut(3000);

      //update our table 
      getContacts();
    });
  });//end click 
  */


  //[STEP] 6
  //let's create a function to allow you to retrieve all the information in your contacts
  //by default we only retrieve 10 results

    /*
    //[STEP 7]: Create our AJAX settings
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://interactivedev-adbb.restdb.io/rest/contact",
      "method": "GET", //[cher] we will use GET to retrieve info
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
    }
    */
  function leaderboard(limit = 15, all = true) {

    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idasg2-f43a.restdb.io/rest/leadershipboard",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      }
    }
    
    //[STEP 8]: Make our AJAX calls
    //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
    //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
    $.ajax(settings).done(function (response) {
      
      let contact = "";
      // variable to hold value (empty var) store iteration of the loop

      //do each value
      //for (var i = 0; i < response.length && i < limit; i++) {
        //console.log(response[i]);
        //[METHOD 1]
        //let's run our loop and slowly append content
        //we can use the normal string append += method
        /*
        content += "<tr><td>" + response[i].name + "</td>" +
          "<td>" + response[i].email + "</td>" +
          "<td>" + response[i].message + "</td>
          "<td>Del</td><td>Update</td</tr>";
        */

        //[METHOD 2]
        //using our template literal method using backticks
        //take note that we can't use += for template literal strings
        //we use ${content} because -> content += content 
        //we want to add on previous content at the same time
        //respons[i] == capturing response

        //content capture value
        

      
      for (var i = 0; i < response.length && i < limit; i++) {  

        contact = `${contact}<tr id='${response[i]._id}'>
        <td>${response[i].rank}</td>
        <td>${response[i].username}</td> 
        <td>${response[i].level}</td>
        <td>${response[i].score}</td>
        <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td>
        <a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-rank='${response[i].rank}' 
        data-name='${response[i].name}' data-level='${response[i].level}' data-score='${response[i].score}'>Update</a></td></tr>`;

      }

      //[STEP 9]: Update our HTML content
      //let's dump the content into our table body
      $("#contact-list tbody").html(content);

      $("#total-contacts").html(response.length);
    });


  }

  //[STEP 10]: Create our update listener
  //here we tap onto our previous table when we click on update
  //this is a delegation feature of jquery
  //because our content is dynamic in nature, we listen in on the main container which is "#contact-list". For each row we have a class .update to help us
  $("#contact-list").on("click", ".update", function (e) {
    e.preventDefault();
    //update our update form values
    let contactRank = $(this).data("rank");
    let contactName = $(this).data("name");
    let contactLevel = $(this).data("level");
    let contactScore = $(this).data("score");
    let contactId = $(this).data("id");
    console.log($(this).data("msg"));

    //[STEP 11]: Load in our data from the selected row and add it to our update contact form 
    $("#update-contact-rank").val(contactRank);
    $("#update-contact-name").val(contactName);
    $("#update-contact-level").val(contactLevel);
    $("#update-contact-score").val(contactScore);
    $("#update-contact-id").val(contactId);
    $("#update-contact-container").show();

  });//end contact-list listener for update function

  //[STEP 12]: Here we load in our contact form data
  //Update form listener
  $("#update-contact-submit").on("click", function (e) {
    e.preventDefault();
    //retrieve all my update form values
    let contactRank = $("#update-contact-rank").val();
    let contactName = $("#update-contact-name").val();
    let contactLevel = $("#update-contact-level").val();
    let contactScore = $("#update-contact-score").val();
    let contactId = $("#update-contact-id").val();

    //console.log($("#update-contact-msg").val());
    console.log(contactMsg);

    //[STEP 12a]: We call our update form function which makes an AJAX call to our RESTDB to update the selected information
    updateForm(contactId, contactRank, contactName, contactLevel, contactScore);
  });//end updatecontactform listener

  //[STEP 13]: function that makes an AJAX call and process it 
  //UPDATE Based on the ID chosen
  function updateForm(id, contactRank, contactName, contactLevel, contactScore) {
    //@TODO create validation methods for id etc. 

    var jsondata = { "rank": contactRank, "name": contactName, "level": contactLevel, "score": contactScore };
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://idasg2-f43a.restdb.io/rest/leadershipboard/(ObjectID)",
      "method": "PUT",
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
  })
  /*
    var jsondata = { "rank": contactRank, "name": contactName, "level": contactLevel, "score": contactScore };
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://interactivedev-adbb.restdb.io/rest/contact/${id}`,//update based on the ID
      "method": "PUT",
      "headers": {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }

    //[STEP 13a]: send our AJAX request and hide the update contact form
    $.ajax(settings).done(function (response) {
      console.log(response);
      
      $("#update-contact-container").fadeOut(5000);
      //update our contacts table
      getContacts();
    });
  }//end updateform function

})
*/