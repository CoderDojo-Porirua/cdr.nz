# CoderDojo Porirua URL shortener

## What it does

This repo uses GitHub Pages to serve a set of HTML file redirects from the docs folder.

The purpose of this repo is to make it easier for kids (and us adults) to type in URLs and access pages on the internet we use frequently.

## How to add a URL

First clone this repository with git:

```shell
git clone https://github.com/CoderDojo-Porirua/CoderDojo-Porirua.github.io.git
```

Next edit the `redirects.json` file, add or edit lines as needed and save your changes. For details of how to edit this file, see the next section below.

Use node to run the `index.js` script. You can either run `node index.js`, or use the NPM start command:

```shell
npm start
```

Finally, save your changes by adding any new files, commiting your changes locally to the repository and then pushing the changes up to GitHub:

```shell
git add -A
git commit -m "<A short description of the changes>"
git push
```

Of course, if you're using a half-decent IDE like VS Code, this last stage can easily be done through the GUI.

## The config file (redirects.json)

Entries in the config file, `redirects.json`, should look like:

```json
{"path": "<path>", "url": "<url>"}
```

Where `<path>` is the subfolder of the _cdr.nz_ domain where the redirect html file will be placed, and `<url>` is the URL to redirect to.

For example, to redirect the `/join` path ([http://cdr.nz/join](http://cdr.nz/join)) to the CoderDojo sign-up page ([https://zen.coderdojo.com/register/user](https://zen.coderdojo.com/register/user)), you would use the following config line:

```json
{"path": "join", "url": "https://zen.coderdojo.com/register/user"}
```

### Domain root

A blank path will create an `index.html` redirect file at the root of the domain. For example, The following config line redirects [http://cdr.nz](http://cdr.nz) to the homepage of the CoderDojo Porirua website, [http://porirua.coderdojo.nz/](http://porirua.coderdojo.nz/).

```json
{"path": "", "url": "http://porirua.coderdojo.nz/"}
```

### Subfolders

Path subfolders can be created by using a forward slash (`/`) in the path, like in the following example where [http://cdr.nz/sand/video](http://cdr.nz/sand/video) would redirect to a FaceBook video of our Augmented Reality Sandpit:

```json
{"path": "sand/video", "url": "https://www.facebook.com/watch/?v=1206028526208272"}
```

### Avoiding errors

Please ensure that the config is a valid JSON file after you have finished editing it, otherwise the `index.js` script won't be able to import the file and create the required redirect folders and files. Remember, for example, that every config line except for the last one requires a comma (`,`) at the end.

## How it works

The `index.js` script reads the `redirects.json` config file and creates a containing subfolder and `index.html` file for each line in the config file.

The HTML for these redirects is fairly simple, and consists of a meta redirect in the HTML's head, along with a clickable URL in the HTML body (just in case the head's redirect doesn't work). In the following HTML example, the `[url]` text would be substituted with the actual URL the file will redirect to:

```html
<html>
	<head>
		<meta http-equiv="Refresh" content="0; url=[url]" />
	</head>
	<body>
		Redirecting to <a href="[url]">[url]</a>
	</body>
</html>
```
