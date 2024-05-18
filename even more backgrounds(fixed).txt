Game.registerMod("evenMoreBackgrounds", {
    bgType: 0,

    init: function() {
        if (typeof(CCSE) !== 'undefined') {
            if (CCSE && CCSE.isLoaded) {
                this.launch();
            } else {
                CCSE.postLoadHooks.push(() => this.launch());
            }
        } else {
            Game.registerHook('create', () => {
                this.launch();
            });
        }
    },

    save: function() {
        return this.bgType.toString();
    },
    load: function(str) {
        this.bgType = Number.parseInt(str) | 0;
        Game.bgType = this.bgType;
    },

    launch: function() {
        const BGs = [
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgWhiteNoise.jpg', name: 'White Noise', icon: [0, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgBlackNoise.jpg', name: 'Black Noise', icon: [1, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgPolishedSilver.jpg', name: 'Polished Silver', icon: [10, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgPolishedGold.jpg', name: 'Polished Gold', icon: [9, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgCoins.jpg', name: 'Coins', icon: [2, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgCookies.jpg', name: 'Cookies', icon: [3, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgPlanks.jpg', name: 'Planks', icon: [4, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgNeverendingLegacy.jpg', name: 'Neverending Legacy', icon: [5, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgCloudy.jpg', name: 'Cloudy', icon: [6, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgIcy.jpg', name: 'Icy', icon: [7, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
            { pic: 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/bgSpace.jpg', name: 'Space', icon: [8, 0, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'] },
        ];

        let div, i = div = Object.getOwnPropertyNames(Game.BGsByChoice).length;
        BGs.forEach(bg => {
            if (!EN) bg.name = loc(bg.name, 0, bg.name);
            Game.BGsByChoice[i++] = bg;
        });

        console.log("Backgrounds added:", BGs);

        let choicesFunction = Game.Upgrades['Background selector'].choicesFunction.bind({});
        Game.Upgrades['Background selector'].choicesFunction = () => {
            let choices = choicesFunction();
            choices[div].div = true;
            return choices;
        };

        let choicesPick = Game.Upgrades['Background selector'].choicesPick.bind({});
        Game.Upgrades['Background selector'].choicesPick = (id) => {
            this.bgType = id;
            choicesPick(id);
        };

        let WriteSave = Game.WriteSave.bind({});
        Game.WriteSave = (type) => {
            Game.bgType = 0;
            let ret = WriteSave(type);
            Game.bgType = this.bgType;
            return ret;
        };

        let updateIcon = () => {
            Game.Upgrades['Background selector'].icon = [0, 1, 'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/main/Wallpapers/icons.png'];
            console.log("Icon updated:", Game.Upgrades['Background selector'].icon);
        };

        Game.registerHook('check', updateIcon);
        updateIcon();
        Game.upgradesToRebuild = 1;
    }
});
