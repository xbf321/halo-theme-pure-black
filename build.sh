#!/bin/bash

VERSION="0.0.2"

FILE_NAME="halo-theme-pure-black-v${VERSION}.tar.gz"
tar --exclude './node_modules/**' \
  --exclude './src/**' \
  --exclude './.gitignore' \
  --exclude './package-lock.json' \
  --exclude './package.json' \
  --exclude './build.sh' \
  --exclude './postcss.config.js' \
  --exclude './tailwind.config.js' \
  --exclude './vite.config.js' \
 -cvpzf $FILE_NAME ./**