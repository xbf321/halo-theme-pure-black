#!/bin/bash

FILE_NAME="theme-pure-black.zip"
zip -r $FILE_NAME ./** \
  -i './templates/**' \
  -i './README.md' \
  -i './settings.gradle' \
  -i './settings.yaml' \
  -i './theme.yaml'