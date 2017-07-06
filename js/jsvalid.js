function validateForm()
{
    var x = document.forms["myForm"]["username"].value;
    if (x == "")
    {
        alert("Name must be filled out");
        return false;
    }
    re = /^\w+$/;
    if(!re.test(x))
    {
      alert("Error: Username must contain only letters, numbers and underscores!");
      return false;
    }
    var y = document.forms["myForm"]["pwd1"].value;
    if(y.length < 6)
    {
        alert("Error: Password must contain at least six characters!");
        return false;
    }
      re = /[0-9]/;
      if(!re.test(y))
      {
        alert("Error: password must contain at least one number (0-9)!");
        return false;
      }
      re = /[a-z]/;
      if(!re.test(y))
      {
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(y))
      {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        return false;
      }
} 
