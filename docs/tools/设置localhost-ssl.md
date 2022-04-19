brew install mkcert
brew install nss
mkcert -install
mkcert localhost 127.0.0.1 ::1 

然后配置nginx
brew install nginx

vi /etc/nginx/nginx.conf;

配置ssl
