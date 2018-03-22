#!/bin/bash
kubectl delete deployment sap-mock
kubectl delete service sap-mock

kubectl apply -f scripts/sap-mock-deployment.yaml
kubectl apply -f scripts/sap-mock-service.yaml