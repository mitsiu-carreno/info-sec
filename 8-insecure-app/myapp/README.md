# Requirements:
```bash
sudo apt install nodejs
sudo apt install npm
```

# Get code:
In host os:
```bash
scp myapp.tar {{user}}@localhost:/tmp
```

In guest os:
```bash
tar xvf myapp.tar
sudo mv myapp/ /var/www/html/
cd /var/www/html/myapp/
mv nginx-config/default /etc/nginx/sites-available/
sudo nginx -t
sudo systemctl reload nginx
```

# Start project
```bash
cd /var/www/html/myapp/
DEBUG=myapp:* npm start
``` 

# How this was created?
```bash
sudo apt install nodejs
sudo apt isntall npm
cd /var/www/html
sudo npx express-generator myapp --git
cd myapp
sudo npm install

DEBUG=myapp:* npm start
```
