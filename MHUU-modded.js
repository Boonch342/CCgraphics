/* ###############
     DISCLAIMER
   ###############
  All of this SPECTACULAR work is NOT mine
  Credit goes to Gabe (also known as the person that put websites into Cookie Clicker) on Steam,
  who made all of this
  BECAUSE I am a picky person, I love taking these mods that people make and butchering them to remove the things I don't want to play with
  ie. Immolation
  I have even less coding knowledge than this person and all the stuff i've done has been minimal or just trial and error
  THAT BEING SAID: YAY, I AM FINALLY DONE WITH THIS MOD
  It has been maimed to my liking, so now I can play with it in peace
  Even though I do this for myself so nobody will probably ever read this,
  but I would like to just say THANK YOU to Gabe because, even though this is discontinued and it will eventually be remade ENTIRELY
  it was fun doing this! :)
  So without further ado, all further comments are not made by me (except one),
  and enjoy what remains of Gabe's original code
  -Boonch342
*/

//load the mod (I think, I have no idea how CCSE works)
if (MHUU === undefined ) var MHUU = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

MHUU.name = 'MHUU';
MHUU.version = '1';
MHUU.GameVersion = '2.052';
if (!Game.customBuildingPrice) Game.customBuildingPrice = [];
if (!Game.customUpgradePrice) Game.customUpgradePrice = [];


//debug time :D
//Game.Notify doesn't exist? I think I'll have to continue the rest.
//Game.Notify('MHUU is LOADED :D', 'MY CODE WORKS!!!', [25, 7], 6);
//figured out why, at 1:45 PM, day of Note59 or whatever. It's because this isn't when the game LAUNCHES.



const second = 1000; //listen these second, minute, hour, and percents are all taken directly from More Heavenly Upgrade Remastered's code (probably useful (sorry for steal))
const minute = second * 60;
const hour = minute * 60;

const pointOnePercent = 0.001;
const onePercent = 0.01;

//alright who cares at this point

const EMHUStarters = [ //This is because of EMHU... WHY ISN'T IT UPDATED TO HAVE CORTEX BAKERS AND YOU? This is a mild disappointment.
    //it only exists for moving all of these things, I might change them further?
];

const MHUUHeavenlyUpgrades = [ //This is just every HU, did some simple subtraction with the thingy below, and that's how many normal HUs (not NG+) exist!
    'Scientific recipie list',
    'Mystery egg',
    'Santa\'s ultimatum',
    'Haunted past',
    'Heartfelt gifts',
    'Job application',
    'Ungodly bait',
    'Rotten purification',
    'Ancient spice',
    'Cursed cookie',
    'Permanent upgrade slot VI',
    'Permanent upgrade slot VII',
    'Power clicks',
    'Unshackled cookie',
    'Unshackled upgrades',
    'Seasoned seasons',
];

const MHUUIU = [
]; // These are the immolation upgrades (HUs unlocked from Immolating), they have some use (I think it's currently just for seeing how much exist)

const HUsNoRemove = [
    'Lucky digit',
    'Lucky number',
    'Lucky payout',
    //'Lucky roulette', //removed as they do not exist
    //'Lucky gamble',
    //'Lucky!',
    //'Legacy', //removed because yes
    'Sound test',
    //'Season switcher', //removed because of new Heralds upgrade
    'Classic dairy selection',
    'Fanciful dairy selection',
    'Basic wallpaper assortment',
    'Distinguished wallpaper assortment',
    'Golden cookie alert sound',
    'Twin Gates of Transcendence', //Could you please keep capitalization the same between everything? please?
    'Angels',
    'Archangels',
    'Belphegor',
    'Mammon',
    'Wrapping paper',
    'Label printer',
    //'Permanent upgrade slot I', //removed because it's a bit too, strange to have kept, and too powerful
    //'Permanent upgrade slot II',
    'Dessert showcase', //do some modded ones, see if it works if you don't have the mod... IT WORK!
    'Warped cookies', //^ Perfect cookie selector. < Trigger finger challenge mod.
    'Redefine Luck', //MHUR
    'Actually, do tell me the odds', //Casino mod (gambling :D)


]; //Reason why this exists, is so that:
/*
Immolation and Heavenly baking are NOT removed upon immolating,
The three luckies are hard to get, so they should be kept
Customization things are also just, COSMETICS, so they should also be kept
Basic idling things because, well it's basic idling, you've gotten THIS far, why not!
Gifting because it shouldn't be locked behind any-thing at this rate.
Some modded things because, well they're modded things, some are customization, others are harder to get, etc...
So that's why this entire thing even exists, if it didn't exist, then :(
Also the above existing means MHUR's strange "Real Heavenly Chips" function had to be killed (it existing means you have negative chips because of my thing, that's why I had to kill it)
So that be it!
*/

const MHUUAchieves = [
];


