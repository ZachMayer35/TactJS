// docs.eventable.SlideToggler :: Slides the element a specified number of pixels left or right and then toggles the first children.
(function ($) {
    if (!docs.demos.eventable.Toggler) {
        throw 'Initialization Error: docs.demos.eventable.slideToggler requires docs.demos.eventable.Toggler';
    }
    if (!docs.demos.eventable.Slider) {
        throw 'Initialization Error: docs.demos.eventable.slideToggler requires docs.demos.eventable.Slider';
    }
    $.types.ns('docs.demos.Eventable');
    docs.demos.eventable.SlideToggler = $.types.define(function () {
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