(function(){
  var EventEmitter, LineEmitter;
  EventEmitter = require('events').EventEmitter;
  exports.LineEmitter = LineEmitter = (function(superclass){
    LineEmitter.displayName = 'LineEmitter';
    var prototype = __extend(LineEmitter, superclass).prototype, constructor = LineEmitter;
    function LineEmitter(stream){
      var _this = this;
      this.stream = stream;
      this.buf = "";
      this.stream.on('data', function(d){
        var ls, l, __i, __len;
        ls = (d + "").split(/[\r\n]/);
        if (ls.length > 1) {
          _this.emit('line', _this.buf + (ls.shift() + ""));
          _this.buf = ls.pop();
          for (__i = 0, __len = ls.length; __i < __len; ++__i) {
            l = ls[__i];
            _this.emit('line', l);
          }
        } else {
          _this.buf += l;
        }
      });
    }
    return LineEmitter;
  }(EventEmitter));
  function __extend(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
}).call(this);
