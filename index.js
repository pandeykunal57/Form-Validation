function validate()
{
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkcpassword(password, cpassword)
}



function checkusername(username)
{       if(username.length > 7)
        {
            document.getElementById('username_error').innerHTML=''
            document.getElementById('username').classList.add( 'success')
            document.getElementById('username').classList.replace('error', 'success')
        }
        else
        {
            document.getElementById('username').classList.add( 'error')
            document.getElementById('username_error').innerHTML='Username Must be 8 Letters long !'
        } 
}
    
function checkemail(email)
{
        if(email.length > 7 && email.includes('@gmail.com'))
            {
                document.getElementById('email_error').innerHTML=''
                document.getElementById('email').classList.add( 'success')
                document.getElementById('email').classList.replace('error', 'success')
            }
            else
            {
                document.getElementById('email').classList.add( 'error')
                document.getElementById('email_error').innerHTML='Enter a VAlid Email Id  !'
            }
}
    
function checkpassword(password)
{
        if(password.length > 7 && password.includes('@'))
            {
                document.getElementById('password_error').innerHTML=''
                document.getElementById('password').classList.add( 'success')
                document.getElementById('password').classList.replace('error', 'success')
            }
            else
            {
                document.getElementById('password').classList.add( 'error')
                document.getElementById('password_error').innerHTML='Enter a Strong PASSWORD (must contain @ or #) !'
            }
}    
    
function checkcpassword(password, cpassword)
{

        if(cpassword==password && cpassword !='')
            {
                document.getElementById('cpassword_error').innerHTML=''
                document.getElementById('cpassword').classList.add( 'success')
                document.getElementById('cpassword').classList.replace('error', 'success')
            }

            else
            {
                document.getElementById("cpassword").classList.add("error");
                document.getElementById('cpassword_error').innerHTML='PASSWORD do not match !'
            }
        
}
