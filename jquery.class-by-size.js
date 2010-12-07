/**
 * @author Gerard van Helden <drm@melp.nl>
 */
(function($){
    var doc = $('html');
    var fnUpdateClass = function(el, map) {
        var w = parseInt(doc.width()), 
            largest = false;
            
        $.each(map, function(s, cssClass) {
            if(parseInt(w) > s) {
                largest = cssClass;
            }
            $(el).removeClass(cssClass);
        });
        if(largest) {
            $(el).addClass(largest);
        }
    };
    
    $.fn.classBySize = function(map) {
        var el = this, fnBound = function() {
            fnUpdateClass(el, map);
        };
        
        $(window).resize(fnBound);
        $(fnBound);
    };
})(jQuery);

