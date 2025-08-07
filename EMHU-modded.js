if (EMHU === undefined) var EMHU = {};
EMHU.name = 'Even More Heavenly Upgrades';
EMHU.version = '2.8';
EMHU.GameVersion = '2.053';

EMHU.launch = function() {
    EMHU.init = function() {
        EMHU.isLoaded = 1;
        Game.Notify('Even More Heavenly Upgrades loaded!', 'Version 2.9', [11, 5], 6);


//More Permanent upgrades --- Currently broken
// var desc = loc("Placing an upgrade in this slot will make its effects <b>permanent</b> across all playthroughs.");
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VI', desc, 6000000000000, [0, 11], 724, -28, ['Permanent upgrade slot V']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(5);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(5);};
//
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VII', desc, 700000000000000, [1, 11], 878, 33, ['Permanent upgrade slot VI']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(6);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(6);};
//
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VIII', desc, 80000000000000000, [2, 11], 928, 174, ['Permanent upgrade slot VII']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(7);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(7);};
//
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot IX', desc, 9000000000000000000, [3, 11], 834, 301, ['Permanent upgrade slot VIII']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(8);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(8);};
//
// CCSE.NewHeavenlyUpgrade('Permanent upgrade slot X', desc, 100000000000000000000, [6, 11], 661, 360, ['Permanent upgrade slot IX']);
// Game.last.iconFunction=function(){return Game.PermanentSlotIcon(9);};Game.last.activateFunction=function(){Game.AssignPermanentSlot(9);};

        
//Divine Upgrades
        CCSE.NewHeavenlyUpgrade('Divine savings', "Add to your bank all your unspent heavenly chips<q>They won\'t be spent<br>don\'t worry</q>", 7777777777, [20, 7], -725, 400, ['Decisive fate']);
        CCSE.NewHeavenlyUpgrade('Divine gains', "Each unspent heavenly chip will give you a <b>+1% to your CpS</b><q>That\'s a boost</q>", 7777777777777, [0, 0, "https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/refs/heads/main/DivineGains.png"], -625, 604, ['Lucky payout', 'Divine bakeries']);


//Ancient dragon
        Game.last.showIf = function() { return (Game.Achievements["Here be dragon"].won == 1); };
        CCSE.NewHeavenlyUpgrade('Cookie Dragon Egg', "You start with your own dragon egg!<q>So you don't need to buy it everytime</q>", 7600000, [21, 12], -812, 538, ['Divine gains']);
        CCSE.NewHeavenlyUpgrade('Cookie Hatchling', "Krumblor will be hatched on ascension<q>It costs a bit more than buying it in the living world, but it's worth</q>", 76700000, [31, 15], -945, 530, ['Cookie Dragon Egg']);
        CCSE.NewHeavenlyUpgrade('Dragon in Training', "Krumblor starts halfway into it\'s training<q>This tooth fell off when they grew up</q>", 767000000000, [30, 15], -1022,  646, ['Cookie Hatchling']);
        CCSE.NewHeavenlyUpgrade('Dragon in Baking', "Krublor starts fully trained <b>(1 slot)<b><q>Almost there!</q>", 767000000000000, [30, 14], -874, 721, ['Dragon in Training']);
        CCSE.NewHeavenlyUpgrade('Krumblor, The one and only', "Krumblor starts trained to it's full potential<q>You got here many times already, no need to repeat it</q>", 76700000000000000, [31, 14], -985, 829, ['Dragon in Baking']);


//Lumps
        CCSE.NewHeavenlyUpgrade('Nectar of Prophets', "You gain <b>1 sugar lump</b> on ascenscion and next sugar lump becomes bifuricated", 5000000000000, [23, 14], -885, 331, ['Divine savings']);
        CCSE.NewHeavenlyUpgrade('Nectar of Angels', "You gain <b>2 more sugar lumps</b> on ascenscion", 500000000000000, [24, 14], -1002, 314, ['Nectar of Prophets']);
        CCSE.NewHeavenlyUpgrade('Nectar of Deities', "You gain <b>3 more sugar lumps</b> on ascenscion, and next sugar lump becomes caramelized", 50000000000000000, [25, 14], -1116, 343, ['Nectar of Angels']);
        CCSE.NewHeavenlyUpgrade('Nectar of Demigods', "You gain <b>5 more sugar lumps</b> on ascenscion", 500000000000000000, [27, 16], -1178, 453, ['Nectar of Deities']);
        CCSE.NewHeavenlyUpgrade('Nectar of Gods', "You gain <b>7 more sugar lumps</b> on ascenscion, and next sugar lump becomes golden", 10000000000000000000, [28, 16], -1185, 580, ['Nectar of Demigods']);

//Fortunes
    CCSE.NewHeavenlyUpgrade('Sors, immanis', "Fortunes persist across ascension<q>like the moon<br>you are changeable,<br>ever waxing<br>ever waning</q>", 777777777777, [0, 0, "https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/refs/heads/main/SorsImmanis.png"], -456, 753,  ['Fortune cookies']);
        Game.last.showIf = function() { return (Game.Achievements["O Fortuna"].won == 1); };
        
//Kittens
        CCSE.NewHeavenlyUpgrade('Litter of kittens workforce', "Kittens persist through ascension<q>We're with you forever, sir</q>", 9000000000000, [26, 7], 600, -900, ['Kitten wages']);
        Game.last.showIf = function() { return (Game.Achievements["Purrfection"].won == 1); };
        

        Game.customComputeLumpTimes.push(function() {
            let ten_minutes = (((1000) * 60) * 10);
            let one_minute = (1000 * 60);
            let minMatureTime = ten_minutes;
        });
    }



//Function


    Game.registerHook('reincarnate', function() {
        if (Game.ascensionMode != 1) {

            if (Game.Has('Divine savings')) Game.Earn(Game.heavenlyChips);

            
            if (Game.Has('Santa\'s Heavenly Legacy')) {
                Game.Upgrades['A festive hat'].bought = 1;
                Game.santaLevel = 14;
                for (let i = 0; i < Game.santaDrops.length; i++) { Game.Upgrades[Game.santaDrops[i]].unlocked = 1 }
                Game.Upgrades['Santa\'s dominion'].unlock();
              }
            if (Game.Has('Silly Wabbit')) {
                for(var i = 210; i < 230; i++)
                Game.Unlock(Game.UpgradesById[i].name);
              }
            if (Game.Has('Lover\'s Delight')){
                Game.Unlock(['Pure heart biscuits','Ardent heart biscuits','Sour heart biscuits','Weeping heart biscuits','Golden heart biscuits','Eternal heart biscuits','Prism heart biscuits']);
              }
            if (Game.Has('Horror Story')){
                Game.Unlock(['Skull cookies','Ghost cookies','Bat cookies','Slime cookies','Pumpkin cookies','Eyeball cookies','Spider cookies']);
              }
              if (Game.Has('Rudolph\'s Recipe')){
                Game.Unlock(['Candy cane biscuits','Christmas tree biscuits','Snowflake biscuits','Holly biscuits','Snowman biscuits','Bell biscuits','Present biscuits']);
              }

            if (Game.Has('Cookie Dragon Egg')) {
                Game.Upgrades['A crumbly egg'].bought = 1;
                Game.Unlock(['Dragon cookie']);
                if (Game.Has('Cookie Hatchling')) {
                    Game.dragonLevel = 5;
                    if (Game.Has('Dragon in Training')) {
                        Game.dragonLevel = 15;
                        if (Game.Has('Dragon in Baking')) {
                            Game.dragonLevel = 25;
                            if (Game.Has('Krumblor, The one and only')) {
                                Game.dragonLevel = 27;
                            }
                        }
                    }
                }
            };

              if (Game.Has('Nectar of Prophets')) {
                  Game.gainLumps(1);
                  Game.lumpCurrentType = 1;
                }
                  if (Game.Has('Nectar of Angels')) {
                      Game.gainLumps(2);
                  }
                    if (Game.Has('Nectar of Deities')) {
                        Game.gainLumps(3);
                        Game.lumpCurrentType = 4;
                    }
                        if (Game.Has('Nectar of Demigods')) {
                            Game.gainLumps(5);
                      }
                            if (Game.Has('Nectar of Gods')) {
                                Game.gainLumps(7);
                                Game.lumpCurrentType = 2;
                        }

            if (Game.Has('Litter of kittens workforce')) {
                Game.Upgrades["Kitten helpers"].bought = 1;
                Game.Upgrades["Kitten workers"].bought = 1;
                Game.Upgrades["Kitten engineers"].bought = 1;
                Game.Upgrades["Kitten overseers"].bought = 1;
                Game.Upgrades["Kitten managers"].bought = 1;
                Game.Upgrades["Kitten accountants"].bought = 1;
                Game.Upgrades["Kitten specialists"].bought = 1;
                Game.Upgrades["Kitten experts"].bought = 1;
                Game.Upgrades["Kitten consultants"].bought = 1;
                Game.Upgrades["Kitten assistants to the regional manager"].bought = 1;
                Game.Upgrades["Kitten marketeers"].bought = 1;
                Game.Upgrades["Kitten analysts"].bought = 1;
                Game.Upgrades["Kitten executives"].bought = 1;
                Game.Upgrades["Kitten admins"].bought = 1;
                Game.Upgrades["Kitten strategists"].bought = 1;
            };
            if (Game.Has('Sors, immanis')) {
                Game.Upgrades["Fortune #001"].bought = 1;
                Game.Upgrades["Fortune #002"].bought = 1;
                Game.Upgrades["Fortune #003"].bought = 1;
                Game.Upgrades["Fortune #004"].bought = 1;
                Game.Upgrades["Fortune #005"].bought = 1;
                Game.Upgrades["Fortune #006"].bought = 1;
                Game.Upgrades["Fortune #007"].bought = 1;
                Game.Upgrades["Fortune #008"].bought = 1;
                Game.Upgrades["Fortune #009"].bought = 1;
                Game.Upgrades["Fortune #010"].bought = 1;
                Game.Upgrades["Fortune #011"].bought = 1;
                Game.Upgrades["Fortune #012"].bought = 1;
                Game.Upgrades["Fortune #013"].bought = 1;
                Game.Upgrades["Fortune #014"].bought = 1;
                Game.Upgrades["Fortune #015"].bought = 1;
                Game.Upgrades["Fortune #016"].bought = 1;
                Game.Upgrades["Fortune #017"].bought = 1;
                Game.Upgrades["Fortune #018"].bought = 1;
                Game.Upgrades["Fortune #019"].bought = 1;
                Game.Upgrades["Fortune #020"].bought = 1;
                Game.Upgrades["Fortune #100"].bought = 1;
                Game.Upgrades["Fortune #101"].bought = 1;
                Game.Upgrades["Fortune #102"].bought = 1;
                Game.Upgrades["Fortune #103"].bought = 1;
                Game.Upgrades["Fortune #104"].bought = 1;
            };
        }
    });

    Game.registerHook('check', function(cps) {
        let mult = Game.globalCpsMult;
        if (Game.ascensionMode != 1) {
            if (Game.Has('Divine gains')) {
                Game.CalculateGains();
                 mult += Game.heavenlyChips;
                if (Game.Has('Divine buildings')) {
                    mult += Game.BuildingsOwned;
                    if (Game.Has('Divine unascended gains')) {
                        mult += Game.ascendMeterLevel;
                        if (Game.Has('Divine lumps')) {
                            mult += Game.lumps;
                        }
                    }
                }
            }
        }
    });


//CCSE Check
  if (CCSE.ConfirmGameVersion(EMHU.name, EMHU.version, EMHU.GameVersion)) Game.registerMod(EMHU.name, EMHU);
  }

  if (!EMHU.isLoaded) {
      if (CCSE && CCSE.isLoaded) {
          EMHU.launch();
      } else {
          if (!CCSE) var CCSE = {};
          if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
          CCSE.postLoadHooks.push(EMHU.launch);
      }
  }
