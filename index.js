const fs = require("fs");
const path = require('path');

const root = __dirname;
const recursiverm = require(path.join(root, "recursiverm"));

const redirects = require(path.join(root, "redirects.json"));
const dist = path.join(root, "docs");

recursiverm(dist);
fs.mkdirSync(dist, {recursive: true});

["CNAME", "favicon.ico"].forEach(file => {
	fs.copyFileSync(path.join(root, file), path.join(dist, file));
});

redirects.forEach(redirect => {
	const folder = path.join(dist, ...redirect.path.split(/\\\//));
	fs.mkdirSync(folder, {recursive: true});
	fs.writeFileSync(path.join(folder, "index.html"), `<html>
	<head>
		<meta http-equiv="Refresh" content="0; url=${redirect.url}" />
	</head>
	<body>
		<p>Redirecting to <a href="${redirect.url}">${redirect.url}</a></p>
	</body>
</html>`);
});
