$ErrorActionPreference = "Stop"

$repository = Split-Path -Parent $MyInvocation.MyCommand.Path
$restorePoint = "backup-before-css-cleanup-20260606"
$cssFile = "assets/css/main.css"

$confirmation = Read-Host "Restore $cssFile from $restorePoint? Type RESTORE to continue"

if ($confirmation -cne "RESTORE") {
  Write-Host "Restore cancelled."
  exit 0
}

git -C $repository restore --source $restorePoint -- $cssFile

if ($LASTEXITCODE -ne 0) {
  throw "Git could not restore $cssFile."
}

Write-Host "$cssFile restored from $restorePoint."
