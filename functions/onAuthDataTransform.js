var AV = require('leanengine');

AV.Cloud.onAuthData((request) => {
    console.log("onAuthData", request.authData);
    if (request.authData.hasakei.uid === "12345") {
        return { authData: { woshishei: { uid: "123" } } };
    } else {
        throw new AV.Cloud.Error('你免费了。');
    }
});