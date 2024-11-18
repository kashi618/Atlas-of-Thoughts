
# Adding quotes to Granite Plugin

All quotes are handled in [Quotes,ts](src/quotes/Quotes.ts).
This file is a javascript array of objects, with each section controlling a certain character.

Quotes are grouped under `Base Quotes`, and individual `Character Quotes`.
They are grouped further by `General`, `Idle`, and `Writing Mode` quotes.

## Adding quotes to an existing character

1. Open [Quotes.ts](src/quotes/Quotes.ts) and find the character you want to edit.
2. Determine if you are editing a general quote, idle quote, or writing mode quote.
3. In the section that you want to add your line to, use the following formatting to add your line:

```json
   	`You are a background character in your own life.`,
```

How this may look in its `.json` file:

```json
    "general": [
        "You are a background character in your own life.",
    ],
```


Some rules of thumb:
- Every quote line needs to end with a comma `,`.
- Every quote line needs to be surrounded by double quotes `"`.

## Adding a new character

To add a new character into the quotes, you can add the following to the bottom of [Quotes.ts](src/quotes/Quotes.ts):

**Before**: 

```ts
export const DRAKE_EXCLUSIVE_QUOTES: Quotes = {
    general: [],
    idle: [],
    writingMode: [],
};
```

**After**:

```ts
export const DRAKE_EXCLUSIVE_QUOTES: Quotes = {
    general: [],
    idle: [],
    writingMode: [],
};
export const PIKACHU_EXCLUSIVE_QUOTES: Quotes = {
    general: [],
    idle: [],
    writingMode: [],
};
```
