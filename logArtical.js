function postArticalEventHandler()
{
    userNameElement =document.getElementById("txtName");
    blogTitleElement =document.getElementById("txtPass");
    
    errorMessageElement =document.getElementById("errMessage");
    errorFlag =false;
     errorMessageElement.innerHTML="";

    

    if (userNameElement.value=="")
    {
        console.log("UserName can not  be empty");
        errorMessageElement.innerHTML+="UserName can not be Empty";
        errorFlag =true;
    }
    
    if (blogTitleElement.value=="")
    {
        console.log("Password can not  be empty");
        errorMessageElement.innerHTML+="<br/> Password can not be Empty";
        errorFlag =true;
    }


    
    if (errorFlag==false)
    {
        message=" Thank You "+userNameElement.value +" you have successfully Logged in ";
        alert(message);
        location.href="file:///home/labsuser/blogproject/home.html";
    }
}