setTimeout(function () {
    CCSE.NewBuff('Unascended baking',function(time, pow){
        return {
            name: 'Unascended baking',
            desc: 'Your cookies per click is '+ pow +' for ' + Game.sayTime(time * Game.fps, -1) + '!',
            icon: [6,0,Greg],
            time: time * Game.fps,
            add: true,
            power: pow
        };
    });
    
    MHUU.nerfedclicking = function(){
    if(Game.hasBuff('Unascended baking')){
        var buff = Game.buffs['Unascended baking'];
        Game.computedMouseCps = buff.power;
    }

    new Game.buffType('Golden multiplication',function(time,pow)
    {
        return {
            name:'Golden multiplication',
            desc:loc("Cookie production x%1 for %2!",[pow,Game.sayTime(time*Game.fps,-1)]),
            icon:[22,6],
            time:time*Game.fps,
            add:true,
            multCpS:pow,
            aura:1
        };
    });

    new Game.buffType('Wrathly division',function(time,pow)
    {
        return {
            name:'Wrathly division',
            desc:loc("Cookie production x%1 for %2!",[pow,Game.sayTime(time*Game.fps,-1)]),
            icon:[1,8,Greg],
            time:time*Game.fps,
            add:true,
            multCpS:pow,
            aura:2
        };
    });

}

/*############################################################
    
    DONT MIND ME COPYING AND PASTING THE SHIMMER FUNCTION!!!

############################################################*/

//I just took all of it. Because it broke and we got some NaNs. Not sure WHY!!!!!!!
//:D
//Edit: Removed the all of it, did NOT need the all of it.

Game.shimmerTypes={ //Lets hope this horrible thing works!
    //in these, "me" refers to the shimmer itself, and "this" to the shimmer's type object
    'golden':{
        reset:function()
        {
            this.chain=0;
            this.totalFromChain=0;
            this.last='';
        },
        initFunc:function(me)
        {
            if (!this.spawned && me.force!='cookie storm drop' && Game.chimeType!=0 && Game.ascensionMode!=1) Game.playGoldenCookieChime();
            
            //set image
            var bgPic=Game.resPath+'img/goldCookie.png';
            var picX=0;var picY=0;
            
            
            if ((!me.forceObj || !me.forceObj.noWrath) && ((me.forceObj && me.forceObj.wrath) || (Game.elderWrath==1 && Math.random()<1/3) || (Game.elderWrath==2 && Math.random()<2/3) || (Game.elderWrath==3) || (Game.hasGod && Game.hasGod('scorn'))))
            {
                me.wrath=1;
                if (Game.season=='halloween') bgPic=Game.resPath+'img/spookyCookie.png';
                else bgPic=Game.resPath+'img/wrathCookie.png';
            }
            else
            {
                me.wrath=0;
            }
            
            if (Game.season=='valentines')
            {
                bgPic=Game.resPath+'img/hearts.png';
                picX=Math.floor(Math.random()*8);
            }
            else if (Game.season=='fools')
            {
                bgPic=Game.resPath+'img/contract.png';
                if (me.wrath) bgPic=Game.resPath+'img/wrathContract.png';
            }
            else if (Game.season=='easter')
            {
                bgPic=Game.resPath+'img/bunnies.png';
                picX=Math.floor(Math.random()*4);
                picY=0;
                if (me.wrath) picY=1;
            }
            
            me.x=Math.floor(Math.random()*Math.max(0,(Game.bounds.right-300)-Game.bounds.left-128)+Game.bounds.left+64)-64;
            me.y=Math.floor(Math.random()*Math.max(0,Game.bounds.bottom-Game.bounds.top-128)+Game.bounds.top+64)-64;
            me.l.style.left=me.x+'px';
            me.l.style.top=me.y+'px';
            me.l.style.width='96px';
            me.l.style.height='96px';
            me.l.style.backgroundImage='url('+bgPic+')';
            me.l.style.backgroundPosition=(-picX*96)+'px '+(-picY*96)+'px';
            me.l.style.opacity='0';
            me.l.style.display='block';
            me.l.setAttribute('alt',loc(me.wrath?"Wrath cookie":"Golden cookie"));
            
            me.life=1;//the cookie's current progression through its lifespan (in frames)
            me.dur=13;//duration; the cookie's lifespan in seconds before it despawns

            console.log(me.life,me.dur)
            
            var dur=13;
            if (Game.Has('Lucky day')) dur*=2;
            //console.log(me.life,me.dur,dur, "LUCKY DAY")
            if (Game.Has('Serendipity')) dur*=2;
            //console.log(me.life,me.dur,dur, "SERENDIPITY")
            if (Game.Has('Decisive fate')) dur*=1.05;
            //console.log(me.life,me.dur,dur, "DECISIVE FATE")
            if (Game.Has('Lucky digit')) dur*=1.01;
            //console.log(me.life,me.dur,dur, "LUCKY DIGIT")
            if (Game.Has('Lucky number')) dur*=1.01;
            //console.log(me.life,me.dur,dur, "LUCKY NUMBER")
            if (Game.Has('Lucky payout')) dur*=1.01;
            //console.log(me.life,me.dur,dur, "LUCKY PAYOUT")

            if (Game.Has('Golden modification')) dur*=4; //It shall last 4x longer. It's on screen for longer!!! :D
            //onsole.log(me.life,me.dur,dur, "GOLD MOD")
                
            if (!me.wrath) dur*=Game.eff('goldenCookieDur');
            else dur*=Game.eff('wrathCookieDur');
            //console.log(me.life,me.dur,dur, "GOLD/WRATH EFFS")
            dur*=Math.pow(0.95,Game.shimmerTypes['golden'].n-1);//5% shorter for every other golden cookie on the screen
            //console.log(me.life,me.dur,dur, "SHORTENING")//RIGHT HERE!!!!
            if (this.chain>0) dur=Math.max(2,10/this.chain);//this is hilarious
            //console.log(me.life,me.dur,dur, "Actually very funny")
            me.dur=dur;
            //console.log(me.life,me.dur,dur, "OH NO THEY'RE SETTING IT HERE!!!!")
            me.life=Math.ceil(Game.fps*me.dur);
            me.sizeMult=1;
            //console.log(me.life,me.dur,dur, "Something probably broke by now!")

            if (me.dur == NaN || me.dur == undefined) {
                me.dur = 13
                console.log("OH NO EVERYTHING BROKE")
            }
            if (me.life == NaN || me.life == undefined) {
                me.life = 1
                console.log("OH NO EVERYTHING ALSO BROKE")
            }

            console.log(me.life,me.dur,dur)
        },
        updateFunc:function(me) //so why is me.life and me.dur NaN. //Nevermind, it's the above one. That's where the error be.
        {

            var curve=1-Math.pow((me.life/(Game.fps*me.dur))*2-1,4);
            me.l.style.opacity=curve;
            //this line makes each golden cookie pulse in a unique way
            if (Game.prefs.fancy) me.l.style.transform='rotate('+(Math.sin(me.id*0.69)*24+Math.sin(Game.T*(0.35+Math.sin(me.id*0.97)*0.15)+me.id/*+Math.sin(Game.T*0.07)*2+2*/)*(3+Math.sin(me.id*0.36)*2))+'deg) scale('+(me.sizeMult*(1+Math.sin(me.id*0.53)*0.2)*curve*(1+(0.06+Math.sin(me.id*0.41)*0.05)*(Math.sin(Game.T*(0.25+Math.sin(me.id*0.73)*0.15)+me.id))))+')';
            me.life--;
            if (me.life<=0) {this.missFunc(me);me.die();}
            //console.log(me.life,me.dur,me.sizeMult)
        },
        popFunc:function(me)
        {
            //get achievs and stats
            if (me.spawnLead)
            {
                Game.goldenClicks++;
                Game.goldenClicksLocal++;
                
                if (Game.goldenClicks>=1) Game.Win('Golden cookie');
                if (Game.goldenClicks>=7) Game.Win('Lucky cookie');
                if (Game.goldenClicks>=27) Game.Win('A stroke of luck');
                if (Game.goldenClicks>=77) Game.Win('Fortune');
                if (Game.goldenClicks>=777) Game.Win('Leprechaun');
                if (Game.goldenClicks>=7777) Game.Win('Black cat\'s paw');
                if (Game.goldenClicks>=27777) Game.Win('Seven horseshoes');
                
                if (Game.goldenClicks>=7) Game.Unlock('Lucky day');
                if (Game.goldenClicks>=27) Game.Unlock('Serendipity');
                if (Game.goldenClicks>=77) Game.Unlock('Get lucky');
                
                if ((me.life/Game.fps)>(me.dur-1)) Game.Win('Early bird');
                if (me.life<Game.fps) Game.Win('Fading luck');
                
                if (me.wrath) Game.Win('Wrath cookie');
            }
            
            if (Game.forceUnslotGod)
            {
                if (Game.forceUnslotGod('asceticism')) Game.useSwap(1000000); //dear god why does this use 1 million swaps? I guess just to make sure.
                //But couldn't you just set the number of swaps to 0? Eh, just me (MHUU dev (the only one)) wondering why this is why it is.
            }
            
            //select an effect
            var list=[];
            if (me.wrath>0) list.push('clot','multiply cookies','ruin cookies');
            else list.push('frenzy','multiply cookies');
            if (me.wrath>0 && Game.hasGod && Game.hasGod('scorn')) list.push('clot','ruin cookies','clot','ruin cookies');
            if (me.wrath>0 && Math.random()<0.3) list.push('blood frenzy','chain cookie','cookie storm');
            else if (Math.random()<0.03 && Game.cookiesEarned>=100000) list.push('chain cookie','cookie storm');
            if (Math.random()<0.05 && Game.season=='fools') list.push('everything must go');
            if (Math.random()<0.1 && (Math.random()<0.05 || !Game.hasBuff('Dragonflight'))) list.push('click frenzy');
            if (me.wrath && Math.random()<0.1) list.push('cursed finger');

            //######################################## WHAT ACTUALLY MATTERS HERE!!!! Aka. Golden Modifications or Golden Mods (either or works!)
            if (Game.Has("Golden modification")) {
                list.push('morebuildings')
                if (Math.random()<0.13 && this.last != 'duplication') list.push('duplication')
                if (Math.random()<0.35) list.push('gambling') //Don't gamble...
                if (me.wrath)
                {
                list.push('Wmultiplier')
                } else 
                {
                list.push('multiplier')
                }
                list.push('rebirth')
                list.push('')

            };

            if (Game.BuildingsOwned>=10 && Math.random()<0.25) list.push('building special');
            
            if (Game.canLumps() && Math.random()<0.0005) list.push('free sugar lump');
            
            if ((me.wrath==0 && Math.random()<0.15) || Math.random()<0.05)
            {
                //if (Game.hasAura('Reaper of Fields')) list.push('dragon harvest');
                if (Math.random()<Game.auraMult('Reaper of Fields')) list.push('dragon harvest');
                //if (Game.hasAura('Dragonflight')) list.push('dragonflight');
                if (Math.random()<Game.auraMult('Dragonflight')) list.push('dragonflight');
            }
            
            if (this.last!='' && Math.random()<0.8 && list.indexOf(this.last)!=-1) list.splice(list.indexOf(this.last),1);//80% chance to force a different one
            if (Math.random()<0.0001) list.push('blab');
            var choice=choose(list);
            
            if (this.chain>0) choice='chain cookie';
            if (me.force!='') {this.chain=0;choice=me.force;me.force='';}
            if (choice!='chain cookie') this.chain=0;
            
            this.last=choice;
            
            //create buff for effect
            //buff duration multiplier
            var effectDurMod=1;
            var MHUUseffectDurMod=0; //I am OH SO sorry for constructing this behemoth of an abomination. I'm oh so sorry everyone actually good at coding that has to see this D:
            if (Game.Has('Get lucky')) effectDurMod*=2;
            if (Game.Has('Lasting fortune')) effectDurMod*=1.1;
            if (Game.Has('Lucky digit')) effectDurMod*=1.01;
            if (Game.Has('Lucky number')) effectDurMod*=1.01;
            if (Game.Has('Green yeast digestives')) effectDurMod*=1.01;
            if (Game.Has('Lucky payout')) effectDurMod*=1.01;
            //if (Game.hasAura('Epoch Manipulator')) effectDurMod*=1.05;
            effectDurMod*=1+Game.auraMult('Epoch Manipulator')*0.05;
            
            if (Game.Has('Time warp')) { //I'm OH so sorry for this abomination PLEASE FORGIVE ME
                let HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA = 0;

                HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA = Math.floor(Game.Objects["Time machine"].amount / 75)
                if (HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA > 55) HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA = 55

                MHUUseffectDurMod+=HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA
                console.log(MHUUseffectDurMod)
            }

            if (!me.wrath) effectDurMod*=Game.eff('goldenCookieEffDur');
            else effectDurMod*=Game.eff('wrathCookieEffDur');
            
            if (Game.hasGod)
            {
                var godLvl=Game.hasGod('decadence');
                if (godLvl==1) effectDurMod*=1.07;
                else if (godLvl==2) effectDurMod*=1.05;
                else if (godLvl==3) effectDurMod*=1.02;
            }
            
            //effect multiplier (from lucky etc)
            var mult=1;
            //if (me.wrath>0 && Game.hasAura('Unholy Dominion')) mult*=1.1;
            //else if (me.wrath==0 && Game.hasAura('Ancestral Metamorphosis')) mult*=1.1;
            if (me.wrath>0) mult*=1+Game.auraMult('Unholy Dominion')*0.1;
            else if (me.wrath==0) mult*=1+Game.auraMult('Ancestral Metamorphosis')*0.1;
            if (Game.Has('Green yeast digestives')) mult*=1.01;
            if (Game.Has('Dragon fang')) mult*=1.03;
            if (!me.wrath) mult*=Game.eff('goldenCookieGain');
            else mult*=Game.eff('wrathCookieGain');
            
            var popup='';
            var buff=0;
            
            console.log(mult,me.wrath,MHUUseffectDurMod,effectDurMod,me.force)
            console.log(Game.shimmers[0].life,Game.shimmers[0].dur)

            if (choice == 'gambling') 
            {
                var Gambling = Math.ceil(Math.random() * 10000);
                var OhNO = Math.ceil(Math.random() * 100);
                
                if (OhNO <= 25 || (OhNO <= 35 && me.wrath)) 
                {
                    Gambling = Math.ceil(Math.random() * -100);
                }
                
                var moni = mult * Math.min((Game.cookies * 0.015) * Gambling, (Game.cookiesPs * Gambling)) + 500; //LET'S GO GAMBLING
            
                if (moni < 1) 
                {
                    moni *= -1;
                    Game.Spend(moni);
                    popup = loc("Aww Dangit!") + '<br><small>' + loc("Lost "+ Beautify(moni) +" cookies!") + '</small>';
                } 
                else 
                {
                    Game.Earn(moni);
                    popup = loc("Jackpot!") + '<br><small>' + loc("Gained "+ Beautify(moni) +" cookies!") + '</small>';
                }
        
            }
            if (choice=='morebuildings')
            {
                var list=[];
                for (var i in Game.Objects)
                {
                    if (Game.Objects[i].amount<=Math.ceil(Game.BuildingsOwned/30)&&Game.Objects[i].amount>=10) {list.push(Game.Objects[i].id)}
                    if (Math.ceil(Math.random() * 10) < 3 && Game.Objects[i].amount >= 1) {list.push(Game.Objects[i].id)}
                }
                if (list.length==0) {choice='building special';} //default to building special, maybe they have a proper list...
                else
                {
                    var obj=choose(list)
                    if (me.wrath && Math.random()<0.3)
                    {
                    var amount = Math.ceil(Math.random() * Game.ObjectsById[obj].amount)
                    console.log(amount,Game.ObjectsById[obj].dname,list)
                        if (amount > 1) {
                        popup=loc("Wrathly Deconstruction!")+'<br><small>'+loc("Gained "+Beautify(amount)+" "+Game.ObjectsById[obj].bplural+"!")+'</small>';
                        } else {
                        popup=loc("Wrathly Deconstruction!")+'<br><small>'+loc("Gained "+Beautify(amount)+" "+Game.ObjectsById[obj].bsingle+"!")+'</small>';
                        }
                    Game.ObjectsById[obj].sacrifice(amount)
                    } else 
                    {
                    var amount = Math.ceil(Math.random() * Game.ObjectsById[obj].amount)
                    console.log(amount,Game.ObjectsById[obj].dname,list)
                        if (amount > 1) {
                        popup=loc("Golden Construction!")+'<br><small>'+loc("Gained "+Beautify(amount)+" "+Game.ObjectsById[obj].bplural+"!")+'</small>';
                        } else {
                        popup=loc("Golden Construction!")+'<br><small>'+loc("Gained "+Beautify(amount)+" "+Game.ObjectsById[obj].bsingle+"!")+'</small>';
                        }
                    Game.ObjectsById[obj].getFree(amount)
                    }
                }
                console.log(popup)
            }

            if (choice=='building special')
            {
                var time=Math.ceil(30*effectDurMod);
                var list=[];
                for (var i in Game.Objects)
                {
                    if (Game.Objects[i].amount>=10) list.push(Game.Objects[i].id);
                }
                if (list.length==0) {choice='frenzy';}//default to frenzy if no proper building
                else
                {
                    var obj=choose(list);
                    var pow=Game.ObjectsById[obj].amount/10+1;
                    if (me.wrath && Math.random()<0.3)
                    {
                        buff=Game.gainBuff('building debuff',time,pow,obj);
                    }
                    else
                    {
                        buff=Game.gainBuff('building buff',time,pow,obj);
                    }
                }
            }

            if (choice == 'duplication') {
                if (me.wrath) {
                    var helpmeplease = Math.ceil(Math.random() * 10);
                    if (helpmeplease > 3) {
                        popup = loc("Inverted Duplication!<br><small>2 golden cookies!</small>");
                        var newShimmer = new Game.shimmer('golden', { noWrath: true }, 1);
                        newShimmer.spawnLead = 1;
                        var newShimmer = new Game.shimmer('golden', { noWrath: true }, 1);
                        newShimmer.spawnLead = 1;
                    } else {
                        popup = loc("Duplication!<br><small>2 more wrath cookies!</small>");
                        var newShimmer = new Game.shimmer('golden', { wrath: true }, 1);
                        newShimmer.spawnLead = 1;
                        var newShimmer = new Game.shimmer('golden', { wrath: true }, 1);
                        newShimmer.spawnLead = 1;
                    }
                } else {
                    var helpmeplease = Math.ceil(Math.random() * 10);
                    if (helpmeplease > 3) {
                        popup = loc("Duplication!<br><small>2 more golden cookies!</small>");
                        var newShimmer = new Game.shimmer('golden', { noWrath: true }, 1);
                        newShimmer.spawnLead = 1;
                        var newShimmer = new Game.shimmer('golden', { noWrath: true }, 1);
                        newShimmer.spawnLead = 1;
                    } else {
                        popup = loc("Inverted Duplication!<br><small>2 wrath cookies!</small>");
                        var newShimmer = new Game.shimmer('golden', { wrath: true }, 1);
                        newShimmer.spawnLead = 1;
                        var newShimmer = new Game.shimmer('golden', { wrath: true }, 1);
                        newShimmer.spawnLead = 1;
                    }
                }
            }
            if (choice=='free sugar lump')
            {
                Game.gainLumps(1);
                popup=loc("Sweet!<br><small>Found 1 sugar lump!</small>");
            }
            else if (choice=='frenzy')
            {
                buff=Game.gainBuff('frenzy',Math.ceil((77*effectDurMod)+MHUUseffectDurMod),7);
            }
            else if (choice=='dragon harvest')
            {
                buff=Game.gainBuff('dragon harvest',Math.ceil((60*effectDurMod)+MHUUseffectDurMod),15);
            }
            else if (choice=='everything must go')
            {
                buff=Game.gainBuff('everything must go',Math.ceil((8*effectDurMod)+MHUUseffectDurMod),5);
            }
            else if (choice=='multiply cookies')
            {
                var moni=mult*Math.min(Game.cookies*0.15,Game.cookiesPs*60*15)+13;//add 15% to cookies owned (+13), or 15 minutes of cookie production - whichever is lowest
                Game.Earn(moni);
                popup=loc("Lucky!")+'<br><small>'+loc("+%1!",loc("%1 cookie",LBeautify(moni)))+'</small>';
            }
            else if (choice=='ruin cookies')
            {
                var moni=Math.min(Game.cookies*0.05,Game.cookiesPs*60*10)+13;//lose 5% of cookies owned (-13), or 10 minutes of cookie production - whichever is lowest
                moni=Math.min(Game.cookies,moni);
                Game.Spend(moni);
                popup=loc("Ruin!")+'<br><small>'+loc("Lost %1!",loc("%1 cookie",LBeautify(moni)))+'</small>';
            }
            else if (choice=='multiplier')
            {
                buff=Game.gainBuff('Golden multiplication',Math.ceil((277*effectDurMod)+MHUUseffectDurMod),2)
            }
            else if (choice=='wmultiplier')
            {
                buff=Game.gainBuff('Wrathly division',Math.ceil((166*effectDurMod)+MHUUseffectDurMod),0.8)
            }
            else if (choice=='blood frenzy')
            {
                buff=Game.gainBuff('blood frenzy',Math.ceil((6*effectDurMod)+MHUUseffectDurMod),666);
            }
            else if (choice=='clot')
            {
                buff=Game.gainBuff('clot',Math.ceil((66*effectDurMod)+MHUUseffectDurMod),0.5);
            }
            else if (choice=='cursed finger')
            {
                buff=Game.gainBuff('cursed finger',Math.ceil((10*effectDurMod)+MHUUseffectDurMod),Game.cookiesPs*Math.ceil((10*effectDurMod)+MHUUseffectDurMod));
            }
            else if (choice=='click frenzy')
            {
                buff=Game.gainBuff('click frenzy',Math.ceil((13*effectDurMod)+MHUUseffectDurMod),777);
            }
            else if (choice=='dragonflight')
            {
                buff=Game.gainBuff('dragonflight',Math.ceil((10*effectDurMod)+MHUUseffectDurMod),1111);
                if (Math.random()<0.8) Game.killBuff('Click frenzy');
            }
            else if (choice=='chain cookie')
            {
                //fix by Icehawk78
                if (this.chain==0) this.totalFromChain=0;
                this.chain++;
                var digit=me.wrath?6:7;
                if (this.chain==1) this.chain+=Math.max(0,Math.ceil(Math.log(Game.cookies)/Math.LN10)-10);
                
                var maxPayout=Math.min(Game.cookiesPs*60*60*6,Game.cookies*0.5)*mult;
                var moni=Math.max(digit,Math.min(Math.floor(1/9*Math.pow(10,this.chain)*digit*mult),maxPayout));
                var nextMoni=Math.max(digit,Math.min(Math.floor(1/9*Math.pow(10,this.chain+1)*digit*mult),maxPayout));
                this.totalFromChain+=moni;

                //break the chain if we're above 5 digits AND it's more than 50% of our bank, it grants more than 6 hours of our CpS, or just a 1% chance each digit (update : removed digit limit)
                if (Math.random()<0.01 || nextMoni>=maxPayout)
                {
                    this.chain=0;
                    popup=loc("Cookie chain")+'<br><small>'+loc("+%1!",loc("%1 cookie",LBeautify(moni)))+'<br>'+loc("Cookie chain over. You made %1.",loc("%1 cookie",LBeautify(this.totalFromChain)))+'</small>';
                }
                else
                {
                    popup=loc("Cookie chain")+'<br><small>'+loc("+%1!",loc("%1 cookie",LBeautify(moni)))+'</small>';
                }
                Game.Earn(moni);
            }
            else if (choice=='cookie storm')
            {
                buff=Game.gainBuff('cookie storm',Math.ceil((7*effectDurMod)+MHUUseffectDurMod),7);
            }
            else if (choice=='cookie storm drop')
            {
                var moni=Math.max(mult*(Game.cookiesPs*60*Math.floor(Math.random()*7+1)),Math.floor(Math.random()*7+1));//either 1-7 cookies or 1-7 minutes of cookie production, whichever is highest
                Game.Earn(moni);
                popup='<div style="font-size:75%;">'+loc("+%1!",loc('%1 cookie',LBeautify(moni)))+'</div>';
            }
            else if (choice=='rebirth')
            {
                var moni=mult+Math.floor(Game.prestige / 10000)+1;
                Game.heavenlyChips += moni;
                popup=loc("Rebirth!")+'<br><small>'+loc("+%1!",loc("%1 heavenly chips",LBeautify(moni)))+'</small>';
            }
            else if (choice=='blab')//sorry (it's really rare)
            {
                
                var str=EN?(choose([
                'Cookie crumbliness x3 for 60 seconds!',
                'Chocolatiness x7 for 77 seconds!',
                'Dough elasticity halved for 66 seconds!',
                'Golden cookie shininess doubled for 3 seconds!',
                'World economy halved for 30 seconds!',
                'Grandma kisses 23% stingier for 45 seconds!',
                'Thanks for clicking!',
                'Fooled you! This one was just a test.',
                'Golden cookies clicked +1!',
                'Your click has been registered. Thank you for your cooperation.',
                'Thanks! That hit the spot!',
                'Thank you. A team has been dispatched.',
                'They know.',
                'Oops. This was just a chocolate cookie with shiny aluminium foil.',
                'Eschaton immanentized!',
                'Oh, that tickled!',
                'Again.',
                'You\'ve made a grave mistake.',
                'Chocolate chips reshuffled!',
                'Randomized chance card outcome!',
                'Mouse acceleration +0.03%!',
                'Ascension bonuses x5,000 for 0.1 seconds!',
                'Gained 1 extra!',
                'Sorry, better luck next time!',
                'I felt that.',
                'Nice try, but no.',
                'Wait, sorry, I wasn\'t ready yet.',
                'Yippee!',
                'Bones removed.',
                'Organs added.',
                'Did you just click that?',
                'Huh? Oh, there was nothing there.',
                'You saw nothing.',
                'It seems you hallucinated that golden cookie.',
                'This golden cookie was a complete fabrication.',
                'In theory there\'s no wrong way to click a golden cookie, but you just did that, somehow.',
                'All cookies multiplied by 999!<br>All cookies divided by 999!',
                'Why?',
                
                
                ])):choose(loc("Cookie blab"));

                if (str == 'Oops sorry!!!') {
                    var notifN = (choose([
                    "Sorry!",
                    "Oops!",
                    choose(loc("Cookie blab")),
                    "Yikes!",
                    "Apologies!",
                    "Whoops!",
                    "Something went wrong...",
                    "Well, that just happened.",
                    "Just a slight mishap!",
                    "Thank you!",
                    
                    ]))
                    var notifD = (choose([
                    choose(loc("Cookie blab")),
                    "We seem to have misplaced your reward.",
                    "That didn't go as planned!",
                    "Please don't be mad.",

                    ]))
                    var notifQ = (choose([
                    choose(loc("Cookie blab")),
                    "No need to worry!",
                    "Carry on!",
                    "Nothing to see here!"
                    ]))
                    var notifIX = (Math.floor(Math.random() * 35))
                    var notifIY = (Math.floor(Math.random() * 36))
                    Game.Notify(notifN,notifD+"<q>"+notifQ+"</q>",[notifIX,notifIY], 55);
                }
                popup=str;
            }
            
            if (popup=='' && buff && buff.name && buff.desc) popup=buff.dname+'<div style="font-size:65%;">'+buff.desc+'</div>';
            if (popup!='') Game.Popup(popup,me.x+me.l.offsetWidth/2,me.y);
            
            Game.DropEgg(0.9);
            
            //sparkle and kill the shimmer
            Game.SparkleAt(me.x+48,me.y+48);
            if (choice=='cookie storm drop')
            {
                if (Game.prefs.cookiesound) PlaySound('snd/clickb'+Math.floor(Math.random()*7+1)+'.mp3',0.75);
                else PlaySound('snd/click'+Math.floor(Math.random()*7+1)+'.mp3',0.75);
            }
            else PlaySound('snd/shimmerClick.mp3');
            me.die();
        },missFunc:function(me)
				{
					if (this.chain>0 && this.totalFromChain>0)
					{
						Game.Popup(loc("Cookie chain broken.<br><small>You made %1.</small>",loc("%1 cookie",LBeautify(this.totalFromChain))),me.x+me.l.offsetWidth/2,me.y);
						this.chain=0;this.totalFromChain=0;
					}
					if (me.spawnLead) Game.missedGoldenClicks++;
				},
				spawnsOnTimer:true,
				spawnConditions:function()
				{
					if (!Game.Has('Golden switch [off]')) return true; else return false;
				},
				spawned:0,
				time:0,
				minTime:0,
				maxTime:0,
				getTimeMod:function(me,m)
				{
					if (Game.Has('Lucky day')) m/=2;
					if (Game.Has('Serendipity')) m/=2;
					if (Game.Has('Golden goose egg')) m*=0.95;
					if (Game.Has('Heavenly luck')) m*=0.95;
					if (Game.Has('Green yeast digestives')) m*=0.99;
					//if (Game.hasAura('Arcane Aura')) m*=0.95;
					m*=1-Game.auraMult('Arcane Aura')*0.05;
					if (Game.hasBuff('Sugar blessing')) m*=0.9;

                    if (Game.Has('Golden modification')) m/=6; //6x as fast

                    if (Game.Has('Time warp')) {
                        let HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA = 0;
                        let AnotherThing = 1;
                        HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA = Math.floor(Game.Objects["Time machine"].amount / 75)
                        if (HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA > 55) HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA = 55
                        AnotherThing -= (HeyThisIsAThingIhavemadeHeheHahaWhyDoIKeepMakingTheseLongerOhNONOTAGAINAAAAA / 100)
                        console.log(AnotherThing)
                        m*=AnotherThing
                        //Essentially, to break this thing down (not sure why I'm doing just this)
                        /*
                        let Hey... = 0; Sets the variable Hey... (I don't need to list it all) to 0.
                        let AnotherThing = 1; Sets that variable, to 1 (Oh also I'm not even sure if these are variables)
                        Hey... = Math.floor(Game.Objects["Time machine"].amount / 75)  This essentially, gets the amount of Time machines the player has, and divides it by 75, and then rounds that down.
                        if (Hey... > 55) Hey... = 55  if Hey... is above 55, it is set TO 55.
                        AnotherThing -= (Hey... / 100) Simply, Hey... / 100, if it's 55, it's now .55! Then AnotherThing becomes 0.45, making it spawn faster, not slower!
                        console.log(AnotherThing)  simply, within the console, puts the Another thing into it. Okay that was bad once again. Puts the AnotherThing into the console.
                        m*=AnotherThing  this simply makes spawning faster!!! :D
                        *///:D
                    }

					if (Game.season=='easter' && Game.Has('Starspawn')) m*=0.98;
					else if (Game.season=='halloween' && Game.Has('Starterror')) m*=0.98;
					else if (Game.season=='valentines' && Game.Has('Starlove')) m*=0.98;
					else if (Game.season=='fools' && Game.Has('Startrade')) m*=0.95;
					if (!me.wrath) m*=1/Game.eff('goldenCookieFreq');
					else m*=1/Game.eff('wrathCookieFreq');
					if (Game.hasGod)
					{
						var godLvl=Game.hasGod('industry');
						if (godLvl==1) m*=1.1;
						else if (godLvl==2) m*=1.06;
						else if (godLvl==3) m*=1.03;
						var godLvl=Game.hasGod('mother');
						if (godLvl==1) m*=1.15;
						else if (godLvl==2) m*=1.1;
						else if (godLvl==3) m*=1.05;
						
						if (Game.season!='')
						{
							var godLvl=Game.hasGod('seasons');
							if (Game.season!='fools')
							{
								if (godLvl==1) m*=0.97;
								else if (godLvl==2) m*=0.98;
								else if (godLvl==3) m*=0.99;
							}
							else
							{
								if (godLvl==1) m*=0.955;
								else if (godLvl==2) m*=0.97;
								else if (godLvl==3) m*=0.985;
							}
						}
					}
					if (this.chain>0) m=0.05;
					if (Game.Has('Gold hoard')) m=0.01;
					return Math.ceil(Game.fps*60*m);
				},
				getMinTime:function(me)
				{
					var m=5;
					return this.getTimeMod(me,m);
				},
				getMaxTime:function(me)
				{
					var m=15;
					return this.getTimeMod(me,m);
				},
				last:'',
			},
			'reindeer':{
				reset:function()
				{
				},
				initFunc:function(me)
				{
					if (!this.spawned && Game.chimeType!=0 && Game.ascensionMode!=1) PlaySound('snd/jingle.mp3');
					
					me.x=-128;
					me.y=Math.floor(Math.random()*Math.max(0,Game.bounds.bottom-Game.bounds.top-256)+Game.bounds.top+128)-128;
					//me.l.style.left=me.x+'px';
					//me.l.style.top=me.y+'px';
					me.l.style.width='167px';
					me.l.style.height='212px';
					me.l.style.backgroundImage='url('+Game.resPath+'img/frostedReindeer.png)';
					me.l.style.opacity='0';
					//me.l.style.transform='rotate('+(Math.random()*60-30)+'deg) scale('+(Math.random()*1+0.25)+')';
					me.l.style.display='block';
					me.l.setAttribute('alt',loc("Reindeer"));
					
					me.life=1;//the reindeer's current progression through its lifespan (in frames)
					me.dur=4;//duration; the cookie's lifespan in seconds before it despawns
					
					var dur=4;
					if (Game.Has('Weighted sleighs')) dur*=2;
					dur*=Game.eff('reindeerDur');
					me.dur=dur;
					me.life=Math.ceil(Game.fps*me.dur);
					me.sizeMult=1;
				},
				updateFunc:function(me)
				{
					var curve=1-Math.pow((me.life/(Game.fps*me.dur))*2-1,12);
					me.l.style.opacity=curve;
					me.l.style.transform='translate('+(me.x+(Game.bounds.right-Game.bounds.left)*(1-me.life/(Game.fps*me.dur)))+'px,'+(me.y-Math.abs(Math.sin(me.life*0.1))*128)+'px) rotate('+(Math.sin(me.life*0.2+0.3)*10)+'deg) scale('+(me.sizeMult*(1+Math.sin(me.id*0.53)*0.1))+')';
					me.life--;
					if (me.life<=0) {this.missFunc(me);me.die();}
				},
				popFunc:function(me)
				{
					//get achievs and stats
					if (me.spawnLead)
					{
						Game.reindeerClicked++;
					}
					
					var val=Game.cookiesPs*60;
					if (Game.hasBuff('Elder frenzy')) val*=0.5;//very sorry
					if (Game.hasBuff('Frenzy')) val*=0.75;//I sincerely apologize
					var moni=Math.max(25,val);//1 minute of cookie production, or 25 cookies - whichever is highest
					if (Game.Has('Ho ho ho-flavored frosting')) moni*=2;
					moni*=Game.eff('reindeerGain');
					Game.Earn(moni);
					if (Game.hasBuff('Elder frenzy')) Game.Win('Eldeer');
					
					var cookie='';
					var failRate=0.8;
					if (Game.HasAchiev('Let it snow')) failRate=0.6;
					failRate*=1/Game.dropRateMult();
					if (Game.Has('Starsnow')) failRate*=0.95;
					if (Game.hasGod)
					{
						var godLvl=Game.hasGod('seasons');
						if (godLvl==1) failRate*=0.9;
						else if (godLvl==2) failRate*=0.95;
						else if (godLvl==3) failRate*=0.97;
					}
					if (Math.random()>failRate)//christmas cookie drops
					{
						cookie=choose(['Christmas tree biscuits','Snowflake biscuits','Snowman biscuits','Holly biscuits','Candy cane biscuits','Bell biscuits','Present biscuits']);
						if (!Game.HasUnlocked(cookie) && !Game.Has(cookie))
						{
							Game.Unlock(cookie);
						}
						else cookie='';
					}
					
					var popup='';
					
					Game.Notify(loc("You found %1!",choose(loc("Reindeer names"))),loc("The reindeer gives you %1.",loc("%1 cookie",LBeautify(moni)))+(cookie==''?'':'<br>'+loc("You are also rewarded with %1!",Game.Upgrades[cookie].dname)),[12,9],6);
					popup='<div style="font-size:80%;">'+loc("+%1!",loc("%1 cookie",LBeautify(moni)))+'</div>';
					
					if (popup!='') Game.Popup(popup,Game.mouseX,Game.mouseY);
					
					//sparkle and kill the shimmer
					Game.SparkleAt(Game.mouseX,Game.mouseY);
					PlaySound('snd/jingleClick.mp3');
					me.die();
				},
				missFunc:function(me)
				{
				},
				spawnsOnTimer:true,
				spawnConditions:function()
				{
					if (Game.season=='christmas') return true; else return false;
				},
				spawned:0,
				time:0,
				minTime:0,
				maxTime:0,
				getTimeMod:function(me,m)
				{
					if (Game.Has('Reindeer baking grounds')) m/=2;
					if (Game.Has('Starsnow')) m*=0.95;
					if (Game.hasGod)
					{
						var godLvl=Game.hasGod('seasons');
						if (godLvl==1) m*=0.9;
						else if (godLvl==2) m*=0.95;
						else if (godLvl==3) m*=0.97;
					}
					m*=1/Game.eff('reindeerFreq');
					if (Game.Has('Reindeer season')) m=0.01;
					return Math.ceil(Game.fps*60*m);
				},
				getMinTime:function(me)
				{
					var m=3;
					return this.getTimeMod(me,m);
				},
				getMaxTime:function(me)
				{
					var m=6;
					return this.getTimeMod(me,m);
				},
			}
		};

        //Yet another copy and paste!!!! I despise this. But there's LITERALLY NO DOCUMENTATION NOR GUIDE...
        //So whatever works I guess!
        if (!EN)
            {
                //code-patching the CSS for localization feels like it should be against the law, and yet
                var css=document.createElement('style');
                css.type='text/css';
                css.innerHTML=
                    '#upgrades:before{content:\''+loc("Upgrades")+'\';}'+
                    '#toggleUpgrades:before{content:\''+loc("Switches")+'\';}'+
                    '#techUpgrades:before{content:\''+loc("Research")+'\';}'+
                    '#vaultUpgrades:before{content:\''+loc("Vault")+'\';}'+
                    '#products:before{content:\''+loc("Buildings")+'\';}'+
                '';
                document.head.appendChild(css);
            }

            Game.storeBuyAll=function()
            {
                if (!Game.Has('Inspired checklist')) return false;
                for (var i in Game.UpgradesInStore)
                {
                    var me=Game.UpgradesInStore[i];
                    if (!me.isVaulted() && me.pool!='toggle' && me.pool!='tech') me.buy(1);
                }
            }

            Game.RebuildUpgrades=function()//recalculate the upgrades you can buy
            {
                Game.upgradesToRebuild=0;
                var list=[];
                for (var i in Game.Upgrades)
                {
                    var me=Game.Upgrades[i];
                    if (!me.bought && me.pool!='debug' && me.pool!='prestige' && me.pool!='prestigeDecor' && (Game.ascensionMode!=1 || (!me.lasting && me.tier!='fortune')))
                    {
                        if (me.unlocked) list.push(me);
                    }
                    else if (me.displayFuncWhenOwned && me.bought) list.push(me);
                }
                var sortMap=function(a,b)
                {
                    var ap=a.pool=='toggle'?a.order:a.getPrice();
                    var bp=b.pool=='toggle'?b.order:b.getPrice();
                    if (ap>bp) return 1;
                    else if (ap<bp) return -1;
                    else return 0;
                }
                list.sort(sortMap);
                
                Game.UpgradesInStore=[];
                for (var i in list)
                {
                    Game.UpgradesInStore.push(list[i]);
                }
                var storeStr='';
                var toggleStr='';
                var techStr='';
                var vaultStr='';
                
                if (Game.Has('Inspired checklist'))
                {
                    storeStr+='<div id="storeBuyAll" class="storePre" '+Game.getTooltip(
                                    '<div style="padding:8px;min-width:250px;text-align:center;font-size:11px;" id="tooltipStorePre">'+loc("Will <b>instantly purchase</b> every upgrade you can afford, starting from the cheapest one.<br>Upgrades in the <b>vault</b> will not be auto-purchased.<br>You may place an upgrade into the vault by <b>Shift-clicking</b> on it.")+'</div>'
                                    ,'store')+
                        '>'+
                            '<div id="storeBuyAllButton" class="storePreButton" '+Game.clickStr+'="Game.storeBuyAll();">'+loc("Buy all upgrades")+'</div>'+
                        '</div>';
                    l('upgrades').classList.add('hasMenu');
                }
                else l('upgrades').classList.remove('hasMenu');
                
                for (var i in Game.UpgradesInStore)
                {
                    //if (!Game.UpgradesInStore[i]) break;
                    var me=Game.UpgradesInStore[i];
                    var str=Game.crate(me,'store','Game.UpgradesById['+me.id+'].click(event);','upgrade'+i);
                    
                    /*var str='<div class="crate upgrade" '+Game.getTooltip(
                    '<div style="min-width:200px;"><div style="float:right;"><span class="price">'+Beautify(Math.round(me.getPrice()))+'</span></div><small>'+(me.pool=='toggle'?'[Togglable]':'[Upgrade]')+'</small><div class="name">'+me.dname+'</div><div class="line"></div><div class="description">'+me.desc+'</div></div>'
                    ,'store')+' '+Game.clickStr+'="Game.UpgradesById['+me.id+'].buy();" id="upgrade'+i+'" style="'+writeIcon(me.icon)+'"></div>';*/
                    if (me.pool=='toggle') toggleStr+=str; else if (me.pool=='tech') techStr+=str; else
                    {
                        if (me.isVaulted() && Game.Has('Inspired checklist')) vaultStr+=str; else storeStr+=str;
                    }
                }
                
                l('upgrades').innerHTML=storeStr;
                l('toggleUpgrades').innerHTML=toggleStr;
                if (toggleStr=='') l('toggleUpgrades').style.display='none'; else l('toggleUpgrades').style.display='block';
                l('techUpgrades').innerHTML=techStr;
                if (techStr=='') l('techUpgrades').style.display='none'; else l('techUpgrades').style.display='block';
                l('vaultUpgrades').innerHTML=vaultStr;
                if (vaultStr=='') l('vaultUpgrades').style.display='none'; else l('vaultUpgrades').style.display='block';
            }
		
		Game.goldenCookieChoices=[
			"Frenzy","frenzy",
			"Lucky","multiply cookies",
			"Ruin","ruin cookies",
			"Elder frenzy","blood frenzy",
			"Clot","clot",
			"Click frenzy","click frenzy",
			"Cursed finger","cursed finger",
			"Cookie chain","chain cookie",
			"Cookie storm","cookie storm",
			"Building special","building special",
			"Dragon Harvest","dragon harvest",
			"Dragonflight","dragonflight",
			"Sweet","free sugar lump",
			"Blab","blab",
            "More buildings","morebuildings",
            "Golden Duplication",'duplication',
            "Golden Multiplication",'multiplier',
            "Wrathly Division",'wmultiplier'
		];
		Game.goldenCookieBuildingBuffs={
			'Cursor':['High-five','Slap to the face'],
			'Grandma':['Congregation','Senility'],
			'Farm':['Luxuriant harvest','Locusts'],
			'Mine':['Ore vein','Cave-in'],
			'Factory':['Oiled-up','Jammed machinery'],
			'Bank':['Juicy profits','Recession'],
			'Temple':['Fervent adoration','Crisis of faith'],
			'Wizard tower':['Manabloom','Magivores'],
			'Shipment':['Delicious lifeforms','Black holes'],
			'Alchemy lab':['Breakthrough','Lab disaster'],
			'Portal':['Righteous cataclysm','Dimensional calamity'],
			'Time machine':['Golden ages','Time jam'],
			'Antimatter condenser':['Extra cycles','Predictable tragedy'],
			'Prism':['Solar flare','Eclipse'],
			'Chancemaker':['Winning streak','Dry spell'],
			'Fractal engine':['Macrocosm','Microcosm'],
			'Javascript console':['Refactoring','Antipattern'],
			'Idleverse':['Cosmic nursery','Big crunch'],
			'Cortex baker':['Brainstorm','Brain freeze'],
			'You':['Deduplication','Clone strike'],
		};

        Game.shimmerTypes['golden'].n = 0; //As if I don't do it it breaks.... D:
        setTimeout(function(){
        Game.killShimmers()
        }, second)
}, second * 5)






const TotalMHUUU = MHUUHeavenlyUpgrades.length 

// variable thingies
//let shinywrinklyAdd = 0; //Shiny boi spawn %!
//let shinywrinklyPow = 0; //Shiny boi POWER
//let wrinklerPow = 0; //normal wrinkler power.
let researchspeedAdd = 0; //Research Speed. //not sure if this is even used anymore, but eh

let IsBaking = false // Is the player currently baking?
let HCA = 0; // Heavenly Cookie Gain
let HCB = 0; // Heavenly Chip Gain
let HeavenlyBakingTime = 0; // Time it takes before baking is finished (in seconds)
let HeavenlyBakingTimed = 0; // just slidin' this in here...
let HeavenlyBakingTiming = 0; // Same with this one...
let TotalHeavenlyCookies = 0; // It'll grow...
let TotalTimeSpentBaking = 0;
let TimesBaked = 0;
let HeavenlyChipsGainedFromBaking = 0;
let TotalHCsSpentBaking = 0;
let HighestTimeBaking = 0;
let ORDER = 600000.666 //Order for Achieves
let TotalMHUUUOwnedButNotActually = 0; //How many Heavenly Upgrades from MHUU you have (decreases after each achieve check).
let HasInstantaneousAscend = 0; //Unused now
let AAAAAAAA = 0; //these two seem unused... why are they here? Eh...
let AAAAAAA = 0; 
let HCBEE = 0; //Used for RANDOMNESS in HCB
let MAX = 1000000000
let MIN = 50
let AMIN = 250 //moved these up
let UnshackledC = []
let SentientBuff = 0;
let SentientBurnt = [];
let AscendedClick = false
let UnshackledU = [] // entirely redone, no longer infinite researching, it was a good idea, but could NEVER WORK, if someone can get that working, and it's true or near infinite, PLEASE TELL ME
let IsGoldenClicking = false //for automatic golden cookie clicking.
let REPLICATEDBUFF = 0
let IsONE = false // Various checks for the number of buildings you have.
let IsMANY = false
let IsFAMILY = false
let IsReplicated = false
let HAlchemyGain = 0 // For Heavenly Alchemy, which will probably have to get nerfed into the ground, but not too far, it's goal is to allow for easier baking and quicker progress.
let HAlchemyStored = 0
let HAlchemyUnstored = 0
let Gold = 0 // For the newer version of More idling (no longer free cursors)
let GoldPs = 0
let GoldEarned = 0
let TotalGoldEarned = 0
let prevHeralds = 0;
let Ihavenoideaatthispoint = 0; //please help me

