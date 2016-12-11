#!/bin/sh

ACCESS_TOKEN=`cat ~/coveo-access-token.txt`
echo "Using Access Token: $ACCESS_TOKEN"

sed -i "s/%ACCESS_TOKEN%/$ACCESS_TOKEN/g" coveo-saq-search/index.html

rm -rf ~/public_html/coveo-saq-search
cp -r ./coveo-saq-search ~/public_html/
