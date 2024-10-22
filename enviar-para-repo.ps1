$sourceDir = "C:\Users\mathe\OneDrive\Documentos\aula webpack\apirest"

Set-Location $sourceDir

npm run build

git add .

$commit = Read-Host -Prompt "Qual a mensagem de commit?"

git commit -m "$commit"

git push origin main

eval `ssh-agent`

ssh-add ~/.ssh/id_rsa

ssh mathe@35.247.243.116

cd api

git pull origin main

pm2 restart server 

sudo systemctl restart nginx