//heavenly shop vals
let HeavenlyCPSMULT = 0
let HeavenlyCPSMULTBOUGHT = 1
let GoldenSummonBOUGHT = 1
let HeavenlyUnlimit = 0
let HeavenlyUnlimitBOUGHT = 1
let HeavenlyDISCOUNT = 1
let HeavenlyDISCOUNTBOUGHT = 1


let HeavenlyChoices = [
    {name:'CpS Multiplier', icon:[21,7]}, //0,1
    {name:'Discounts', icon:[28,26]}, //1,2
    {name:'Golden Summoner', icon:[23,6]}, //2,3
    {name:'Heavenly Cookies to Chips', icon:[10,35]}, //3,4
    {name:'Heavenly Cookies to Lumps', icon:[29,27]}, //4,5
    {name:'Baking unlimiter', icon:[16,7]}, //5,6




];

//HEAVENLY SHOP BUT ACTUALLY

//Basically just initialize each thing's (^) function.
function HeavenlyShop(id) {

    if (id == 1) {
        Game.heavenlyChips -= Math.ceil(350 * (HeavenlyCPSMULTBOUGHT * 1.01))
        HeavenlyCPSMULT += 0.001
        HeavenlyCPSMULTBOUGHT ++
        console.log(HeavenlyCPSMULT, HeavenlyCPSMULTBOUGHT)
    }
    
    if (id == 2) {
        if (HeavenlyDISCOUNT != 0.15) {
        Game.heavenlyCookies -= Math.ceil(500 * (HeavenlyDISCOUNTBOUGHT * 1.15))
        HeavenlyDISCOUNT -= 0.001
        HeavenlyDISCOUNT = parseFloat(HeavenlyDISCOUNT.toFixed(10));
        HeavenlyDISCOUNTBOUGHT ++
        console.log(HeavenlyDISCOUNT, HeavenlyDISCOUNTBOUGHT)
        // if (Game.ObjectsById.some(building => building.amount > 0)) {
        //     Game.BuildStore();
        //     } else {
        //         console.log("No buildings owned; skipping Game.BuildStore() to prevent crash.");
        //     }
        } else {
            Game.Notify("Cannot decrease further...", "For balance reasons, it will not decrease beyond 0.15<q>Nothing has been deducted</q>", [28,26], 15);
            // if (Game.ObjectsById.some(building => building.amount > 0)) {
            //     Game.BuildStore();
            //     } else {
            //         console.log("No buildings owned; skipping Game.BuildStore() to prevent crash.");
            //     }
        }
    }

    if (id == 3) {
        console.log(GoldenSummonBOUGHT)
        Game.heavenlyChips -= Math.ceil(500 * (GoldenSummonBOUGHT * 2))
        Game.heavenlyCookies -= Math.ceil(15 * (GoldenSummonBOUGHT * 5))
        GoldenSummonBOUGHT ++
        let newShimmer = new Game.shimmer('golden');
        newShimmer.spawnLead = 1;
        Game.Notify("Golden Summon!", "Summoned a golden cookie!", [23, 6], 15)
    }
    
    if (id == 4) {
        Game.heavenlyCookies -= 50
        Game.heavenlyChips += 500
        console.log(Game.heavenlyCookies, Game.heavenlyChips)
    }

    if (id == 5) {
        Game.heavenlyCookies -= 5000
        Game.lumps ++
        console.log(Game.heavenlyCookies, Game.lumps)
    }

    if (id == 6) {
        Game.heavenlyChips -= Math.ceil(850 * (HeavenlyUnlimitBOUGHT * 1.15))
        Game.heavenlyCookies -= Math.ceil(135 * (HeavenlyUnlimitBOUGHT * 1.05))
        HeavenlyUnlimit += 50000000
        HeavenlyUnlimitBOUGHT ++
        console.log(HeavenlyUnlimit, HeavenlyUnlimitBOUGHT)
        Game.UpdateMenu()
    }

    }


function GetREPLICATEDBUFF() {
REPLICATEDBUFF = (1 + (Game.BuildingsOwned * 0.001))
console.log(REPLICATEDBUFF, Game.BuildingsOwned)
}


function GetHU(upgrade) {
    let DESC = Game.Upgrades[upgrade].ddesc
    let NAME = Game.Upgrades[upgrade].dname
    console.log("Desc.: " + DESC + " Name: " + NAME)
    let Ico = Game.Upgrades[upgrade].icon
    console.log("Icon: " + Ico)
    let me = Game.Upgrades[upgrade].posX
    let Me = Game.Upgrades[upgrade].posY
    console.log("Positions (x then y): " + me + ", " + Me + ", ")
    let AAAA = Game.Upgrades[upgrade].basePrice
    console.log("Price: " + AAAA)
    let BOB = Game.Upgrades[upgrade].canBuy()
    console.log("Can we buy it? " + BOB)
    let GREGZ = Game.Upgrades[upgrade].id
    let GREGS = Game.Upgrades[upgrade].order
    console.log("Id: " + GREGZ + " Order: " + GREGS)
} //So that I can more easily get the positions (and more) of HUs...
//might just make a mod that adds more functions like ^, for qol when making mods...

// Dear god this part of the code is an absolute mess. This is Spaghetti code, but at least it's baked well enough to function!
function bakeHeavenlyChips(direct,heavenlycookies,yes) {
    if (!direct && yes == 0 && !IsBaking) { //Slapping in the old Bake Heavenly Cookies prompt (the one from the 2014 beta), the reason why is: Why not. And it means I do less work, and get more!!!! :D
        //okay well it isn't the exact thing, I heavily modified it. Anyways, hope this works!
        Game.Prompt('<h3>Bake heavenly chips into heavenly cookies</h3>'+
            '<div class="icon" style="pointer-event:none;transform:scale(2);opacity:0.25;position:absolute;right:-8px;bottom:-8px;background-position:'+(-19*48)+'px '+(-7*48)+'px;"></div>'+
            '<div class="icon" style="pointer-event:none;transform:scale(2);opacity:0.25;position:absolute;left:-8px;top:-8px;background-position:'+(-20*48)+'px '+(-7*48)+'px;"></div>'+
            '<div class="block"><p>You may bake some of your Heavenly Chips into <b>Heavenly Cookies</b>.<br>Heavenly Cookies can be spent at the <b>Heavenly Shop</b>. The amount of chips you will <b>spend</b>, and <b>time</b> it will take, will both be displayed before you initiate baking.<br>The current max number of heavenly cookies you can bake at a time is: <b>' + Beautify(Math.floor(Math.sqrt(MAX * 10))) + '</b></p></div>'+
            '<div class="block" style="text-align:center;"><div style="font-weight:bold;margin-bottom:8px;">How many cookies will you bake?</div><input type="text" id="valuePrompt" style="text-align:center;width:50%;padding:16px 8px;"/></div>'
            ,[['Next','var n=parseInt(l(\'valuePrompt\').value.replace(/,/g,\'\'));Game.ClosePrompt(); bakeHeavenlyChips(0,n,1); console.log(n);'],'Close'],0,'widePrompt');
            l('valuePrompt').focus();
    } else if (!direct && yes == 1 && !IsBaking) {
        if (Beautify(heavenlycookies) == "0" || Beautify(heavenlycookies) == "NaN" || Beautify(heavenlycookies) == "undefined" || Beautify(heavenlycookies) == "Infinity") {
            Game.Notify("Sorry!", "Please input a valid number", [], 15)
            return; //if you don't want any heavenly cookies, then get out of here!
        }
        heavenlycookies = Math.max(heavenlycookies,0)

        Ihavenoideaatthispoint = heavenlycookies

        HC = Math.floor(Math.pow(heavenlycookies,2) / 10)

        if (HC > MAX) {
            HC = MAX
        }
        if (heavenlycookies > Math.floor(Math.sqrt(MAX * 10))) {
            heavenlycookies = Math.floor(Math.sqrt(MAX * 10))
        }
        if (heavenlycookies == 0 || heavenlycookies == NaN || heavenlycookies == undefined || heavenlycookies == Infinity) {
            return; //if you don't want any heavenly cookies, then get out of here!
        }
        if (Beautify(heavenlycookies) == "0" || Beautify(heavenlycookies) == "NaN" || Beautify(heavenlycookies) == "undefined" || Beautify(heavenlycookies) == "Infinity") {
            return; //if you don't want any heavenly cookies, then get out of here!
        }
        // Calculate Heavenly Chip gain
        HCB = Math.floor(Math.random() * (Math.sqrt(heavenlycookies) * 10)); // Keeping randomness but within a controlled range

        // Calculate baking time, scaling with the number of chips baked
        HeavenlyBakingTime = Math.ceil(Math.sqrt(HC) * 60); // Baking time in seconds (scales with sqrt of chips baked)

        if (Game.Has("Divine bakery")) HeavenlyBakingTime /= 2
        if (Game.Has("Divine factory")) HeavenlyBakingTime /= 4

        if (Game.Has('Sentient furnace')) {
            for (let i in Game.Upgrades) {
                let upgrade = Game.Upgrades[i];
                if (upgrade.pool == 'cookie' && upgrade.bought == 1 && !SentientBurnt.includes(upgrade.name)) {
                    SentientBuff += 0.01;
                    SentientBurnt.push(upgrade.name);
                }
            }
    
            let SentientEffect = 1 + SentientBuff
            SentientEffect = parseFloat(SentientEffect.toFixed(10));
            // Apply a logistic function for controlled diminishing returns
            // Ensure effect is capped appropriately
    
            SentientEffect = Math.min(SentientEffect, 2.5); // Hard cap at 2.5
    
            HeavenlyBakingTime /= SentientEffect // Apply the effect to reduce baking time
            console.log(SentientBuff, SentientEffect, SentientBurnt)
        }

        if (Beautify(heavenlycookies) == "0" || Beautify(heavenlycookies) == "NaN" || Beautify(heavenlycookies) == "undefined" || Beautify(heavenlycookies) == "Infinity") {
            Game.Notify("Sorry!", "Please input a valid number", [], 15)
            return; //if you don't want any heavenly cookies, then get out of here!
        }
        if (HC > Game.heavenlyChips) {
            Game.Notify("Cannot bake...", "You don't have enough Heavenly Chips in order to bake <b>" + Beautify(heavenlycookies) + "</b> Heavenly Cookies...<br>Need at least <b>" + Beautify(HC - Game.heavenlyChips) + "</b> more Heavenly Chips in order to bake.", [], 555)
            return;
        }

        Game.Prompt('<h3>Are you sure?</h3>'+
            '<div class="block"><p>You are going to bake: <b>' + Beautify(HC) + '</b> Heavenly Chips, into: <b>' + Beautify(heavenlycookies) + '</b> Heavenly Cookies.<br> It\'ll take: <b>' + Game.sayTime((HeavenlyBakingTime)*Game.fps,-1) + '</b> until it finishes baking.</p></div>'
            ,[['Bake','Game.ClosePrompt(); bakeHeavenlyChips(0,'+heavenlycookies+',2);'],'Close'],0);
    } else if ((direct || (yes == 2 && !direct)) && !IsBaking) {

    if (direct) {
        if (Beautify(heavenlycookies) == "0" || Beautify(heavenlycookies) == "NaN" || Beautify(heavenlycookies) == "undefined" || Beautify(heavenlycookies) == "Infinity") {
            Game.Notify("Sorry!", "Please input a valid number", [], 15)
            return; //if you don't want any heavenly cookies, then get out of here!
        }
        heavenlycookies = Math.max(heavenlycookies,0)

        Ihavenoideaatthispoint = heavenlycookies

        HC = Math.floor(Math.pow(heavenlycookies,2) / 10)


        if (Beautify(heavenlycookies) == "0" || Beautify(heavenlycookies) == "NaN" || Beautify(heavenlycookies) == "undefined" || Beautify(heavenlycookies) == "Infinity") {
            Game.Notify("Sorry!", "Please input a valid number", [], 15)
            return; //if you don't want any heavenly cookies, then get out of here!
        }
        if (HC > MAX) {
            HC = MAX
        }
        if (heavenlycookies > Math.floor(Math.sqrt(MAX * 10))) {
            heavenlycookies = Math.floor(Math.sqrt(MAX * 10))
        }

        if (Beautify(heavenlycookies) == "0" || Beautify(heavenlycookies) == "NaN" || Beautify(heavenlycookies) == "undefined" || Beautify(heavenlycookies) == "Infinity") {
            Game.Notify("Sorry!", "Please input a valid number", [], 15)
            return; //if you don't want any heavenly cookies, then get out of here!
        } //This is so horrible to read... I'm sorry for everyone looking at this horrendous code //nevermind! made this bit a bit less horrendous :D

        // Calculate Heavenly Chip gain
        HCB = Math.floor(Math.random() * (Math.sqrt(heavenlycookies) * 10)); // Keeping randomness but within a controlled range

        // Calculate baking time, scaling with the number of chips baked
        HeavenlyBakingTime = Math.ceil(Math.sqrt(HC) * 60); // Baking time in seconds (scales with sqrt of chips baked)

        if (Game.Has("Divine bakery")) HeavenlyBakingTime /= 2
        if (Game.Has("Divine factory")) HeavenlyBakingTime /= 4

        if (Game.Has('Sentient furnace')) {
            for (let i in Game.Upgrades) {
                let upgrade = Game.Upgrades[i];
                if (upgrade.pool == 'cookie' && upgrade.bought == 1 && !SentientBurnt.includes(upgrade.name)) {
                    SentientBuff += 0.01;
                    SentientBurnt.push(upgrade.name);
                }
            }
    
            let SentientEffect = 1 + SentientBuff
            SentientEffect = parseFloat(SentientEffect.toFixed(10));
            // Apply a logistic function for controlled diminishing returns
            // Ensure effect is capped appropriately
    
            SentientEffect = Math.min(SentientEffect, 2.5); // Hard cap at 2.5
    
            HeavenlyBakingTime /= SentientEffect // Apply the effect to reduce baking time
            console.log(SentientBuff, SentientEffect, SentientBurnt)
        }



    
        if (heavenlycookies < 50) {
            Game.Notify("Cannot bake...", "Need to bake at least <b>50</b> Heavenly Cookies.<q>Sorry...</q>", [3, 4, Greg], 1500);
            return;
        }
    }

    if (Beautify(heavenlycookies) == "0" || Beautify(heavenlycookies) == "NaN" || Beautify(heavenlycookies) == "undefined" || Beautify(heavenlycookies) == "Infinity") {
        Game.Notify("Sorry!", "Please input a valid number", [], 15)
        return; //if you don't want any heavenly cookies, then get out of here!
    }

    heavenlycookies = Math.max(Ihavenoideaatthispoint,0)
    console.log(Ihavenoideaatthispoint)
    
    if (HC > Game.heavenlyChips) {
        Game.Notify("Cannot bake...", "You don't have enough Heavenly Chips in order to bake <b>" + Beautify(heavenlycookies) + "</b> Heavenly Cookies...<br>Need at least <b>" + Beautify(HC - Game.heavenlyChips) + "</b> more Heavenly Chips in order to bake.", [], 555)
        return;
    }

    // Subtract the Heavenly Chips to be baked from the player's total
    Game.heavenlyChips -= HC;
    TotalHCsSpentBaking += HC
    Game.heavenlyChipsSpent += HC

    HeavenlyBakingTimed = HeavenlyBakingTime

    HCBEE = (Math.ceil(Math.random() * 10))

    if (HCBEE <= 7) { //7 in 10 chance (hopefully)
        HCB = 0 //sorry... Meant to break infinite loops of baking (so that you can't get infinite chips from the two HUs that affect Heavenly baking, also because y)
    }

    if (HCB >= Math.floor((HC/3) * 2)) {
        HCB = Math.floor((HC/3) * 2)
    }

    HCB = Math.floor(HCB)

    if (Game.Has('Divine bakery')) {
        HCB *= 2
    }

    if (Game.Has('Divine factory')) {
        HCB *= 4
    }

    // Notify player of the baking start
    Game.Notify("Heavenly Baking started", "Baking <b>" + Beautify(HC) + "</b> Heavenly Chips into <b>" + Beautify(heavenlycookies) + "</b> Heavenly Cookies. Will finish baking in <b>" + Game.sayTime((HeavenlyBakingTime)*Game.fps,-1) + "</b>...<q>Relax and wait...</q>", [3, 4, Greg], 1500);
    
    // Start the baking process
    bakingHeavenlyChips(HeavenlyBakingTime, heavenlycookies, HCB);
    console.log(HeavenlyBakingTime, heavenlycookies, HCB, Beautify(HC))
    IsBaking = true
    TimesBaked += 1
    } else {
        if (HC > Game.heavenlyChips) {
        Game.Notify("Sorry...", "Cannot bake as you don't have enough Heavenly Chips to bake.", [], 55)
        }
        if (IsBaking) {
        Game.Notify("Sorry...", "Cannot bake as Heavenly Cookies are already being baked. <br> You have <b>" +  Game.sayTime((HeavenlyBakingTiming)*Game.fps,-1) + "</b> left until your previous baking is done.", [], 555);
        }
    }
}


function bakingHeavenlyChips(HeavenlyBakingTime, HeavenlyCookieGain, HeavenlyChipGain) {

    let bakingInterval = setInterval(function() {
        if (HeavenlyBakingTime <= 0 && IsBaking) {
            Game.heavenlyChips += HeavenlyChipGain;
            Game.heavenlyCookies += HeavenlyCookieGain;
            TotalHeavenlyCookies += HeavenlyCookieGain;
            HeavenlyChipsGainedFromBaking += HeavenlyChipGain
            TotalTimeSpentBaking += HeavenlyBakingTimed
            if (HeavenlyBakingTimed > HighestTimeBaking) {
                HighestTimeBaking = HeavenlyBakingTimed
            }


            if (HeavenlyChipGain <= 0) {
                Game.Notify("Heavenly Baking finished!", "You got <b>" + Beautify(HeavenlyCookieGain) + "</b> Heavenly Cookies!<q>Yippie!</q>", [20, 7], 1500);
            } else {
            Game.Notify("Heavenly Baking finished!", "You got <b>" + Beautify(HeavenlyCookieGain) + "</b> Heavenly Cookies, and created an extra <b>" + Beautify(HeavenlyChipGain) + "</b> Heavenly Chips!<q>Yippie!</q>", [20, 7], 1500);
            }
            IsBaking = false;
            clearInterval(bakingInterval);
            console.log('baking done!')

        } else {
            if (Game.Has("Hyper baking")) { //debug purposes
            HeavenlyBakingTime = 0;
            } else {
            HeavenlyBakingTime -= 1;
            }
            HeavenlyBakingTiming = HeavenlyBakingTime
            console.log(Game.sayTime((HeavenlyBakingTime)*Game.fps,-1), "left...")
        }
    }, second); // Run the interval every second
}

function HAlchemyUnstore() {
    if (Game.Has("Heavenly alchemy") && HAlchemyStored != 0) {
        Game.Notify("Heavenly alchemy!", "Gained <b>" + Beautify(HAlchemyStored) + "</b> heavenly chips!", Game.Upgrades["Heavenly alchemy"].icon, 15)
        console.log(HAlchemyStored, Game.heavenlyChips)
        Game.heavenlyChips += HAlchemyStored
        HAlchemyUnstored += HAlchemyStored
        HAlchemyStored = 0
    }
}


