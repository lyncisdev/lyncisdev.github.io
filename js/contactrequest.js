function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;

}


function sendData() {
    var formData = new FormData();
    console.log('sending data');

    console.log(getFormData($('#contactForm')));

    $.ajax({
        url : 'https://aubl01ppu7.execute-api.eu-west-1.amazonaws.com/prod/contact',
        type : 'POST',
        // data : {
        //     name: "Donald Duck",
        //     email: "Duckburg"
        // },
        processData: false,  // tell jQuery not to process the data
        // contentType: false,  // tell jQuery not to set contentType
        contentType: 'application/json;charset=UTF-8',
        dataType : 'json', // data type
        data : getFormData($('#contactForm')),
        success : function(data) {
            console.log('success');
            console.log(data);
            alert(data);
        },
        error : function(data) {
            console.log('error');
            console.log(data);
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
