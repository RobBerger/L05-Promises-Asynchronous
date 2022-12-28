new Promise(function (resolve, reject) {
    //   ....INSERT LONG-RUNNING OPERATION HERE...  
});

const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
       // resolve('promise resolved');
       reject('promise rejected');
    }, 3000);
})

myPromise.then(function (result) {
    console.log("Success: " + result);
}).catch(function (err) {
    console.log("Error: " + err)
});