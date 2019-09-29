# node-windows
```
 $ node install.js //安装服务
 $  node uninstall //卸载服务
```


 
```
//install.js
let Service = require('node-windows').Service;
let svc = new Service({
    name: 'wifisong.canonchain.explorer',    //服务名称
    description: 'CanonChain的浏览器服务', //描述D:\MySpace\express-demo\bin
    script: 'D:\\bin\\www' //nodejs项目要启动的文件路径
});
svc.on('install', () => {
    console.log("Install Success")
    svc.start();
});
svc.install();
```

```
//uninstall.js
let Service = require('node-windows').Service;
let svc = new Service({
    name: 'wifisong.canonchain.explorer',    //服务名称
    description: 'CanonChain的浏览器服务', //描述
    script: 'D:\\bin\\www' //nodejs项目要启动的文件路径
});
svc.on('uninstall', function () {
    console.log('Uninstall Complete.');
    console.log('The service exists: ', svc.exists);
});
svc.uninstall();
```