﻿// an object which returns the name of the captain in Star Trek : Enterprise
(function ($) {
    $.types.ns("docs.demos");
    docs.demos.Enterprise = $.types.define(function () {

        var self = {
            captain: function () {
                return "Jonathan Archer";
            }
        };

        return self;
    });
})(jQuery);