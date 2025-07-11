const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/CustodyHttpUtils');
const Cons = require('../utils/Constants');

/**
 * Withdrawal interface
 */
exports.withdrawConsume = async function (reqData) {
    var respData = await WApiHttpUtils.request({
        url: Cons.WITHDRAW_CONSUME,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.decryptByPrivate(respData.data);
};

/**
 * Withdrawal notification interface
 */
exports.withdrawNotify = async function (reqData) {
    return await WApiHttpUtils.request({
        url: Cons.WITHDRAW_NOTIFY,
        method: Cons.POST,
        requestData: reqData
    });
};

/**
 * Withdrawal and return interface
 */
exports.withdrawCancel = async function (reqData) {
    return await WApiHttpUtils.request({
        url: Cons.WITHDRAW_CANCEL,
        method: Cons.POST,
        requestData: reqData
    });
};

