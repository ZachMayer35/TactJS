// docs.lib.Dog :: A Dog class that requires docs.lib.Dog. Demonstrates class extensions.

(function ($) {
    $.types.ns('docs.demos.lib');
    docs.demos.lib.Dog = $.types.extend(docs.demos.lib.Pet, function (name) {
        var _speak = "Woof";
        var self = {
            speak: function () {
                return name + " says: " + _speak;
            }
        };
        return self;
    });
})(jQuery);