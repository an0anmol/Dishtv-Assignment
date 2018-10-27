function myFunction() 
{
  var1=document.getElementById("UserName").value;
  var2=document.getElementById("Password").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (reg.test(var1) == false) 
        {
            alert('Invalid Email Address');
        }
      else  if (passw.test(var2) == false) 
        {
            alert('Invalid Password');
        }
  }
