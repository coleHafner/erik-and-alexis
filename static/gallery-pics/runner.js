#!/usr/bin/env node
'use strict';

const fs = require('fs');

fs.readdir('.', function(err, files) {
	if (err) {
		console.log('could not read dir. operation failed.', err);
		return;
	}

	files.forEach(filename => {
		// if (filename.split('.')[1] !== 'jpg') return;
		console.log(`'${filename}',`);
	});
})
