# Adding animations to Granite Plugin

This page gives the overall guidelines on what an animation needs to be to be successful in this plugin.

## What format do these need to be in?

All animations need to be in a `.gif` format.

## Supported Emotes

Granite supports a few different character emotes within the plugin.

- Angry
- Disappear
- Disappoint
- Emerge
- Idle
- Look Around
- Pop

## How long is each animation?

- Angry is 1.92 seconds
- Disappear is 1.92 seconds
- Disappoint is 0.16 seconds
- Emerge is 3.84 seconds
- Idle is 7.3 seconds
- Look Around is 6.4 seconds
- Pop is 1.92 seconds

## Where to place the animated gifs

These animations are stored in `animations/name` where name is the name of the character.

**Example**: As of writing this, Granite plugin has two characters: `gemmy` and `drake`. Gemmy's animations are located in `animations/gemmy` and Drake's animations are located in `animations/drake`.

## What naming convention should I use?

The animations need to be in lower case text.

Additionally, the animations need to be named charactername_emote.gif, to match the emote they are for.

Example: `gemmy_angry.gif` is the angry animation for Gemmy.

## How do I add them to the plugin itself?

See [Adding animations to plugin details](Adding-animation-to-plugin-source.md).
