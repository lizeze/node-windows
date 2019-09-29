let Service = require('node-windows').Service;
let svc = new Service({
    name: 'wifisong.canonchain.explorer',    //服务名称
    description: 'CanonChain的浏览器服务', //描述
    script: 'D:\\MySpace\\express-demo\\bin\\www' //nodejs项目要启动的文件路径
});
svc.on('uninstall', function () {
    console.log('Uninstall Complete.');
    console.log('The service exists: ', svc.exists);
});
svc.uninstall();