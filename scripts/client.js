$( document ).ready( onReady );

let employees = [];
function onReady(){
    console.log( 'JQ' )
    //click event handlers
    $( '#submitButton').on('click', submitInfo);
} // end onReady

function submitInfo(){
    console.log('in submitInfo');
    // create a new object with each submit
    //push that ovject into the '!!!!!array!!!!!'
    //update DOM
    //empty text input
} // end submitInfo