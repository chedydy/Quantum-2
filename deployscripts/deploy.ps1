kubectl delete deployment quantum
kubectl delete service quantum

kubectl apply -f scripts/quantum-deployment.yaml
kubectl apply -f scripts/quantum-service.yaml