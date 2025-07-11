const Cons = require('../utils/Constants');
const addrApi = require('../apidao/AddressRegisterApi');
const depositNotify = require('../apidao/DepositNotifyApi');
const withdraw = require('../apidao/WithdrawApi');


Cons.setAppId('5a3d788537e2426bbe92ca86c14660f4');//merchant id
Cons.setHost('http://baas.cacheily.com');//server domain name
Cons.setPubKey('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2bzs3nH1uDjfeK/ZXcDYMyOBzMCChUuNSVew4h5q6gi+5ri/N3eyPtY1fNF7pkjxRcK7dla+hfmg3bRY/aHzq3xJ2aiJcHBGVgNxLQpMtd2kcwuyXujc1QuX3lpyi19cwGG7G0pdF+dHuimVAjHAg0a2Wbkrn7PyBpg/SA1Zkx9YhLUVG9fGMWBDeUPYQ8saGVcsQzRSfBEAYnMT00v5SRwDbRUBg7A/iM/jMIpySA6UzvBHRtlPcinDuJFyXY9kKTIydjEUxNtCyU4VvZTOMS33LK0fn3YUPsTWE1E0ue9mHva5NcuYazlufeVgwyL7CXNoFZJEx4lmEF2KTPtfWwIDAQAB');//系统公钥
Cons.setPrivateKey(
    'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsjgTYOSylVSFmENCirddLxQxmhG5qRFCVDarqqUnJI007q1IyfA8h1Af55Nu5V5Hogh+g0j8ZJiAbZ2zFhX9wTQQXBw7NJc3DdSruHA2cCs3U25dv/7YZI23nzNwPpB10JFEigKY2EvWxqkTgPRepleP6AFD/mTiwHkZoaFEIF6vV+ZZCjhF+sZC+VZADuwEifrbO3KT4zzyqqg6xgr3S9hP/NN2ygYxvO/Tw/hixmiSXsiuSpEkJiLfWRq8gJ41VR5kuToeNks3EBm8yT50kzX42LGxUFbEbS3IAF704J0oL1Kux6ItZT7fjM6wByjuc+YN4kgd2UbadeW8zpU7NAgMBAAECggEALZ5GLZu/7923vLIJVli7KG7pvliYkEOLQjygyPUEasaIbpP2YR5nKbxSd4BHjpJWIq/0CKJMyCtKJbSMDxQiAuB5ilT1Vsr9wQTC2rxT5ML+c52yRYvG6pJxRezk6MWse732LTbxui39AoFPQDEmhlD4OmnHACvTzsvSNVwOwCKCmQoBMalyhj5JbFbbnsiDAPj2kvZ83UtIobwX+fpSb/H2iO8EcLGF9yPi2+ao3PVlqzuLZDpxYPLJ2gwHye35g/7ErJB0hPAbsAb01H+ux6udszLFHgPOG1ESZxPzoGhqQtueijIURz3QuBRsnl0mqTWgikwXrCRLc3K5slZIwQKBgQDfInYcuV5O2zJQRmeIczHh2XHH5XTc/SUhfPmbACKfU5OvYggfYxgGUpxxpYVUdbnbjvoggz20zf4LdDBPmBJo6SJrhGp23vIK3+MlxzDdKlIb8XJOAG/toyYgIyrCqZk5DjqhRcasxue8SdOu6yJpu2qGzdzhPjadacXZX4Z8hQKBgQDF+GNR4iewrR5jgbT/LWt0yK5+vMSLUXLgYvV8vAJoKgkGGMN2ar9Ug/cK92gHhu6FA2G+w081xGPFwU1mRRCCzwTARpzNQXyrml5+h5HzQkjzHYGGEY7UiH/lyvunuF5zK2/hYPuBWUDUD709u/8gt71bLANmk+RCBADuynUfqQKBgQCN74XiT6fF0Xj3x1EkYuJgH8lYtoTX7c8oti6wgi2D284dyeYQ0R//JZ2OTRO63ggTuacx90nRMRdggdAZUUqkoWfbrKdsZfThJfl/lm1mwfzo+XUUWQLZzuX5m2Uf3nIw8PQqkhAG55+RDgUxRzDkwOrKRTkzrjdfemD4HOOXYQKBgEZi4sUpOF1bn9NXOYgEmREDjO7opKS4B7T52jhIDD8GuwCc61n96BrfdIVEo4sRkVpfcnBFtrLyKVsVODSlV5J6kkDemj9sCixlDTXFc8HejltJ4VROh87O3VJRUho2tfYSuouSVLmPhzoegnUhkzsJuNxikK725BAIpmBAQVZJAoGBAM3fUK7WSPaY1UJ9W+vgMqF9ls/Yc9BTLUdP7q9URIC4CgV22broupDw8qCaYb7PTVcpgJ4V9onQe3VKo+5s/wgPpH3BZ2G30LSP3ukyWeaZtZFcKmjMdDLTduUDYfaGQk1VeXqZRvJmaqDLklX2x2vwFTqAmyQe51n0ZKWyavEV'
    );//Three-party private key

//1.Registered address
/*addrApi.registerAddress({symbol: 'NST', addresses: 'aaaa123414',memo:false}).then(function (data) {
    console.debug("Registered address results：-----" + JSON.stringify(data));
});*/

//2.obtain the number of available address
/*addrApi.checkAvailableAddress({symbol: 'VLX'}).then(function (data) {
    console.debug("obtain the number of available address：------" + JSON.stringify(data));
});*/
//3.Recharge interface
/*depositNotify.depositNotify({
        "address_to": "0xde51F62415377A85f1a6f735d273AbF756bCc399",
        "amount": 10,
        "balance": 1200,
        "confirm": 10,
        "request_id": "0xde51F62415377A85f1a6f735d273AbF756bCc399212345",
        "status": 1,
        "symbol": "NST",
        "txid": "0x827762d4d1754bc4ca4087c16f074ab01298001"
    }
).then(function (data) {
    console.debug("recharge result：------" + JSON.stringify(data));
});*/

/*//4.Internal notification interface
depositNotify.internalNotify({
    "address_to": "aaaaabbbbb",
    "amount": 234234,
    "balance": 12,
    "confirm": 1,
    "fee": 12,
    "symbol": "VLX",
    "txid": "adb936e24130c3fff9a6294d607a865f467a906b96850e02c1a2771c759ewwe"
}).then(function (data) {
    console.debug("Internal notification results：------" + JSON.stringify(data));
});
*/

//5.Get the withdrawal list
withdraw.withdrawConsume({symbol: "NST"}).then(function (data) {
    console.debug("Get the withdrawal list：------" + JSON.stringify(data));
});
/*
//6.Withdrawal notification interface
withdraw.withdrawNotify({
    "address_to": "L111ZC5G3rWkzsDDRRJnMD9mfdefe2ncEF",
    "amount": 234234.234,
    "balance": 0,
    "confirm": 1000,
    "fee": 12,
    "symbol": "VLX",
    "trans_id": 50021,
    "txid": "adb936e243fa6294d607a865f467a906b96850e02c1a2771c759ewrweD"
}).then(function (data) {
    console.debug("Withdrawal notification interface result：------" + JSON.stringify(data));
});
*/
//7. Withdrawal Cancellation
/*withdraw.withdrawCancel({"symbol": "VLX", "trans_id": 50077,"msg":"tesst"}).then(function (data) {
    console.debug("Withdrawal Cancellation Result：------" + JSON.stringify(data));
});*/
