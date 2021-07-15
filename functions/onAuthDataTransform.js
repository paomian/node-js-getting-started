var AV = require('leanengine');

AV.Cloud.onAuthDataTransform((request) => {
    console.log("onAuthDataTransform", request);
    return { authData: { woshishei: { uid: "123" } } }
});