MHUU.launch = function() {
    if (Game.mods["msPaintMod"]) {
    Greg = "https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/refs/heads/main/custIconsMHUU.png" //Listen... why not.
    } else {
    Greg = "https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/refs/heads/main/custIconsMHUU.png"
    }
    isLoaded = 1; //yeah I'm using a steam guide.
    //okay that makes sense, the notify thing works :D
    setTimeout(function(){

    //Game.Notify('<span style=color:Skyblue;>More Heavenly Upgrades UPGRADED!</span>', 'Enjoy! <q><b><span style=color:Skyblue;>:D</span></b></q>', [25, 7])
    //(^ disabled for the beta version, this has been written at LEAST 6 times.)
    
    //For the [BETA] version:
    
    Game.Notify('<span style=color:Skyblue;>More Heavenly Upgrades UPGRADED! [PUBLIC BETA]</span>', 'Enjoy! Please feel free to tell me your experience(s) and suggestions and (hopefully constructive) criticsm!!! All will help, and I WILL make credits, and implement them into the game, I WILL YOU CANNOT STOP ME. <q><b><span style=color:Skyblue;>:D</span></b></q>', [25, 7]) //add 500 seconds to it JUST to make sure...

    console.log('|-- '+choose([
        'MHUU has been loaded!',
        'MHUU is loaded!',
        'Hey guess what? MHUU is loaded!',
        'Enjoy those extra Heavenly Upgrades from MHUU being loaded!',
        'MHUU is loaded :D',
        'Note to you: MHUU is loaded!',
        'MHUU is loaded and therefore hopefully nothing broke!',
        'You have More Heavenly Upgrades, UPGRADED!!!!',
        'I wonder how many people install these mods have the console open. Anyways MHUU is loaded!',
        'Guess what? MHUU is loaded :D',
        'I love making these lil\' notes. Yeah not many will see it, but who cares, MHUU is loaded!',

    ])+' --|');

    if (Game.mods["More Heavenly Upgrades Remastered"]) {
        console.log('//  '+choose([
            'I don\'t really like MHUR, it has it\'s ups, and it\'s downs, but I do have to make compatibility, which I actually do enjoy!',
            'MHUR\'s "Real Heavenly Chips" function is probably dead by the time this log shows up. (that is part of the compatibility)',
            'Why must MHUR\'s id be "More Heavenly Upgrades Remastered", and not just "MHUR"?',
            'MHUR doesn\'t really have readable code, it\'s TOO optimized, being only 700 or so lines of code while MY mod MHUU has around 4000 at the time of writing this. Yes it may seem I HATE MHUR, but not really, it\'s just that it could be, a bit better?',
            'I\'m procrastinating writing EVEN more console.log s. But why not!',
            'MHUR does have quite a bit of "Replayability" in it\'s many New-Game Pluses. So what if I, oh I don\'t know, copied that exact thing? Just making the number of HUs you keep get higher and higher, and it getting harder and harder in general? Maybe, maybe not...'
        ])+ '  \\\\ ');
    }

}, second * 5) //My spaghet code causes the fact that, if the game is unfocused for too long upon opening, my set timeouts will all be done (the way I stagger the things so no errors).
//meaning everything dies. SO if I add a 5 second timeout, players (including whoever reads this) should know to wait a bit. Will include that somewhere (that's the only issue I've found, and to fix it? Re-do all couple thousand lines of code. I am indeed lazy but who opens up cookie clicker, doesn't wait for it all to load, then unfocuses it, me a couple times as I have to code and test and that's how I've found it!).
//I will probably re-write most if not all of this code.


MHUU.reset = function(hard){
    if(hard) {
    TotalHeavenlyCookies = 0;
    }
}

	Game.customStatsMenu.push(function(){ //Taken directly from DecideDestiny (Decide Your Destiny). Modified to work with my mod (as in modified to not be DecideDestiny and whatnot.)
		CCSE.AppendStatsVersionNumber('More Heavenly Upgrades Upgraded Version', MHUU.version);
    //Is this frontend? If so, I'm not that great at it.
    if(Game.sesame == 1) {
    CCSE.AppendStatsGeneral('<div class="listing"><b>Number of MHUU Heavenly Upgrades:</b> ' + (TotalMHUUU - MHUUIU.length) + '</div>') 
    CCSE.AppendStatsGeneral('<div class="listing"><b>Number of MHUU Immolation Upgrades:</b> ' + MHUUIU.length + '</div>')
    CCSE.AppendStatsGeneral('<div class="listing"><b>TOTAL Number of MHUU Heavenly Upgrades:</b> ' + TotalMHUUU + '</div>')
    }

    if(Game.Has('Heavenly baking')) {
    CCSE.AppendStatsSpecial('<div class="listing"><b>Heavenly Cookies:</b>      ' + tinyIcon([20,7]) +'      '+'      '+ Beautify(Game.heavenlyCookies) + '</div>')
    CCSE.AppendStatsSpecial('<div class="listing"><b>Total Heavenly Cookies:</b>      ' + tinyIcon([20,7]) +'      '+'      '+ Beautify(TotalHeavenlyCookies) + '</div>')
    CCSE.AppendStatsSpecial('<div class="listing"><b>Total Times baked:</b>      ' + tinyIcon([3,4,Greg]) +'      '+'      '+ Beautify(TimesBaked) + '</div>')
    if (HeavenlyChipsGainedFromBaking > 0) CCSE.AppendStatsSpecial('<div class="listing"><b>Total Heavenly Chips gained:</b>      ' + tinyIcon([19,7]) +'      '+'      '+ Beautify(HeavenlyChipsGainedFromBaking) + '</div>')
    CCSE.AppendStatsSpecial('<div class="listing"><b>Total Heavenly Chips spent:</b>      ' + tinyIcon([25,12]) +'      '+'      '+ Beautify(TotalHCsSpentBaking) + '</div>')
    CCSE.AppendStatsSpecial('<div class="listing"><b>Heavenly Cookie Baking Limit:</b>      ' + tinyIcon([16,7]) +'      '+'      '+ Beautify(Math.floor(Math.sqrt(MAX * 10))) + '</div>')
    if(TotalTimeSpentBaking >= 1) CCSE.AppendStatsSpecial('<div class="listing"><b>Total Time spent baking:</b>      ' + tinyIcon([8,15]) +'      '+'      '+ Game.sayTime((TotalTimeSpentBaking)*Game.fps,-1) + '</div>')
    if(HighestTimeBaking >= 1) CCSE.AppendStatsSpecial('<div class="listing"><b>Highest Baking Time:</b>      ' + tinyIcon([8,35]) +'      '+'      '+ Game.sayTime((HighestTimeBaking)*Game.fps,-1) + '</div>')
    }

    if(Game.Has('Heavenly alchemy')) CCSE.AppendStatsSpecial('<br><div class="listing"><b>Heavenly Chips stored:</b>      ' + tinyIcon([27,12]) +'      '+'      '+ Beautify(HAlchemyStored) + '</div>')
    if(HAlchemyUnstored >= 1 && Game.Has('Heavenly alchemy')) CCSE.AppendStatsSpecial('<div class="listing"><b>Heavenly Chips unstored:</b>      ' + tinyIcon([6,27]) +'      '+'      '+ Beautify(HAlchemyUnstored) + '</div>')

    if(HeavenlyBakingTiming >= 1) CCSE.AppendStatsSpecial('<br><div class="listing"><b>Time left baking:</b>      '+ Game.sayTime((HeavenlyBakingTiming)*Game.fps,-1) + '</div>')

    if(Game.Has('ONE')) CCSE.AppendStatsGeneral('<div class="listing"><b>Is ONE:</b> ' + IsONE + "</div>")
    if(Game.Has('MANY')) CCSE.AppendStatsGeneral('<div class="listing"><b>Is MANY:</b> ' + IsMANY + "</div>")
    if(Game.Has('FAMILY')) CCSE.AppendStatsGeneral('<div class="listing"><b>Is FAMILY:</b> ' + IsFAMILY + "</div>")
    if(Game.Has('Replicated replications')) CCSE.AppendStatsGeneral('<div class="listing"><b>Is Replicated:</b> ' + IsReplicated + '</div>')
    if(Game.Has('Replicated replications') && IsReplicated) CCSE.AppendStatsGeneral('</div><div class="listing"><b>Replication buff:</b> ' + REPLICATEDBUFF)    
    if(Game.Has('More idling')) CCSE.AppendStatsGeneral('<div class="listing"><b><span style=color:Gold;>Gold</span> in bank:</b>      ' + tinyIcon([25, 11]) +'      '+ Beautify(Gold,2) + '</div>')
    if(Game.Has('More idling')) CCSE.AppendStatsGeneral('<div class="listing"><b><span style=color:Gold;>Gold</span> earned:</b>      ' + tinyIcon([25, 11]) +'      '+ Beautify(GoldEarned,2) + ' <small>(all time: '+ Beautify(TotalGoldEarned,2) +')</small></div>')
    if(Game.Has('More idling')) CCSE.AppendStatsGeneral('<div class="listing"><b><span style=color:Gold;>Gold</span> per second:</b>      ' + tinyIcon([25, 11]) +'      '+ Beautify(GoldPs,2) + '</div>')
    if(Game.Has('More idling')) CCSE.AppendStatsGeneral('<div class="listing"><b><span style=color:Gold;>Gold</span> to cookies:</b>      ' + tinyIcon([10, 0]) +'      '+ Beautify(Math.floor(Gold/100),2) + '</div>')


    });

//This is VERY important for one Heavenly Upgrade that may or may not be added:
MHUU.MyOwnBeautifyYouCannotStopMeHAHAHAHAHAWhyAmIMakingThisNameLongItWontMatterRightRightOhNoWellIGuessThisIsJustStayingLikeThisForeverOhNo = function(val,floats) {
	var negative=(val<0);
	var decimal='';
	var fixed=val.toFixed(floats);
	if (floats>0 && Math.abs(val)<1000 && Math.floor(fixed)!=fixed) decimal='.'+(fixed.toString()).split('.')[1];
	val=Math.floor(Math.abs(val));
	if (floats>0 && fixed==val+1) val++;
	//var format=!EN?2:Game.prefs.format?2:1;
	var format=1 //Set to 1 because if numbers aren't shortened, it breaks, SO, if I just make my own beautify function, and change ONE thing, it work! :D
	var formatter=numberFormatters[format];
	var output=(val.toString().indexOf('e+')!=-1 && format==2)?val.toPrecision(3).toString():formatter(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
	//var output=formatter(val).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
	if (output=='0') negative=false;
	var ret = negative?'-'+output:output+decimal;
	// Beautify injection point 0
	for(var i in Game.customBeautify) ret = Game.customBeautify[i](value, floats, ret);
	return ret;
}
//I probably shouldn't have made that name long.

//Let me try to add achievements :D

// let me see if I can actually add a new upgrade, and see if any of this works.
//CCSE.NewHeavenlyUpgrade('<span style=font-size:36.0mm;color:purple;>yay</span>', "<span style=font-family:Webdings>YEAH</span><q><span style=color:purple>he</span></q>", 1, [0, 0], 0, 0, ['Legacy']);
//^ Used for testing things (will be commented out upon full release (sorry :( )


//scuse my language but IT WORKS!!!! YEAH!!! HAHAHAHAAHA!!!
//To past me. Nothing works, and I have no idea why. D:
//To future past me. What do you mean? I fixed it :D

/*
    COOKIES (FOR Cookie?) //might not do
*/
//Game.NewUpgradeCookie({name:'<span style=font-family:Papyrus>Papyrus cookie</span>',desc:'<span style=font-family:Papyrus>This goes against EVERYTHING.</span>',icon:[1,5, Greg],require:'Cookie?',		power:5,price: Math.pow(10,45)});
//^ nah

//I just realized these code comments make this a mess. I'm keeping it. :D
//Why did I place this (^) in the middle of all the comments. Same with this comment, why?

//Now time to actually make it do something.
//LOAD/MAKE THOSE HUs!

// For some reason, kills Cookie Clicker's Heavenly Tree. No idea how.
// Nope, fixed it!

//Also I'm putting 'em all into categories.


/*#######################

    ***HEAVENLY UPGRADES***

#########################*/

//Now time for the ones I took from the discord server (I am quite sorry for stealing. I shall credit!)
CCSE.NewHeavenlyUpgrade("Seasoned seasons", "All seasons last <b>twice</b> as long <small>(including <b>natural</b> seasons)</small>.<q>Seasoning to season unseasoned seasons</q><br><small><q>(I'm sorry this is all I could come up with)</q></small>", 11111111111111, [2,6,Greg], -1082, -276, ["Keepsakes"]);
Game.last.order = 181.003
//tsco (DashNet Forums/Discord)



/*
    KITS & BITS (used to be Building Upgrades (used to be UPGRADE BUNDLES)
*/


CCSE.NewHeavenlyUpgrade('Mystery egg', "Start with <b>3 random eggs</b> that you do not own <small>(so if you give yourself some via permanent upgrades, this won't conflict with those)</small><q>Why does an egg contain many eggs? Why can't you just, keep all the eggs?</q>", 11111111, [2, 1, Greg], -847, 112, ['Starspawn']);
Game.last.order = 181.001

CCSE.NewHeavenlyUpgrade('Santa\'s ultimatum', "Start with <b>Santa</b> at level <b>10</b> for free.<q>Alright buddy you got two options here...</q><q>You can be a Saint. <b><small>SAINTE</small></b></q><q>or you can be a Grinch. <b><small>GRUNCH</small></b></q>", 11111111, [3, 1, Greg], -493, -305, ['Starsnow']);
Game.last.order = 181.001

CCSE.NewHeavenlyUpgrade('Haunted past', "Wrinklers appear <b>3 times</b> as fast, explode into <b>10% more cookies</b>, and you may attract <b>an extra wrinkler</b><q>The spirit of your long past is back...<br>To help devour <b>it</b>...", 11111111, [2, 2, Greg], -870, -287, ['Starterror']);
Game.last.order = 181.001

CCSE.NewHeavenlyUpgrade('Heartfelt gifts', "Gain a CPS multiplication based on your <b>cookies gifted</b>, and <b>cookies recieved!</b> <small>(yes this requires the \"Wrapping paper\" Heavenly Upgrade, although it will still give a CPS buff if you don't have/use it)</small><br><small>(be joyous and gift!)</small><br><small>(still gives a buff if the values are too low)</small><q>Just know, someone out there likes you. Infact, many do!", 11111111, [34, 11], -720, -360, ['Starlove']);
Game.last.order = 181.001

CCSE.NewHeavenlyUpgrade('Job application', "Start with the first <b>5 Grandma types</b>, Buildings cost <b>5% less</b>.<q>Get ya' jobs here!<br>Maybe you should get a job</q>", 11111111, [27, 7], -930, -74, ['Startrade']);
Game.last.order = 181.001

CCSE.NewHeavenlyUpgrade('Cursed cookie', "Start with the next <b>10 Cookies</b>.<q>Who left this, this <b>thing</b> laying around here?</q>", 666666666, [19, 6], -104, -935, ['Wrinkly cookies']);
Game.last.order = 253.00500000000002



/*
    GOLDEN MODIFIERS
*/

/*
CCSE.NewHeavenlyUpgrade('Golden fingers', "For every <b>75 cursors</b>, golden cookies spawn <b>1%</b> faster, <b>capped at 55%</b><q>The touch of Midas!</q>", 5000000000000, [0, 13], -683, 339, ['Lasting fortune']);
*/
//alt version v
CCSE.NewHeavenlyUpgrade('Power clicks', "Every click has a <b>1 in 10000</b> chance to summon a golden cookie<b>.<q>The touch of Midas!</q>", 5000000000000, [0, 0, "https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/refs/heads/main/PowerClicks.png"], -198, 143, ['Golden switch']);
//Okay me like alt version, me keep alt version. Alt version easier implementation and better (verification needed). :D
Game.last.order = 282.00210

//CCSE.NewHeavenlyUpgrade('Golden modification', "Adds <b>several new <span style=color:Gold;>Golden</span> and <span class='warning>Wrath</span> cookie effects</b>.<br>Whilst making Golden Cookies appear 6x<q>Nothing could possibly go wrong<br>right?</q>");


/*
CCSE.NewHeavenlyUpgrade('Golden Modification', "Adds <b>several new Golden and Wrath cookie effects</b>, at the cost of adding more <small>(meaning getting the effect (or affect) you want is harder as there are more possible effects)</small><q>nothing could possibly go wrong<br>right?</q>", 625000000000000, [0, 0], -555, 555, ['Legacy']) //Pos and icon will obviously be changed upon implementation

CCSE.NewHeavenlyUpgrade('Golden modification: Buildings', "Adds <b>5 new <span style=color:Gold;>Golden</span> and <span class='warning>Wrath</span> cookie effects</b> based around <b>buildings</b>.<q>Sorry, flavor text is under construction.<br>Check back later...</q>")

CCSE.NewHeavenlyUpgrade('Golden modification: Shimmers', "Adds <b>5 new <span style=color:Gold;>Golden</span> and <span class='warning>Wrath</span> cookie effects</b> based around <b>shimmers</b> <small>(Shimmers are Golden and Wrath cookies, aswell as Reindeer)</small>.<q>All that shimmers, is not gold</q>")

CCSE.NewHeavenlyUpgrade('Golden modification: Wrinklers', "Adds <b>5 new <span style=color:Gold;>Golden</span> and <span class='warning>Wrath</span> cookie effects</b> based around <b>wrinklers</b>.<q>What a disgusting fate...</q>");

CCSE.NewHeavenlyUpgrade('Golden modification', "Adds <b>several new <span style=color:Gold;>Golden</span> and <span class='warning>Wrath</span> cookie effects</b>.<q>Nothing could possibly go wrong<br>right?</q>");
*/
/*
    WRINKLER MODIFIERS
*/
CCSE.NewHeavenlyUpgrade('Rotten purification', "Wrinklers explode into <b>35% more cookies</b>.<q>Ahh, the pure rot of the Wrinkler, turns out you can purify that rot, allowing you to get more pure cookies</q>", 750000000000000, [5, 3, Greg], -419, -892, ['Sacrilegious corruption']);
Game.last.order = 253.00400000000002
CCSE.NewHeavenlyUpgrade('Ancient spice', "You can attract <b>5 more wrinklers</b><q>\"Expiration Date: Aug 8, 2013\"<br>Well then.</q>", 750000000000000, [5, 3, Greg], -191, -729, ['Elder spice']);
Game.last.order = 253.00400000000002
CCSE.NewHeavenlyUpgrade('Ungodly bait', "Wrinklers appear <b>5 times</b> as fast. <small>(stacks with 'Unholy bait')</small><q>This is un-<b>GOD</b>-ly</q>", 7500000000000, [4, 3, Greg], -362, -749, ['Unholy bait']);
Game.last.order = 253.00300000000013

/*
    RESEARCHING
*/
CCSE.NewHeavenlyUpgrade('Scientific recipe list', "Subsequent research is <b>25 times</b> as fast<q>You've decided to finally just write it down...</q>", 3785, [0, 0, "https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/refs/heads/main/ScientificRecipieList.png"], 200, -120, ['Persistent memory']);
Game.last.order = 141


/*
    PERMANENT UPGRADES (MORE)
*/

MHUUPermanentSlotIcon = function(slot) {
    if (Game.permanentUpgrades[slot] == -1) return [(slot - 5), 7, Greg];
    return Game.UpgradesById[Game.permanentUpgrades[slot]] ? Game.UpgradesById[Game.permanentUpgrades[slot]].icon : [2, 4, Greg];
}


// Ensure the permanentUpgrades array has enough slots
if (Game.permanentUpgrades.length < 7) {
    while (Game.permanentUpgrades.length < 7) {
        Game.permanentUpgrades.push(-1);
    }
}


var desc = loc("Placing an upgrade in this slot will make its effects <b>permanent</b> across all playthroughs.");

// Create the new heavenly upgrade
CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VI', desc, 6000000000000, [0, 7, Greg], 703,-62, ['Permanent upgrade slot V']);
Game.last.order = 264.0039999999999
// Modify the icon function to use the custom function
Game.last.iconFunction = function() {
    return MHUUPermanentSlotIcon(5);
};

// Modify the activate function
Game.last.activateFunction = function() {
    Game.AssignPermanentSlot(5);
};

CCSE.NewHeavenlyUpgrade('Permanent upgrade slot VII', desc, 700000000000000, [1, 7, Greg], 833,-29, ['Permanent upgrade slot VI']);
Game.last.order = 264.0039999999999
// Modify the icon function to use the custom function
Game.last.iconFunction = function() {
    return MHUUPermanentSlotIcon(6);
};

// Modify the activate function
Game.last.activateFunction = function() {
    Game.AssignPermanentSlot(6);
};




/*
    UNSHACKLED SHACKLES
*/
CCSE.NewHeavenlyUpgrade('Unshackled cookie', "Every <b>cookie upgrade</b> increases CPS by <b>25%</b><q>No longer bound. Free at last.</q>", 346000000000000000, [10, 35], 422, 511, ["Unshackled You", "Unshackled glimmeringue"]);
Game.last.order = 768.1


CCSE.NewHeavenlyUpgrade('Unshackled upgrades', "Every upgrade increases <b>CPS by 10%</b>, <small>(Unless it is debug or heavenly. Stacks with Unshackled cookie and everything else)</small><q><b>ABSOLUTE<br>FREEDOM!</b></q>", 500000000000000000, [9, 35], 457, 381, ["Unshackled cookie"]);
Game.last.order = 768.2


/*
    DEBUG (for debug purposes obviously)
*/

CCSE.NewUpgrade('THE TOUCH O\' MIDAS!', "Power clicks procs <b>no matter what</b><q><b>MY EYES, MY EYES!!!</b></q>", 7, [24, 6]);
Game.last.pool = 'debug'
Game.last.order = ORDER
ORDER += 0.001




/*#######################

    ACTUALLY DO THEM

#########################*/

Game.baseResearchTime=Game.fps*60*30;
Game.SetResearch=function(what,time)
{
    if (Game.Upgrades[what] && !Game.Has(what))
    {
        Game.researchT=Game.baseResearchTime;
        if (Game.Has('Persistent memory'))
        if (Game.Has('Scientific recipie list')) Game.researchT=Math.ceil(Game.baseResearchTime/35);
        if (Game.Has('Ultrascience')) Game.researchT=Game.fps*5;
        Game.nextResearch=Game.Upgrades[what].id;
        Game.Notify(loc("Research has begun"),loc("Your bingo center/research facility is conducting experiments."),[9,0]);
    }
}

Game.customWrinklerSpawnChance.push(function () {
    let spawnRate = 1;
    if (Game.Has("Ungodly bait")) spawnRate *= 5;
    if (Game.Has("Haunted past")) spawnRate *= 3
    return spawnRate;
    });

Game.customGetWrinklersMax.push(function () {
    let max = 1;
    if (Game.Has("Haunted past")) max += 1
    if (Game.Has("Ancient spice")) max += 5
    return max;
});

Game.customUpgradePrice.push(function () 
{
    let priceMult = 1
    if (Game.Has("Immolation")) priceMult *= 1.25

    
    return price * priceMult;
});
Game.customModifyBuildingPrice.push(function ()
{
    let price = 1
 
 if (Game.Has('Job application')) price *= 0.95;
 if (Game.Has('Stocked stocks')) price *= 0.99;

    return price;
});
//Probably a MUCH better way to do this besides, you know, shoving the entire function in here. Might consider removing it.
Game.crateTooltip=function(me,context)
{
    var tags=[];
    mysterious=0;
    var neuromancy=0;
    var price='';
    if (context=='stats' && (Game.Has('Neuromancy') || (Game.sesame && me.pool=='debug'))) neuromancy=1;
    
    var ariaText='';
    
    if (me.type=='upgrade')
    {
        ariaText+='Upgrade. ';
        
        if (me.pool=='prestige') tags.push(loc("[Tag]Heavenly",0,'Heavenly'),'#efa438');
        else if (me.pool=='tech') tags.push(loc("[Tag]Tech",0,'Tech'),'#36a4ff');
        else if (me.pool=='cookie') tags.push(loc("[Tag]Cookie",0,'Cookie'),0);
        else if (me.pool=='debug') tags.push(loc("[Tag]Debug",0,'Debug'),'#00c462');
        else if (me.pool=='toggle') tags.push(loc("[Tag]Switch",0,'Switch'),0);
        else tags.push(loc("[Tag]Upgrade",0,'Upgrade'),0);
        
        //This is really the only point. custom tags. WHY ISN'T THIS A THING????? D:

        if (MHUUHeavenlyUpgrades.includes(me.name) || me.name=='Hyper baking' || me.name=='Auto baking' || me.name=="THE TOUCH O' MIDAS!") tags.push(loc("MHUU"),'#8A2BE2');
        if (MHUUIU.includes(me.name)) tags.push(loc("New Game +"),'#FFD700');
        if (me.name=='Synergies Vol. I' || me.name=='Chimera' || me.name=='Starter kit' || me.name=='Starter kitchen' || me.name=='Keepsakes' || me.name=='Eternal seasons') tags.push(loc("MHUU'd"), '#ad6aea');
        if ((Game.mods["Even More Heavenly Upgrades"]) && (me.name == 'Santa\'s Heavenly Legacy' || me.name == 'Rudolph\'s Recipe' || me.name == 'Silly Wabbit' || me.name == 'Horror Story' || me.name == 'Lover\'s Delight')) tags.push(loc("MHUU'd"), '#ad6aea');
            if ((Game.mods["Even More Heavenly Upgrades"]) && (me.name == 'Santa\'s Heavenly Legacy' || me.name == 'Rudolph\'s Recipe' || me.name == 'Silly Wabbit' || me.name == 'Horror Story' || me.name == 'Lover\'s Delight')) tags.push(loc("New Game +"),'#FFD700');
        if (me.name=='Rotten purification') tags.push(loc("Not Implemented"), '#ffffff');
        if (me.name=='Haunted past' || me.name=='Scientific recipe list' || me.name=='FAMILY' || me.name=='') tags.push(loc("Semi-Implemented"), '#777777');
        if (me.name=="Santa's ultimatum" || me.name=='Re-baked' || me.name=='Un-baked' || me.name=='Risen' ||me.name=='Abyss') tags.push(loc("Might be re-done"), '#555555');
        if (me.name=="Time warp") tags.push(loc("Purchased"),0);
        if (Game.Has('Label printer'))
        {
            if (me.tier!=0) tags.push(loc("Tier:")+' '+loc("[Tier]"+Game.Tiers[me.tier].name,0,Game.Tiers[me.tier].name),Game.Tiers[me.tier].color);

            if (me.name=='Label printer' || me.name=='This upgrade' || me.name=='Replicated replications' || me.name=="<b style='color:#bc3aff;'>Steamed Heralds</b>") tags.push(loc("Tier:")+' '+loc("[Tier]Self-referential"),'#ff00ea');
            if (me.name=='Ascended baking pod' || me.name=='Upgrade manager' || me.name=='Building overseer' || me.name=='Golden clicker' || me.name=='Auto baking') tags.push(loc("Tier:")+' '+loc("Automation"),'#aaaaaa');

        }
        
        if (me.isVaulted()) tags.push(loc("Vaulted"),'#4e7566');
        
        if (me.bought>0)
        {
            ariaText+='Owned. ';
            if (me.pool=='tech') tags.push(loc("Researched"),0);
            else if (EN && me.kitten) tags.push('Purrchased',0);
            else if (EN && me.name=="Time warp") tags.push(loc("Activated"),0);
            else tags.push(loc("Purchased"),0);
        }
        
        if (me.lasting && me.unlocked) tags.push(loc("Unlocked forever"),'#f2ff87');
        
        if (neuromancy && me.bought==0) tags.push(loc("Click to learn!"),'#00c462');
        else if (neuromancy && me.bought>0) tags.push(loc("Click to unlearn!"),'#00c462');
        
        var canBuy=(context=='store'?me.canBuy():true);
        var cost=me.getPrice();
        if (me.priceLumps>0) cost=me.priceLumps;
        
        if (me.priceLumps==0 && cost==0) price='';
        else
        {
            price='<div style="float:right;text-align:right;"><span class="price'+
                (me.priceLumps>0?(' lump'):'')+
                (me.pool=='prestige'?((me.bought || Game.heavenlyChips>=cost)?' heavenly':' heavenly disabled'):'')+
                (context=='store'?(canBuy?'':' disabled'):'')+
            '">'+Beautify(Math.round(cost))+'</span>'+((me.pool!='prestige' && me.priceLumps==0)?Game.costDetails(cost):'')+'</div>';
            
            ariaText+=(me.bought?'Bought for':canBuy?'Can buy for':'Cannot afford the')+' '+Beautify(Math.round(cost))+' '+((me.priceLumps>0)?'sugar lumps':(me.pool=='prestige')?'heavenly chips':'cookies')+'. ';
        }
    }
    else if (me.type=='achievement')
    {
        ariaText+='Achievement. ';
        if (me.pool=='shadow') tags.push(loc("Shadow Achievement"),'#9700cf');
        else tags.push(loc("Achievement"),0);
        if (me.won>0) {tags.push(loc("Unlocked"),0);ariaText+='Unlocked. ';}
        else {tags.push(loc("Locked"),0);mysterious=1;}
        
        if (neuromancy && me.won==0) tags.push(loc("Click to win!"),'#00c462');
        else if (neuromancy && me.won>0) tags.push(loc("Click to lose!"),'#00c462');
    }
    
    var tagsStr='';
    for (var i=0;i<tags.length;i+=2)
    {
        if (i%2==0) tagsStr+='<div class="tag" style="background-color:'+(tags[i+1]==0?'#fff':tags[i+1])+';">'+tags[i]+'</div>';
    }
    
    var icon=me.icon;
    if (mysterious) icon=[0,7];
    
    if (me.iconFunction) icon=me.iconFunction();
    
    ariaText+=(mysterious?'Hidden':me.dname)+'. ';
    
    var tip='';
    if (context=='store')
    {
        if (me.pool!='toggle' && me.pool!='tech')
        {
            var purchase=me.kitten?'purrchase':'purchase';
            if (Game.Has('Inspired checklist'))
            {
                if (me.isVaulted()) tip=EN?('Upgrade is vaulted and will not be auto-'+purchase+'d.<br>Click to '+purchase+'. Shift-click to unvault.'):(loc("Upgrade is vaulted and will not be auto-purchased.")+'<br>'+loc("Click to purchase.")+' '+loc("%1 to unvault.",loc("Shift-click")));
                else tip=EN?('Click to '+purchase+'. Shift-click to vault.'):(loc("Click to purchase.")+' '+loc("%1 to vault.",loc("Shift-click")));
                if (EN){
                    if (Game.keys[16]) tip+='<br>(You are holding Shift.)';
                    else tip+='<br>(You are not holding Shift.)';
                }
            }
            else tip=EN?('Click to '+purchase+'.'):loc("Click to purchase.");
        }
        else if (me.pool=='toggle' && me.choicesFunction) tip=loc("Click to open selector.");
        else if (me.pool=='toggle') tip=loc("Click to toggle.");
        else if (me.pool=='tech') tip=loc("Click to research.");
    }
    
    if (tip!='') ariaText+=tip+' ';
    
    var desc=me.ddesc;
    if (me.descFunc) desc=me.descFunc(context);
    if (me.bought && context=='store' && me.displayFuncWhenOwned) desc=me.displayFuncWhenOwned()+'<div class="line"></div>'+desc;
    if (me.unlockAt)
    {
        if (me.unlockAt.require)
        {
            var it=Game.Upgrades[me.unlockAt.require];
            desc='<div style="font-size:80%;text-align:center;">'+(EN?'From':loc("Source:"))+' '+tinyIcon(it.icon)+' '+it.dname+'</div><div class="line"></div>'+desc;
        }
        else if (me.unlockAt.text)
        {
            //var it=Game.Upgrades[me.unlockAt.require];
            desc='<div style="font-size:80%;text-align:center;">'+(EN?'From':loc("Source:"))+' <b>'+text+'</b></div><div class="line"></div>'+desc;
        }
    }
    
    if (!mysterious) ariaText+='Description: '+desc+' ';
    
    if (Game.prefs.screenreader)
    {
        var ariaLabel=l('ariaReader-'+me.type+'-'+me.id);
        if (ariaLabel) ariaLabel.innerHTML=ariaText.replace(/(<([^>]+)>)/gi,' ');
    }
    
    return '<div style="position:absolute;left:1px;top:1px;right:1px;bottom:1px;background:linear-gradient(125deg,'+(me.pool=='prestige'?'rgba(15,115,130,1) 0%,rgba(15,115,130,0)':'rgba(50,40,40,1) 0%,rgba(50,40,40,0)')+' 20%);mix-blend-mode:screen;z-index:1;"></div><div style="z-index:10;padding:8px 4px;min-width:350px;position:relative;" id="tooltipCrate">'+
    '<div class="icon" style="float:left;margin-left:-8px;margin-top:-8px;'+writeIcon(icon)+'"></div>'+
    (me.bought && context=='store'?'':price)+
    '<div class="name">'+(mysterious?'???':me.dname)+'</div>'+
    tagsStr+
    '<div class="line"></div><div class="description">'+(mysterious?'???':desc)+'</div></div>'+
    (tip!=''?('<div class="line"></div><div style="font-size:10px;font-weight:bold;color:#999;text-align:center;padding-bottom:4px;line-height:100%;" class="crateTip">'+tip+'</div>'):'')+
    (Game.sesame?('<div style="font-size:9px;">Id: '+me.id+' | Order: '+(me.order)+(me.tier?' | Tier: '+me.tier:'')+' | Icon: ['+me.icon[0]+','+me.icon[1]+']'+'</div>'):'');
}

Game.GrabData=function()
{
    if (!App) ajax('/patreon/grab.php',Game.GrabDataResponse);
    else App.grabData(function(res){
        Game.heralds=res?(res.playersN||1):1;
        if (prevHeralds != Game.heralds) {
        console.log("WE GOT HERALDS: " +Beautify(Game.heralds)+".")
        if (prevHeralds > Game.heralds) console.log("WE LOST: " +Beautify(Game.heralds - prevHeralds)+"... cowards")
        if (prevHeralds < Game.heralds) console.log("WE GAINED: " +Beautify(Game.heralds - prevHeralds)+"... YAY!!! :D")
        prevHeralds = Game.heralds
        }
        if (Game.Has("<b style='color:#bc3aff;'>Steamed Heralds</b>")) {
            Game.heralds=Math.floor(Math.max(0,Math.min(1000,Math.ceil(Game.heralds)/25)));
        } else if (Game.Has("<b style='color:#bc3aff;'>Heralding Heralds</b>")) {
            Game.heralds=Math.floor(Math.max(0,Math.min(300,Math.ceil(Game.heralds)/50)));
        } else {
            Game.heralds=Math.floor(Math.max(0,Math.min(100,Math.ceil(Game.heralds)/100)));
        }


        l('heraldsAmount').textContent=Math.floor(Game.heralds);
    });
}
Game.GrabDataResponse=function(response)
{
    /*
        response should be formatted as
        {"herald":3,"grandma":"a|b|c|...}
    */
    var r={};
    try{
        r=JSON.parse(response);
        if (typeof r['herald']!=='undefined')
        {
            Game.heralds=parseInt(r['herald']);
            if (Game.Has("<b style='color:#bc3aff;'>Steamed Heralds</b>")) {
                Game.heralds=Math.floor(Math.max(0,Math.min(1000,Game.heralds)));
            } else if (Game.Has("<b style='color:#bc3aff;'>Heralding Heralds</b>")) {
                Game.heralds=Math.floor(Math.max(0,Math.min(300,Game.heralds)));
            } else {
                Game.heralds=Math.floor(Math.max(0,Math.min(100,Game.heralds)));
            }

        }
        if (typeof r['grandma']!=='undefined' && r['grandma']!='')
        {
            Game.customGrandmaNames=r['grandma'].split('|');
            Game.customGrandmaNames=Game.customGrandmaNames.filter(function(el){return el!='';});
        }
        
        l('heraldsAmount').textContent=Math.floor(Game.heralds);
        Game.externalDataLoaded=true;
    }catch(e){}
}


Game.attachTooltip(l('heralds'),function(){
    var str='';
    
    if (!App && !Game.externalDataLoaded) str+=loc("Heralds couldn't be loaded. There may be an issue with our servers, or you are playing the game locally.");
    else
    {
        if (!App && Game.heralds==0) str+=loc("There are no heralds at the moment. Please consider <b style=\"color:#bc3aff;\">donating to our Patreon</b>!");
        else
        {
            str+='<b style="color:#bc3aff;text-shadow:0px 1px 0px #6d0096;">'+loc("%1 herald",Game.heralds)+'</b> '+loc("selflessly inspiring a boost in production for everyone, resulting in %1.",'<br><b style="color:#cdaa89;text-shadow:0px 1px 0px #7c4532,0px 0px 6px #7c4532;"><div style="width:16px;height:16px;display:inline-block;vertical-align:middle;background:url(img/money.png);"></div>'+loc("+%1% cookies per second",Game.heralds)+'</b>');
            str+='<div class="line"></div>';
            if (Game.ascensionMode==1) str+=loc("You are in a <b>Born again</b> run, and are not currently benefiting from heralds.");
            else if (Game.Has("<b style='color:#bc3aff;'>Steamed Heralds</b>")) str+=loc("You own the <b>Heralds</b> upgrade as well as <b>Heralding Heralds</b> and <b>Steamed Heralds</b>, effecting Herald limit, and how many steam users are required for <b>Heralds</b>.");
            else if (Game.Has("<b style='color:#bc3aff;'>Heralding Heralds</b>")) str+=loc("You own the <b>Heralds</b> upgrade as well as <b>Heralding Heralds</b>, effecting Herald limit, and how many steam users are required for <b>Heralds</b>.");
            else if (Game.Has('Heralds')) str+=loc("You own the <b>Heralds</b> upgrade, and therefore benefit from the production boost.");
            else str+=loc("To benefit from the herald bonus, you need a special upgrade you do not yet own. You will permanently unlock it later in the game.");
        }
    }
    if (Game.Has("<b style='color:#bc3aff;'>Steamed Heralds</b>")) {
    str+='<div class="line"></div><span style="font-size:90%;opacity:0.6;">'+(!App?loc("<b>Heralds</b> are people who have donated to our highest Patreon tier, and are limited to 1000.<br>Each herald gives everyone +1% CpS.<br>Heralds benefit everyone playing the game, regardless of whether you donated."):loc("Every 25 current players on Steam generates <b>1 herald</b>, up to 1000 heralds.<br>Each herald gives everyone +1% CpS.",[100,100]))+'</span><div class="line"></div>'+tinyIcon([21,29]);
    } else if (Game.Has("<b style='color:#bc3aff;'>Heralding Heralds</b>")) {
    str+='<div class="line"></div><span style="font-size:90%;opacity:0.6;">'+(!App?loc("<b>Heralds</b> are people who have donated to our highest Patreon tier, and are limited to 300.<br>Each herald gives everyone +1% CpS.<br>Heralds benefit everyone playing the game, regardless of whether you donated."):loc("Every 50 current players on Steam generates <b>1 herald</b>, up to 300 heralds.<br>Each herald gives everyone +1% CpS.",[100,100]))+'</span><div class="line"></div>'+tinyIcon([21,29]);
    } else {
    str+='<div class="line"></div><span style="font-size:90%;opacity:0.6;">'+(!App?loc("<b>Heralds</b> are people who have donated to our highest Patreon tier, and are limited to 100.<br>Each herald gives everyone +1% CpS.<br>Heralds benefit everyone playing the game, regardless of whether you donated."):loc("Every %1 current players on Steam generates <b>1 herald</b>, up to %2 heralds.<br>Each herald gives everyone +1% CpS.",[100,100]))+'</span><div class="line"></div>'+tinyIcon([21,29]);
    }


    str+='<div style="width:31px;height:39px;background:url(img/heraldFlag.png);position:absolute;top:0px;left:8px;"></div><div style="width:31px;height:39px;background:url(img/heraldFlag.png);position:absolute;top:0px;right:8px;"></div>';
    
    return '<div style="padding:8px;width:300px;text-align:center;" class="prompt" id="tooltipHeralds"><h3>'+loc("Heralds")+'</h3><div class="block">'+str+'</div></div>';
},'this');


//Probably a more effective way to do this. Buuuuttttt if it works it works!!!!
//Oh, also this is for extra idling, as in more reason to wait. It's over-under powered.
//I should probably re-do/re-balance this.
//^ probably set it back to just a cursor every 15s?
//^ did it! Removed More idling II
//Removed infinite cursor gain, is now simply more GOLD

// Function to handle gold generation
function generateGold() {
    // Check if the "More idling" upgrade is owned
    if (Game.Has('More idling')) {
        // Define the buildings and their corresponding gold multipliers
        const buildings = [
            { name: "Cursor", multiplier: 0.01 },
            { name: "Grandma", multiplier: 0.05 },
            { name: "Farm", multiplier: 0.1 },
            { name: "Mine", multiplier: 0.2 },
            { name: "Factory", multiplier: 0.5 },
            { name: "Bank", multiplier: 1 },
            { name: "Temple", multiplier: 2 },
            { name: "Wizard tower", multiplier: 5 },
            { name: "Shipment", multiplier: 10 },
            { name: "Alchemy lab", multiplier: 20 },
            { name: "Portal", multiplier: 50 },
            { name: "Time machine", multiplier: 100 },
            { name: "Antimatter condenser", multiplier: 200 },
            { name: "Prism", multiplier: 500 },
            { name: "Chancemaker", multiplier: 1000 },
            { name: "Fractal engine", multiplier: 2000 },
            { name: "Javascript console", multiplier: 5000 },
            { name: "Idleverse", multiplier: 10000 },
            { name: "Cortex baker", multiplier: 20000 },
            { name: "You", multiplier: 50000 }
        ];

        // Reset gold production per second
        GoldPs = 0;

        // Calculate gold production for each building
        buildings.forEach(building => {
            let buildingAmount = Game.Objects[building.name].amount;
            let goldProduction = buildingAmount * building.multiplier;
            GoldPs += goldProduction;
            Gold += goldProduction;
            GoldEarned += goldProduction;
            TotalGoldEarned += goldProduction

        });

        if (GoldEarned < Gold) {
            GoldEarned = Gold
        }
        if (TotalGoldEarned < GoldEarned) {
            TotalGoldEarned = GoldEarned
        }

        //Game.UpdateMenu()
        //Soon, create a new div for gold, instead of using only the stats menu
    }
}

// Add gold generation to the main loop
setInterval(generateGold, second); // Generate gold every second


setInterval(function() {
    if(Game.Has('Passive income')) {
        var PLEASEY = Game.cookies
        var PLEASE = Math.ceil(PLEASEY *= 0.01)
        Game.Earn(PLEASE)
        PlaySound('snd/buyHeavenly.mp3');
        Game.Notify("Passive Income", "Generated: <b>" + Beautify(PLEASE) + "</b> cookies!", [1, 4, Greg], 5);
    }
}, 35 * second);



setInterval(function() {
    if(Game.Has('Auto baking')) {
        if (IsBaking == false) {
        PlaySound('snd/tick.mp3');
        if (Game.heavenlyChips < AMIN) {
            Game.heavenlyChips += (AMIN - Game.heavenlyChips)
        }
        bakeHeavenlyChips(1,Math.max(50,(Math.floor(Math.sqrt((Game.heavenlyChips / 4) * 10) ))),0)
    }
    }
}, second);

setInterval(function() { //Hopes for the best math... Although it is probably not the best math... and I don't have much hope for it...
    if(Game.Has('Heavenly alchemy')) {
        HAlchemyGain = (((Math.random() * ((Game.goldenClicks * 5) + Game.missedGoldenClicks)) + Game.goldenClicks))
        HAlchemyGain = Math.ceil(HAlchemyGain / 5)
        if (HAlchemyStored >= ((Game.prestige / 3) * 2)) {
        HAlchemyGain = Math.floor(HAlchemyGain / 5)
        }
        console.log("GCs:", Game.goldenClicks, "MGCs:", Game.missedGoldenClicks, "Gain:", HAlchemyGain, "Stored:", HAlchemyStored, "Now:", (HAlchemyStored + HAlchemyGain), "Prestige:", Game.prestige)
        HAlchemyStored += HAlchemyGain
    }
}, minute * 5)

setInterval(function() {
    if(Game.Has('Ascended baking pod')) {
        if(Game.Has('Ascended baking pod [off]')) {
            Game.AscendedClick = true
            Game.ClickCookie()
        }
    }
}, second / 4);

setInterval(function (){
    if (Game.Has('Building overseer [off]')) {
        let cheapestBuilding = null;
        for (let i in Game.Objects) {
            let building = Game.Objects[i];
            if (!cheapestBuilding || building.getPrice() < cheapestBuilding.getPrice()) {
                cheapestBuilding = building;
            }
        }
        if (cheapestBuilding && Game.cookies >= cheapestBuilding.getPrice()) {

            Game.Notify("Building bought!", 'Bought <b>' + cheapestBuilding.dname + '</b> for <b>' + Beautify(cheapestBuilding.getPrice()) + '</b> cookies!', Game.GetIcon(cheapestBuilding.dname, 1), 10);
            cheapestBuilding.buy();
        }
    }

    if (Game.Has('Upgrade manager [off]')) {
        // Filter the upgrades
        let availableUpgrades = Game.UpgradesInStore.filter(upgrade =>
            !upgrade.isVaulted() &&
            upgrade.pool != 'toggle' &&
            upgrade.pool != 'debug' &&
            upgrade.pool != 'prestige' &&
            upgrade.getPrice() <= Game.cookies &&
            upgrade.name != 'Chocolate egg'
        );
    
        // Sort upgrades by price
        availableUpgrades.sort((a, b) => a.getPrice() - b.getPrice());

        // Buy the cheapest upgrade
        if (availableUpgrades.length > 0) {
            Game.Notify("Upgrade bought!", 'Bought <b>' + availableUpgrades[0].dname + '</b> for <b>' + Beautify(availableUpgrades[0].getPrice()) + '</b> cookies!', availableUpgrades[0].icon, 10);
            availableUpgrades[0].buy();
        }
    }
}, second * 10);
    



function handleShimmers() {

    IsGoldenClicking = true
    // Assign unique order to each shimmer
    Game.shimmers.forEach((shimmer, index) => {
        shimmer.order = index + 1;
    });

    // Pop shimmers in order after a 2-second delay, every 0.25 seconds
    setTimeout(function() {
        let popInterval = setInterval(function() {
            let shimmerToPop = Game.shimmers.reduce((lowest, shimmer) => {
                return (lowest === null || shimmer.order < lowest.order) ? shimmer : lowest;
            }, null);

            if (shimmerToPop) {
                if ((Game.cookies - (Game.unbuffedCps * 120)) < 0 || (Game.cookies - (Game.cookies / 80)) < 0 || (Game.cookies - (Game.computedMouseCps / 10)) < 0) {

                } else {
                shimmerToPop.pop();
                if (Game.hasBuff('Cookie storm')) { //ton of cookies, don't remove TOO much...
                if (Game.cookiesPs == 0) {
                Game.Spend(Game.computedMouseCps / 10)
                } else {
                Game.Spend(Game.cookies / 90)
                }} else {
                if (Game.cookiesPs == 0) {
                Game.Spend(Game.computedMouseCps / 10)
                } else {
                Game.Spend(Game.unbuffedCps * 60); // Deduct 1 minute of unbuffed CPS
                }
                }
            }
                
            } else {
                clearInterval(popInterval);
                IsGoldenClicking = false
            }
        }, 250); // 0.25 seconds interval
    }, second * 1.5); // 1.5-second initial delay
    
}

// Set interval to check for new shimmers every 5 seconds
setInterval(function() {
    if (Game.Has('Golden clicker [off]') && Game.shimmers.length >= 1 && IsGoldenClicking == false && !Game.Has("Golden switch [off]")) {
    handleShimmers();
    }
}, second * 1.55); // 1.55 seconds interval


/*
    CREDITS AND CHANGELOG/VERSION HISTORY
*/

Game.customInfoMenu.push(() => CCSE.AppendCollapsibleOptionsMenu("MHUU Credits:",

    '<div class="listing">' +
    '</div><div class="subsection update">'+
	'<div class="title">Developer(s)</div>'+
    '<div class="listing">&bull; Gabe - Creator of MHUU</div>'+
    '</div><div class="subsection update">'+
    '<div class="title">Help:</div>'+
    '<div class="listing">&bull; regunkyle (basically reminding me to add compatiblity with mods (by asking the simple question \"does this work with MHUR\", it does now (well it did before, but kinda, I added code to make it more compatible)))</div>'+
    '<div class="listing">&bull; jesys (for telling me that a bug exists, a bug I should\'ve forseen (I mean why would I check an upgrade\'s base price to reduce the price of all other upgrades, if that upgrade\'s base price is going to be set to 0, therefore breaking everything (several checks are in place, this <b>*should*</b> not happen again)))</div>'+
    '<div class="listing">&bull; MaximusGaming (for telling me the existence of two bugs (that should be fixed now))</div>'+
    '<div class="listing">&bull; -=Good=- (for telling me the existence of another bug, which should now be fixed)</div>'+
    '</div><div class="subsection update">'+
	'<div class="title">(not sure what else to put here right now)</div>'+
    '<div class="listing">&bull; No-one else for now (hopefully will add more people :D)</div>'+
    '</div><div class="subsection update">'+
	'<div class="title">Inspiration</div>'+
    '<div class="listing">&bull; RubyChan42 - Creator of the original MHU (basically the whole reason I made this mod</div>'+
    '<div class="listing">&bull; getAtaxi - Creator of MHUr</div>'+
    '<div class="listing">&bull; pause - Creator of EMHU</div>'
));

Game.customInfoMenu.push(() => CCSE.AppendCollapsibleOptionsMenu("MHUU Changelog/Version History:",

    '</div>'+
    '<div class="subsection update small">'+
    '<div class="title">Nov 10th, 2024 - Bug fixing</div>'+
    '<div class="listing">&bull; (hopefully) fixed 3 bugs.</div>'+
    '<div class="listing">&bull; That is it.</div>'+
    '<div class="listing">&bull; The next update of this mod will have to be a full code-rewrite do to the many, MANY bugs it has.</div>'+
    '<div class="listing">&bull; So, let\'s hope I don\'t forget about this mod like I have.</div>'+
    '<div class="listing">&bull; And hope this mod becomes better.</div>'+

    '</div>'+
    '<div class="subsection update small">'+
    '<div class="title">Aug 18th/17th, 2024 - GOLD!!!</div>'+
    '<div class="listing">&bull; Added Two new HUs.</div>'+
    '<div class="listing">&bull; One is based on golden cookies (effects golden cookies based on time machines owned)</div>'+
    '<div class="listing">&bull; The other one makes seasons (natural and forced) twice as long.</div>'+
    '<div class="listing">&bull; And, I think that\'s it...</div>'+
    '<div class="listing">&bull; I really need to get some more ideas SOON. Maybe...</div>'+

    '</div>'+
    '<div class="subsection update small">'+
    '<div class="title">July 14th/15th, 2024 - Few new looks</div>'+
    '<div class="listing">&bull; Added 3 new icons. Two for the wrinkler upgrades.</div>'+
    '<div class="listing">&bull; The third being used for the "Perfect Cookie Selector" mod, along with a new "Perfect" cookie being added upon immolating</div>'+
    '<div class="listing">&bull; That\'s really it. I\'m still waiting for people to suggest things to add.</div>'+
    '<div class="listing">&bull; <small>(if that even does happen)</small></div>'+

    '</div>' + //Why is there a '</div>' right before everything? What does this accomplish? I won't remove it just in case everything breaks. //Remembered why. copied from the original, it started and ended with a '</div>'
    '<div class="subsection update">'+ 
	'<div class="title">July 14th, 2024 - Heralding Compatibility!</div>'+
	'<div class="listing">&bull; Added additonal compatibility with MHUR (I mean there "was some", but not really)</div>'+
    '<div class="listing">&bull; Added 2 new Heralds upgrades, one of them NG+</div>'+
    '<div class="listing">&bull; Probably added some other Heavenly Upgrades that I forgot about.</div>'+
    '<div class="listing">&bull; Removed some Heavenly Upgrades that were to bland to be added, and were already overshadowed by \'More idling\'.</div>'+
    '<div class="listing">&bull; And some other things (such as Wrapping paper costing less, some QoL, etc...)</div>'+
    '<div class="listing">&bull; And wow it has been 16 days since it was published, this update was supposed to go out 6 days ago but it couldn\'t update and I did some other things and nearly forgot to figure out why it\'s erroring when I attempt to update the mod.</div>'+
    '<div class="listing">&bull; Okay, during this time, things have happened, and this update got larger. Before it even released. I should\'ve done small updates... too late for that now.</div>'+
    '<div class="listing">&bull; Revamped Heavenly Baking, now making the player (You) able to choose how many <b>Heavenly Cookies</b> they want.</div>'+
    '<div class="listing">&bull; (meaning You have more control for what you want, which is good)</div>'+
    '<div class="listing">&bull; Re-did Immolation\'s prompt, making it WIDE. And making the tiny icon at the top, no longer tiny, but BIG, in the center, and transparent. Oh also made some of the text in the prompt <span style="animation:rainbowCycle 10.1s Infinite ease-in-out,pucker 0.2s ease-out;">R</span><span style="animation:rainbowCycle 10s Infinite ease-in-out,pucker 0.2s ease-out;">A</span><span style="animation:rainbowCycle 10.2s Infinite ease-in-out,pucker 0.2s ease-out;">I</span><span style="animation:rainbowCycle 10.3s Infinite ease-in-out,pucker 0.2s ease-out;">N</span><span style="animation:rainbowCycle 10.4s Infinite ease-in-out,pucker 0.2s ease-out;">B</span><span style="animation:rainbowCycle 10.5s Infinite ease-in-out,pucker 0.2s ease-out;">O</span><span style="animation:rainbowCycle 10.6s Infinite ease-in-out,pucker 0.2s ease-out;">W</span> <small>(and adding a 2nd prompt asking the player if they\'re sure they want to Immolate)</small></div>'+
    '<div class="listing">&bull; ^ hope it looks better (I do think the WIDE makes it much better, but I\'m mixed about the transparent large icon and the rainbow text.)</div>'+
    //'<div class="listing">&bull; Planning on adding a few new HUs in the same category, although the idea might be a bit too strange, and not really work (as it depends on how powerful it\'s effects is)</div>'+
    //'<div class="listing">&bull; Okay this is probably way too long for a major update, and is not really an update changelog.</div>'+
    //'<div class="listing">&bull; Alright, I am going to comment these 3 out, but the idea is 4-5 or so HUs that add new Golden & Wrath Cookie effects. And roughly 5 or so effects per HU, each with a theme... Though that might be too strange, and make future things harder but, better? I have no idea.</div>'+
    '<div class="listing">&bull; Might remove the extra Wrinkler achievements. (I haven\'t yet, just considering it)</div>'+

	'</div>' +
    '</div><div class="subsection update">'+
	'<div class="title">June 29th, 2024 - MHUU Public Beta launch</div>'+
	'<div class="listing">&bull; Worked on the mod for a couple weeks (like 6 or 7).</div>'+
	'<div class="listing">&bull; Decided to make a Public Beta for it.</div>'+
	'<div class="listing">&bull; Hopefully it goes well?</div>'+
    '<div class="listing">&bull; Have no idea how to save and all of that.</div>'+
    '<div class="listing">&bull; But I hopefully have good enough ideas to outweigh not knowing how to code...</div>'+
    '<div class="listing">&bull; Never coded on a scale like this before.</div>'+
    '<div class="listing">&bull; Hopefully it goes well!</div>'+
	'</div>'
));



/* Please use above or similar to do baking sooner rather than later...
//DID IT, after a while. I'm only adding this comment because, I did it..... still won't remove this.
var oldUpdateMenu = Game.UpdateMenu.bind({});

// Overwrite the old function with my code, but run the copied vanilla code as well, as to preserve functionality
// Will comment out before full release (well, after the actual menu is made. also code taken from Magic8BallButton)
Game.UpdateMenu = () => {
    oldUpdateMenu();
    if (Game.onMenu == 'prefs') {
        let listings = document.getElementsByClassName('listing');
        listings[listings.length - 1].innerHTML += '<a class="option" onclick="bakeHeavenlyChips()">Bake Heavenly Cookies</a><label>(Bake 1/4th of your Heavenly Chips into Heavenly Cookies! <small>(Multiple bakings cannot happen at the same time)</small>)</label><br>';
    }
}
*/

/*var oldUpdateMenu = Game.UpdateMenu.bind({});

// Overwrite the old function with my code, but run the copied vanilla code as well, as to preserve functionality
// Will comment out before full release (well, after the actual menu is made. also code taken from Magic8BallButton)
Game.UpdateMenu = () => {
    oldUpdateMenu();
    if (Game.onMenu == 'prefs') {
        let listings = document.getElementsByClassName('listing');
        listings[listings.length - 1].innerHTML += '<a class="option" onclick="MHUU.save()">Save</a><label>(Bake 1/4th of your Heavenly Chips into Heavenly Cookies! <small>(Multiple bakings cannot happen at the same time)</small>)</label><br>';
        let listings2 = document.getElementsByClassName('listing');
        listings2[listings2.length - 1].innerHTML += '<a class="option" onclick="MHUU.load()">Load</a><label>(Bake 1/4th of your Heavenly Chips into Heavenly Cookies! <small>(Multiple bakings cannot happen at the same time)</small>)</label><br>';
    }
}*/



} // Init/launch done :D



function GainRandomEggs(num) {
    const eggUpgrades = [
        "Chicken egg",
        "Duck egg",
        "Turkey egg",
        "Quail egg",
        "Robin egg",
        "Ostrich egg",
        "Cassowary egg",
        "Salmon roe",
        "Frogspawn",
        "Shark egg",
        "Turtle egg",
        "Ant larva",
        "Golden goose egg",
        "Faberge egg",
        "Wrinklerspawn",
        "Cookie egg",
        "Omelette",
        "Chocolate egg", // It IS an egg, it MUST be included, I am SORRY
        "Century egg",
        "\"egg\""
    ];

    // Filter out already owned upgrades
    let availableEggs = eggUpgrades.filter(egg => !Game.Upgrades[egg].bought && !Game.Upgrades[egg].unlocked);
    console.log(availableEggs)
    // Ensure there are enough available eggs to choose from
    if (availableEggs.length < num) {
        num = availableEggs.length; // Adjust num to the maximum available eggs
    }

    if (availableEggs.length == 1) {
        
    }
    // Function to randomly select unique items from an array
    function chooseRandomly(array, count) {
        let chosenItems = [];
        let copyArray = [...array];

        while (chosenItems.length < count && availableEggs.length > 0) {
            let randomIndex = Math.ceil(Math.random() * availableEggs.length);
            chosenItems.push(availableEggs.splice(randomIndex, 1)[0]);
        }

        return chosenItems;
    }

    // Get the selected random eggs
    let selectedEggs = chooseRandomly(availableEggs, num);

    // Grant the selected upgrades
    selectedEggs.forEach(egg => {
        console.log(egg)
        if (Game.Upgrades[egg] == undefined) {
        Game.Upgrades["Chicken egg"].bought = 1
        } else {
        if (egg !== "Chocolate egg") {
        Game.Upgrades[egg].basePrice = 0
        Game.Upgrades[egg].buy()
        } else {
        Game.Upgrades[egg].unlock();
        }
    }
    });

}




/*#######################

    REINCARNATION

#########################*/

// ACTUALLY DO THE THINGS!!!
function applyHeavenlyUpgrades() {

    if (Game.ascensionMode!=1) {
    
        if(Game.Has('Seasoned seasons')) { //Some more horrid code that I've stolen over here, you can skippeth this!
        	Game.baseSeason='';//halloween, christmas, valentines, fools, easter
            //automatic season detection (might not be 100% accurate)
            var year=new Date().getFullYear();
            var leap=(((year%4==0)&&(year%100!=0))||(year%400==0))?1:0;
            var day=Math.floor((new Date()-new Date(year,0,0))/(1000*60*60*24));
            if (day>=41 && day<=52) Game.baseSeason='valentines';
            else if (day+leap>=90 && day<=95+leap) Game.baseSeason='fools';
            else if (day>=304-7+leap && day<=312+leap) Game.baseSeason='halloween';
            else if (day>=349+leap && day<=365+leap && day<=16+leap) Game.baseSeason='christmas';
            else
            {
                //easter is a pain goddamn
                var easterDay=function(Y){var C = Math.floor(Y/100);var N = Y - 19*Math.floor(Y/19);var K = Math.floor((C - 17)/25);var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;I = I - 30*Math.floor((I/30));I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);J = J - 7*Math.floor(J/7);var L = I - J;var M = 3 + Math.floor((L + 40)/44);var D = L + 28 - 31*Math.floor(M/4);return new Date(Y,M-1,D);}(year);
                easterDay=Math.floor((easterDay-new Date(easterDay.getFullYear(),0,0))/(1000*60*60*24));
                if (day>=easterDay-7 && day<=easterDay+7) Game.baseSeason='easter';
            } //I am not going to do day counting for easter, a +7 should just do the trick.

            Game.getSeasonDuration = function(){ //You might be asking "Why am I just replacing the function, instead of using the custom version of the function, and why do I do this for all of them?"
                //You have a good point, a great point even.
                //I have no clue
                //If it works, it works!!!
                var ret = Game.fps*60*60*24;
                // Game.getSeasonDuration injection point 0
                for(var i in Game.customGetSeasonDuration) ret *= Game.customGetSeasonDuration[i]();
                ret *= 2
                return ret;
            }
        } else {
            Game.baseSeason='';//halloween, christmas, valentines, fools, easter
            //automatic season detection (might not be 100% accurate)
            var year=new Date().getFullYear();
            var leap=(((year%4==0)&&(year%100!=0))||(year%400==0))?1:0;
            var day=Math.floor((new Date()-new Date(year,0,0))/(1000*60*60*24));
            if (day>=41 && day<=46) Game.baseSeason='valentines';
            else if (day+leap>=90 && day<=92+leap) Game.baseSeason='fools';
            else if (day>=304-7+leap && day<=304+leap) Game.baseSeason='halloween';
            else if (day>=349+leap && day<=365+leap) Game.baseSeason='christmas';
            else
            {
                //easter is a pain goddamn
                var easterDay=function(Y){var C = Math.floor(Y/100);var N = Y - 19*Math.floor(Y/19);var K = Math.floor((C - 17)/25);var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;I = I - 30*Math.floor((I/30));I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);J = J - 7*Math.floor(J/7);var L = I - J;var M = 3 + Math.floor((L + 40)/44);var D = L + 28 - 31*Math.floor(M/4);return new Date(Y,M-1,D);}(year);
                easterDay=Math.floor((easterDay-new Date(easterDay.getFullYear(),0,0))/(1000*60*60*24));
                if (day>=easterDay-7 && day<=easterDay) Game.baseSeason='easter';
            }

            Game.getSeasonDuration = function(){
                var ret = Game.fps*60*60*24;
                // Game.getSeasonDuration injection point 0
                for(var i in Game.customGetSeasonDuration) ret *= Game.customGetSeasonDuration[i]();
                return ret;
            }
        }
    

//Do non-immolation upgrades


   

   /*if(Game.Has('Rigidel')){
    if (Game.BuildingsOwned%10==0) {
        Game.ComputeLumpTimes
        {
            Game.lumpRipeAge-=hour;
        }
    }
   }*/



    if(Game.Has("Wrathly key")) Game.Upgrades["One mind"].basePrice /= 2


   if(Game.Has('Unshackled cookie')) UnshackledC = [];
   if(Game.Has('Unshackled upgrades')) UnshackledU = [];




   Game.GetHeavenlyMultiplier()
//    if (Game.ObjectsById.some(building => building.amount > 0)) {
//     Game.BuildStore();
//     } else {
//         console.log("No buildings owned; skipping Game.BuildStore() to prevent crash.");
//     }
   Game.BuildAscendTree()
   }
};

    let HCprice = 150
    let Name = 'Price decrease'
