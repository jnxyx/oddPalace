(function() {

    var global = this,
        dataContainer = [],
        defaults = {};

    function odd(options) {

        defaults.number = options;

        initDataContainer();
    }

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

    global.odd = odd;

}).call(this);
