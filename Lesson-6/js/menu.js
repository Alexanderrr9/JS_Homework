$(document).ready(function () {
    var men = 'true';
    $('#sandwich').click(function () {
        if(men === false){
            $('.menu').slideUp();
            men =! men;
        }
        else{
            $('.menu').slideDown();
            men =! men;
        }
    });
        $('#sandwich').click(function () {
            $('#sandwich').toggleClass('active');
        });
});