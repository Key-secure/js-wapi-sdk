exports.DEBUG = false;
exports.UTF8 = 'utf8';

//about the http
exports.HOST = "";
exports.VER = '/api/v1';
exports.GET = 'GET';
exports.POST = 'POST';
exports.app_id = '';



exports.REGISTER_ADDRESS = "/address/register";
exports.CHECK_AVAILABLE_ADDRESS = "/address/available";
exports.DEPOSIT_NOTIFY = "/deposit/notify";
exports.WITHDRAW_CONSUME = "/withdraw/consume";
exports.WITHDRAW_NOTIFY = "/withdraw/notify";
exports.INTERNAL_NOTIFY = "/internal/notify";
exports.WITHDRAW_CANCEL = "/withdraw/cancel";

exports.privateKey = "";
exports.hiCoinPubKey = "";


exports.setPrivateKey = function (pKey) {
    if (pKey.startsWith('-----BEGIN PRIVATE KEY-----') && pKey.endsWith('-----END PRIVATE KEY-----')) {
        this.privateKey = pKey;
    } else {
        this.privateKey = '-----BEGIN PRIVATE KEY-----' + pKey + '-----END PRIVATE KEY-----';
    }
};

exports.setPubKey = function (pKey) {
    if (pKey.startsWith('-----BEGIN PUBLIC KEY-----') && pKey.endsWith('-----BEGIN PUBLIC KEY-----')) {
        this.hiCoinPubKey = pKey;
    } else {
        this.hiCoinPubKey = '-----BEGIN PUBLIC KEY-----' + pKey + '-----END PUBLIC KEY-----';
    }
};

exports.setHost = function (host) {
    this.HOST = host;
};

exports.setAppId = function (appId) {
    this.app_id = appId;
};
exports.setDebug = function (debug) {
    this.DEBUG = debug;
};

