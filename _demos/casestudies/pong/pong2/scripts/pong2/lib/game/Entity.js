(function ($) {
    $.types.ns('pong2.lib.game');
    pong2.lib.game.Entity = $.types.define(function (h, w) {
        var _height = h;
        var _width = w;
        var self = {
            height: _height,
            width: _width,
            position: new pong2.lib.util.Position()
        };
        return self;
    });
})(jQuery);