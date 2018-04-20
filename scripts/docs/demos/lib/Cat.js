// docs.lib.Cat :: A Cat class that requires docs.lib.Pet. Demonstrates dependencies.

(function ($) {
    $.types.ns('docs.demos.Lib');
    docs.demos.lib.Cat = $.types.extend(docs.demos.lib.Pet, function (name) {
        var _speak = "Meow";
        var self = {
            box: new Tact.Dependency('IBox'),
            speak: function () {
                return name + " says: " + _speak;
            },
            doBusiness: function (a) {
                self.box.poop();
            }
        };
        return self;
    });
    $.ioc.register('ICat', docs.demos.lib.Cat);

    // declaration in a separate file is forgone since this is only used with Cat.
    docs.demos.lib.LitterBox = $.types.define(function () {
        var _isStinky = false;
        var self = {
            poop: function () {
                _isStinky = true;
            },
            clean: function () {
                _isStinky = false;
            },
            isStinky: function () {
                return _isStinky;
            }
        };
        return self;
    });    
    $.ioc.register('IBox', docs.demos.lib.LitterBox);
})(jQuery);

