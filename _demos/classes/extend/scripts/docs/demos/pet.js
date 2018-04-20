// A simple Pet object
(function ($) {
    // Define a namespace
    $.types.ns("docs.demos");
    // Define the Pet class.
    docs.demos.Pet = $.types.define(function (name) {
        // Private Members
        var _name = name
        var _walkCount = 0;

        // Public Members
        var self = {
            walk: function () {
                _walkCount++;
                return _name
                    + " has been walked "
                    + _walkCount
                    + " time(s) today.";
            },
            name: function () {
                return _name;
            }
        };
        return self;
    });
})(jQuery);