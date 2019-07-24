
function bold()
{
    var a = document.getElementById("baby");
    if (a.style.fontWeight=="bold")
        a.style.fontWeight="inherit";
    else a.style.fontWeight="bold";
}
function underline()
{
    var a = document.getElementById("baby");
    if (a.style.textDecoration=="underline")
        a.style.textDecoration="none";
    else a.style.textDecoration="underline";
}
function italic()
{
    var a = document.getElementById("baby");
    if (a.style.fontStyle=="italic")
        a.style.fontStyle="inherit";
    else a.style.fontStyle="italic";
}


function sizes(){
    document.getElementById("baby").style.fontSize=document.getElementById("sizing").value
}


function family(){
    document.getElementById("baby").style.fontFamily=document.getElementById("arial").value
}