function loadMHUUShop() {


    CCSE.NewUpgrade("Price decrease", 'Decreases the priceIncrease by 0.01', 0, [10, 0], MHUUPriceDecrease());
    Game.Upgrades["Price decrease"].unlock()
    Game.last.pool = 'toggle'
}

function MHUUPriceDecrease() {
    if (Game.priceIncrease <= 1.1) {
        Game.priceIncrease = 1.10
        Game.Notify("Cannot buy", "Price has been sufficiently decreased to <b>" + Game.priceIncrease + "</b>, so it cannot decrease further.", [10, 0], 555);
    } else {
    if (Game.heavenlyCookies >= HCprice) {
        Game.heavenlyCookies -= HCprice
        Game.priceIncrease -= 0.01
        Game.Notify("Bought!", "Bought " + Name + " for " + HCprice + " Heavenly Cookies. Price is now " + Math.floor(HCprice * 1.55) + " Heavenly Cookies.", [10, 0], 555)
        HCprice = Math.floor(HCprice * 1.55)
        Game.Upgrades["Price decrease"].bought = 0
    } else {
        Game.Notify("Cannot buy", "Not enough Heavenly Cookies to purchase " + Name + " Heavenly Cookies. Need " + HCprice + ", but have " + Game.heavenlyCookies + ".", [10, 0], 555)
        Game.Upgrades["Price decrease"].bought = 0
    }
  }
//   if (Game.ObjectsById.some(building => building.amount > 0)) {
//     Game.BuildStore();
//     } else {
//         console.log("No buildings owned; skipping Game.BuildStore() to prevent crash.");
//     }

  }

