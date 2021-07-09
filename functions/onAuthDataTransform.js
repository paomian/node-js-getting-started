var AV = require('leanengine');

AV.Cloud.onAuthDataTransform((request) => {
    console.log("onAuthDataTransform", request);
});