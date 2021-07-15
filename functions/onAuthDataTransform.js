var AV = require('leanengine');

AV.Cloud.onAuthDataTransform((request) => {
    console.log("onAuthDataTransform", request.object);
    return { authData: { woshishei: { uid: "123" } } }
});