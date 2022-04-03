setInterval(myTimer,1000);

function myTimer()
{
    const timer = new Date;
    document.getElementById("time").innerHTML = timer.toLocaleTimeString();
}

function alertgithub(){
    return alert("Are you sure you want to vist the Github Page");
}

function alertlinkedin() {
    if (confirm("Are you sure you want to vist the LinkedIn Page")){
        location="google.com";
    }
    else{

    }
}

function alertemail() {
    return alert("Are you sure you want to visit the Email");
}
