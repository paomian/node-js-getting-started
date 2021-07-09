var AV = require('leanengine');

AV.Cloud.beforeAuthDataMatch((request) => {
    console.log("beforeAuthDataMatch",request);
});