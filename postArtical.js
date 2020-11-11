function postArticalEventHandler()
{
    userNameElement =document.getElementById("txtName");
    blogTitleElement =document.getElementById("txtBlogTitle");
    blogArticalElement =document.getElementById("txtBlogArtical");
    errorMessageElement =document.getElementById("errorMessage");
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
        console.log("BlogTitle  can not  be empty");
        errorMessageElement.innerHTML+="<br/> BlogTitle  can not be Empty";
        errorFlag =true;
    }


    if (blogArticalElement.value=="")
    {
        console.log("Blog Artical  can not  be empty");
        errorMessageElement.innerHTML+="<br/> Blog Article can not be Empty";
        errorFlag =true;
    }
     
    if (errorFlag==false)
    {
        message=" Thank You "+userNameElement.value +" for submitting the blog on "+blogTitleElement.value;
        alert(message);
    }
}