$(document).ready(() => {
    let validate = (email) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    const validateEmail = () => {
        const email = $('#email').val();
        const error = $('.error');

        if(!validate(email)) {


            error.html('Invalid email address');
            error.css('color','red');
            $('#email').css({
                'backgroundColor': 'rgba(255, 0, 0, 0.2)',
                'borderColor':'red',
            });
        }else {
            error.html('Valid email address');
            error.css('color', 'green');
            $('#email').css({
                'backgroundColor': 'rgba(0, 255, 0, 0.2)',
                'borderColor':'green',
            })
            
        };

    };

    $('.btn').on('click', (e) => {
        const email = $('#email').val();
        if(validate(email)) {
            e.preventDefault();
            $('main').toggle();
            $('.card').toggle();
            $('.email-sent').html(email)
        } else {
            e.preventDefault();
        }

    });   
    
    $('.email-sent').on('click', () => {
        
        $('.card').hide();
        
    });


    $('#email').on('input', validateEmail);



})