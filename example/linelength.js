(function(){
  var LineEmitter, le;
  LineEmitter = require('../lib/lineemitter').LineEmitter;
  le = new LineEmitter(process.stdin);
  le.on('line', function(l){
    console.log(l.length);
  });
  process.stdin.resume();
}).call(this);
