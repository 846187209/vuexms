# vuexms
# 前序准备
运行前准备：

1、不需要在本地调试及开发： 请访问本项目的服务器地址。

2、需要在本地调试及开发：

由于此项目是基于nodejs和mysql的前后端结合项目，你需要进行nodejs和mysql的相关准备工作。项目运行之前，请确保系统已经安装以下应用：

(1)、node (6.0 及以上版本)。

(2)、Navicat for MySQL 。使用细节，请参考：Navicat for MySQL的下载及使用。


开发：
git clone https://github.com/846187209/vuexms.git

cd vuexms

npm install

npm run dev (访问本地后台系统，需开启服务端express服务)。运行之后，会默认打开本地访问路径：http://localhost:888

开启服务端express服务方法如下：双击server/start.bat启动文件，执行命令>nodemon app即可，启动后切记不要关闭cmd窗口。
