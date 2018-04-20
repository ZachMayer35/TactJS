(function ($) {

    $.types.ns("Docs");
    docs.HashLink = $.types.define(function () {
        var _context;

        var self = {
            init: function (context) {
                _context = context;
            },
            click: function () {
                setTimeout(function () {
                    if (window.location.hash) {
                        $(window).scrollTop(0);
                        $('[data-behaviors-lazy="docs.SectionSelector"],[data-behaviors-eager="docs.SectionSelector"]').msg('selectSection', window.location.hash.split('/')[1]);
                    }
                }, 100);
            }
        };
        return self;
    });

})(jQuery);