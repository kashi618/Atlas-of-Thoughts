import GranitePlugin from './main';
import { AnimationSourceType } from './Setting';

// Original Animations
import EMERGE_MOTION_GEMMY from '../animations/gemmy/gemmy_emerge.gif';
import POP_MOTION_GEMMY from '../animations/gemmy/gemmy_pop.gif';
import DISAPPEAR_MOTION_GEMMY from '../animations/gemmy/gemmy_disappear.gif';
import ANGRY_MOTION_GEMMY from '../animations/gemmy/gemmy_angry.gif';
import LOOK_MOTION_GEMMY from '../animations/gemmy/gemmy_lookAround.gif';
import IDLE_MOTION_GEMMY from '../animations/gemmy/gemmy_idle.gif';
import DISAPPOINT_IMG_GEMMY from '../animations/gemmy/gemmy_disappoint.gif';

// Draconic Animations
import EMERGE_MOTION_DRAKE from '../animations/drake/drake_emerge.gif';
import POP_MOTION_DRAKE from '../animations/drake/drake_pop.gif';
import DISAPPEAR_MOTION_DRAKE from '../animations/drake/drake_disappear.gif';
import ANGRY_MOTION_DRAKE from '../animations/drake/drake_angry.gif';
import LOOK_MOTION_DRAKE from '../animations/drake/drake_lookAround.gif';
import IDLE_MOTION_DRAKE from '../animations/drake/drake_idle.gif';
import DISAPPOINT_IMG_DRAKE from '../animations/drake/drake_disappoint.gif';

// Importing a new character? Copy the below and change the NAME with your character name.
//
// Name Animations
// import EMERGE_MOTION_NAME from '../animations/name/name_emerge.gif';
// import POP_MOTION_NAME from '../animations/name/name_pop.gif';
// import DISAPPEAR_MOTION_NAME from '../animations/name/name_disappear.gif';
// import ANGRY_MOTION_NAME from '../animations/name/name_angry.gif';
// import LOOK_MOTION_NAME from '../animations/name/name_lookAround.gif';
// import IDLE_MOTION_NAME from '../animations/name/name_idle.gif';
// import DISAPPOINT_IMG_NAME from '../animations/name/name_disappoint.gif';

export enum AnimationType {
	EMERGE = 'emerge',
	POP_MOTION = 'pop_motion',
	DISAPPEAR_MOTION = 'disappear_motion',
	ANGRY_MOTION = 'angry_motion',
	LOOK_MOTION = 'look_motion',
	IDLE_MOTION = 'idle_motion',
	DISAPPOINT_IMG = 'disappoint_ing',
}

export class Animations {
	public readonly plugin: GranitePlugin;

	// Copy and paste this below, where name is your new character name.
	// the mappings from an animation type to an actual image file for the name
	// public readonly nameAnimationMap: Record<AnimationType, string>;

	// the mappings from an animation type to an actual image file for the drakeling
	public readonly drakeAnimationMap: Record<AnimationType, string>;
	// the mappings from an animation type to an actual image file for the granite
	public readonly gemmyAnimationMap: Record<AnimationType, string>;

	// maps an animation source to the corresponding animation map
	public readonly animationSourceMap: Record<AnimationSourceType, Record<AnimationType, string>>;

	constructor(plugin: GranitePlugin) {
		this.plugin = plugin;

		// Add your character to the animation map.
		// Replace name with your new character's name.
		// Be mindful of your indentations as comment mode strips them.
		//
		// 		this.nameAnimationMap = {
		// 			[AnimationType.EMERGE]: EMERGE_MOTION_NAME,
		// 			[AnimationType.POP_MOTION]: POP_MOTION_NAME,
		// 			[AnimationType.DISAPPEAR_MOTION]: DISAPPEAR_MOTION_NAME,
		// 			[AnimationType.ANGRY_MOTION]: ANGRY_MOTION_NAME,
		// 			[AnimationType.LOOK_MOTION]: LOOK_MOTION_NAME,
		// 			[AnimationType.IDLE_MOTION]: IDLE_MOTION_NAME,
		// 			[AnimationType.DISAPPOINT_IMG]: DISAPPOINT_IMG_NAME,
		// 		};

		this.drakeAnimationMap = {
			[AnimationType.EMERGE]: EMERGE_MOTION_DRAKE,
			[AnimationType.POP_MOTION]: POP_MOTION_DRAKE,
			[AnimationType.DISAPPEAR_MOTION]: DISAPPEAR_MOTION_DRAKE,
			[AnimationType.ANGRY_MOTION]: ANGRY_MOTION_DRAKE,
			[AnimationType.LOOK_MOTION]: LOOK_MOTION_DRAKE,
			[AnimationType.IDLE_MOTION]: IDLE_MOTION_DRAKE,
			[AnimationType.DISAPPOINT_IMG]: DISAPPOINT_IMG_DRAKE,
		};

		this.gemmyAnimationMap = {
			[AnimationType.EMERGE]: EMERGE_MOTION_GEMMY,
			[AnimationType.POP_MOTION]: POP_MOTION_GEMMY,
			[AnimationType.DISAPPEAR_MOTION]: DISAPPEAR_MOTION_GEMMY,
			[AnimationType.ANGRY_MOTION]: ANGRY_MOTION_GEMMY,
			[AnimationType.LOOK_MOTION]: LOOK_MOTION_GEMMY,
			[AnimationType.IDLE_MOTION]: IDLE_MOTION_GEMMY,
			[AnimationType.DISAPPOINT_IMG]: DISAPPOINT_IMG_GEMMY,
		};

		this.animationSourceMap = {
			// Add your character to the animation source map, where name is your character name.
			// [AnimationSourceType.NAME]: this.nameAnimationMap,
			[AnimationSourceType.DRAKE]: this.drakeAnimationMap,
			[AnimationSourceType.GEMMY]: this.gemmyAnimationMap,
		};

		console.log('granite | build animation map', this.animationSourceMap);
	}

	/**
	 * Plays a granite animation in the currently selected animation source type inside an element.
	 *
	 * @param el the element to play the animation in
	 * @param animation the animation to play
	 */
	public play(el: HTMLElement, animation: AnimationType): void {
		const animationFile = this.animationSourceMap[this.plugin.settings.animationSource][animation];

		el.setAttribute('src', animationFile);
	}
}
