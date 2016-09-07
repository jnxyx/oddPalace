(function() {

    var global = this;

    global.onload = initialize;


    function initialize() {

        if (global.odd && 'function' === typeof(global.odd)) {
            global.odd(3);
        }

    }


}).call(this);
