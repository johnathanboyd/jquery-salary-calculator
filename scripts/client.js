$( document ).ready( onReady );

let employees = [];

function onReady(){
    console.log( 'JQ' )
    //click event handlers
    $( '#submitButton').on('click', submitInfo);
} // end onReady

function submitInfo(){
    console.log('in submitInfo');
    const fName = $( '#firstName' ).val();
    const lName = $( '#lastName' ).val();
    const idNum = $( '#idNum' ).val();
    const jTitle = $( '#jobTitle' ).val();
    const annualSal = $( '#annualSalary' ).val();
    // create a new object with each submit
    let newObject = {
        firstName: fName,
        lastName: lName,
        idNumber: idNum,
        jobTitle: jTitle,
        annualSalaray: annualSal
    } // end newObject
    // push that object into the employees
    employees.push( newObject );
    // update DOM
    //showSubmit();
    // empty text input
    $( '#firstName' ).val( '' );
} // end submitInfo