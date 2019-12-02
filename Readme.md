# fadper

This is my side project to automatically download image by using Puppeteer

And yeah.. The result is quite impressive.

![screenshot](screenshot.png)

# Usage

**Selected element must have `src` attribute.**

First, you need two things, The `image-list.yaml` configuration file and download folder.

Then type this in your console.

```
fadper -c ./path/to/image-list.yaml -o ./download/path
```

And your downloaded image should be in the download folder

- `-c, --config-file <config file>` specify path to configuration file.
- `-o, --output <download path>` specify path to save images

# Configuration file

Example:

```
imageList:
  - name: image-folder-name-1
    link: https://unsplash.com/
target: img
```

### imageList

Contain lists of the name and the link

- `name: string` Name of this job. Use for naming the output folder
- `link: string` Link for download images.

### target

The CSS pointer target to HTML element. E.g. `.image-container` or `img`.

**Selected element must have `src` attribute.**
