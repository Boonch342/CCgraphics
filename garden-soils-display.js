Game.registerMod("SoilsDisplay",{

// DATA & STRUCTURES

textsToFind: {		// Texts to find for replacements (dynamic, defined in init)
	effect: '',
	period: '',
},




// INIT - Automatically called at mod startup
init: function()
{ 
	// Initalising texts according to language
	this.textsToFind.effect = loc("passive plant effects");
	this.textsToFind.period = loc("tick every %1", "");

	// Register to Check hook
	Game.registerHook('check', this.updateSoilsDisplay);

	// Notification
	let Duration = 11 + Math.random() * 10;
	Game.Notify(loc('Garden Soils Display loaded'), '', [2,26], Duration, 1);
	
},




// Checks soils and update their effect tooltip
updateSoilsDisplay: function()
{
	// No garden? No update
	if (!Game.Objects["Farm"].minigameLoaded || Game.Objects["Farm"].amount <= 0) return;

	// Shortcuts
	const Me = Game.mods["SoilsDisplay"];
	const Garden = Game.Objects["Farm"].minigame;


	// Loop on each soil
	for (var i in Garden.soils) {
		const soil = Garden.soils[i];

		// Check if both plants effect and ticks are present
		var effectPresent = false, periodPresent = false;

		// Generate line for effect on plants
		var color = 'gray', effSign = '+';
		if (soil.effMult >= 1.01) {
			color = 'green';
		}
		else if (soil.effMult <= 0.99) {
			color = 'red';
			effSign = ''; // No "-" for sign as already showed in negative numbers
		}
		var effectStr = '<div class="' + color + '">&bull; ' + loc("passive plant effects") +' <b>' + effSign + Math.round((soil.effMult - 1) * 100) + '%</b>';

		// Generate line for tick period
		var periodStr = '<div class="gray">&bull; ' + loc("tick every %1", '<b>' + Game.sayTime(soil.tick * 60 * Game.fps) + '</b>');


		// Take str and split it by div
		var lines = soil.effsStr.split("</div>");

		// Rebuild effstr with updated values for each line
		soil.effsStr = '';
		for (var l = 0; l < lines.length; l++) {
			// Initial check: line must starts by "div"
			if (!lines[l].startsWith('<div')) continue;

			// Line is the "Passive plant effect xx%"?
			if (lines[l].includes(Me.textsToFind.effect)) {
				lines[l] = effectStr;
				effectPresent = true;
			}

			// Line is the "Tick every x minutes"?
			else if (lines[l].includes(Me.textsToFind.period)) {
				lines[l] = periodStr;
				periodPresent = true;
			}

			// Add the line into the description, with the ending "</div>"
			soil.effsStr += lines[l] + '</div>';
		}

		// If no plant effect or no period line present, force add them
		if (!effectPresent) { soil.effsStr += effectStr + '</div>'; }
		if (!periodPresent) { soil.effsStr += periodStr + '</div>'; }
	}
},

});



//Traduction française
ModLanguage('FR',{
	'Garden Soils Display loaded' : 'Garden Soils Display a été chargé',
});
