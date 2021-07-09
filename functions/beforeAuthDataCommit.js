var AV = require('leanengine');

AV.Cloud.beforeAuthDataCommit((request) => {
    console.log("beforeAuthDataCommit",request);
});