function checkChips() {
    if (Game.heavenlyChips <= -1) {
        Game.Notify("Uh oh...", "It appears you have negative heavenly chips... This is most likely an error due to adding more Heavenly Upgrades (common issue (I think))<br> I don't know how to fix it, besides this.<br><br>As you have negative heavenly chips, I'm simply going to set your Heavenly Chips to 0. You might have had more, so I'm sorry...<q><b>I am really sorry about this... I really am...</b></q>", [10, 0], 55);
        Game.heavenlyChips = 0
    }
}

function checkPrest() {
    if (Game.prestige <= -1) {
        Game.Notify("Uh oh...", "So, your prestige is a little bit low... Negative type of low. So, instead of setting it to 0 or whatever, I'm just gonna, remove the - sign...<small>(meaning it'd be the absolute value of your prestige)</small><q><b>Again, sorry, this is due to an error and/or a mod (maybe even mine)</b></q>", [10, 0], 55);
        Game.prestige = Math.abs(Game.prestige)
    }
}

function MHUUcheckachievs() {

    /*let activeWrinklers = Game.wrinklers.filter(wrinkler => wrinkler.close == 1).length;
    
    if (activeWrinklers >= 1 && !Game.HasAchiev('Ew...')) {
        Game.Win('Ew...');
    }
    if (activeWrinklers >= 5 && !Game.HasAchiev('Yuck...')) {
        Game.Win('Yuck...');
    }
    if (activeWrinklers >= 10 && !Game.HasAchiev('Disgust...')) {
        Game.Win('Disgust...');
    }
    if (activeWrinklers >= 15 && !Game.HasAchiev('Bleh...')) {
        Game.Win('Bleh...');
    }
    if (activeWrinklers >= 20 && !Game.HasAchiev('Revolting!')) {
        Game.Win('Revolting!');
    }*/

    if (Game.HasAchiev("Automatic cookies taste bland") != 1) {
        if (Game.Has('Building overseer [off]') && Game.Has('Upgrade manager [off]') && Game.Has('Ascended baking pod [off]') && Game.Has('Golden clicker [off]')) {
            Game.Win('Automatic cookies taste bland')
        }
    }

    if (Game.HasAchiev("Burnt out") != 1) {
        for (var i = 0; i < MHUUHeavenlyUpgrades.length; i++) {
            var upgradeName = MHUUHeavenlyUpgrades[i];
            var upgrade = Game.Upgrades[upgradeName];
    
            if (!upgrade || !upgrade.bought) {
                //HA
            } else if (upgrade || upgrade.bought) {
                TotalMHUUUOwnedButNotActually += 1    
            }
        }
        if (TotalMHUUUOwnedButNotActually >= TotalMHUUU) {
            Game.Win('Burnt out') // If all upgrades are bought, return true
            Game.Notify('More Heavenly Upgrades Upgraded has been FULLY COMPLETED!!!', 'Thou hath free\'d self but temporarily. <q><b> Now please go outside, touch grass, maybe even say "Hello!" to your family, partner even (if applicable).<br><br>Oh, before I forget, you should also tell me your experience about the mod! It\'d be greatly appreciated!</b></q>', [21, 1], 55555555)
            console.log("Thank you for playing More Heavenly Upgrades Upgraded")
            console.log("Now that you have finished, please tell me your experience by commenting on the mod in the Steam workshop.")
            console.log("(also give some suggestions if possible)")
            console.log("Again, thanks!!!")
            //Game.Notify("Well...", 'There <b>is</b> one shadow achievement that is fully completing it... Having every achievement and shadow achievement (excluding that one) is how you unlock it... So \"techincally\" you haven\'t fully completed MHUU, but if you don\'t want to get those shadow achievements then you can say you fully completed it, as you did (when excluding shadow achievements that are meant to be unfair/impossible to get)', [0, 0, Greg], 55555);

        }
        TotalMHUUUOwnedButNotActually = 0
      }
      


    if (Game.HasAchiev("Baker") != 1 && TimesBaked >= 1) {
        Game.Win('Baker')
    }

    if (Game.HasAchiev("Baker(y)") != 1 && TimesBaked >= 10) {
        Game.Win('Baker(y)')
    }

    if (Game.HasAchiev("Bake(ning)") != 1 && TimesBaked >= 50) {
        Game.Win('Bake(ning)')
    }

    if (Game.HasAchiev("Baking addict") != 1 && TimesBaked >= 100) {
        Game.Win('Baking addict')
    }

    if (Game.HasAchiev("True baker") != 1 && TimesBaked >= 5000 && TotalTimeSpentBaking >= (((86400 * 30) * 12) * 2)) {
        Game.Win('True baker')
    }

    if (Game.HasAchiev("Well then...") != 1 && HighestTimeBaking >= 86400) {
        Game.Win('Well then...')
    }

    if (Game.HasAchiev("Alrighty then...") != 1 && HighestTimeBaking >= (86400 * 7)) {
        Game.Win('Alrighty then...')
    }

    if (Game.HasAchiev(".....") != 1 && HighestTimeBaking >= (86400 * 30)) {
        Game.Win('.....')
    }

    if (Game.HasAchiev("!!!") != 1 && HighestTimeBaking >= ((86400 * 30) * 3)) {
        Game.Win('!!!')
    }

    if (Game.HasAchiev("...oh no") != 1 && HighestTimeBaking >= ((86400 * 30) * 12)) {
        Game.Win('...oh no')
    }

    if (Game.HasAchiev("Alright!") != 1 && TotalTimeSpentBaking >= 86400) {
        Game.Win('Alright!')
    }

    if (Game.HasAchiev("Wait...") != 1 && TotalTimeSpentBaking >= (86400 * 7)) {
        Game.Win('Wait...')
    }

    if (Game.HasAchiev("Ah <div style='display:inline-block;background:url(img/money.png);width:16px;height:16px;position:relative;top:4px;left:0px;margin:0px -2px;'></div>") != 1 && TotalTimeSpentBaking >= ((86400 * 7) * 4)) {
        Game.Win("Ah <div style='display:inline-block;background:url(img/money.png);width:16px;height:16px;position:relative;top:4px;left:0px;margin:0px -2px;'></div>")
    }

    if (Game.HasAchiev("Huh...") != 1 && TotalTimeSpentBaking >= ((86400 * 30) * 3)) {
        Game.Win('Huh...')
    }

    if (Game.HasAchiev("Wait of the world") != 1 && TotalTimeSpentBaking >= ((86400 * 30) * 12)) {
        Game.Win('Wait of the world')
    }

    if (Game.HasAchiev("What happened?") != 1 && (Game.heavenlyCookies > Game.heavenlyChips)) {
        Game.Win("What happened?")
    }

    if (Game.HasAchiev("WHAT!?") != 1 && (Game.heavenlyCookies > (Game.heavenlyChips *2))) {
        Game.Win("WHAT!?")
    }

    if (Game.HasAchiev("Oops! all cookies!") != 1 && (Game.heavenlyCookies > Game.prestige)) {
        Game.Win("Oops! all cookies!")
    }
/*
    if (Game.HasAchiev("Fully done...") != 1) {
        Game.Win("Fully done...")
        //Game.Notify("You really did it.", "You did every singular thing there was to do in this stupid lil' mod.<br>Are you proud?<br>Is there pride?<br>Anguish?<br>What do you feel?<br>Yes, you can brag about it.<br>But do others know you did it?<br><br>and how fast can you?<br>While yes there may be no reason to speedrun a mod like this it is theoretically an option, no reward(s) will be given, infact not much will.<br>Just statisfaction, that you speedran a Cookie Clicker mod, and have undeniable proof of it.<br>Rules?<br>0: Normal rules would still apply (see speedrun.com's cookie clicker) 1: Have CCSE and MHUU installed as mods.<br>2: No other mods are allowed unless shown that they only impact the game via sprite changes, music changes, or otherwise, no new upgrades, achievements, any of that, done by showing the files and code within before the run of each used mod (including CCSE and MHUU).<b><u>RUNS:</u></b><br>Burnt%/Any% - Get 'Burnt out' in any way possible that follows the above rules.<br> Immolate% - Get 'Immolated' in any way possible that follows the above rules.<br> 100% - Get THIS achievement, being 'Fully done...' while still following the above rules.<q>Did I really just write speedrun rules for a Cookie Clicker mod?</q>", [10, 0], 5555555555);
        //console.log("<br>Rules?<br>1: Have CCSE and MHUU installed as mods.<br>2: No other mods are allowed unless shown that they only impact the game via sprite changes, music changes, or otherwise, no new upgrades, achievements, any of that.<br>3: You must get 1 of three achievements, depending on the type of run.<br>4: If you at any point get the shadow achievement 'Cheated cookies taste awful', the 'Ruin the fun' notification, have the debug mode open, and/or any debug upgrades, your run is disqualified.<br>5: The timer starts upon clicking the cookie, golden cookie, reindeer, and anything that acts similar to the above.<br> <b><u>RUNS:</u></b><br>Burnt%/Any% - Get 'Burnt out' in any way possible that follows the above rules.<br> Immolate% - Get 'Immolated' in any way possible that follows the above rules.<br> 100% - Get THIS achievement, being 'Fully done...' while still following the above rules.")
    }

*/
}

function updateWrinklerLimit(newLimit) {
    // Step 1: Filter the wrinklers that are currently active (close > 0 and phase > 0)
    const activeWrinklers = Game.wrinklers.filter(wrinkler => wrinkler.close > 0 && wrinkler.phase > 0);

    // Step 2: Set the new wrinkler limit
    Game.wrinklerLimit = newLimit;

    // Step 3: Clear the current wrinklers array
    Game.wrinklers = [];

    // Step 4: Initialize the wrinklers with the new limit
    for (var i = 0; i < Game.wrinklerLimit; i++) {
        Game.wrinklers.push({
            id: parseInt(i),
            close: 0,
            sucked: 0,
            phase: 0,
            x: 0,
            y: 0,
            r: 0,
            hurt: 0,
            hp: Game.wrinklerHP,
            selected: 0,
            type: 0,
            clicks: 0
        });
    }

    // Step 5: Reassign the saved active wrinklers back into the Game.wrinklers array
    activeWrinklers.forEach(wrinkler => {
        if (wrinkler.id < Game.wrinklerLimit) {
            Game.wrinklers[wrinkler.id] = wrinkler;
        }
    });
}

Game.registerHook('reincarnate', function() {

    if (Game.ascensionMode == 0) {
    setTimeout(applyHeavenlyUpgrades(), second * 1.5)
    UnshackledC = [];
    Consoled = 0
    EMA = 0
    if (Game.Has('Mystery egg')){
        GainRandomEggs(3)
    }
    if (Game.Has("More idling")) {
    Game.Earn(Math.floor(Gold / 100))
    Game.Notify("Gold!!!", "<b>" + Beautify(Gold) + "</b> gold converted into <b>"+ Beautify(Math.floor(Gold / 100)) +"</b> cookies!", [25,11], 50)
    Gold = 0
    } else {
        Gold = 0
    }

    //if(Game.Has('Re-baked')) Game.Earn (1000000)
    //if(Game.Has('Un-baked')) Game.Earn (1000000000)
    //if(Game.Has('Risen')) Game.Earn (1000000000000)
    //if(Game.Has('Abyss')) Game.Earn (1000000000000000)
    
    if (Game.Has("Grandma's pocalypse")) {

        Game.Upgrades["Bingo center/Research facility"].basePrice = 0
        Game.Upgrades["Bingo center/Research facility"].buy(1)

        Game.Notes.forEach(note => {
            if (note.title == "Research has begun") {
                Game.CloseNote(note.id)
            }
        });

        Game.Upgrades["Specialized chocolate chips"].basePrice = 0
        Game.Upgrades["Specialized chocolate chips"].buy(1)

        Game.Notes.forEach(note => {
            if (note.title == "Research has begun") {
                Game.CloseNote(note.id)
            }
        });

        Game.Upgrades["Designer cocoa beans"].basePrice = 0
        Game.Upgrades["Designer cocoa beans"].buy(1)

        Game.Notes.forEach(note => {
            if (note.title == "Research has begun") {
                Game.CloseNote(note.id)
            }
        });


        Game.SetResearch("Ritual rolling pins")
    }
    
    if (Game.Has("Wrathly key")) {

        Game.Notes.forEach(note => {
            if (note.title == "Research has begun") {
                Game.CloseNote(note.id)
            }
        });

        Game.Upgrades["Ritual rolling pins"].basePrice = 0
        Game.Upgrades["Ritual rolling pins"].buy()

        Game.Notes.forEach(note => {
            if (note.title == "Research has begun") {
                Game.CloseNote(note.id)
            }
        });

        Game.Upgrades["Underworld ovens"].basePrice = 0
        Game.Upgrades["Underworld ovens"].buy()

        Game.Notes.forEach(note => {
            if (note.title == "Research has begun") {
                Game.CloseNote(note.id)
            }
        });

        Game.Upgrades["One mind"].basePrice /= 2
        Game.Upgrades["One mind"].unlock()
    }

       if (Game.Has('Starter kit')) {
        Game.Objects["Cursor"].getFree(10)
        Game.Objects["Cursor"].free = 20
    }
       if (Game.Has('Starter kitchen')) {
        Game.Objects["Grandma"].getFree(5)
        Game.Objects["Cursor"].free = 10
    }
       if (Game.Has('Starter depth')) {
        Game.Objects["Mine"].getFree(5)
        Game.Objects["Mine"].free = 5
    }
       if (Game.Has('Starter gears')) {
        Game.Objects["Factory"].getFree(2)
        Game.Objects["Factory"].free = 2
    }
       if (Game.Has('Starter stocks')) {
        Game.Objects["Bank"].getFree(1)
        Game.Objects["Bank"].free = 1
    }
    
       if (Game.Has('Cursor bundle')){
        Game.Upgrades['Reinforced index finger'].basePrice = 0;
        Game.Upgrades['Carpal tunnel prevention cream'].basePrice = 0;
        Game.Upgrades['Ambidextrous'].basePrice = 0;
        Game.Upgrades['Thousand fingers'].basePrice = 0;
        Game.Upgrades['Million fingers'].basePrice = 0;

        Game.Upgrades['Reinforced index finger'].buy()
        Game.Upgrades['Carpal tunnel prevention cream'].buy()
        Game.Upgrades['Ambidextrous'].buy()
        Game.Upgrades['Thousand fingers'].buy()
        Game.Upgrades['Million fingers'].buy()
       }
       if (Game.Has('Instant bakery')){
        Game.Upgrades['Forwards from grandma'].basePrice = 0;
        Game.Upgrades['Steel-plated rolling pins'].basePrice = 0;
        Game.Upgrades['Cookie crumbs'].basePrice = 0;
        Game.Upgrades['Plain cookies'].basePrice = 0;
        Game.Upgrades['Sugar cookies'].basePrice = 0;
        Game.Upgrades['Oatmeal raisin cookies'].basePrice = 0;

        Game.Upgrades['Forwards from grandma'].buy()
        Game.Upgrades['Steel-plated rolling pins'].buy()
        Game.Upgrades['Cookie crumbs'].buy()
        Game.Upgrades['Plain cookies'].buy()
        Game.Upgrades['Sugar cookies'].buy()
        Game.Upgrades['Oatmeal raisin cookies'].buy()
       }
    
       if (Game.Has('Greener pastures')){
        let Me = Game.prestige * 0.00001;
        let me = Math.floor(Me)
        if (Game.Has("Chimera")) {
        if (me > 60) me = 60
        } else {
        if (me > 30) me = 30
        }
    
        console.log(me, Me)
        Game.Objects['Farm'].getFree(me);
       }
    
       if (Game.Has('Gardened cookies')) {
        Game.Upgrades['Cheap hoes'].basePrice = 0;
        Game.Upgrades['Fertilizer'].basePrice = 0;
        Game.Upgrades['Cookie trees'].basePrice = 0;

        Game.Upgrades['Cheap hoes'].buy()
        Game.Upgrades['Fertilizer'].buy()
        Game.Upgrades['Cookie trees'].buy()
    
       }
    
       if (Game.Has('5-Step drill')) {
        Game.Upgrades['Sugar gas'].basePrice = 0;
        Game.Upgrades['Megadrill'].basePrice = 0;
    
        Game.Upgrades['Billion fingers'].basePrice = 0;
        Game.Upgrades['Lubricated dentures'].basePrice = 0;
        Game.Upgrades['Genetically-modified cookies'].basePrice = 0;


        Game.Upgrades['Sugar gas'].buy()
        Game.Upgrades['Megadrill'].buy()
    
        Game.Upgrades['Billion fingers'].buy()
        Game.Upgrades['Lubricated dentures'].buy()
        Game.Upgrades['Genetically-modified cookies'].buy()
       }
    
       if (Game.Has('Tool box')) {
        Game.Upgrades['Sturdier conveyor belts'].basePrice = 0;
        Game.Upgrades['Child labor'].basePrice = 0;
    
        Game.Upgrades['Ultradrill'].basePrice = 0;
        Game.Upgrades['Ultimadrill'].basePrice = 0;
        Game.Upgrades['H-bomb mining'].basePrice = 0;


        Game.Upgrades['Sturdier conveyor belts'].buy()
        Game.Upgrades['Child labor'].buy()
    
        Game.Upgrades['Ultradrill'].buy()
        Game.Upgrades['Ultimadrill'].buy()
        Game.Upgrades['H-bomb mining'].buy()
    
       }
    
       if (Game.Has('Stocked stocks')) {
        Game.Upgrades['Taller tellers'].basePrice = 0;
        Game.Upgrades['Scissor-resistant credit cards'].basePrice = 0;
        Game.Upgrades['Acid-proof vaults'].basePrice = 0;
        Game.Upgrades['Trillion fingers'].basePrice = 0;
        Game.Upgrades['Quadrillion fingers'].basePrice = 0;
        Game.Upgrades['Prune juice'].basePrice = 0;
        Game.Upgrades['Double-thick glasses'].basePrice = 0;
        Game.Upgrades['Gingerbread scarecrows'].basePrice = 0;
        Game.Upgrades['Pulsar sprinklers'].basePrice = 0;
        Game.Upgrades['Sweatshop'].basePrice = 0;
        Game.Upgrades['Radium reactors'].basePrice = 0;

        Game.Upgrades['Taller tellers'].buy()
        Game.Upgrades['Scissor-resistant credit cards'].buy()
        Game.Upgrades['Acid-proof vaults'].buy()
        Game.Upgrades['Trillion fingers'].buy()
        Game.Upgrades['Quadrillion fingers'].buy()
        Game.Upgrades['Prune juice'].buy()
        Game.Upgrades['Double-thick glasses'].buy()
        Game.Upgrades['Gingerbread scarecrows'].buy()
        Game.Upgrades['Pulsar sprinklers'].buy()
        Game.Upgrades['Sweatshop'].buy()
        Game.Upgrades['Radium reactors'].buy()
       }
    
       if (Game.Has('Job application')){
        Game.Upgrades['Farmer grandmas'].basePrice = 0;
        Game.Upgrades['Miner grandmas'].basePrice = 0;
        Game.Upgrades['Worker grandmas'].basePrice = 0;
        Game.Upgrades['Banker grandmas'].basePrice = 0;
        Game.Upgrades['Priestess grandmas'].basePrice = 0;

        Game.Upgrades['Farmer grandmas'].buy()
        Game.Upgrades['Miner grandmas'].buy()
        Game.Upgrades['Worker grandmas'].buy()
        Game.Upgrades['Banker grandmas'].buy()
        Game.Upgrades['Priestess grandmas'].buy()
       }
    
       if (Game.Has('Santa\'s ultimatum')){
        Game.Upgrades['A festive hat'].basePrice = 0
        Game.Upgrades['A festive hat'].buy()
        Game.santaLevel = 10
        function OHNO() {
        var drops=[];
        for (var i in Game.santaDrops) {if (!Game.HasUnlocked(Game.santaDrops[i])) drops.push(Game.santaDrops[i]);}
        var drop=choose(drops);
        if (drop)
        {
            Game.Unlock(drop);
        }
        }
        OHNO()
        OHNO()
        OHNO()
        OHNO()
        OHNO()
        OHNO()
        OHNO()
        OHNO()

        //probably a better and faster way of doing this... Eh
       }
    
       if (Game.Has('Cookie?')) {
        Game.Upgrades['Peanut butter cookies'].basePrice = 0;
        Game.Upgrades['Coconut cookies'].basePrice = 0;
        Game.Upgrades['Macadamia nut cookies'].basePrice = 0;
        Game.Upgrades['Almond cookies'].basePrice = 0;
        Game.Upgrades['Hazelnut cookies'].basePrice = 0;
        Game.Upgrades['Walnut cookies'].basePrice = 0;
        Game.Upgrades['Cashew cookies'].basePrice = 0;
        Game.Upgrades['White chocolate cookies'].basePrice = 0;
        Game.Upgrades['Milk chocolate cookies'].basePrice = 0;
        Game.Upgrades['Double-chip cookies'].basePrice = 0;
        
        Game.Upgrades['Peanut butter cookies'].buy()
        Game.Upgrades['Coconut cookies'].buy(1)
        Game.Upgrades['Macadamia nut cookies'].buy(1)
        Game.Upgrades['Almond cookies'].buy(1)
        Game.Upgrades['Hazelnut cookies'].buy(1)
        Game.Upgrades['Walnut cookies'].buy(1)
        Game.Upgrades['Cashew cookies'].buy(1)
        Game.Upgrades['White chocolate cookies'].buy(1)
        Game.Upgrades['Milk chocolate cookies'].buy(1)
        Game.Upgrades['Double-chip cookies'].buy(1)
       }

    }
        Gold = 0
    
});



