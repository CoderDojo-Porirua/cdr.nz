const fs = require("fs");
const path = require('path');

const redirects = require(path.join(__dirname, "redirects.json"));
const dist = "docs";

redirects.forEach(redirect => {
	const folder = path.join(dist, ...redirect.code.split(/\\\//));
	fs.mkdirSync(folder, {recursive: true});
	fs.writeFileSync(path.join(folder, "index.html"), `<html>
	<head>
		<meta http-equiv="Refresh" content="0; url=${redirect.url}" />
	</head>
	<body>
		Redirecting to <a href="${redirect.url}">${redirect.url}</a>
	</body>
</html>`);
});
