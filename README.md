# PDSIonicProject

## 安裝 NodeJS npm
http://blog.teamtreehouse.com/install-node-js-npm-mac

```
brew install node
xcode-select --install
```

## 安裝 Cordova
https://cordova.apache.org/#getstarted

```
npm install -g cordova
```

Cordova 簡介  
https://cordova.apache.org/docs/en/latest/guide/overview/

Cordova iOS  
https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html

## 安裝 Ionic
https://ionicframework.com/docs/intro/installation/

```
npm install -g cordova ionic
```

使用ionic  
https://www.gitbook.com/book/afgnsu/ionic-app/details

ionic 套件解說  
https://ionicframework.com/docs/api/components/segment/SegmentButton/

ionic 3使用  
https://www.youtube.com/watch?v=g-DzyBv2Ndg&list=PLtKjv92L0ihD_Hre-d12JihnQ_BanTD7c

Ionic 簡介  
https://ionicframework.com/docs/

Ionic 元件  
https://ionicframework.com/docs/api/components/nav/Nav/

Ionic 命令行  
https://ionicframework.com/docs/cli/

## 建立專案
https://ionicframework.com/docs/intro/tutorial/

```
ionic start AppName blank
ionic start AppName tabs
ionic start AppName sidemenu
```

## cordova plugin
https://ionicframework.com/docs/native/  
https://ionicframework.com/docs/native/camera/

```
$ ionic cordova plugin add cordova-plugin-camera
$ npm install --save @ionic-native/camera
```

## custom plugin
https://cordova.apache.org/docs/en/7.x/guide/platforms/ios/plugin.html  
https://github.com/ionic-team/ionic-native/blob/master/DEVELOPER.md

plugman  
https://cordova.apache.org/docs/zh-tw/latest/plugin_ref/plugman.html  
http://taco.visualstudio.com/en-us/docs/createplugintutorial/  
```
npm install -g plugman
cd PDSIonicProject
plugman create --name DemoPlugin --plugin_id  DemoPlugin --plugin_version 0.0.1 --path .
```
範例  
https://github.com/ionic-team/cordova-plugin-template

依照範例修改  
package.json  
plugin.xml  
DemoPlugin.js

JS module.exports exports  
http://dreamerslab.com/blog/tw/node-js-basics/

新增原生檔案
```
cd DemoPlugin
plugman platform add --platform_name android
plugman platform add --platform_name ios
```
產生 package.json
```
plugman createpackagejson .
```
載入套件
```
cordova plugin add ~/path/to/pluginDir
```

英文教學01  
https://gist.github.com/mlynch/c9a469948680979a8740d68c47d1cf98

中文教學01  
http://www.jianshu.com/p/37969c9a1792

中文教學02  
http://www.jianshu.com/p/e151a3c2f652

中文教學03  
http://www.bijishequ.com/detail/418601

QQ分享和微信分享 plugin  
http://www.jianshu.com/p/6b40b4731d99

## custom plugin use
```
declare var MyCordovaPlugin;
declare var DemoPlugin;

funcName(){
    MyCordovaPlugin.echo(['a', 123, 'b', 456], result => {
      console.log(result);
      alert(result);
    }, error => alert(error))
}
```

## Debug TS
打開 sourceMap 讓 ts 跟 js 連接 在 chrome 上正常  
tsconfig.json > "sourceMap": true

VSCode設定  
https://vivavivugeek.blogspot.tw/2017/09/ionic-3-debugging-on-vs-code-and-chrome.html

## TS 架構
https://tw.saowen.com/a/cd72925c22c167207f8b4c97b49e99cc1694e0dc38ed07484ad237170d55ee6e  

https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html  

# 目標
Add Page  
Delete Page  
Navigation  
List View  
Grid View  
繼承  
原生 app class 控制  
熱更新  
http://kaibin.me/2016/07/17/ionic-hotcode/

轉換 Style (如何讓網頁 轉成 iOS Style)

ts debug  
ts map file  
vscode ts 中斷點  

ts 的檔案結構  
ts js 銜接問題  
plugin 製法  

## 其他
ionic/angular中module探秘  
http://blog.csdn.net/u010730126/article/details/49720391

控制反轉 (IoC) 與 依賴注入 (DI)  
https://blog.jason.party/3/ioc-di
