#!/bin/bash
sudo apt update
sudo apt install nodejs nginx npm git -y
sudo npm install -g pm2
git clone https://github.com/parkersiddall/terraform_practice.git
cd terraform_practice/api/ && npm install
pm2 start index.js
pm2 startup index.js 

sudo cp ../deploy/nginx/default /etc/nginx/sites-available/default
sudo systemctl restart nginx
