// docs.queueable.SlideToggler :: Slides the element a specified number of pixels left or right and then toggles the first children.
(function ($) {
    if (!docs.demos.queueable.Toggler) {
        throw 'Initialization Error: docs.demos.queueable.slideToggler requires docs.demos.queueable.Toggler';
    }
    if (!docs.demos.queueable.Slider) {
        throw 'Initialization Error: docs.demos.queueable.slideToggler requires docs.demos.queueable.Slider';
    }
    $.types.ns('docs.demos.Queueable');
    docs.demos.queueable.SlideToggler = $.types.define(function () {
        var _context;
        var _lastSlideRight;

        var toggleElement = function () {
            $(_context).msg('toggle');
        };
        var setEvents = function () {
            $(_context).eventUnsubscribe('onSlideRight', toggleElement);
            $(_context).eventUnsubscribe('onSlideLeft', toggleElement);
            $(_context).eventSubscribe('onSlideRight', toggleElement);
            $(_context).eventSubscribe('onSlideLeft', toggleElement);
        };

        var self = {
            init: function (context) {
                _context = context;
                _lastSlideRight = false;
            },
            slideToggle: function () {
                setEvents();
                if (_lastSlideRight) {
                    $(_context).msg('slideLeft');
                    _lastSlideRight = false;
                } else {
                    $(_context).msg('slideRight');
                    _lastSlideRight = true;
                }
            }
        };
        return self;
    });
})(jQuery);