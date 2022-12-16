

jQuery(document).ready(function($) {
    $('img[useMap]').rwdImageMaps();

    $("area.cursor-pointer").on('click', function() {
        var title = $(this).attr("title");

        $("#mapa").attr("src", "/country/"+title+".svg");

        $("img#checkImage").each(function(i, e){
            if($(this).attr('data-title') != title){
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});