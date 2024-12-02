Game.registerMod("fortuneSoundSwitch", {//this string needs to match the ID provided in your info.txt
	selectedSound: 0,
	hasPlayedOnce: false,//used to mute after playing once the sound

	init: function () {
		//better ref :D
		const THISMOD = Game.mods['fortuneSoundSwitch'];
		//The icons from resources/app/src/img/icons.png are 0 indexed as [x, y]
		THISMOD.icon = [29, 8];
		Game.Notify(`Fortune Sound Switch loaded`, 'Select a sound in the switches menu, if you unlocked Fortune cookies already.', THISMOD.icon, 6);

		//Registering Hooks:3
		Game.registerHook('logic', [
			THISMOD.fortuneChecker,
			THISMOD.fortuneLoader,
		]//Mapping each function to also include the mod info, cuz "this" is pure pandemonium by design.
			.map(f => { return () => f(THISMOD) })
		);
	},
	//loading the new upgrade here so it's not forgotten via all other updates and stuff
	fortuneLoader: function (THISMOD) {
		//Mod only available when Fortune Cookies are unlocked
		if (!Game.Has('Fortune cookies')) return;

		//if this is somewhere already, return
		if (THISMOD.fortuneSwitch) {
			if (THISMOD.fortuneSwitch.unlocked !== 1) THISMOD.fortuneSwitch.unlock();
			return;
		}
		//Copied & adapted from Orteil's code section: Game.Upgrade('Golden cookie sound selector'...........etc
		//creating the switch
		const desc = 'Changes the sound good fortunes (Green news) make when they spawn.'
		THISMOD.fortuneSwitch = new Game.Upgrade('Fortune Sound Selector', desc, 0, THISMOD.icon);
		THISMOD.fortuneSwitch.ddesc = desc;
		THISMOD.fortuneSwitch.pool = 'toggle';
		//THISMOD.fortuneSwitch.unlocked = 1;
		//using CC's function
		THISMOD.fortuneSwitch.unlock();
		//dunnu, kinda checking if its on the vanilla game??
		//THISMOD.fortuneSwitch.vanilla = 1;
		//to position as last
		THISMOD.fortuneSwitch.order = 999999999;

		/**function to create the choices */
		THISMOD.fortuneSwitch.choicesFunction = () => {
			const choices = [
				{ name: 'No sound', icon: [0, 7] },
				{ name: 'Chime', icon: [22, 6] },
				{ name: 'Fortune', icon: [27, 6] },
				{ name: 'Cymbal', icon: [9, 10] },
				{ name: 'Squeak', icon: [8, 10] },
			]
			//localizing names for each choice
			for (var i = 0; i < choices.length; i++) { choices[i].name = loc(choices[i].name); }

			choices[THISMOD.selectedSound].selected = 1;
			return choices;
		}
		/**description */
		THISMOD.fortuneSwitch.descFunc = () => {
			const choice = THISMOD.fortuneSwitch.choicesFunction()[THISMOD.selectedSound];
			return '<div style="text-align:center;">' + loc("Current:") + ' ' + tinyIcon(choice.icon) + ' <b>' + choice.name + '</b></div><div class="line"></div>' + THISMOD.fortuneSwitch.ddesc;
		}
		/**pick function */
		THISMOD.fortuneSwitch.choicesPick = (id) => {
			THISMOD.selectedSound = id;
			THISMOD.playFortuneSound(THISMOD)
		}
		//if the function doesn't exist for some reason, create it // I just copypasted Orteil's code here
		/* 
		if (!Game?.playGoldenCookieChime) {
			Game.playGoldenCookieChime = function () {
				if (Game.chimeType == 1) PlaySound('snd/chime.mp3');
				else if (Game.chimeType == 2) PlaySound('snd/fortune.mp3');
				else if (Game.chimeType == 3) PlaySound('snd/cymbalRev.mp3');
				else if (Game.chimeType == 4) { Game.wrinklerSquishSound++; if (Game.wrinklerSquishSound > 4) { Game.wrinklerSquishSound -= 4; } PlaySound('snd/squeak' + (Game.wrinklerSquishSound) + '.mp3'); }
			}
		} */
		Game.RebuildUpgrades()
	},
	/**Hook to check for a fortune and play sound */
	fortuneChecker: function (THISMOD) {
		if (Game.TickerEffect && Game.TickerEffect.type === 'fortune') {
			//if in here to avoid possible loop via the else condition
			if(!THISMOD.hasPlayedOnce){
				THISMOD.playFortuneSound(THISMOD);
				THISMOD.hasPlayedOnce = true;
			}
		}
		//When no longer a fortune, restore sound
		else if (THISMOD.hasPlayedOnce) {
			THISMOD.hasPlayedOnce = false;
		}
	},
	/**reusing selected sound */
	playFortuneSound: function (THISMOD) {
		const temp = Game.chimeType;
		//sets temporarily the id to play the test sound
		Game.chimeType = THISMOD.selectedSound;
		Game.playGoldenCookieChime();
		//restore og sound for anything else
		Game.chimeType = temp;
	},
	save: function () {
		return String(this.selectedSound);
	},
	load: function (str) {
		this.selectedSound = parseInt(str || 0);
	},
});
