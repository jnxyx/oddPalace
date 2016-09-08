(function() {

    var global = this,
        dataContainer = global.dataContainer = [],
        defaults = {};

    function initDataContainer() {

        dataContainer = global.dataContainer = [];

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

    function judge() {

        if (!dataContainer.length) {
            return false;
        }

        var value = (1 + Math.pow(defaults.number, 2)) * defaults.number / 2,
            i,
            j,
            landscapeValue = 0, //横向和值
            verticalValue = 0, //竖向和值
            unslantValue = 0, //逆斜向和值
            slantValue = 0; //斜向和值

        //横向、竖向判断
        for (i = 0; i < defaults.number; i++) {

            for (j = 0; j < defaults.number; j++) {
                //横向、竖向赋值
                landscapeValue += dataContainer[i][j];
                verticalValue += dataContainer[j][i];

                //斜向赋值
                if (i === j) {
                    slantValue += dataContainer[i][j];
                }

                //逆斜向赋值
                if ((i + j + 1) === defaults.number) {
                    unslantValue += dataContainer[i][j];
                }

            }

            if (landscapeValue !== value || verticalValue !== value) {
                return false;
            }

        }

        //斜向和值判断
        if (slantValue !== value || unslantValue !== value) {
            return false;
        }

        return true;
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
            initDataContainer();
        },

        resolve: function() {
        	
        }
    };


    global.odd = odd;

}).call(this);
