(function ($) {
    $.types.ns('pong2.lib.Game');
    Pong2.lib.Game.Entity = $.types.define(function (h, w) {
        var _height = h;
        var _width = w;
        var self = {
            height: _height,
            width: _width,
            position: new Pong2.lib.Util.Position()
        };
        return self;
    });
})(jQuery);