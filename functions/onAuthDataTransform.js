var AV = require('leanengine');

AV.Cloud.onAuthDataTransform((request) => {
    console.log("onAuthDataTransform", request.object.authData);
    if (request.object.authData.hasakei.uid === "12345") {
        return { authData: { woshishei: { uid: "123" } } };
    } else {
        throw new AV.Cloud.Error('你免费了。');
    }
});