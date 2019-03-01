function changeBackground(x){
    var bodyChanges = document.getElementById('body');
    var headingChanges = document.getElementById('heading');
    bodyChanges.style.backgroundColor = x.value;
    headingChanges.style.color = x.value;
}
function validateForm(){
    var firstName = document.forms['myForm']['firstName'].value;

    if(firstName == null || firstName == ''){
        alert('First Name is required!');
        return false;
    }
}