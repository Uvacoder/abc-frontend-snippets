const fs = require('fs');
const markdownIt = require('markdown-it');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {
    // Copy the `img` and `css` folders to the output
    eleventyConfig.addPassthroughCopy('assets');

    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(syntaxHighlight);

    let markdownLibrary = markdownIt({
        html: true,
        linkify: true
    });
    eleventyConfig.setLibrary('md', markdownLibrary);

    eleventyConfig.addCollection('sortedByTitle', function(collectionApi) {
        return collectionApi.getAll()
            .filter(function(item) {
                let extension = item.inputPath.split('.').pop();
                return extension === 'md';
            })
            .sort(function(a, b) {
                return a.data.title - b.data.title;
            });
    });

    eleventyConfig.addCollection('sortedByDate', function(collectionApi) {
        return collectionApi.getAll()
            .filter(function(item) {
                let extension = item.inputPath.split('.').pop();
                return extension === 'md';
            })
            .sort(function(a, b) {
                return a.data.date - b.data.date;
            });
    });

    eleventyConfig.addTransform('minify-html', function(content) {
        if (this.outputPath && this.outputPath.endsWith('.html')) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
        }    
        return content;
    });

    // Shortcodes
    eleventyConfig.addShortcode('demo', function(url) {
        return `<div class="example example--border">
            <div class="example__ribbon example__ribbon--tr">
                <span class="example__title">Demo</span>
            </div>
            <div class="example__content example__content--medium">
                <iframe class="example__frame" src="${url}"></iframe>
            </div>
       </div>`;
    });

    return {
        // Control which files Eleventy will process
        // e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: [
            'md',
            'njk',
            'html',
            'liquid',
        ],
        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: 'njk',

        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: 'njk',

        // These are all optional (defaults are shown):
        dir: {
            input: 'contents',
            includes: '_includes',
            data: '_data',
            output: '_site'
        }
    };
};