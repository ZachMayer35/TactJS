﻿// docs.Slider :: Slides the element a specified number of pixels left or right.
(function ($) {
    $.types.ns('docs.demos');
    docs.demos.Slider = $.types.define(function () {
        var _context;
        var _data;
        var _slideDistance;
        var _slideTime;
        var self = {
            init: function (context) {
                _context = context;
                _data = $(_context).domdata();
                _slideDistance = (_data.slideDistance ? _data.slideDistance : 100);
                _slideTime = (_data.slideTime ? _data.slideTime : 1000);
            },
            slideRight: function () {
                $(_context).animate({ marginLeft: '+=' + _slideDistance + 'px' }, _slideTime);
            },
            slideLeft: function () {
                $(_context).animate({ marginLeft: '-=' + _slideDistance + 'px' }, _slideTime);
            }
        };
        return self;
    });
})(jQuery);