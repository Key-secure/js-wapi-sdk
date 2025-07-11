/**
 * RSA encryption algorithm encapsulation，
 * Provide encryption and decryption to the outside world
 */
const NodeRSA = require("node-rsa");
const Cons = require("./Constants");
const URLSafeBase64 = require('urlsafe-base64');
var crypto = require('crypto');


/**
 * encrypt by public  key
 */
exports.encryptByPublic = function (data) {
    //Encrypt request parameters
    var nodeRasPublic = new NodeRSA(Cons.hiCoinPubKey, 'pkcs8-public', {
        encryptionScheme: {
            scheme: 'pkcs1',
            padding: crypto.constants.RSA_PKCS1_PADDING,
            hash: "sha256",
        }
    });

    //console.log("nodeRasPublic.isPublic()->",nodeRasPublic.isPublic())
    var encryData = nodeRasPublic.encrypt(data, 'base64', 'utf8');
    //URL safe encode
    return URLSafeBase64.encode(encryData);

};

/**
 * decrypt by private key
 */
exports.decryptByPrivate = function (data) {
    if (!data) {
        return '';
    }
    var nodeRsaPriv = new NodeRSA(Cons.privateKey, 'pkcs8-private', {
        encryptionScheme: {
            scheme: 'pkcs1'
        }
    });
    return nodeRsaPriv.decrypt(data, 'utf8');
};

exports.sign = function (data) {
    var md5 = crypto.createHash('md5');
    var result = md5.update(data).digest('hex');
    //console.log("md5->",result)
    var nodeRasPublic = new NodeRSA(Cons.privateKey, 'pkcs8-private');
    var encryData = nodeRasPublic.sign(result, 'base64');
    //URL safe encode
    return URLSafeBase64.encode(encryData).replace("\r", "").replace("\n", "")
};