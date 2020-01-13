#!/bin/bash

echo "question name:"

read packageName

echo "creating ${packageName}"

mkdir packages/$packageName
cd packages/$packageName
yarn init -yp

echo "success Create ${packageName}"
echo "✨ Done"
