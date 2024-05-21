Game.registerMod("extraContent",{
    init:function(){
        this.spritesheet='https://raw.githubusercontent.com/Boonch342/CCgraphics/main/img.png'
        this.createAchievements=function(){
            this.achievements = []
            this.achievements.push(new Game.Achievement("Tendless cycle", "Ascend <b>2,777 times.</b> <q>Now you can tend to the cookie again.</q>",[1,0,this.spritesheet]))
            this.achievements.push(new Game.Achievement("Repopulation", "Have a <b>full ring of shiny wrinklers.</b> <q>You bought elder spice already? Too bad</q>",[2,0,this.spritesheet]))
            this.achievements.push(new Game.Achievement("Plant based diet", "Sacrifice the garden <b>20</b> times. <q>Those hornets must be fat by now.</q>",[4,18,'https://orteil.dashnet.org/cookieclicker/img/gardenPlants.png']))
            this.achievements.push(new Game.Achievement("The will of the wizards", "Cast <b>999,999</b> spells. <q>Which wizard? Will.</q>",[24,11]))
            for(let i of this.achievements){i.pool="shadow";i.order=69420;}
            LocalizeUpgradesAndAchievs()
        }
        this.checkAchievements=function(){
            if (Game.resets>=2777)Game.Win("Tendless cycle")
            if (Game.Objects.Bank.minigameLoaded&&Game.Objects.Bank.minigame.profit>=(Date.now()-new Date(2013,7,8))/1000) Game.Win("Passive income")
            if(Game.Objects["Wizard tower"].minigameLoaded&&Game.Objects['Wizard tower'].minigame.spellsCastTotal>=999999)Game.Win("The will of the wizards")
            if(Game.Objects.Farm.minigameLoaded && Game.Objects.Farm.minigame.convertTimes >= 20)Game.Win("Plant based diet")
            let shiny = 1;
            for(let i of Game.wrinklers) if(i.type==0) shiny = 0;
            if(shiny) Game.Win("Repopulation")
            let all = 1;
            for(let i of Game.mods.extraContent.achievements) if (i.won==0)all=0;
            if (all) Game.Win("Go outside")
        }
        if(Game.ready) this.createAchievements()
        else Game.registerHook("create", this.createAchievements)
	Game.registerHook("check", this.checkAchievements)
    },
    save: function(){
        let str = "";
        for(let i of this.achievements)str+=i.won
        return str;
    },
    load: function(str){
        for(let i in this.achievements)this.achievements[i].won=Number(str[i])
    }
})
