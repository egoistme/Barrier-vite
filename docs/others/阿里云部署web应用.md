## 购买服务器
一个普通的ESC实例即可，我购买的是最便宜的轻量应用服务器，作为个人博客足够了。
选择centOS镜像即可
## 远程登录
阿里云生成密钥对，将私钥下载下来即可远程登录
### 免密登录
将本地生成的公钥上传至服务器即可
## 申请域名
## DNS解析到服务器地址
## 备案
## 上传项目
将本地打包好的dist文件上传至服务器
## 安装nginx
```linux
yum install nginx
```
这里遇到了问题，可以参考 <a href="../error-gather/阿里云CentOS 8.x系统yum报404的解决方法.md">阿里云CentOS 8.x系统yum报404的解决方法</a>
## 配置nginx
进入/etc/nginx目录，找到nginx.conf，修改location
这里也遇到了问题，报403forbidden的错误
将nginx.conf文件内的user设置为root即可

## https
申请一个免费证书
添加解析（阿里云自动添加）
下载证书（选择nginx版本）
解压之后发现这两个文件
![阿里云部署web应用-20220408013141-2022-04-08-01-31-41](https://egoist-markdown-image-bucket.oss-cn-beijing.aliyuncs.com/阿里云部署web应用-20220408013141-2022-04-08-01-31-41.png)

将文件发送到服务器，推荐发送到/etc/ssl文件夹下

### nginx安装ssl模块
