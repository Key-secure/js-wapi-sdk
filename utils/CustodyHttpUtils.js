const Cons = require('./Constants');
const request = require('request');
const RSA = require('./RSAUtil');


exports.request = async function (data) {
    var orignStr = JSON.stringify(data.requestData);
    if (Cons.DEBUG) {
        console.log("orignStr->", orignStr);
    }
    //URL safe encode
    var paramSign = RSA.sign(orignStr);
    if (Cons.DEBUG) {
        console.log("paramSign->", paramSign);
    }
    var paramData = RSA.encryptByPublic(orignStr);
    if (Cons.DEBUG) {
        console.log("paramData->", paramData);
    }
    const options = {
        method: data.method,
        url: Cons.HOST + Cons.VER + data.url,
        body: {
            app_id: Cons.app_id,
            time: Date.now(),
            sign: paramSign,
            data: paramData
        },
        json: true
    };
    // Get post request data

    return await new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};