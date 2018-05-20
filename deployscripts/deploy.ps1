kubectl delete deployment quantumcivilization
kubectl delete service quantumcivilization-service

kubectl apply -f quantum-deployment.yaml
kubectl apply -f quantum-service.yaml