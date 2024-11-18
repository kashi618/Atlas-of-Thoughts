# Developing Granite plugin

These documents go over the more advanced features of adding to and developing Granite.

## Guides

1. [Adding quotes to Granite](Adding-quotes-to-Granite.md)
2. [Adding animations to Granite](Adding-animations-to-Granite.md)
3. [Adding animation to plugin source files](Adding-animation-to-plugin-source.md)

## Developer environment

Granite is NPM enabled. You can retrieve the packages needed by using `npm -i D`.

To auto-build the plugin while you are adding changes, you can use the following command in your terminal/IDE of choice: `npm run dev`.

If you wish to specify a different output file for the built `main.js`, then add a `.env` file in the root directory of your fork, and add the following to the file:

`OUTDIR="/absolute/path/to/your/vault/.obsidian/plugins/Granite"`

This way, you can reload Obsidian and see your updated changes. You may also utilize the [Hot Reload](https://github.com/pjeby/hot-reload) to reload Obsidian for you.