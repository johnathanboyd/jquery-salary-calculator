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
    $( '#lastName' ).val( '' );
    $( '#idNum' ).val( '' );
    $( '#jobTitle' ).val( '' );
    $( '#annualSalary').val( '' );
    // call updateEmployee
    updateEmployee();
} // end submitInfo

function updateEmployee (){
    console.log( 'in updateEmployee');
    // target ul by id
    let el = $( '#employeesOut' );
    // empty list
    el.empty();
    // loop through employees 
    for ( let i=0; i<employees.length; i++){
    // append each employee to DOM
        el.append( `<li> ${employees[i].firstName} ${employees[i].lastName} ${employees[i].idNumber} ${employees[i].jobTitle} ${employees[i].annualSalaray}</li>` );
    }// end for
} // end update employee

