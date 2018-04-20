// docs.lib.Pet :: A simple pet class. Demonstrates class creation.

(function ($) {
    $.types.ns('docs.demos.lib');
    docs.demos.lib.Pet = $.types.define(function (name) {
        var _name = name;
	    var _walkCount = 0;
	    var self = {
		    walk : function() {
			    _walkCount++;
			    return name
				    + " has been walked "
				    + _walkCount
				    + " time(s) today.";
	        }
        };	    
	    return self;
    });	
})(jQuery);