#! /bin/bash
npm run build
zip -r dist.zip dist/
scp dist.zip cole@colehafner.com:~ 
