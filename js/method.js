(function() {

    var global = this,
        dataContainer = global.dataContainer = [],
        defaults = {};

    function initDataContainer(number) {

        defaults.number = number;

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

        defaults.array = [];

        for (var i = 1; i <= Math.pow(defaults.number, 2); i++) {
            defaults.array[i - 1] = i;
        }


    }



    function renderDataContainer() {
        var n = 0;

        if (defaults.number) {
            for (var i = 0; i < defaults.number; i++) {
                for (var j = 0; j < defaults.number; j++) {
                    dataContainer[i][j] = defaults.array[n++];
                }
            }
        }
    }

    function cloneArray(array) {
        var rarray = [];
        for (var i = array.length - 1; i >= 0; i--) {
            rarray[i] = array[i];
        }
        return rarray;
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

        //斜向和值判断
        for (i = 0; i < defaults.number; i++) {
            //斜向赋值
            slantValue += dataContainer[i][i];

            //逆斜向赋值
            unslantValue += dataContainer[i][defaults.number - i - 1];
        }



        //横向、竖向判断
        for (i = 0; i < defaults.number; i++) {

            for (j = 0; j < defaults.number; j++) {
                //横向、竖向赋值
                landscapeValue += dataContainer[i][j];
                verticalValue += dataContainer[j][i];
            }

            if (landscapeValue !== value || verticalValue !== value) {
                return false;
            }

            landscapeValue = 0;
            verticalValue = 0;

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

        this.options = options;

        initDataContainer(this.options.length);

        this.arrange(defaults.array);

    }

    odd.prototype = {

        set: function(number) {
            initDataContainer(number);
            this.arrange(defaults.array);
        },

        resolve: function() {
            for (var i = dataContainer.length - 1; i >= 0; i--) {
                var item = dataContainer[i];
                for (var j = item.length - 1; j >= 1; j--) {
                    var exchange = item[j];
                    item[j] = item[j - 1];
                    item[j - 1] = exchange;
                    if (judge()) {
                        return;
                    }
                }
            }
            return;
        },

        arrange: function(array) {
            //0长度返回
            if (!array.length) {
                renderDataContainer();

                if (this.options.callback) {
                    var self = this;
                    self.options.callback();
                    // setTimeout(function() {
                    //     self.options.callback();
                    // }, 500);
                }

                var rjudge = judge();
                return rjudge;

            }

            var rarray = cloneArray(array);

            for (var i = 0; i < rarray.length; i++) {

                defaults.array[defaults.array.length - rarray.length] = rarray[i];

                var nextArray = cloneArray(rarray);

                nextArray.splice(i, 1);

                var results = this.arrange(nextArray);
                if (results) {

                    return true;
                }
            }

        }
    };


    global.odd = odd;

}).call(this);
