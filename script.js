let conditionToBeMet = true;

async function myPromise() {
    const result = await new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (conditionToBeMet) {
                resolve('promise resolved');
            } else {
                reject("promise rejected");
            }
        }, 3000);
    });
    console.log(result);
    return result;
};

myPromise()
    .then(res => console.log('Success: ' + res))
    .catch(err => console.log('Error: ' + err));