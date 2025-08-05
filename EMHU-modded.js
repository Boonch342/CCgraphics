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
const ICONS = "https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/refs/heads/main/custIconsMHUU.png"

//Divine Upgrades
        CCSE.NewHeavenlyUpgrade('Divine savings', "Add to your bank all your unspent heavenly chips<q>They won\'t be spent<br>don\'t worry</q>", 7777777777, [20, 7], -725, 400, ['Decisive fate']);
        CCSE.NewHeavenlyUpgrade('Divine gains', "Each unspent heavenly chip will give you a <b>+1% to your CpS</b><q>That\'s a boost</q>", 7777777777777, [28, 12], -625, 604, ['Divine savings', 'Divine bakeries']);
        CCSE.NewHeavenlyUpgrade('Divine buildings', "Get <b>+1% to your CpS</b> for each building owned<q>the more the merrier</q>", 88888888888888, [33, 12], -736, 718, ['Divine gains']);
        CCSE.NewHeavenlyUpgrade('Divine unascended gains', "Get <b>+1% to your CpS</b> for each prestige level in the legacy meter<q>It just speeds up</q>", 999999999999999, [25, 7], -729, 865, ['Divine buildings']);
        CCSE.NewHeavenlyUpgrade('Divine lumps', "Gain an additional <b>+1% to your CpS</b> for each sugar lump you have.<q>Yes. It does stack with the default upgrade.</q>", 9999999999999999, [21, 17], -793, 983, ['Divine unascended gains']);


//Season Upgrades
        CCSE.NewHeavenlyUpgrade('Santa\'s Heavenly Legacy', "Final Claus will accompany you on ascension<q>You have earned my trust</q>", 142328760634, [19, 10], -517, -330, ['Starsnow']);
        CCSE.NewHeavenlyUpgrade('Rudolph\'s Recipe', "You start with all 7 Reindeer Cookies.<q>Wait... Reindeer can bake???</q>", 142328760634, [18, 4], -429, -259, ['Starsnow']);
        CCSE.NewHeavenlyUpgrade('Silly Wabbit', "You start with all 20 eggs. <q>Guess he's here year round.</q>", 142328760634, [2, 1, ICONS], -877, 34, ['Starspawn']);
        CCSE.NewHeavenlyUpgrade('Horror Story', "You start with all 7 Halloween Cookies. <q>Spooky!</q>", 142328760634, [2, 2, ICONS], -762, -347, ['Starterror']);
        CCSE.NewHeavenlyUpgrade('Lover\'s Delight', "You start with all 7 Valentines Cookies. <q>Just can't control your love for cookies?</q>", 142328760634, [34, 11], -637, -366, ['Starlove']);


//Ancient dragon
        Game.last.showIf = function() { return (Game.Achievements["Here be dragon"].won == 1); };
        CCSE.NewHeavenlyUpgrade('Cookie Dragon Egg', "You start with your own dragon egg!<q>So you don't need to buy it everytime</q>", 7600000, [21, 12], -812, 538, ['Divine savings']);
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


//Kittens
        CCSE.NewHeavenlyUpgrade('Litter of kittens workforce', "Kittens persist through ascension<q>We're with you forever, sir</q>", 9000000000000, [26, 7], 600, -900, ['Kitten wages']);
        Game.last.showIf = function() { return (Game.Achievements["Kitten strategists"].won == 1); };
        

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

    /* - Re-added in MHU Remastered
    //Golden Summoner
            CCSE.NewHeavenlyUpgrade('Call on the luck', "Unlocks the golden cookie summoner", 2000000000000000, [23, 6], -867, 713, ['Divine unascended gains']);
            CCSE.NewUpgrade("Golden summoner", 'Summons an amount of golden cookies equal to your stored sugar lumps', 0, [23, 6]);
            Game.last.priceLumps = 1;
            Game.last.pool = 'toggle';
            Game.last.toggleInto = 0;
            Game.last.unlocked = 0;

            Game.registerHook('logic', function() {
                if (Game.Has('Call on the luck')) Game.Unlock('Golden summoner');
                let currentLumps = Game.lumps;
                let price;
                if (currentLumps == 0) { price = 1 } else { price = currentLumps };
                Game.Upgrades['Golden summoner'].priceLumps = price;
                let cookiePlSng = (currentLumps == 1) ? 'cookie' : 'cookies';
                Game.Upgrades['Golden summoner'].canBuyFunc = function() { return Game.lumps >= 1; };
                Game.Upgrades['Golden summoner'].clickFunction = Game.spendLump(price, 'Summon ' + currentLumps + ' golden ' + cookiePlSng,
                    function() {
                        Game.Upgrades['Golden summoner'].buy(1);
                        let notificationIcon;
                        let notificationDesc;
                        if (price >= 1 && price <= 5) {
                            notificationIcon = [10, 25];
                            notificationDesc = '<q>Not many, but still better than nothing</q>';
                        } else if (price >= 6 && price <= 10) {
                            notificationIcon = [10, 14];
                            notificationDesc = '<q>Those are a bunch of cookies right there<br>And a lot of lumps<br><br>But you can do better</q>';
                        } else if (price >= 11 && price <= 15) {
                            notificationIcon = [25, 12];
                            notificationDesc = '<q>We are spending amounts of lumps that shouldn\'t be possible</q>';
                        } else if (price >= 16 && price <= 20) {
                            notificationIcon = [22, 6];
                            notificationDesc = '<q>Seriously, this is getting out of hand</q>';
                        } else if (price >= 21) {
                            notificationIcon = [23, 6];
                            notificationDesc = '<q>Now it\'s time to stop</q>';
                        }

                        Game.Notify('Summoning <b>' + price + ' golden ' + cookiePlSng + '</b>', '<div style="text-align: center;font-weight: bold;color: #ffffff;"></div>', notificationIcon, 6, 1);
                        var note = Game.NotesById[Game.noteId - 1];
                        note.life = 600000;

                        for (var i = 0; i < price; i++) {
                            var newShimmer = new Game.shimmer("golden");
                            newShimmer.spawnLead = 1;
                            newShimmer.pop();
                            note.life = 600000;
                            note.desc = '<div style="text-align: center;font-weight: bold;color: #ffffff;">' + (i + 1) + '/' + price + ' cookies summoned' + notificationDesc + '</div>';
                            Game.UpdateNotes();
                        }
                      });
                    });
*/
