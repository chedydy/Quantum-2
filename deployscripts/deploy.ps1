# Set all the variables needed
# Write-Output "Set all the variables needed"
# Invoke-Expression ". .\scripts\env.ps1"
# Invoke-Expression ". .\scripts\setEnv.ps1"

#Delete all services and deployments
kubectl delete deployment quantum
kubectl delete service quantum

# Deploy all configmaps
# kubectl apply -f scripts/sap-mock-config.yaml

# Deploy all services and deployment files
kubectl apply -f scripts/quantum-deployment.yaml
kubectl apply -f scripts/quantum-service.yaml