#!/bin/bash

# Define the distribution ID and paths
DISTRIBUTION_ID="EQ2XW1BRKG0SE"
PATHS="/*"

# Run the AWS CLI command to create an invalidation
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "$PATHS"
