/**
 *  deposit notification result returned
 */
const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/CustodyHttpUtils');
const Cons = require('../utils/Constants');

/**
 *  deposit notification
 */
exports.depositNotify =async function (reqData) {
    var respData = await WApiHttpUtils.request({
        url: Cons.DEPOSIT_NOTIFY,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.decryptByPrivate(respData.data);
};

/**
 *  internal notification
 */
exports.internalNotify = async function (reqData) {
    return await WApiHttpUtils.request({
        url: Cons.INTERNAL_NOTIFY,
        method: Cons.POST,
        requestData: reqData
    });
};