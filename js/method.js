(function() {

    var global = this,
        dataContainer = global.dataContainer = [],
        defaults = {};

    function initDataContainer() {

        if (defaults.number) {
            for (var i = 1; i <= defaults.number; i++) {
                var item = [];
                for (var j = 1; j <= defaults.number; j++) {
                    item[j - 1] = j + (i - 1) * defaults.number;
                }
                dataContainer.push(item);
            }
        }
        console.log(dataContainer);

    }

    function renderDataContainer(argument) {

    }


    function odd(options) {
        if (!(this instanceof(odd))) {
            return new odd(options);
        }

        defaults.number = options;

        initDataContainer();
    }

    odd.prototype = {
        set: function(number) {
            defaults.number = number;
            dataContainer = global.dataContainer = [];
            initDataContainer();
        }
    };


    global.odd = odd;

}).call(this);
