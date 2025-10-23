#!/bin/bash

echo "🚀 Starting deployment to Firebase..."

# Build the project
echo "📦 Building Next.js project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Firebase
    echo "🔥 Deploying to Firebase Hosting and Firestore rules..."
    firebase deploy
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "🌐 Your website is now live!"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi