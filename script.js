new Promise(function (resolve, reject) {
    //   ....INSERT LONG-RUNNING OPERATION HERE...  
});

const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('promise resolved');
    }, 3000);
})