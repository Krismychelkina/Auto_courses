const fs = require('fs-extra');

fs.ensureDirSync( './Folder1');

fs.ensureFileSync('./Folder1/File1.txt');

fs.ensureDirSync( './Folder2');

fs.moveSync('./Folder1/File1.txt','./Folder2/File1.txt');

fs.ensureDirSync( './Folder3');

fs.copySync('./Folder2/File1.txt', './Folder3/File1copy.txt')

fs.removeSync('./Folder2/File1.txt');
fs.removeSync('./Folder3/File1copy.txt');

fs.removeSync('./Folder1');
fs.removeSync('./Folder2');
fs.removeSync('./Folder3');