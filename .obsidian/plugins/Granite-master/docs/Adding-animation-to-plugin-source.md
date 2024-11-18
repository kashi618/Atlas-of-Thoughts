# Adding your new animations to the plugin code

This guide walks you step-by-step for adding your created animations into the source code.

Each file where you need to add your additions will include commented templates to make the process easier. 

For this pages examples, I will use the following popular character: Pikachu. 

> 👿 Please DO NOT add a Pikachu animation to a public copy of this plugin. 

## 1.  Update Settings.ts

Now we need to make it so that you can toggle which character to use in your settings.

### AnimationSourceType

In the animation source type section, we need to define the name of the character for the animations we have loaded thus far.

**Before**:

```ts
export enum AnimationSourceType {  
    GEMMY = 'gemmy',  
    DRAKE = 'drake',
```

**After**:

```ts
export enum AnimationSourceType {  
    GEMMY = 'gemmy',  
    DRAKE = 'drake',
    PIKACHU = 'pikachu',  
```

## 2. Adding quotes to QuoteManager.ts

> ⚠ If you have not already added your new character's quote lines in [Quotes](Quotes.ts), do that first. You can find instructions in [Adding quotes to Granite](Adding-quotes-to-Granite.md).

To have your characters say something within Granite, we need to tell the plugin to add its quotes. In [QuoteManager.ts](QuoteManager.ts), you will first want to import the quotes you created in [Quotes.ts](Quotes.ts).

### Imports

Underneath the import section, add your new character to the import list.

**Before**: 

```ts
import GranitePlugin from './main';  
import { AnimationSourceType } from './Setting';  
import { GraniteMode, GraniteState } from './Granite';  
import { DRAKE_EXCLUSIVE_QUOTES, GEMMY_EXCLUSIVE_QUOTES, GRANITE_BASE_QUOTES, Quotes } from './quotes/Quotes';
```

**After**:

```ts
import GranitePlugin from './main';  
import { AnimationSourceType } from './Setting';  
import { GraniteMode, GraniteState } from './Granite';  
import { PIKACHU_EXCLUSIVE_QUOTES, DRAKE_EXCLUSIVE_QUOTES, GEMMY_EXCLUSIVE_QUOTES, GRANITE_BASE_QUOTES, Quotes } from './quotes/Quotes';
```


### Quotemap

In the QuoteManager class, you will want to add your new character to the quote map.

**Before**: 

```ts
	constructor(plugin: GranitePlugin) {
		this.plugin = plugin;

		this.quoteMap = {
			[AnimationSourceType.GEMMY]: {
				[GraniteMode.IDLE]: this.getIdleQuotes(GEMMY_EXCLUSIVE_QUOTES),
				[GraniteMode.WRITING]: this.getWritingQuotes(GEMMY_EXCLUSIVE_QUOTES),
			},
			[AnimationSourceType.DRAKE]: {
				[GraniteMode.IDLE]: this.getIdleQuotes(DRAKE_EXCLUSIVE_QUOTES),
				[GraniteMode.WRITING]: this.getWritingQuotes(DRAKE_EXCLUSIVE_QUOTES),
			},
		};
```

**After**: 

```ts
	constructor(plugin: GranitePlugin) {
		this.plugin = plugin;

		this.quoteMap = {
			[AnimationSourceType.GEMMY]: {
				[GraniteMode.IDLE]: this.getIdleQuotes(GEMMY_EXCLUSIVE_QUOTES),
				[GraniteMode.WRITING]: this.getWritingQuotes(GEMMY_EXCLUSIVE_QUOTES),
			},
			[AnimationSourceType.DRAKE]: {
				[GraniteMode.IDLE]: this.getIdleQuotes(DRAKE_EXCLUSIVE_QUOTES),
				[GraniteMode.WRITING]: this.getWritingQuotes(DRAKE_EXCLUSIVE_QUOTES),
			},
			[AnimationSourceType.PIKACHU]: {
				[GraniteMode.IDLE]: this.getIdleQuotes(PIKACHU_EXCLUSIVE_QUOTES),
				[GraniteMode.WRITING]: this.getWritingQuotes(PIKACHU_EXCLUSIVE_QUOTES),
			},
		};
```

## 3. Import your animations into Animations.ts

To add your newly created animations into Granite to be rendered, we need to tell the plugin to process the gifs.

### Imports

Under the import section, we need to import the animations under unique names.

**Before**:
```ts
// Draconic Animations  
import EMERGE_MOTION_DRAKE from '../animations/drake/drake_emerge.gif';  
import POP_MOTION_DRAKE from '../animations/drake/drake_pop.gif';  
import DISAPPEAR_MOTION_DRAKE from '../animations/drake/drake_disappear.gif';  
import ANGRY_MOTION_DRAKE from '../animations/drake/drake_angry.gif';  
import LOOK_MOTION_DRAKE from '../animations/drake/drake_lookAround.gif';  
import IDLE_MOTION_DRAKE from '../animations/drake/drake_idle.gif';  
import DISAPPOINT_IMG_DRAKE from '../animations/drake/drake_disappoint.gif';
```

