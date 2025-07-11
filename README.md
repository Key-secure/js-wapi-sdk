# js-wapi-sdk
wapi api client sdk

## Dependency package installation
```shell
  npm install @keysecure-custody/js-wapi-sdk@1.0.0
```

## How to use
```js
const Cons = require('@keysecure-custody/js-wapi-sdk/utils/Constants');
const addrApi = require('@keysecure-custody/js-wapi-sdk/apidao/AddressRegisterApi');
const depositNotify = require('@keysecure-custody/js-wapi-sdk/apidao/DepositNotifyApi');
const withdraw = require('@keysecure-custody/js-wapi-sdk/apidao/WithdrawApi');


Cons.setAppId('baaceb1e506e1b5d7d1f0a3b1622583b'); //app id
Cons.setHost('http://awstestopenapi.hiwallet.pro'); //interface domain name
Cons.setPubKey('custody public key');
Cons.setPrivateKey('Merchant private key');

// 1.registered address
addrApi.registerAddress({symbol: 'VLX', addresses: 'aaaaabbbbb',memo:false}).then(function (data) {
    console.debug("Registered address results：-----" + JSON.stringify(data));
});

// 2.obtain the number of available address
addrApi.checkAvailableAddress({symbol: 'VLX'}).then(function (data) {
    console.debug("obtain the number of available address：------" + JSON.stringify(data));
});

// 3.deposit notification interface
depositNotify.depositNotify({
        "address_to": "LZC5G3rWkzsDDRRJnMD9mfdefe2ncEFnNH",
        "amount": 123,
        "balance": 12,
        "confirm": 1000,
        "request_id": "2343423242452",
        "status": 1,
        "symbol": "VLX",
        "txid": "adb936e24130c3fffer294d607a865f467a906b96850e02c1a2771c759f0bfdsf"
    }
).then(function (data) {
    console.debug("notification result：------" + JSON.stringify(data));
});

// 4.internal notification
depositNotify.internalNotify({
    "address_to": "aaaaabbbbb",
    "amount": 234234,
    "balance": 12,
    "confirm": 1,
    "fee": 12,
    "symbol": "VLX",
    "txid": "adb936e24130c3fff9a6294d607a865f467a906b96850e02c1a2771c759ewwe"
}).then(function (data) {
    console.debug("internal notification result：------" + JSON.stringify(data));
});

// 5.Get the withdrawal list
withdraw.withdrawConsume({symbol: "VLX"}).then(function (data) {
    console.debug("obtain the result of the withdrawal list：------" + JSON.stringify(data));
});

// 6.Withdrawal notification interface
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

// 7. Withdrawal Cancellation
withdraw.withdrawCancel({"symbol": "VLX", "trans_id": 49560,"msg":"tesst"}).then(function (data) {
    console.debug("Withdrawal Cancellation Result：------" + JSON.stringify(data));
});

```
