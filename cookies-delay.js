Game.registerMod("CookiesDelay",{

// Global Data and Config
Factor: 5,		// By how much divide the interval between "price" and "unlockedAt"
lightFactor: 2,	// By how much divide the interval between "price" and "unlockedAt" if "Divine bakeries" is bought




// INIT - Automatically called at mod startup
init:function()
{
	// Check all cookies in game Upgrades and apply new unlock threshold
	let Delta = 0, Upg = 0;
	let factorUsed = Game.Has("Divine bakeries") ? this.lightFactor : this.Factor;
	for (var key in Game.UpgradesById) {
		Upg = Game.UpgradesById[key]
		if (Upg.pool == 'cookie' && Upg.unlockAt.cookies) {
			Delta = Upg.basePrice - Upg.unlockAt.cookies;
			Upg.unlockAt.cookies = Upg.basePrice - Math.round(Delta / factorUsed);
			// Already unlocked? Relock it
			if (Upg.unlocked && !Upg.bought &&
				Upg.unlockAt.cookies && Upg.unlockAt.cookies > Game.cookiesEarned) Upg.lose();
		}
	}

	// Notify that the mod is loaded
	let Duration = 11 + Math.random() * 10;
	Game.Notify(loc('CookiesDelay loaded'),
				loc('Cookies now appear %1 times later.', Beautify(factorUsed, 1)) + "<br><q>" + loc("This should free some place in the shop.") + "</q>",
				[10,26], Duration, 1);
},

});




//=================================================




// All languages - Required to manage "%1"
ModLanguage('*',
{
	'Cookies now appear %1 times later.' : 'Cookies now appear %1 times later.',
});




// Traduction française
ModLanguage('FR',
{
	'CookiesDelay loaded' : 'CookiesDelay a été chargé',
	'Cookies now appear %1 times later.' : 'Les cookies apparaissent maintenant %1 fois plus tard.',
	'This should free some place in the shop.' : 'Ça devrait faire de la place dans la boutique.',
});
