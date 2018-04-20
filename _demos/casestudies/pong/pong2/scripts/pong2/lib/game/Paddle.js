(function ($) {
    $.types.ns('pong2.lib.game');
    pong2.lib.game.Paddle = $.types.extend(pong2.lib.game.Entity, function (height, width) {
        var self = {
            moveTo: function (newX, newY) {
                var newPosition = new pong2.lib.util.Position(newX, newY);
                this.movement.setPosition(this.position, newPosition);
            },
            detectCollision: function (entity) {
                var collision = false;
                var entityTop = entity.position.getY();
                var entityBottom = (entity.position.getY() + entity.height);
                var thisTop = this.position.getY();
                var thisBottom = (this.position.getY() + this.height);
                if ((entityTop > thisTop && entityBottom < thisBottom) || (entityTop < thisTop && entityBottom > thisTop) || (entityBottom > thisBottom && entityTop < thisBottom)) {
                    collision = true;
                }
                return collision;
            },
            movement: new pong2.lib.util.Move()
        };
        return self;
    });
})(jQuery);
