
$(document).ready(function() {
    let Xname, Oname;
    var i = 0;
    var userElements = $('.user').children();
    console.log(userElements);
    userElements.eq(i).focus();

    $(document).on("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (i < userElements.length - 1) {
                i++;
                userElements.eq(i).focus();
            }
        }
    });
    
$("#play").click(
    function(){
        var flag=0;
        if(($('#X').val()==="")||($("#O").val()==="")){
            alert("Enter the Player Names");
            flag=1;
        }
        if(flag==0){
        $('.user').hide(4000);
        $('.rules').fadeOut(8000);
        const Xinput=document.getElementById('X').value;
        const Oinput=document.getElementById('O').value;

        window.Xname=Xinput;
        window.Oname=Oinput;
        console.log(window.Xname,window.Oname);
        
    
        $(document).trigger('playboard');
    setTimeout(function() {
        $('.second').load("board.html",function(){
            $(document).trigger('playboard');
        });
    },10000);}
});
console.log("trigger");
});