Game.registerHook('check', function () {
    if (TotalHeavenlyCookies < Game.heavenlyCookies) {
        TotalHeavenlyCookies = Game.heavenlyCookies
    }
    MHUUcheckachievs()

    if (Game.Has('Gardened cookies')) {
        
    if (Game.Objects['Farm'].minigameLoaded) {
        if (!Game.Objects["Farm"].minigame.plants['thumbcorn'].unlocked) Game.Objects["Farm"].minigame.unlockSeed(Game.Objects["Farm"].minigame.plants['thumbcorn']);
        if (!Game.Objects["Farm"].minigame.plants['cronerice'].unlocked) Game.Objects["Farm"].minigame.unlockSeed(Game.Objects["Farm"].minigame.plants['cronerice']);
        if (!Game.Objects["Farm"].minigame.plants['meddleweed'].unlocked) Game.Objects["Farm"].minigame.unlockSeed(Game.Objects["Farm"].minigame.plants['meddleweed']);
        if (!Game.Objects["Farm"].minigame.plants['bakeberry'].unlocked) Game.Objects["Farm"].minigame.unlockSeed(Game.Objects["Farm"].minigame.plants['bakeberry']);
        if (!Game.Objects["Farm"].minigame.plants['brownMold'].unlocked) Game.Objects["Farm"].minigame.unlockSeed(Game.Objects["Farm"].minigame.plants['brownMold']);

    }

    }


    //Brilliancy()


});




Game.registerHook('create', function() {
    setTimeout(function() {
    if (Game.permanentUpgrades.length < 7) {
        // Add extra slots as needed
        while (Game.permanentUpgrades.length < 7) {
            Game.permanentUpgrades.push(-1);
        }
    }
    updateWrinklerLimit(20);




    //loadMHUUShop()
    applyHeavenlyUpgrades()

    //This is done as MHUR has code that retrieves the "realHeavenlyChips", although some things in my mod conflict with it.
    //That is because it takes the price of all the HUs you've bought (their Base Price), tallies them up.
    //Then sets your Heavenly Chips, to your Prestige minus the total cost of all the HUs.
    //So if you have more Heavenly Chips than prestige or whatever, then you'll be going into the negatives.
    //Honestly no idea why

        //Time to undo that custom Ascend from MHUR, as it breaks some of my things...
        //And yes I am sorry for doing this.
        if (Game.customAscend.toString().includes("realHeavenlyChips")) {
        console.log("FOUND IT")
        let thefunc = Game.customAscend.findIndex(func => func.name === 'realHeavenlyChips');
        Game.customAscend[thefunc] = function() {
        console.log('"I have killed this function" - Gabe (because the function was from MHUR, and it conflicted with some of MHUU\'s things, so it had to be killed, I am sorry)')
        }
        console.log("KILLED IT")
        }


    // doin this for added compatibility...
if (Game.mods['More Heavenly Upgrades Remastered'] && Game.Upgrades["NewGamePlus"]) {
    console.log("Compatiblity Time!!! :D")
    newGamePlus = Game.Upgrades["NewGamePlus"]

    const NGPAchievements = {
        '1': 'New Game+',
        '2': 'New Game+2',
        '3': 'New Game+3',
        '4': 'New Game+4',
        '5': 'New Game+5',
        '6': 'New Game+6',
        '7': 'New Game+7',
    }
    
    //Done as adding new Achievements for some reason puts them right in the middle of nowhere (if you don't manually set it's order)... So if I'm adding compatibility might as well add a bit more, basic things (nothing could go wrong, right?)
    Game.Achievements["New Game+"].order = (ORDER - 100000)
    ORDER += 0.001
    Game.Achievements["New Game+2"].order = (ORDER - 100000)
    ORDER += 0.001
    Game.Achievements["New Game+3"].order = (ORDER - 100000)
    ORDER += 0.001
    Game.Achievements["New Game+4"].order = (ORDER - 100000)
    ORDER += 0.001
    Game.Achievements["New Game+5"].order = (ORDER - 100000)
    ORDER += 0.001
    Game.Achievements["New Game+6"].order = (ORDER - 100000)
    ORDER += 0.001
    Game.Achievements["New Game+7"].order = (ORDER - 100000)
    ORDER += 0.001

    
    function calculateNGPCycle () {
        let ngpCycle = 0;
        const keys = Object.keys(NGPAchievements).sort((a, b) => a - b);
        for (let i = 0; i < keys.length; i++) {
            if (!Game.HasAchiev(NGPAchievements[keys[i]])) {
                ngpCycle = parseInt(keys[i]) - 1;
                break;
            }
            if (i === keys.length - 1) {
                ngpCycle = parseInt(keys[i]);
            }
        }
        return ngpCycle;
    }
    
    Game.Upgrades["NewGamePlus"].ddesc = "Again!<div class=\"line\"></div><b><u>MHUU:</u></b> don't worry, just added some more compatibility with the mod, so not much really \"changed\". So go on with your day!"
    newGamePlus.descFunc = function () { 
        let str = '';
        let amount = 1;
        Object.values(NGPAchievements).forEach((e) => {
            if (Game.HasAchiev(e)) {
                str += CCSE.MenuHelper.TinyIcon(Game.Achievements[e].icon);
                amount++;
            }
        });
        let lastDigit = amount % 10;
        let lastTwoDigits = amount % 100;
        if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
            amount = amount.toString() + "th";
        } else {
            switch (lastDigit) {
                case 1:
                    amount = amount.toString() + "st";
                    break;
                case 2:
                    amount = amount.toString() + "nd";
                    break;
                case 3:
                    amount =  amount.toString() + "rd";
                    break;
                default:
                    amount =  amount.toString() + "th";
            }
        }
        return ('<div style="text-align:center;">' +
        str + '<br>' +
        'You are on your <b>' + amount + ' journey</b> to uncover the truth about cookies.<br>' +
        'You can start another journey once you\'ve purchased all heavenly upgrades.<br>'+
        '<div class="line"></div>'+
        'All <b>heavenly upgrades</b> will be sacrificed.<br>All your <b>prestige</b> will be sacrificed.<br>All <b>cookie related stats</b> will be reset.' +
        '<div class="line"></div>' + 
        'For each new journey started, you will gain a permanent <b>cookie production multiplier</b>.</br><u>All heavenly upgrades will become more expensive.</u>' +
        '<div class="line"></div>' + 
        '<b><u>MHUU:</u></b> added compatibility (as in MHUU works better with MHUR).'
    )}
    Game.Upgrades["NewGamePlus"].order = 1

    newGamePlus.basePrice = 0 //Why make it cost 1? Also, looks a bit cleaner, although that is my opinion, and I may be biased. But, it doesn't change anything as you can only buy it if you have every HU.
    
    newGamePlus.canBuyFunc = function () {
        let totalPrestigeUpgrades = 0;
        let currentPrestigeUpgrades = 0; 
        for (let i in Game.Upgrades) {
            if (Game.Upgrades[i].pool == 'prestige') {
                totalPrestigeUpgrades++;
                if (Game.Has(Game.Upgrades[i].name)) currentPrestigeUpgrades++;
            }
        }
        return totalPrestigeUpgrades === currentPrestigeUpgrades;
    };

    newGamePlus.clickFunction = function (sure) {
        if (!this.canBuyFunc()) return;
        if (!sure) {
            Game.Prompt(
              '<id NewGamePlus><h3>' + "Start your next journey?" + '</h3>' +
              '<div class="block">' +
              tinyIcon([19, 7]) +
              '<div class="line"></div>' +
              "Do you REALLY want to start a new Game?<div class=\"line\"></div>You will lose ALL your heavenly upgrades and prestige. Your cookie production stats will be reset.<div class=\"line\"></div>You will gain a boost to your CpS but all heavenly upgrades will be more expensive!" +
              '<div class="line"></div>' +
                "You will keep your achievements, building levels and sugar lumps." +
              '<div class="optionBox">' +
              '<a class="option smallFancyButton" style="margin:16px;padding:8px 16px;animation:rainbowCycle 5s infinite ease-in-out,pucker 0.2s ease-out;box-shadow:0px 0px 0px 1px #000,0px 0px 1px 2px currentcolor;background:linear-gradient(to bottom,transparent 0%,currentColor 500%);width:auto;text-align:center;" ' + Game.clickStr + '="PlaySound(\'snd/tick.mp3\');Game.ClosePrompt();Game.Upgrades.NewGamePlus.clickFunction(1);" id="promptOption0">' + "Again!" + '</a>' +
              '</div>' +
              '</div>',
              [
                ["Yes", 'Game.ClosePrompt();Game.Upgrades.NewGamePlus.clickFunction(1);', 'float:left;display:none;'],
                ["Cancel", 0, 'float:right']
              ]
            );
        } else {
            if (Game.Has('"egg"')) Game.Lock('"egg"'); //probably for debugging...
            Game.ObjectsById.forEach(building => building.amount = 0);
            Game.ObjectsById.forEach(building => building.free = 0);
            Game.cookies = 0;
            Game.cookiesEarned = 0;
            Game.cookiesReset = 0;
            Game.heavenlyChips = 0;
            Game.heavenlyCookies = 0;
            Game.prestige = 0;
            Game.permanentUpgrades = [-1, -1, -1, -1, -1, -1, -1];
            for (let i in Game.Upgrades) {
                if (Game.Upgrades[i].pool == 'prestige' && Game.Has(Game.Upgrades[i].name) && !HUsNoRemove.includes(Game.Upgrades[i].name)) { //The reason why I added the !HUsNoRemove part, is "If my NG+ doesn't remove it, then why does this NG+ that I'm adding compatibility have to remove it? And plus, it's basic customization (and a few other things), so why not add that check!".
                    Game.Lock(Game.Upgrades[i].name);
                }
            }
            Game.Ascend(true); //I could remove this but no. But why include it if you're already manually resetting the Buildings? It doesn't make sense. Though that is my opinion.
            if (NGPAchievements[(calculateNGPCycle() + 1).toString()]) {
                Game.Win(NGPAchievements[(calculateNGPCycle() + 1).toString()]);
                for (let i in Game.Upgrades) {
                    if (Game.Upgrades[i].pool == 'prestige') {
                        Game.Upgrades[i].basePrice = Math.ceil(Game.Upgrades[i].basePrice * heavenlyUpgradePow);
                    }
                }
            }
        }
    };
}

}, second * 5) //5 seconds

setTimeout(function () {
    /*
        REORDERMENT
    */
    //This is done to make the HUs look more implemented/seamless in the game.
    //So those UPGRADE BUNDLES/STARTER BUNDLES are all next to the original game's kits/bundles... :D
    

    
    Game.Upgrades["Keepsakes"].posX = -982
    Game.Upgrades["Keepsakes"].posY = -348
    
    Game.Upgrades["Eternal seasons"].icon = [3,6,Greg] //Why not!
    
    Game.Upgrades["Wrapping paper"].basePrice = 350 //Because COME ON JUST MAKE IT CHEAPER ALREADY!!!
    
    Game.Upgrades["Fortune cookies"].order = 282.0061 //Literally just 0.00000000 whatever 2 higher.
    //Bit longer now. .001 ish higher!

    if (Game.mods["Decide Your Destiny"]) {
        Game.Upgrades["Destiny: Decided"].posX += 238
        Game.Upgrades["Destiny: Decided"].posY -= 144

        Game.Upgrades["Destiny: Architecture"].posX += 238
        Game.Upgrades["Destiny: Architecture"].posY -= 144

        Game.Upgrades["Destiny: Fantasy"].posX += 238
        Game.Upgrades["Destiny: Fantasy"].posY -= 144

        Game.Upgrades["Destiny: Scattershot"].posX += 238
        Game.Upgrades["Destiny: Scattershot"].posY -= 144

        Game.Upgrades["Destiny: Carpal tunnel"].posX += 238
        Game.Upgrades["Destiny: Carpal tunnel"].posY -= 144

        Game.Upgrades["Destiny: Misfortune"].posX += 238
        Game.Upgrades["Destiny: Misfortune"].posY -= 144

        Game.Upgrades["Destiny: Apocalypse"].posX += 238
        Game.Upgrades["Destiny: Apocalypse"].posY -= 144

        Game.Upgrades["Destiny: Whimsy"].posX += 238
        Game.Upgrades["Destiny: Whimsy"].posY -= 144

        Game.Upgrades["Destiny: Sugar rush"].posX += 238
        Game.Upgrades["Destiny: Sugar rush"].posY -= 144

        //this is all done because of over-lap

        Game.BuildAscendTree()
    }
        
    }, second * 5) //Ensure everything is properly updated and done...
});


let EMA = 0
Game.registerHook('cps', function(cps) {
    if (Game.ascensionMode != 1) {
    let cpsMultiplier = 1;
    let cpsMult2 = 1;

    if (Game.Has('Unshackled cookie')) {

        let me = 0
        for (let i in Game.Upgrades) {
            let upgrade = Game.Upgrades[i];
            if (upgrade.pool == 'cookie' && upgrade.bought == 1 && !UnshackledC.includes(upgrade.name)) {
                me++;
                UnshackledC.push(upgrade.name);
            }
        }

        cpsMultiplier += (UnshackledC.length * 0.25)

        me = 0
    }

    if (Game.Has('Unshackled upgrades')) {

        let me = 0
        for (let i in Game.Upgrades) {
            let upgrade = Game.Upgrades[i];
            if (upgrade.pool != 'prestige' && upgrade.pool != 'debug' && upgrade.name != 'Ascended baking pod [off]' && upgrade.name != 'Ascended baking pod [on]' && upgrade.name != 'Festive biscuit' && upgrade.name != 'Ghostly biscuit' && upgrade.name != 'Lovesick biscuit' && upgrade.name != "Fool's biscuit" && upgrade.name != 'Elder Pledge' && upgrade.name != 'Golden switch [off]' && upgrade.name != 'Golden switch [on]' && upgrade.name != 'Jukebox' && upgrade.bought == 1 && !UnshackledU.includes(upgrade.name)) {
                me++;
                UnshackledU.push(upgrade.name);
            }
        }

        cpsMultiplier += (UnshackledU.length * 0.1)

        me = 0
    }

    if (Game.Has('Heartfelt gifts')) {
        me = Math.ceil(Game.cookiesSent / 1000)
        Me = Math.ceil(Game.cookiesReceived / 3000)
        if (me < 1.1) {
            //give great gifts!
            me = 1.1
        }
        if (Me < 1.1) {
            //ask for gifts, and you may get them!
            Me = 1.1
        }
        if (me > 2.5) {
            me = 2.5
        }
        if (Me > 2.5) {
            Me = 2.5
        }

    }

    // ONE: CpS is increased by 5000% if you have only one building
    if (Game.Has('ONE')) {
        if (Game.BuildingsOwned == 1 ) {
            cpsMultiplier *= 50;
            IsONE = true
        } else {
            IsONE = false
        }
    }

    // MANY: CpS is increased by 1000% if you have 10 or fewer buildings
    if (Game.Has('MANY')) {
        if (Game.BuildingsOwned <= 10) {
            cpsMultiplier *= 10;
            IsMANY = true
        } else {
            IsMANY = false
        }
    }

    // FAMILIY: CpS is increased by 150% if you have 3 building types.
    if (Game.Has('FAMILIY')) {
        var buildingTypesWithMoreThanOne = 0;
        for (var i in Game.Objects) {
            if (Game.Objects[i].amount > 0) {
                buildingTypesWithMoreThanOne++;
            }
        }
        if (buildingTypesWithMoreThanOne == 3) {
            cpsMultiplier *= 1.5;
            IsFAMILY = true
        } else {
            IsFAMILY = false
        }
    }

    // Replicated Replications: CpS is increased for each building you have if you have only one type of building
    if (Game.Has('Replicated replications')) {
        var buildingTypesWithMoreThanOne = 0;
        for (var i in Game.Objects) {
            if (Game.Objects[i].amount > 0) {
                buildingTypesWithMoreThanOne++;
            }
        }
        GetREPLICATEDBUFF();
        if (buildingTypesWithMoreThanOne <= 1 ) {
            cpsMultiplier *= REPLICATEDBUFF
            IsReplicated = true
        } else {
            IsReplicated = false
        }
    }

    if (Game.Has("Building overseer [off]")) {
        cpsMult2 -= 0.25
    }

    if (Game.Has("Upgrade manager [off]")) {
        cpsMult2 -= 0.25
    }

    // Do the heavenly cps thigns (yes thigns not things)
    cpsMultiplier += HeavenlyCPSMULT


// console.log("Cookies per second: ", cps) 
// console.log("CPS multiplier (from MHUU): ", cpsMultiplier)
// console.log("CPS after: ", ((cps * cpsMultiplier) * cpsMult2))
    return (cps * cpsMultiplier) * cpsMult2;
    }
    else
    {
    return cps
    }

});


Game.registerHook('click', function() {
    //do needed things upon clicking, might use (aka the alt version of the golden fingers)
    if (Game.Has('Power clicks')) {
        let me = Math.ceil(Math.random() * 10000)

        if (Game.Has('THE TOUCH O\' MIDAS!')) {
            let newShimmer = new Game.shimmer('golden');
            newShimmer.spawnLead = 1;
        } else {
        if (me == 10000 && Game.autoclickerDetected == 0) {
            let newShimmer = new Game.shimmer('golden');
            newShimmer.spawnLead = 1;
        } else if (Game.autoclickerDetected > 55 && me == 1000) {
            Game.Notify('Oops!', "Golden fingers procced <small>(is that how you use that word?)</small>, but you had an autoclicker as Game.autoclickerDetected is <b>" +Game.autoclickerDetected+ "</b>, don't worry though, as it does decrease slowly, I am sorry...<small>(not!)</small><q>Told ya!</q>", [0, 13], 3);
        } else if (Game.autoclickerDetected > 55) {
            //HA!!!!
        }
    }
    }


    if (Game.Has('Cursed clicks')) {
    let me = Math.ceil(Math.random() * 100)
    if (me <= 5 && Game.cookieClicks >= 1000) {
        CD = Game.cookiesPs
        if (Game.hasBuff("Cursed finger")) {
        CD = Game.computedMouseCps * 10
        }
        if (Game.autoclickerDetected > 55) {
        //haha
        } else {
        Game.Earn(CD)
        Game.handmadeCookies += CD
        PlaySound('snd/sell4.mp3')
        Game.Popup('<div style="font-size:80%;">+' + Beautify(CD,1) +' Cookies from Cursed Clicks!</div>',Game.cookieOriginX, Game.cookieOriginY);
        }
    }
    }

    if (Game.Has('Ascended baking pod [off]') && Game.AscendedClick != true) {
        Game.Upgrades["Ascended baking pod [on]"].buy()
        Game.Notify("Ascended baking pod lost", "Ascended baking pod has been disabled.", [5, 1, Greg], 55);
        Game.gainBuff("Unascended baking", 180, 0)
        Game.AscendedClick = false
    } else {
        Game.AscendedClick = false
    }
});








