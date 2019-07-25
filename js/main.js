$(Document).ready(function(){
    
$('.slider').slick({
    dots: true,
    arrows: false,
});

});

$(Document).ready(function(){
    $('.load-more').on('click', function(){
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url: '/data.html', 
            type: 'GET',
            beforeSend: function(){
                btn.attr('disablet', true);
                loader.addClass('d-inline-block')
            },
            success: function(responce){
                setTimeout(function(){
                    loader.removeClass('d-inline-block');
                    btn.attr('disablet', false);
                    $('.after-posts').before(responce);
                },  1000);
            },
            error: function(){
                alert('Error!');
                loader.removeClass('d-inline-block');
                btn.attr('disablet', false);
            }
        });
    })
});