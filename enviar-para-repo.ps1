$sourceDir = "C:\Users\mathe\OneDrive\Documentos\aula webpack\apirest"

Set-Location $sourceDir

npm run build

git add .

$commit = Read-Host -Prompt "Qual a mensagem de commit?"

git commit -m "$commit"

git push origin main

ssh mathe@35.247.243.116

git -C /home/mathe/api

git pull origin main

pm2 restart server 

sudo systemctl restart nginx
