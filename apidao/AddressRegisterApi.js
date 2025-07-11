const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/CustodyHttpUtils');
const Cons = require('../utils/Constants');

/**
 * Register an address with the platform, this address is used to assign to users
 */
exports.registerAddress = async function (reqData) {
    return await WApiHttpUtils.request({
        url: Cons.REGISTER_ADDRESS,
        method: Cons.POST,
        requestData: reqData
    });
};

/**
 * How many addresses are still available in the pushed addresses
 */
exports.checkAvailableAddress = async function (reqData) {
    var respData = await WApiHttpUtils.request({
        url: Cons.CHECK_AVAILABLE_ADDRESS,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.decryptByPrivate(respData.data);
};
