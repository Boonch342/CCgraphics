if(GardenTimeWarp === undefined) var GardenTimeWarp = {};

GardenTimeWarp.launch = function(){
	GardenTimeWarp.init = function() {
		GardenTimeWarp.isLoaded = 1;
		GardenTimeWarp.gardenTickRate = null;
		GardenTimeWarp.tickRateValues = [1,3,10,30,60,null,3600,86400,604800]; // Null uses the default tick rate
		GardenTimeWarp.KEY = 'Farm';
		
		if(!Game.customMinigame[GardenTimeWarp.KEY].computeStepT) {
			Game.customMinigame[GardenTimeWarp.KEY].computeStepT = [];
		}
		Game.customMinigame[GardenTimeWarp.KEY].computeStepT.push(GardenTimeWarp.computeStepT);
		
		GardenTimeWarp.createUI();
	}
	
	Game.registerMod("Garden Time Warp", GardenTimeWarp);
}

//Used to override base game computeStepT function
GardenTimeWarp.computeStepT = function() {
	var M = Game.Objects[GardenTimeWarp.KEY].minigame;
	if (Game.Has('Turbo-charged soil')) M.stepT = 1;
	else if (GardenTimeWarp.gardenTickRate) M.stepT = GardenTimeWarp.gardenTickRate
	else M.stepT = M.soilsById[M.soil].tick * 60;
}

GardenTimeWarp.incrementGardenTickRate = function(positive) {
	var tickRateIndex = GardenTimeWarp.tickRateValues.indexOf(GardenTimeWarp.gardenTickRate)
	if (tickRateIndex !== -1) {
		if (positive && tickRateIndex < GardenTimeWarp.tickRateValues.length - 1) {
			tickRateIndex++;
		} else if (!positive && tickRateIndex > 0) {
			tickRateIndex--;
		}
		GardenTimeWarp.gardenTickRate = GardenTimeWarp.tickRateValues[tickRateIndex];
	} else {
		GardenTimeWarp.gardenTickRate = null;
	}
}

GardenTimeWarp.applyGardenTickRate = function() {
	var M = Game.Objects[GardenTimeWarp.KEY].minigame;
	if (GardenTimeWarp.gardenTickRate) {
		if (GardenTimeWarp.gardenTickRate > 86400) {
			l('gardenTimeWarpText').innerHTML='Garden Tick Rate:<br>' + Beautify(Math.floor(GardenTimeWarp.gardenTickRate / 86400)) + 'd';
		} else if (GardenTimeWarp.gardenTickRate >= 3600) {
			l('gardenTimeWarpText').innerHTML='Garden Tick Rate:<br>' + Beautify(Math.floor(GardenTimeWarp.gardenTickRate / 3600)) + 'h';
		} else {
			l('gardenTimeWarpText').innerHTML='Garden Tick Rate:<br>' + Beautify(GardenTimeWarp.gardenTickRate) + 's';
		}
		M.stepT = GardenTimeWarp.gardenTickRate;
		M.nextStep = Date.now() + GardenTimeWarp.gardenTickRate * 1000;
	} else {
		l('gardenTimeWarpText').innerHTML='Garden Tick Rate:<br>Default';
		M.stepT = M.soilsById[M.soil].tick * 60;
		M.nextStep = Date.now() + M.soilsById[M.soil].tick * 60000;
	}
}

GardenTimeWarp.createUI = function() {
	// create the button oustide the Garden Tools div so that it does not get overwritten when the garden display updates (i.e. when the soil is changed)
	l('gardenTools').insertAdjacentHTML('afterend','<div style="font-size:12px;position:absolute;bottom:2px;right:2px;display:flex;" id="gardenTimeWarpContainer"></div>');
	l('gardenTimeWarpContainer').insertAdjacentHTML('beforeend','<a style="font-size:24px;display:inline-block;text-decoration:none;" class="smallFancyButton" id="gardenTimeWarpSubtract">-</a>');
	l('gardenTimeWarpContainer').insertAdjacentHTML('beforeend','<div style="font-size:12px;display:inline-block;padding:0em 1em" class="smallFancyButton" id="gardenTimeWarpText"></div>');
	l('gardenTimeWarpContainer').insertAdjacentHTML('beforeend','<a style="font-size:24px;display:inline-block;text-decoration:none;" class="smallFancyButton" id="gardenTimeWarpAdd">+</a>');
	
	AddEvent(l('gardenTimeWarpAdd'),'click',function() {
		PlaySound('snd/pop3.mp3',0.5);
		GardenTimeWarp.incrementGardenTickRate(true);
		GardenTimeWarp.applyGardenTickRate();
	});
	
	AddEvent(l('gardenTimeWarpSubtract'),'click',function() {
		PlaySound('snd/pop1.mp3',0.5);
		GardenTimeWarp.incrementGardenTickRate(false);
		GardenTimeWarp.applyGardenTickRate();
	});
}

GardenTimeWarp.save = function() {
	return String(GardenTimeWarp.gardenTickRate);
}

GardenTimeWarp.load = function(str) {
	GardenTimeWarp.gardenTickRate = parseInt(str);
	if (isNaN(GardenTimeWarp.gardenTickRate)) {
		GardenTimeWarp.gardenTickRate = null;
	}
	this.applyGardenTickRate();
}

if(!GardenTimeWarp.isLoaded){
	if(CCSE && CCSE.isLoaded){
		GardenTimeWarp.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(GardenTimeWarp.launch);
	}
}

