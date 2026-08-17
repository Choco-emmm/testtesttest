$ErrorActionPreference = 'Stop'

$hello = Get-Content -Raw (Join-Path $PSScriptRoot '..\hello.txt')
if ($hello.Trim() -ne 'hello qgents') {
    throw 'hello.txt content check failed'
}

$config = Get-Content -Raw (Join-Path $PSScriptRoot '..\config\test-config.json') | ConvertFrom-Json
if ($config.enabled -ne $true) {
    throw 'test-config.json enabled check failed'
}

Write-Output 'fixture checks passed'
