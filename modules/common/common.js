var $ = require('jquery');

$(function(){
    $(document).delegate('.jump-link', 'click', function(){
        var element = $(this);
        var url = element.data('url');

        window.location.hash = url;
/*        var old = $location.hash();
          $location.hash('batchmenu-bottom');
          $anchorScroll();
          $location.hash(old);


        window.location.href = url;*/
    });
});
