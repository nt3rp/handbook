var MyClass = window.MyClass = function() {
    var me = {};

    me.count = 0;

    me.counter = function() {
        me.count++;
    };

    return me;
};
