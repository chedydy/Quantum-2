#!/bin/bash

# Set all the variables needed
sh ./scripts/env.sh
sh ./scripts/setEnv.sh

#Delete all services and deployments
kubectl delete deployment sap-mock
kubectl delete service sap-mock

# Deploy all configmaps
kubectl apply -f scripts/sap-mock-config.yaml

# Deploy all services and deployment files
kubectl apply -f scripts/sap-mock-deployment.yaml
kubectl apply -f scripts/sap-mock-service.yaml