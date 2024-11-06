npm run build
npx next export -o html
scp -i ~/.ssh/fillmula.pem -r ./html ubuntu@18.163.62.89:/var/www
