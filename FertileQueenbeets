Game.registerMod("FertileQueenbeets",{

// DATA & Structure

initDone: false,	// Are Juicy Queenbeets been converted?



// INIT - Automatically called at mod startup
init:function()
{
	// Add queenbeets update in Check event - Lets the Garden load if needed
	Game.registerHook('check', this.updateQueenbeets);
},




// Transform non-plantable queenbeets into plantable ones
updateQueenbeets: function()
{
	const Farms = Game.Objects.Farm;

	// If no garden, return
	if (!Farms.minigameLoaded || Farms.amount <= 0 || Farms.level <= 0) return;

	const Me = Game.mods.FertileQueenbeets;
	const QBeet = Farms.minigame.plants.queenbeetLump;

	// Initial "fertilization"
	if (!Me.initDone) {
		QBeet.plantable = true;		// Plantable seed
		QBeet.cost = 60 * 24 * 8;	// Cost, in minutes: 8 days (of CpS)
		Me.initDone = true;
	}

	// Dynamic minimal cost: 4 days of highest raw CpS - Avoid selling all buildings to get "cheap" juicy queenbeets - this mod is helper, no cheater
	QBeet.costM = Game.cookiesPsRawHighest * 3600 * 24 * 4;		// In seconds

	// Once conversion done, we can retire this function from hook
	//Game.modHooks['check'].pop(Game.mods.FertileQueenbeets.updateQueenbeets);
},
});
