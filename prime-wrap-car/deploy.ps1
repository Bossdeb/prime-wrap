Write-Host "🚀 Starting deployment to Firebase..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building Next.js project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    
    # Deploy to Firebase
    Write-Host "🔥 Deploying to Firebase Hosting..." -ForegroundColor Yellow
    firebase deploy --only hosting
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 Deployment successful!" -ForegroundColor Green
        Write-Host "🌐 Your website is now live!" -ForegroundColor Cyan
    } else {
        Write-Host "❌ Deployment failed!" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}