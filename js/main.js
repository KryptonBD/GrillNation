// navbar oncscroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.documentElement.clientWidth > 991){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // document.getElementById("myBtn").style.display = "block";
            document.getElementById("mynav").style.backgroundColor = "#333";
            
        }
        else {
            // document.getElementById("myBtn").style.display = "none";
            document.getElementById("mynav").style.background = "transparent";
        }
    }
    else{
        document.getElementById("mynav").style.backgroundColor = "#333"
    }
}


if(document.documentElement.clientWidth <= 991){
    document.getElementById("mynav").style.backgroundColor = "#333";

}


