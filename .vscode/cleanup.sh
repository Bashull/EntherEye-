#!/bin/bash

# Remove unnecessary files
rm -f Untitled-2.txt EntherEye-20250321T063524Z-001.zip

# Remove duplicate configuration files
rm -f jest.config.js

# Organize files into appropriate directories
mkdir -p config tests
mv jest.config.ts tsconfig.json config/
mv *.test.ts tests/

# Update dependencies
npm ci
npm update
