kubectl delete -f quantum-deployment.yaml
kubectl delete -f quantum-service.yaml

kubectl apply -f quantum-deployment.yaml
kubectl apply -f quantum-service.yaml