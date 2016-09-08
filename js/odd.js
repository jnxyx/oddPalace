(function() {

    var global = this;

    global.onload = initialize;


    function initialize() {
        var odd;

        if (global.odd && 'function' === typeof(global.odd)) {
            setInterval(function() {
            	console.log('1');
                renderHtml();
            }, 50);

            odd = global.odd({
                length: 3//,
                // callback: renderHtml
            });
        }

        global.document.getElementById('oddLevel').onkeydown = function(e) {

            if (e.keyCode == 13) {
                var number = parseInt(this.value);
                if (!isNaN(number)) {
                    odd.set(number);
                    renderHtml();
                }
            }
        };

    }

    function renderHtml() {
        var dataContainer = global.dataContainer;
        if (!global.dataContainer.length) {
            return;
        }

        var html = '';
        for (var i = 0; i < dataContainer.length; i++) {
            var item = dataContainer[i];
            var minHtml = '';
            for (var j = 0; j < item.length; j++) {
                minHtml += '<td>' + item[j] + '</td>';
            }
            html += '<tr>' + minHtml + '</tr>';
        }
        global.document.getElementById('cube').innerHTML = html;
    }


}).call(this);
