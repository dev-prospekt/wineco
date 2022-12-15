jQuery(document).ready(function($) {
    
    $('#mapa').rwdImageMaps();


    $("area").on('click', function() {
        var title = $(this).attr("title");

        $("#mapa").attr("src", "/country/"+title+".svg");
    });

    

});