After:
```ts
// Draconic Animations  
import EMERGE_MOTION_DRAKE from '../animations/drake/drake_emerge.gif';  
import POP_MOTION_DRAKE from '../animations/drake/drake_pop.gif';  
import DISAPPEAR_MOTION_DRAKE from '../animations/drake/drake_disappear.gif';  
import ANGRY_MOTION_DRAKE from '../animations/drake/drake_angry.gif';  
import LOOK_MOTION_DRAKE from '../animations/drake/drake_lookAround.gif';  
import IDLE_MOTION_DRAKE from '../animations/drake/drake_idle.gif';  
import DISAPPOINT_IMG_DRAKE from '../animations/drake/drake_disappoint.gif';

// Pikachu Animations
import EMERGE_MOTION_PIKACHU from '../animations/pikachu/pikachu_emerge.gif';  
import POP_MOTION_PIKACHU from '../animations/pikachu/pikachu_pop.gif';  
import DISAPPEAR_MOTION_PIKACHU from '../animations/pikachu/pikachu_disappear.gif';  
import ANGRY_MOTION_PIKACHU from '../animations/pikachu/pikachu_angry.gif';  
import LOOK_MOTION_PIKACHU from '../animations/pikachu/pikachu_lookAround.gif';  
import IDLE_MOTION_PIKACHU from '../animations/pikachu/pikachu_idle.gif';  
import DISAPPOINT_IMG_PIKACHU from '../animations/pikachu/pikachu_disappoint.gif';
```

### Animations class

Within the animations class, you will want to add your animation map.

**Before**: 
```ts
// the mappings from an animation type to an actual image file for the drakeling  
public readonly drakeAnimationMap: Record<AnimationType, string>;
```

**After**:
```ts
// the mappings from an animation type to an actual image file for the pikachu  
public readonly pikachuAnimationMap: Record<AnimationType, string>;
// the mappings from an animation type to an actual image file for the drakeling  
public readonly drakeAnimationMap: Record<AnimationType, string>;
```


### Animation Map

Then further down, define the animation map. This is where you will tell Granite what animation to use for each emote.

**Before**:

```ts
constructor(plugin: GranitePlugin) {  
    this.plugin = plugin;  
  
    this.drakeAnimationMap = {  
       [AnimationType.EMERGE]: EMERGE_MOTION_DRAKE,  
       [AnimationType.POP_MOTION]: POP_MOTION_DRAKE,  
       [AnimationType.DISAPPEAR_MOTION]: DISAPPEAR_MOTION_DRAKE,  
       [AnimationType.ANGRY_MOTION]: ANGRY_MOTION_DRAKE,  
       [AnimationType.LOOK_MOTION]: LOOK_MOTION_DRAKE,  
       [AnimationType.IDLE_MOTION]: IDLE_MOTION_DRAKE,  
       [AnimationType.DISAPPOINT_IMG]: DISAPPOINT_IMG_DRAKE,  
    };
```


**After**:

```ts
constructor(plugin: GranitePlugin) {  
    this.plugin = plugin;  
    
    this.pikachuAnimationMap = {  
       [AnimationType.EMERGE]: EMERGE_MOTION_PIKACHU,  
       [AnimationType.POP_MOTION]: POP_MOTION_PIKACHU,  
       [AnimationType.DISAPPEAR_MOTION]: DISAPPEAR_MOTION_PIKACHU,  
       [AnimationType.ANGRY_MOTION]: ANGRY_MOTION_PIKACHU,  
       [AnimationType.LOOK_MOTION]: LOOK_MOTION_PIKACHU,  
       [AnimationType.IDLE_MOTION]: IDLE_MOTION_PIKACHU,  
       [AnimationType.DISAPPOINT_IMG]: DISAPPOINT_IMG_PIKACHU,  
    };

    this.drakeAnimationMap = {  
       [AnimationType.EMERGE]: EMERGE_MOTION_DRAKE,  
       [AnimationType.POP_MOTION]: POP_MOTION_DRAKE,  
       [AnimationType.DISAPPEAR_MOTION]: DISAPPEAR_MOTION_DRAKE,  
       [AnimationType.ANGRY_MOTION]: ANGRY_MOTION_DRAKE,  
       [AnimationType.LOOK_MOTION]: LOOK_MOTION_DRAKE,  
       [AnimationType.IDLE_MOTION]: IDLE_MOTION_DRAKE,  
       [AnimationType.DISAPPOINT_IMG]: DISAPPOINT_IMG_DRAKE,  
    };
```

### Source Map

And right below that, add your character to the source map.

**Before**:

```ts
this.animationSourceMap = {  
    [AnimationSourceType.DRAKE]: this.drakeAnimationMap,  
    [AnimationSourceType.GEMMY]: this.gemmyAnimationMap,  
};
```

**After**:

```ts
this.animationSourceMap = {  
    [AnimationSourceType.PIKACHU]: this.pikachuAnimationMap, 
    [AnimationSourceType.DRAKE]: this.drakeAnimationMap,  
    [AnimationSourceType.GEMMY]: this.gemmyAnimationMap,  
};
```


### PluginSettingsTab

Now, we add the new character to the dropdown list.

**Before**:

```ts
.addDropdown(dropdown =>  
    dropdown  
       .addOption(AnimationSourceType.GEMMY, 'Gemmy')  
       .addOption(AnimationSourceType.DRAKE, 'Drake')
```

**After**: 

```ts
.addDropdown(dropdown =>  
    dropdown  
       .addOption(AnimationSourceType.GEMMY, 'Gemmy')  
       .addOption(AnimationSourceType.DRAKE, 'Drake')
       .addOption(AnimationSourceType.PIKACHU, 'Pikachu')
```

And thats it!
