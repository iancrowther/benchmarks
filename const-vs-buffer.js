const Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

// add tests
suite
  .add('Buffer', function () {
    const Buff = Buffer.alloc(10, '_', 'utf8');
    for (let i = 0; i < 10; i++) {
      Buff[i] = 0;
    }
    const result = Buff.toString('utf8');
  })
  .add('const', function () {
    const Buff = 0000000000
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ 'async': true });