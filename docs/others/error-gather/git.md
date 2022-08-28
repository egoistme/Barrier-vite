## 443错误
```bash
fatal: unable to access 'https://github.com/egoistme/Barrier-vite.git/': Failed to connect to github.com port 443: Operation timed out
```
### 解决
删除了本地hosts文件中对git的proxy。

## postBuffer太小
remote: Compressing objects: 100% (58640/58640), done. error: RPC failed; 

### 解决
git config http.postBuffer 524288000