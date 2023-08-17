
function cgpaToPercentage() {
  const cgpaInput = document.forms.form.CGPA;
  const percentageInput = document.forms.form.Percentage;

  const cgpa = parseFloat(cgpaInput.value);

  if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
    alert("Invalid CGPA. Please enter a valid CGPA between 0 and 10.");
    return;
  }

  const percentage = (cgpa - 0.5) * 10;
  percentageInput.value = percentage.toFixed(2) + "%";
}






































     
// function cgpaToPercentage(CGPA) {
//     if (typeof CGPA !== 'number' || CGPA < 0 || CGPA > 10) {
//       return "Invalid CGPA"; // Handle invalid input
//     };
  
//     const Percentage = (CGPA - 0.5) * 10;
//     return Percentage.toFixed(2); // Return the percentage with 2 decimal places
//      };

//      document.forms.Percentage.value=result;



//   var a,b,result;


// function add (){
//     a= parseInt (document.myform.number1.value);

//     b= parseInt (document.myform.number2.value);

//     result=a+b;

//     // alert("addition is ="+result)
//     document.myform.Result.value=result;




// }

// function chklogin()
// {    
//     var email,password;
//     email=document.myform.email.value;

//     password=document.myform.password.value;

//     if(email =="gr@gmail.com" && password =="@123"){

//         alert("login done");

//     }
//     else{
//         alert("incorrect details");
//     }

// }