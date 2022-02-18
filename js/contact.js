$(document).ready(function () {
    const APIKEY = "62073a121b941c73ff397ab1";
    // Send contact form data on subimt
    $("#contact-form").submit(function(e) {
        $('.contact-loading').show(); // Show lottie loading icon
        $('#contact-button').hide(); // Hide send button
        e.preventDefault();
        let jsondata = {
            "name": $("#contact-name").val(),
            "contactNumber": $("#contact-number").val(),
            "emailAddress": $("#contact-email-address").val(),
            "topic": $("#contact-user-topic").val(),
            "message": $("#contact-message").val()
        };

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
        }).done(function() {
            $('.contact-loading').hide(); // Hide lottie loading icon
            $('#contact-button').show(); // Show send button
        });
    });
});