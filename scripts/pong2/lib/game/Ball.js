(function ($) {
    $.types.ns('pong2.lib.game');
    pong2.lib.game.Ball = $.types.extend(pong2.lib.game.Entity, function (height, width) {        
        var self = {
            moveTo: function (newX, newY, duration) {
                var newPosition = new pong2.lib.util.Position(newX, newY);
                duration ? this.movement.changePosition(this.position, newPosition, duration) : this.movement.setPosition(this.position, newPosition);
            },
            movement: new pong2.lib.util.Move()           
        };
        return self;
    });
})(jQuery);
