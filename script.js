setInterval(myTimer,1000);

function myTimer()
{
    const timer = new Date;
    document.getElementById("time").innerHTML = timer.toLocaleTimeString();
}


function alertgithub(){
    if (confirm("Are you sure you want to vist the Github Page")) {
        return;
    }
    else {
        event.preventDefault();
    }
}

function alertlinkedin() {
    if (confirm("Are you sure you want to vist the LinkedIn Page")){
        return;
    }
    else {
        event.preventDefault();
    }
    
}

function alertemail() {
    if(confirm("Are you sure you want to visit the Email")){
        return;
    }
    else{
        event.preventDefault();
    }
}

function pulse() {
    $('.heart').animate({
        width: 30, height: 30,
        opacity: 0.2
    }, 70, function () {
        $('.heart').animate({
            width: 50, height: 50,
            opacity: 1
        }, 70, function () {
            pulse();
        });
    });
};

pulse();
