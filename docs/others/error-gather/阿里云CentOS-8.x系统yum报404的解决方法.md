```sh
CentOS-8 - AppStream                                                                                          7.8 kB/s | 2.3 kB     00:00
Errors during downloading metadata for repository 'AppStream':
  - Status code: 404 for http://mirrors.cloud.aliyuncs.com/centos/8/AppStream/x86_64/os/repodata/repomd.xml (IP: 100.100.2.148)
Error: Failed to download metadata for repo 'AppStream': Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were trie
```
解决办法

1) 进入cd /etc/yum.repos.d/路径下

2) 对文件进行重命名备份
```sh
rename '.repo' '.repo.bak' /etc/yum.repos.d/*.repo
```
3) 新建一个bak文件夹
```sh
mkdir bak
```
4) .bak文件移动到bak文件夹下
```sh
mv *.bak /etc/yum.repos.d/bak
```
5) 下载最新的repo文件
```sh
wget https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo -O /etc/yum.repos.d/Centos-vault-8.5.2111.repo
wget https://mirrors.aliyun.com/repo/epel-archive-8.repo -O /etc/yum.repos.d/epel-archive-8.repo
```
6) 替换repo文件中的链接
```sh
sed -i 's/mirrors.cloud.aliyuncs.com/url_tmp/g'  /etc/yum.repos.d/Centos-vault-8.5.2111.repo &&  sed -i 's/mirrors.aliyun.com/mirrors.cloud.aliyuncs.com/g' /etc/yum.repos.d/Centos-vault-8.5.2111.repo && sed -i 's/url_tmp/mirrors.aliyun.com/g' /etc/yum.repos.d/Centos-vault-8.5.2111.repo
sed -i 's/mirrors.aliyun.com/mirrors.cloud.aliyuncs.com/g' /etc/yum.repos.d/epel-archive-8.repo
```
7) 重新创建缓存,若没报错,则正常了
```sh
yum clean all && yum makecache
```