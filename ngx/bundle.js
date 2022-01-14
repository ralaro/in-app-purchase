'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var InAppPurchase = /** @class */ (function (_super) {
    tslib.__extends(InAppPurchase, _super);
    function InAppPurchase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase.prototype.getProducts = function (productId) { return core.cordova(this, "getProducts", { "otherPromise": true }, arguments); };
    InAppPurchase.prototype.buy = function (productId) { return core.cordova(this, "buy", { "otherPromise": true }, arguments); };
    InAppPurchase.prototype.subscribe = function (productId) { return core.cordova(this, "subscribe", { "otherPromise": true }, arguments); };
    InAppPurchase.prototype.consume = function (productType, receipt, signature) { return core.cordova(this, "consume", { "otherPromise": true }, arguments); };
    InAppPurchase.prototype.acknowledge = function (productType, receipt, signature) { return core.cordova(this, "acknowledge", { "otherPromise": true }, arguments); };
    InAppPurchase.prototype.restorePurchases = function () { return core.cordova(this, "restorePurchases", { "otherPromise": true }, arguments); };
    InAppPurchase.prototype.getReceipt = function () { return core.cordova(this, "getReceipt", { "otherPromise": true, "platforms": ["iOS"] }, arguments); };
    InAppPurchase.pluginName = "InAppPurchase";
    InAppPurchase.plugin = "cordova-plugin-inapppurchase";
    InAppPurchase.pluginRef = "inAppPurchase";
    InAppPurchase.repo = "https://github.com/AlexDisler/cordova-plugin-inapppurchase";
    InAppPurchase.platforms = ["Android", "iOS"];
    InAppPurchase.decorators = [
        { type: core$1.Injectable }
    ];
    return InAppPurchase;
}(core.IonicNativePlugin));

exports.InAppPurchase = InAppPurchase;
