# ================================================================
# AI Newbie Web - Health Check Script
# ================================================================

Write-Host "`n╔════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     AI NEWBIE WEB - HEALTH CHECK REPORT           ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

$results = @{ passed = 0; failed = 0 }

function Write-Check {
    param([string]$Name, [bool]$Status, [string]$Message = "")
    $icon = if ($Status) { "✅" } else { "❌" }
    $color = if ($Status) { "Green" } else { "Red" }
    Write-Host "  $icon $Name" -ForegroundColor $color
    if ($Message) { Write-Host "     $Message" -ForegroundColor Gray }
    if ($Status) { $script:results.passed++ } else { $script:results.failed++ }
}

# Check Dependencies
Write-Host "📦 CHECKING DEPENDENCIES..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version 2>$null
    Write-Check "Node.js" ($null -ne $nodeVersion) "Version: $nodeVersion"
} catch {
    Write-Check "Node.js" $false "Not installed"
}

try {
    $npmVersion = npm --version 2>$null
    Write-Check "npm" ($null -ne $npmVersion) "Version: $npmVersion"
} catch {
    Write-Check "npm" $false "Not installed"
}

# Check Environment
Write-Host "`n🔑 CHECKING ENVIRONMENT..." -ForegroundColor Yellow
$envPath = "d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web\.env"
$envExists = Test-Path $envPath
Write-Check ".env file" $envExists $envPath

# Check Project Structure
Write-Host "`n📁 CHECKING PROJECT STRUCTURE..." -ForegroundColor Yellow
$hasSrc = Test-Path "d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web\src"
$hasComponents = Test-Path "d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web\src\components"
$hasPages = Test-Path "d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web\src\pages"
$hasPackageJson = Test-Path "d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web\package.json"
$hasNodeModules = Test-Path "d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web\node_modules"

Write-Check "src/ directory" $hasSrc
Write-Check "src/components/" $hasComponents
Write-Check "src/pages/" $hasPages
Write-Check "package.json" $hasPackageJson
Write-Check "node_modules/" $hasNodeModules "$(if (!$hasNodeModules) {'Run: npm install'})"

# Check Git
Write-Host "`n📝 CHECKING VERSION CONTROL..." -ForegroundColor Yellow
$hasGit = Test-Path "d:\0.PROJECTS\01-MAIN-PRODUCTS\ainewbie-web\.git"
Write-Check ".git/ repository" $hasGit

# Summary
Write-Host "`n╔════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║                  HEALTH CHECK SUMMARY              ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host "  ✅ Passed:   $($results.passed)" -ForegroundColor Green
Write-Host "  ❌ Failed:   $($results.failed)" -ForegroundColor Red
Write-Host ""

$healthPercentage = [math]::Round(($results.passed / ($results.passed + $results.failed)) * 100)
Write-Host "  Overall Health: $healthPercentage%" -ForegroundColor $(if ($healthPercentage -gt 80) { "Green" } elseif ($healthPercentage -gt 60) { "Yellow" } else { "Red" })

if ($healthPercentage -eq 100) {
    Write-Host "`n  🎉 All systems operational! Ready to launch!" -ForegroundColor Green
} elseif ($healthPercentage -gt 80) {
    Write-Host "`n  ⚠️ Minor issues detected. Check warnings above." -ForegroundColor Yellow
} else {
    Write-Host "`n  🚨 Critical issues detected. Please fix errors above." -ForegroundColor Red
}

Write-Host "`n╚════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

exit $(if ($healthPercentage -gt 80) { 0 } else { 1 })