//   #TODO: FIGURE OUT HOW TO SAVE AS THERE'S NO DOCUMENTATION ON IT.
//   ^ JUST STEAL SOME CODE!!! HAHAHA!!
// How does deleting the saving funtion make it work for porting it to the web version???? -Boonch342
// For context, it used to either never load upon refreshing the page or it would not actually save anything



		Game.LoadSave=function(data,ignoreVersionIssues)
		{
			var str='';
			if (typeof data!=='undefined') str=unescape(data);
			else
			{
				if (App)
				{
					App.getMostRecentSave(function(data){Game.LoadSave(data,true);});
					return false;
				}
				if (Game.useLocalStorage)
				{
					var local=localStorageGet(Game.SaveTo);
					if (!local)//no localstorage save found? let's get the cookie one last time
					{
						if (document.cookie.indexOf(Game.SaveTo)>=0)
						{
							str=unescape(document.cookie.split(Game.SaveTo+'=')[1]);
							document.cookie=Game.SaveTo+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
						}
						else return false;
					}
					else
					{
						str=unescape(local);
					}
				}
				else//legacy system
				{
					if (document.cookie.indexOf(Game.SaveTo)>=0) str=unescape(document.cookie.split(Game.SaveTo+'=')[1]);//get cookie here
					else return false;
				}
			}
			if (str!='')
			{
				var version=0;
				var oldstr=str.split('|');
				if (oldstr[0].length<1) return false;
				else
				{
					str=str.split('!END!')[0];
					str=b64_to_utf8(str);
				}
				if (str=='') return false;
				else
				{
					var spl='';
					str=str.split('|');
					version=parseFloat(str[0]);
					Game.loadedFromVersion=version;
					
					if (isNaN(version) || str.length<5)
					{
						Game.Notify(loc("Error importing save"),loc("Oops, looks like the import string is all wrong!"),'',6,1);
						return false;
					}
					if (version>=1 && version>Game.version)
					{
						if (ignoreVersionIssues) Game.Notify('Retrieving save from a future version.','That\'s...odd.','',0,1);
						else
						{
							Game.Notify(loc("Error importing save"),loc("You are attempting to load a save from a future version (v. %1; you are using v. %2).",[version,Game.version]),'',6,1);
							return false;
						}
					}
					if (version>=1)
					{
						Game.T=0;
						
						spl=str[2].split(';');//save stats
						Game.startDate=parseInt(spl[0]);
						Game.fullDate=parseInt(spl[1]);
						Game.lastDate=parseInt(spl[2]);
						var bakeryName=(spl[3]?spl[3]:Game.GetBakeryName());
						Game.seed=spl[4]?spl[4]:Game.makeSeed();
						Game.YouCustomizer.load(spl[5]||0);
						//prefs
						if (version<1.0503) spl=str[3].split('');
						else if (version<2.0046) spl=unpack2(str[3]).split('');
						else spl=(str[3]).split('');
						Game.prefs.particles=parseInt(spl[0]);
						Game.prefs.numbers=parseInt(spl[1]);
						Game.prefs.autosave=parseInt(spl[2]);
						Game.prefs.autoupdate=spl[3]?parseInt(spl[3]):1;
						Game.prefs.milk=spl[4]?parseInt(spl[4]):1;
						Game.prefs.fancy=parseInt(spl[5]);if (Game.prefs.fancy) Game.removeClass('noFancy'); else if (!Game.prefs.fancy) Game.addClass('noFancy');
						Game.prefs.warn=spl[6]?parseInt(spl[6]):0;
						Game.prefs.cursors=spl[7]?parseInt(spl[7]):0;
						Game.prefs.focus=spl[8]?parseInt(spl[8]):0;
						Game.prefs.format=spl[9]?parseInt(spl[9]):0;
						Game.prefs.notifs=spl[10]?parseInt(spl[10]):0;
						Game.prefs.wobbly=spl[11]?parseInt(spl[11]):0;
						Game.prefs.monospace=spl[12]?parseInt(spl[12]):0;
						Game.prefs.filters=spl[13]?parseInt(spl[13]):1;if (Game.prefs.filters) Game.removeClass('noFilters'); else if (!Game.prefs.filters) Game.addClass('noFilters');
						Game.prefs.cookiesound=spl[14]?parseInt(spl[14]):1;
						Game.prefs.crates=spl[15]?parseInt(spl[15]):0;
						Game.prefs.showBackupWarning=spl[16]?parseInt(spl[16]):1;
						Game.prefs.extraButtons=spl[17]?parseInt(spl[17]):1;if (!Game.prefs.extraButtons) Game.removeClass('extraButtons'); else if (Game.prefs.extraButtons) Game.addClass('extraButtons');
						Game.prefs.askLumps=spl[18]?parseInt(spl[18]):0;
						Game.prefs.customGrandmas=spl[19]?parseInt(spl[19]):1;
						Game.prefs.timeout=spl[20]?parseInt(spl[20]):0;
						Game.prefs.cloudSave=spl[21]?parseInt(spl[21]):1;
						Game.prefs.bgMusic=spl[22]?parseInt(spl[22]):1;
						Game.prefs.notScary=spl[23]?parseInt(spl[23]):0;
						Game.prefs.fullscreen=spl[24]?parseInt(spl[24]):0;if (App) App.setFullscreen(Game.prefs.fullscreen);
						Game.prefs.screenreader=spl[25]?parseInt(spl[25]):0;
						Game.prefs.discordPresence=spl[26]?parseInt(spl[26]):1;
						BeautifyAll();
						spl=str[4].split(';');//cookies and lots of other stuff
						Game.cookies=parseFloat(spl[0]);
						Game.cookiesEarned=parseFloat(spl[1]);
						Game.cookieClicks=spl[2]?parseInt(spl[2]):0;
						Game.goldenClicks=spl[3]?parseInt(spl[3]):0;
						Game.handmadeCookies=spl[4]?parseFloat(spl[4]):0;
						Game.missedGoldenClicks=spl[5]?parseInt(spl[5]):0;
						Game.bgType=spl[6]?parseInt(spl[6]):0;
						Game.milkType=spl[7]?parseInt(spl[7]):0;
						Game.cookiesReset=spl[8]?parseFloat(spl[8]):0;
						Game.elderWrath=spl[9]?parseInt(spl[9]):0;
						Game.pledges=spl[10]?parseInt(spl[10]):0;
						Game.pledgeT=spl[11]?parseInt(spl[11]):0;
						Game.nextResearch=spl[12]?parseInt(spl[12]):0;
						Game.researchT=spl[13]?parseInt(spl[13]):0;
						Game.resets=spl[14]?parseInt(spl[14]):0;
						Game.goldenClicksLocal=spl[15]?parseInt(spl[15]):0;
						Game.cookiesSucked=spl[16]?parseFloat(spl[16]):0;
						Game.wrinklersPopped=spl[17]?parseInt(spl[17]):0;
						Game.santaLevel=spl[18]?parseInt(spl[18]):0;
						Game.reindeerClicked=spl[19]?parseInt(spl[19]):0;
						Game.seasonT=spl[20]?parseInt(spl[20]):0;
						Game.seasonUses=spl[21]?parseInt(spl[21]):0;
						Game.season=spl[22]?spl[22]:Game.baseSeason;
						var wrinklers={amount:spl[23]?parseFloat(spl[23]):0,number:spl[24]?parseInt(spl[24]):0};
						Game.prestige=spl[25]?parseFloat(spl[25]):0;
						Game.heavenlyChips=spl[26]?parseFloat(spl[26]):0;
						Game.heavenlyChipsSpent=spl[27]?parseFloat(spl[27]):0;
						Game.heavenlyCookies=spl[28]?parseFloat(spl[28]):0;
						Game.ascensionMode=spl[29]?parseInt(spl[29]):0;
						Game.permanentUpgrades[0]=spl[30]?parseInt(spl[30]):-1;Game.permanentUpgrades[1]=spl[31]?parseInt(spl[31]):-1;Game.permanentUpgrades[2]=spl[32]?parseInt(spl[32]):-1;Game.permanentUpgrades[3]=spl[33]?parseInt(spl[33]):-1;Game.permanentUpgrades[4]=spl[34]?parseInt(spl[34]):-1;
						//if (version<1.05) {Game.heavenlyChipsEarned=Game.HowMuchPrestige(Game.cookiesReset);Game.heavenlyChips=Game.heavenlyChipsEarned;}
						Game.dragonLevel=spl[35]?parseInt(spl[35]):0;
						if (version<2.0041 && Game.dragonLevel==Game.dragonLevels.length-2) {Game.dragonLevel=Game.dragonLevels.length-1;}
						Game.dragonAura=spl[36]?parseInt(spl[36]):0;
						Game.dragonAura2=spl[37]?parseInt(spl[37]):0;
						Game.chimeType=spl[38]?parseInt(spl[38]):0;
						Game.volume=spl[39]?parseInt(spl[39]):75;
						wrinklers.shinies=spl[40]?parseInt(spl[40]):0;
						wrinklers.amountShinies=spl[41]?parseFloat(spl[41]):0;
						Game.lumps=spl[42]?parseFloat(spl[42]):-1;
						Game.lumpsTotal=spl[43]?parseFloat(spl[43]):-1;
						Game.lumpT=spl[44]?parseInt(spl[44]):Date.now();
						Game.lumpRefill=spl[45]?parseInt(spl[45]):0;
						if (version<2.022) Game.lumpRefill=Game.fps*60;
						Game.lumpCurrentType=spl[46]?parseInt(spl[46]):0;
						Game.vault=spl[47]?spl[47].split(','):[];
							for (var i in Game.vault){Game.vault[i]=parseInt(Game.vault[i]);}
						var actualHeralds=Game.heralds;//we store the actual amount of heralds to restore it later; here we used the amount present in the save to compute offline CpS
						Game.heralds=spl[48]?parseFloat(spl[48]):Game.heralds;
						Game.fortuneGC=spl[49]?parseInt(spl[49]):0;
						Game.fortuneCPS=spl[50]?parseInt(spl[50]):0;
						Game.cookiesPsRawHighest=spl[51]?parseFloat(spl[51]):0;
						Game.volumeMusic=spl[52]?parseInt(spl[52]):50;
						Game.cookiesSent=spl[53]?parseInt(spl[53]):0;
						Game.cookiesReceived=spl[54]?parseInt(spl[54]):0;
                        Gold=spl[55]?parseInt(spl[55]):0;
                        GoldEarned=spl[56]?parseInt(spl[56]):0;
                        TotalGoldEarned=spl[57]?parseInt(spl[57]):0;
                        HeavenlyBakingTime=spl[58]?parseInt(spl[58]):0;
                        HeavenlyBakingTimed=spl[59]?parseInt(spl[59]):0;
                        HeavenlyBakingTiming=spl[60]?parseInt(spl[60]):0;
                        TotalHeavenlyCookies=spl[61]?parseInt(spl[61]):0;
                        TotalTimeSpentBaking=spl[62]?parseInt(spl[62]):0;
                        TimesBaked=spl[63]?parseInt(spl[63]):0;
                        HeavenlyChipsGainedFromBaking=spl[64]?parseInt(spl[64]):0;
                        TotalHCsSpentBaking=spl[65]?parseInt(spl[65]):0;
                        HighestTimeBaking=spl[66]?parseInt(spl[66]):0;
                        MAX=spl[67]?parseInt(spl[67]):0;
                        MIN=spl[68]?parseInt(spl[68]):0;
                        AMIN=spl[69]?parseInt(spl[69]):0;
                        UnshackledC=spl[70]?parseInt(spl[70]):0;
                        UnshackledU=spl[71]?parseInt(spl[71]):0;
                        HCA=spl[72]?parseInt(spl[72]):0;
                        HCB=spl[73]?parseInt(spl[73]):0;
                        IsBaking=spl[74]?parseInt(spl[74]):0;
                        HAlchemyStored=spl[75]?parseInt(spl[75]):0;
                        HAlchemyUnstored=spl[76]?parseInt(spl[76]):0;
						
						spl=str[5].split(';');//buildings
						Game.BuildingsOwned=0;
						for (var i in Game.ObjectsById)
						{
							var me=Game.ObjectsById[i];
							me.switchMinigame(false);
							me.pics=[];
							if (spl[i])
							{
								var mestr=spl[i].toString().split(',');
								me.amount=parseInt(mestr[0]);me.bought=parseInt(mestr[1]);me.totalCookies=parseFloat(mestr[2]);me.level=parseInt(mestr[3]||0);me.highest=(version>=2.024?parseInt(mestr[6]):me.amount);
								if (me.minigame && me.minigameLoaded && me.minigame.reset) {me.minigame.reset(true);me.minigame.load(mestr[4]||'');} else me.minigameSave=(mestr[4]||0);
								me.muted=parseInt(mestr[5])||0;
								Game.BuildingsOwned+=me.amount;
								if (version<2.003) me.level=0;
							}
							else
							{
								me.amount=0;me.unlocked=0;me.bought=0;me.highest=0;me.totalCookies=0;me.level=0;
							}
						}
						
						Game.setVolumeMusic(Game.volumeMusic);
						
						Game.LoadMinigames();
						
						if (version<1.035)//old non-binary algorithm
						{
							spl=str[6].split(';');//upgrades
							Game.UpgradesOwned=0;
							for (var i in Game.UpgradesById)
							{
								var me=Game.UpgradesById[i];
								if (spl[i])
								{
									var mestr=spl[i].split(',');
									me.unlocked=parseInt(mestr[0]);me.bought=parseInt(mestr[1]);
									if (me.bought && Game.CountsAsUpgradeOwned(me.pool)) Game.UpgradesOwned++;
								}
								else
								{
									me.unlocked=0;me.bought=0;
								}
							}
							if (str[7]) spl=str[7].split(';'); else spl=[];//achievements
							Game.AchievementsOwned=0;
							for (var i in Game.AchievementsById)
							{
								var me=Game.AchievementsById[i];
								if (spl[i])
								{
									var mestr=spl[i].split(',');
									me.won=parseInt(mestr[0]);
								}
								else
								{
									me.won=0;
								}
								if (me.won && Game.CountsAsAchievementOwned(me.pool)) Game.AchievementsOwned++;
							}
						}
						else if (version<1.0502)//old awful packing system
						{
							if (str[6]) spl=str[6]; else spl=[];//upgrades
							if (version<1.05) spl=UncompressLargeBin(spl);
							else spl=unpack(spl);
							Game.UpgradesOwned=0;
							for (var i in Game.UpgradesById)
							{
								var me=Game.UpgradesById[i];
								if (spl[i*2])
								{
									var mestr=[spl[i*2],spl[i*2+1]];
									me.unlocked=parseInt(mestr[0]);me.bought=parseInt(mestr[1]);
									if (me.bought && Game.CountsAsUpgradeOwned(me.pool)) Game.UpgradesOwned++;
								}
								else
								{
									me.unlocked=0;me.bought=0;
								}
							}
							if (str[7]) spl=str[7]; else spl=[];//achievements
							if (version<1.05) spl=UncompressLargeBin(spl);
							else spl=unpack(spl);
							Game.AchievementsOwned=0;
							for (var i in Game.AchievementsById)
							{
								var me=Game.AchievementsById[i];
								if (spl[i])
								{
									var mestr=[spl[i]];
									me.won=parseInt(mestr[0]);
								}
								else
								{
									me.won=0;
								}
								if (me.won && Game.CountsAsAchievementOwned(me.pool)) Game.AchievementsOwned++;
							}
						}
						else
						{
							if (str[6]) spl=str[6]; else spl=[];//upgrades
							if (version<2.0046) spl=unpack2(spl).split('');
							else spl=(spl).split('');
							Game.UpgradesOwned=0;
							for (var i in Game.UpgradesById)
							{
								var me=Game.UpgradesById[i];
								if (spl[i*2])
								{
									var mestr=[spl[i*2],spl[i*2+1]];
									me.unlocked=parseInt(mestr[0]);me.bought=parseInt(mestr[1]);
									if (me.bought && Game.CountsAsUpgradeOwned(me.pool)) Game.UpgradesOwned++;
								}
								else
								{
									me.unlocked=0;me.bought=0;
								}
							}
							if (str[7]) spl=str[7]; else spl=[];//achievements
							if (version<2.0046) spl=unpack2(spl).split('');
							else spl=(spl).split('');
							Game.AchievementsOwned=0;
							for (var i in Game.AchievementsById)
							{
								var me=Game.AchievementsById[i];
								if (spl[i])
								{
									var mestr=[spl[i]];
									me.won=parseInt(mestr[0]);
								}
								else
								{
									me.won=0;
								}
								if (me.won && Game.CountsAsAchievementOwned(me.pool)) Game.AchievementsOwned++;
							}
						}
						
						Game.killBuffs();
						var buffsToLoad=[];
						spl=(str[8]||'').split(';');//buffs
						for (var i in spl)
						{
							if (spl[i])
							{
								var mestr=spl[i].toString().split(',');
								buffsToLoad.push(mestr);
							}
						}
						
						spl=(str[9]||'').split(';');//mod data
						
						for (var i in spl)
						{
							if (spl[i])
							{
								var data=spl[i].split(':');
								var modId=data[0];
								if (modId=='META') continue;
								data.shift();
								data=Game.safeLoadString(data.join(':'));
								Game.modSaveData[modId]=data;
							}
						}
						
						for (var i in Game.ObjectsById)
						{
							var me=Game.ObjectsById[i];
							if (me.buyFunction) me.buyFunction();
							me.refresh();
							if (me.id>0)
							{
								if (me.muted) me.mute(1);
							}
						}
						
						if (version<1.0503)//upgrades that used to be regular, but are now heavenly
						{
							var me=Game.Upgrades['Persistent memory'];me.unlocked=0;me.bought=0;
							var me=Game.Upgrades['Season switcher'];me.unlocked=0;me.bought=0;
						}
						
						if (Game.bgType==-1) Game.bgType=0;
						if (Game.milkType==-1 || !Game.AllMilks[Game.milkType]) Game.milkType=0;
						
						
						//advance timers
						var framesElapsed=Math.ceil(((Date.now()-Game.lastDate)/1000)*Game.fps);
						if (Game.pledgeT>0) Game.pledgeT=Math.max(Game.pledgeT-framesElapsed,1);
						if (Game.seasonT>0) Game.seasonT=Math.max(Game.seasonT-framesElapsed,1);
						if (Game.researchT>0) Game.researchT=Math.max(Game.researchT-framesElapsed,1);
						
						
						Game.ResetWrinklers();
						Game.LoadWrinklers(wrinklers.amount,wrinklers.number,wrinklers.shinies,wrinklers.amountShinies);
						
						//recompute season trigger prices
						if (Game.Has('Season switcher')) {for (var i in Game.seasons) {Game.Unlock(Game.seasons[i].trigger);}}
						Game.computeSeasonPrices();
						
						//recompute prestige
						Game.prestige=Math.floor(Game.HowMuchPrestige(Game.cookiesReset));
						//if ((Game.heavenlyChips+Game.heavenlyChipsSpent)<Game.prestige)
						//{Game.heavenlyChips=Game.prestige;Game.heavenlyChipsSpent=0;}//chips owned and spent don't add up to total prestige? set chips owned to prestige
						
						Game.bakeryNameSet(bakeryName);
						
						Game.loadModData();
						
						
						if (version==1.037 && Game.beta)//are we opening the new beta? if so, save the old beta to /betadungeons
						{
							window.localStorage.setItem('CookieClickerGameBetaDungeons',window.localStorage.getItem('CookieClickerGameBeta'));
							Game.Notify('Beta save data','Your beta save data has been safely exported to /betadungeons.',20);
						}
						else if (version==1.0501 && Game.beta)//are we opening the newer beta? if so, save the old beta to /oldbeta
						{
							window.localStorage.setItem('CookieClickerGameOld',window.localStorage.getItem('CookieClickerGameBeta'));
							//Game.Notify('Beta save data','Your beta save data has been safely exported to /oldbeta.',20);
						}
						if (version<=1.0466 && !Game.beta)//export the old 2014 version to /v10466
						{
							window.localStorage.setItem('CookieClickerGamev10466',window.localStorage.getItem('CookieClickerGame'));
							//Game.Notify('Beta save data','Your save data has been safely exported to /v10466.',20);
						}
						if (version==1.9)//are we importing from the 1.9 beta? remove all heavenly upgrades and refund heavenly chips
						{
							for (var i in Game.UpgradesById)
							{
								var me=Game.UpgradesById[i];
								if (me.bought && me.pool=='prestige')
								{
									me.unlocked=0;
									me.bought=0;
								}
							}
							Game.heavenlyChips=Game.prestige;
							Game.heavenlyChipsSpent=0;
							
							setTimeout(function(){Game.Prompt('<h3>Beta patch</h3><div class="block">We\'ve tweaked some things and fixed some others, please check the update notes!<div class="line"></div>Of note : due to changes in prestige balancing, all your heavenly upgrades have been removed and your heavenly chips refunded; you\'ll be able to reallocate them next time you ascend.<div class="line"></div>Thank you again for beta-testing Cookie Clicker!</div>',[['Alright then!','Game.ClosePrompt();']]);},200);
						}
						if (version<=1.0466)//are we loading from the old live version? reset HCs
						{
							Game.heavenlyChips=Game.prestige;
							Game.heavenlyChipsSpent=0;
						}
						
						if (Game.ascensionMode!=1)
						{
							if (Game.Has('Starter kit')) Game.Objects['Cursor'].free=20;
							if (Game.Has('Starter kitchen')) Game.Objects['Grandma'].free=10;
                            if (Game.Has('Starter depth')) Game.Objects['Mine'].free=5;
                            if (Game.Has('Starter gears')) Game.Objects['Factory'].free=2;
                            if (Game.Has('Starter stocks')) Game.Objects['Bank'].free=1;
						}
						
						Game.CalculateGains();
						
						var timeOffline=(Date.now()-Game.lastDate)/1000;
						
						if (Math.random()<1/10000) Game.TOYS=1;//teehee!
						if (Math.random()<1/10000) Game.WINKLERS=1;//squeak
						
						//compute cookies earned while the game was closed
						if (Game.mobile || Game.Has('Perfect idling') || Game.Has('Twin Gates of Transcendence'))
						{
							if (Game.Has('Perfect idling'))
							{
								var maxTime=60*60*24*1000000000;
								var percent=100;
							}
							else
							{
								var maxTime=60*60;
								if (Game.Has('Belphegor')) maxTime*=2;
								if (Game.Has('Mammon')) maxTime*=2;
								if (Game.Has('Abaddon')) maxTime*=2;
								if (Game.Has('Satan')) maxTime*=2;
								if (Game.Has('Asmodeus')) maxTime*=2;
								if (Game.Has('Beelzebub')) maxTime*=2;
								if (Game.Has('Lucifer')) maxTime*=2;
								
								var percent=5;
								if (Game.Has('Angels')) percent+=10;
								if (Game.Has('Archangels')) percent+=10;
								if (Game.Has('Virtues')) percent+=10;
								if (Game.Has('Dominions')) percent+=10;
								if (Game.Has('Cherubim')) percent+=10;
								if (Game.Has('Seraphim')) percent+=10;
								if (Game.Has('God')) percent+=10;
								
								if (Game.Has('Chimera')) {maxTime+=60*60*24*2;percent+=5;}
								
								if (Game.Has('Fern tea')) percent+=3;
								if (Game.Has('Ichor syrup')) percent+=7;
								if (Game.Has('Fortune #102')) percent+=1;
							}
							
							var timeOfflineOptimal=Math.min(timeOffline,maxTime);
							var timeOfflineReduced=Math.max(0,timeOffline-timeOfflineOptimal);
							var amount=(timeOfflineOptimal+timeOfflineReduced*0.1)*Game.cookiesPs*(percent/100);
							
							if (amount>0)
							{
								Game.Notify(loc("Welcome back!"),loc("You earned <b>%1</b> while you were away.",loc("%1 cookie",LBeautify(amount)))+(EN?('<br>('+Game.sayTime(timeOfflineOptimal*Game.fps,-1)+' at '+Math.floor(percent)+'% CpS'+(timeOfflineReduced?', plus '+Game.sayTime(timeOfflineReduced*Game.fps,-1)+' at '+(Math.floor(percent*10)/100)+'%':'')+'.)'):''),[Math.floor(Math.random()*16),11]);
								Game.Earn(amount);
							}
						}

                        
						
						//we load buffs after everything as we do not want them to interfer with offline CpS
						for (var i in buffsToLoad)
						{
							var mestr=buffsToLoad[i];
							var type=Game.buffTypes[parseInt(mestr[0])];
							Game.gainBuff(type.name,parseFloat(mestr[1])/Game.fps,parseFloat(mestr[3]||0),parseFloat(mestr[4]||0),parseFloat(mestr[5]||0)).time=parseFloat(mestr[2]);
						}
						
						
						Game.loadLumps(timeOffline);
			
						Game.bakeryNameRefresh();
						
					}
					else//importing old version save
					{
						Game.Notify(loc("Error importing save"),loc("Sorry, you can't import saves from the classic version."),'',6,1);
						return false;
					}
					
					if (Game.prefs.screenreader)
					{
						Game.BuildStore();
					}
					
					Game.RebuildUpgrades();
					
					Game.TickerAge=0;
					Game.TickerEffect=0;
					
					Game.elderWrathD=0;
					Game.recalculateGains=1;
					Game.storeToRefresh=1;
					Game.upgradesToRebuild=1;
					
					Game.buyBulk=1;Game.buyMode=1;Game.storeBulkButton(-1);
					
					
					Game.specialTab='';
					Game.ToggleSpecialMenu(0);
					
					Game.killShimmers();
					
					if (Game.T>Game.fps*5 && Game.ReincarnateTimer==0)//fade out of black and pop the cookie
					{
						Game.ReincarnateTimer=1;
						Game.addClass('reincarnating');
						Game.BigCookieSize=0;
					}
					
					
					var prestigeUpgradesOwned=0;
					for (var i in Game.Upgrades)
					{
						if (Game.Upgrades[i].bought && Game.Upgrades[i].pool=='prestige') prestigeUpgradesOwned++;
					}
					if (prestigeUpgradesOwned>=100) Game.Win('All the stars in heaven');
					
					
					if (version<Game.version) l('logButton').classList.add('hasUpdate');
					
					if (Game.season!='' && Game.season==Game.baseSeason)
					{
						if (Game.season=='valentines') Game.Notify(loc("Valentine's Day!"),loc("It's <b>Valentine's season</b>!<br>Love's in the air and cookies are just that much sweeter!"),[20,3],60*3);
						else if (Game.season=='fools') Game.Notify(loc("Business Day!"),loc("It's <b>Business season</b>!<br>Don't panic! Things are gonna be looking a little more corporate for a few days."),[17,6],60*3);
						else if (Game.season=='halloween') Game.Notify(loc("Halloween!"),loc("It's <b>Halloween season</b>!<br>Everything is just a little bit spookier!"),[13,8],60*3);
						else if (Game.season=='christmas') Game.Notify(loc("Christmas time!"),loc("It's <b>Christmas season</b>!<br>Bring good cheer to all and you just may get cookies in your stockings!"),[12,10],60*3);
						else if (Game.season=='easter') Game.Notify(loc("Easter!"),loc("It's <b>Easter season</b>!<br>Keep an eye out and you just might click a rabbit or two!"),[0,12],60*3);
					}
					
					Game.heralds=actualHeralds;
					
					Game.Notify(loc("Game loaded"),'','',1,1);
					
					if (!App && Game.prefs.showBackupWarning==1) Game.showBackupWarning();
					
					if (App) App.justLoadedSave();
				}
			}
			else return false;
			return true;
		}

if(!MHUU.isloaded){
    if(CCSE && CCSE.isLoaded){
        MHUU.launch();
    }
    else{
            if(!CCSE) var CCSE = {};
            if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
            CCSE.postLoadHooks.push(MHUU.launch);
    }
}
//Alright, moving it down here *should* work.
//Alright it just doesn't exist, somehow. Listen I have NO idea how Java Script & CCSE work.
//Game.Notify('MHUU is LOADED :D', 'MY CODE WORKS!!!', [25, 7], 6)

//Hey you made it to the bottom of my code :D
