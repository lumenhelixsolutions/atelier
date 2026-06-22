# Start Atelier API (PowerShell 5.1+)
$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent
Set-Location "$Root\api"

$venv = "$Root\.venv"
if (-not (Test-Path "$venv\Scripts\python.exe")) {
    python -m venv $venv
    & "$venv\Scripts\pip.exe" install -r requirements.txt
    & "$venv\Scripts\pip.exe" install -e "..\..\dropclass[dev]"
}

Write-Host "Atelier API http://127.0.0.1:8100"
& "$venv\Scripts\python.exe" -m uvicorn main:app --host 127.0.0.1 --port 8100