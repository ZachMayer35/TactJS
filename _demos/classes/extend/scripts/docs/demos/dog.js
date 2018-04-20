// a Dog object which extends docs.demos.Pet
(function ($) {
    // Define a namespace
    $.types.ns("docs.Demos");
    // Define the Dog class.
    docs.demos.Dog = $.types.extend(docs.demos.Pet, function (name) {
        // Private Members
        var _speak = "Woof!";

        // Public Members
        var self = {
            speak: function () {
                return self.superclass.name() + " says " + _speak;
            }
        };
        return self;
    });
})(jQuery);