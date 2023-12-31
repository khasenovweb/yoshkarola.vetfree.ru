$(document).ready(function(){
    $('[data-phone-full]').click(function(){
        var phone = $(this).attr('data-phone-full');
        $(this).find('[data-phone-cut]').html(phone);
    });
    // Поиск города
    $('[data-search-city]').on('input',function(){
        var query = $(this).val().toLowerCase();
        console.log(query);
        $('[data-city]').hide();
        $('[data-city]').each(function(){
            var city = $(this).attr('data-city').toLowerCase();
            var thiscity = $(this);
            if(city.includes(query) == true) {
                thiscity.show();
            }
        });
    });
    // END Поиск города
    // Поиск района
    $('[data-search-raion]').on('input',function(){
        var query = $(this).val().toLowerCase();
        console.log(query);
        $('[data-raion]').hide();
        $('[data-raion]').each(function(){
            var city = $(this).attr('data-raion').toLowerCase();
            var thiscity = $(this);
            if(city.includes(query) == true) {
                thiscity.show();
            }
        });
    });
    // END Поиск района
    // Поиск метро
    $('[data-search-metro]').on('input',function(){
        var query = $(this).val().toLowerCase();
        console.log(query);
        $('[data-metro]').hide();
        $('[data-metro]').each(function(){
            var city = $(this).attr('data-metro').toLowerCase();
            var thiscity = $(this);
            if(city.includes(query) == true) {
                thiscity.show();
            }
        });
    });
    // END Поиск метро
});
