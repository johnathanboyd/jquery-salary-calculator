$( document ).ready( onReady );

let employees = [];
let monthly =[];

function onReady(){
    console.log( 'JQ' )
    //click event handlers on load
    $( '#submitButton').on('click', submitInfo);
    // click handler in dynamic list item
    $( '#employeesOut').on('click', '#deleteButton', deleteLine);
    //$( '#redLight').css('background-color:', 'red', redCheck);
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
        annualSalary: annualSal
    } // end newObject
    // push that object into the employees
    employees.push(newObject);
    // update DOM
    //showSubmit();
    // empty text input
    $( '#firstName' ).val( '' );
    $( '#lastName' ).val( '' );
    $( '#idNum' ).val( '' );
    $( '#jobTitle' ).val( '' );
    $( '#annualSalary').val( '' );
    // call updateEmployee
    updateEmployee(newObject);
} // end submitInfo

function updateEmployee (object){
    console.log( 'in updateEmployee');
    // target ul by id
    let el = $( '#employeesOut' );
     
    // append each employee to DOM
    el.append( `<li id=indvidual> ${object.firstName} ${object.lastName} ${object.idNumber} ${object.jobTitle} ${object.annualSalary} <button id="deleteButton">Delete</button></li>` );
    //}// end for
    compileSal();
} // end update employee

function compileSal(){
    console.log( 'in compileSal' );
    // add them together
    let total = 0;
    
    let el = $( '#total' );
    // empty el
    el.empty();
    //loop through
    for( let i=0; i<employees.length; i++){
        total += Number(employees[i].annualSalary); 
    };// end for loop
    console.log( 'this is annually:', total )
    
    let monthlyTotal = total/12
    console.log('This is monthly:', monthlyTotal)

    monthly.push( monthlyTotal );
    
    console.log( 'in displayTotal' );

    let add = $( '#total' );
    
    add.empty(); 

    for( let i=0; i<employees.length; i++){
        let el = $( '#total');
        el.empty();
        add.append( `$${monthlyTotal}`);
    };
redCheck();
}

function redCheck(){
    console.log( 'in redCheck')
    for(i=0; i<monthly.length; i++){
        let el = monthly[monthly.length-1]
        if( el > 20000){
            $('span').css("background-color", "red");
        }
    }
   
};

function deleteLine(){
    console.log( 'in deleteLine');
    // target ul by id
    let el = $( this ).parent();
    
    el.remove( );

    // delete object from original array
    deleteEmployee()
} // end delete line

function deleteEmployee(){
    console.log('in deleteEmployee')
    $(this).parent().parent().remove()
    
    }; 


    //employees.splice(  )
        /*for (let i=0; i<employees.length; i++){
            if(  ){
            console.log(`${employees[i].firstName}`)
            }
                //employees.splice(`${employees[i]}`, 1);
         } // for*/
//}; // end delete employee