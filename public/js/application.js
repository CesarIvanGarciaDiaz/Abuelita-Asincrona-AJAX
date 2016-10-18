
$(document).ready(function() {

  //SUBMIT example
  //https://api.jquery.com/submit/
  $("form").submit(function(event){
      // alert( "Handler for .submit() called." );
    event.preventDefault();

    //
    // $( "#target" ).submit(function( event ) {
    //   alert( "Handler for .submit() called." );
    //   event.preventDefault();
    // });

    //SERIALIZE
    //console.log( $( this ).serialize() );


    var informacion = $(this).serialize();
    var url = $(this).attr('action');
    //console.log(informacion);
    //console.log(url);


    //POST
  //  $.post( "ajax/test.html", function( data ) {
  //$( ".result" ).html( data );
//});
    $.post(url, informacion, function(data){
     $("#responde" ).empty();
     $("#responde").append(data);
    });

  });
});



//Bind a callback to be triggered when your form is submitted
//Prevent the form to be submitted from submitting in the default way
//Serialize the data in the form to be submitted
//Use jQuery's AJAX API to make a POST request to the server
//When the server responds, update the page accordingly (this is the asynchronous part — you don't know when the server will respond)
