var fs = require('fs');
const path = require('path');

module.exports = (folder) => {
	if (fs.existsSync(folder)) {
		fs.readdirSync(folder).forEach(file => {
			var curFolder = path.join(folder, file);
			if(fs.lstatSync(curFolder).isDirectory()) {
				module.exports(curFolder);
			} else {
				fs.unlinkSync(curFolder);
			}
		});
		fs.rmdirSync(folder);
	}
};
