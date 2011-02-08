/**
 * A jQuery plugin providing "endless scrolling" based on a regular HTML pager
 *
 * @author Gerard van Helden <drm@melp.nl>
 */
;(function($){
    $.fn.extend({
        'endlessPager': function(pager, itemSelector, threshold){
            var threshold = threshold || 200;
            return $(this).each(function(i, e){
                $(pager, this).hide();
                
                var loading = false, endreached = false;
                
                $(window).scroll(function(){
                    if(loading || endreached)
                        return;
                    if($(document).height() - $(window).height() <= $(window).scrollTop() + threshold) {
                        loading = true;
                        var next = $(pager).find('a[rel=next]').first();
                        if(next.length) {
                            $.get(
                                next.attr('href'),
                                function(page) {
                                    var dom = $(page);
                                    $(pager, e).replaceWith(dom.find(pager).hide());
                                    $(e).append(dom.find(itemSelector))
                                    loading = false
                                }
                            );
                        } else {
                            endreached = true;
                        }
                    }
                });
            });
        }
    });
})(jQuery);

