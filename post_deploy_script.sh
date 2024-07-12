#!/bin/bash

echo "Deployment completed. Performing post-deployment actions..."

# Invalidate CloudFront distribution
DISTRIBUTION_ID="EQ2XW1BRKG0SE"
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Post-deployment actions completed."
