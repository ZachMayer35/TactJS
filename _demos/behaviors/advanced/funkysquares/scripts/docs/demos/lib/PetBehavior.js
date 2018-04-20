// docs.PetBehavior :: A behavior that uses the docs.lib.Pet class.
(function ($) {
    $.types.ns('docs.demos.lib');
    $.bootloader.requireByType("docs.demos.lib.Pet");
    $.bootloader.requireByType("docs.demos.lib.Dog");
    $.bootloader.requireByType("docs.demos.lib.Cat");
    docs.demos.lib.PetBehavior = $.types.define(function () {
        var _context;
        var _config;
        var _voiceBox;
        var _pet;
        var _resourcesLoaded = false;

        var showMsg = function (msg) {
            $("input:button", _context).attr('disabled', 'disabled');
            _voiceBox.html(msg).show().fadeOut(2000, function () { $(this).html(''); $("input:button", _context).removeAttr('disabled'); });
        };

        var checkResources = function (config) {
            if (docs.demos.lib.Pet && docs.demos.lib.Dog && docs.demos.lib.Cat)
                _resourcesLoaded = true;

            if (!_resourcesLoaded) {
                setTimeout(function () { checkResources(config); }, 100);
            } else {
                switch (config.type.toLowerCase()) {
                    case 'pet':
                        _pet = new docs.demos.lib.Pet(config.name);
                        break;
                    case 'dog':
                        _pet = new docs.demos.lib.Dog(config.name);
                        break;
                    case 'cat':
                        _pet = $.ioc.resolve('ICat', config.name);
                        break;
                };
            }
        };

        var self = {
            init: function (context) {
                _context = context;
                _config = $(_context).data();
                _voiceBox = $('#' + _config.voiceBox, _context);
                checkResources(_config);
            },
            walk: function () {
                var count = 0;
                count++;
                if (!_resourcesLoaded && count < 10)
                    setTimeout(function () { self.walk(); }, 100);
                else {
                    showMsg(_pet.walk());
                }
            },
            speak: function () {
                var count = 0;
                count++;
                if (!_resourcesLoaded && count < 10)
                    setTimeout(function () { self.speak(); }, 100);
                else {
                    var msg = "This pet cannot speak!";
                    if (_pet.speak) {
                        msg = _pet.speak();
                    }
                    showMsg(msg);
                }
            },
            doBusiness: function () {
                var count = 0;
                count++;
                if (!_resourcesLoaded && count < 10)
                    setTimeout(function () { self.doBusiness(); }, 100);
                else {
                    var msg = "This pet won't go!";
                    if (_pet.doBusiness) {
                        _pet.doBusiness();
                        msg = "Business complete!";
                    }
                    showMsg(msg);
                }
            },
            checkBox: function () {
                var count = 0;
                count++;
                if (!_resourcesLoaded && count < 10)
                    setTimeout(function () { self.checkBox(); }, 100);
                else {
                    var msg = "This pet has no box!";
                    if (_pet.box) {
                        if (_pet.box.isStinky() == true) {
                            msg = "Box is stinky!";
                        } else {
                            msg = "Box is clean!";
                        }
                    }
                    showMsg(msg);
                }
            }
        };
        return self;
    });
})(jQuery);