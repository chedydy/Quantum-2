Write-Output "Create config files from env"
$template=Get-Content scripts/sap-mock-config.tmpl -Raw
$ExecutionContext.InvokeCommand.ExpandString($template) > scripts/sap-mock-config.yaml