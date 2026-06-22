# Start Atelier UI (PowerShell 5.1+)
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..\app")

if (-not (Test-Path ".\node_modules")) {
    Write-Host "Installing npm dependencies..."
    npm install
}

Write-Host "Atelier UI http://127.0.0.1:5180"
npm run dev