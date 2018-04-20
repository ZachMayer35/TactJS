(function ($) {
    $.types.ns('Pong2.lib.Game');
    Pong2.lib.Game.Ball = $.types.extend(Pong2.lib.Game.Entity, function (height, width) {        
        var self = {
            moveTo: function (newX, newY, duration) {
                var newPosition = new Pong2.lib.Util.Position(newX, newY);
                duration ? this.movement.changePosition(this.position, newPosition, duration) : this.movement.setPosition(this.position, newPosition);
            },
            movement: new Pong2.lib.Util.Move()           
        };
        return self;
    });
})(jQuery);
