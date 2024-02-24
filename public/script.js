$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    // if($(window).scrollTop()>0){
    //     $('.top').show();
    // }
    // else{
    //     $('.top').hide();
    // }

});


// email js
function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        contact : document.getElementById("contactno").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_s2in4iq","template_e9ow3sj",params).then(function (res){
        alert("Succesfully sent! "+res.status);
    })
}