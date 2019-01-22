setTimeout(function() {
  console.log('8');
}, 0);

async function async1() {
  console.log('1');
  const data = await async2();
  console.log('6');
  return data;
}

async function async2() {
  return new Promise(resolve => {
    console.log('2');
    resolve('async2的结果');
  }).then(data => {
    console.log('4');
    return data;
  });
}

async1().then(data => {
  console.log('7');
  console.log(data);
});

new Promise(function(resolve) {
  console.log('3');
  resolve();
}).then(function() {
  console.log('5');
});
