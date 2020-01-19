function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;

}


function sendData() {
    console.log('sending data 2');
    var dataToSend = getFormData($('#contactForm'));
    $('#contactFormSubmitButton').attr("disabled", true);
    $('#contactFormSubmitButton').html("Submitting");

    $.ajax({
        url : 'https://aubl01ppu7.execute-api.eu-west-1.amazonaws.com/prod/contact',
        type : 'POST',
        processData: false,  // tell jQuery not to process the data
        contentType: 'application/json',
        dataType : 'json', // data type
        data : JSON.stringify(dataToSend),
        success : function(data) {
            console.log('contact request - success');
            $('#contactFormSubmitButton').attr("disabled", true);
            $('#contactFormSubmitButton').removeClass("btn-danger").addClass("btn-success");
            $('#contactFormSubmitButton').removeClass("btn-primary").addClass("btn-success");
            $('#contactFormSubmitButton').html("Submitted");
        },
        error : function(data) {
            console.log('contact request - error');
            console.log(data);
            $('#contactFormSubmitButton').attr("disabled", false);
            $('#contactFormSubmitButton').removeClass("btn-primary").addClass("btn-danger");
            $('#contactFormSubmitButton').html("Submission Failed");
        },
    });

}
// function sendData() {
//     //get the input value
//     $someInput = $('#someInput').val();
//     $.ajax({
//         //the url to send the data to
//         url: "",
//         //the data to send to
//         data: {
//             someInput: $someInput
//         },
//         //type. for eg: GET, POST
//         type: "POST",
//         //datatype expected to get in reply form server
//         dataType: "json",
//         //on success
//         success: function(data) {
//             //do something after something is recieved from php
//         },
//         //on error
//         error: function() {
//             //bad request
//         }
//     });
// }
