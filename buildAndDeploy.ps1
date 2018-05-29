
npm run build

docker login --username=$Env:DOCKER_USER --password=$Env:DOCKER_PASS

docker pull boco4ever/quantumcivilization:latest

docker tag boco4ever/quantumcivilization:latest boco4ever/quantumcivilization:previous

docker build -t boco4ever/quantumcivilization:latest .

docker push boco4ever/quantumcivilization

kubectl delete -f deployscripts/quantum-deployment.yaml

kubectl apply -f deployscripts/quantum-deployment.yaml