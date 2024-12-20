(()=>{var b=Object.defineProperty;var o=(s,a)=>b(s,"name",{value:a,configurable:!0});var g=o((s,a,t)=>{let n=new Game.Achievement(s,a,t);return n.darky=1,n.ddesc=a,n},"Achievement"),e=g;var h=[()=>
    
    {Game.Has("Lucky digit")&&Game.Has("Lucky number")&&Game.Has("Lucky payout")&&Game.Win("Secret fortune")},()=>
    
    {Game.PrestigeUpgrades.reduce((a,t)=>t.bought?a+1:a,0)>=15&&Game.Win("Pretty prestige")},()=>
    {Game.PrestigeUpgrades.reduce((a,t)=>t.bought?a+1:a,0)>=30&&Game.Win("Live and learn")},()=>
    {Game.PrestigeUpgrades.reduce((a,t)=>t.bought?a+1:a,0)>=60&&Game.Win("We will stay with you forever")},()=>
    
    {Game.cookieClicks>=1e3&&Game.Win("Clicker")},()=>
    {Game.cookieClicks>=1e4&&Game.Win("Advanced Clicker")},()=>
    {Game.cookieClicks>=25e3&&Game.Win("Expert Clicker")},()=>
    
    {Game.prestige>=100&&Game.Win("Heavenly")},()=>
    {Game.prestige>=1e4&&Game.Win("Transcendent")},()=>
    {Game.prestige>=1e6&&Game.Win("Higher energy state")},()=>
    {Game.prestige>=1e8&&Game.Win("Omniverse")},()=>
    {Game.prestige>=1e10&&Game.Win("The Ascendant")},()=>
    
    {Game.Has("British tea biscuits")&&Game.Has("Chocolate british tea biscuits")&&Game.Has("Round british tea biscuits")&&Game.Has("Round chocolate british tea biscuits")&&Game.Has("Round british tea biscuits with heart motif")&&Game.Has("Round chocolate british tea biscuits with heart motif")&&Game.Win("Getting fancy")},()=>{Game.Has("Caramoas")&&Game.Has("Sagalongs")&&Game.Has("Shortfoils")&&Game.Has("Win mints")&&Game.Has("Fig gluttons")&&Game.Has("Loreols")&&Game.Has("Jaffa cakes")&&Game.Has("Grease's cups")&&Game.Has("Digits")&&Game.Has("Lombardia cookies")&&Game.Has("Bastenaken cookies")&&Game.Has("Festivity loops")&&Game.Has("Havabreaks")&&Game.Has("Zilla wafers")&&Game.Has("Dim Dams")&&Game.Has("Pokey")&&Game.Win("You wanna be popular?")},()=>
    {Game.Has("Rose macarons")&&Game.Has("Lemon macarons")&&Game.Has("Chocolate macarons")&&Game.Has("Pistachio macarons")&&Game.Has("Hazelnut macarons")&&Game.Has("Violet macarons")&&Game.Has("Caramel macarons")&&Game.Has("Licorice macarons")&&Game.Has("Earl Grey macarons")&&Game.Win("Emmanuel Macaron")},()=>
    
    {Game.Has("Butter horseshoes")&&Game.Has("Butter pucks")&&Game.Has("Butter knots")&&Game.Has("Butter slabs")&&Game.Has("Butter swirls")&&Game.Win("Rich butterfingers")},()=>
    
    {Game.Has("Cookie dough")&&Game.Has("Burnt cookie")&&Game.Has("A chocolate chip cookie but with the chips picked off for some reason")&&Game.Has("Flavor text cookie")&&Game.Has("High-definition cookie")&&Game.Has("Crackers")&&Game.Win("Bake me, maybe?")},()=>
    {Game.Has("Toast")&&Game.Has("Peanut butter & jelly")&&Game.Has("Wookies")&&Game.Has("Cheeseburger")&&Game.Has("One lone chocolate chip")&&Game.Has("Pizza")&&Game.Has("Candy")&&Game.Win("Burger Clicker")},()=>
    
    {Game.Has("Profiteroles")&&Game.Has("Jelly donut")&&Game.Has("Glazed donut")&&Game.Has("Chocolate cake")&&Game.Has("Strawberry cake")&&Game.Has("Apple pie")&&Game.Has("Lemon meringue pie")&&Game.Has("Butter croissant")&&Game.Win("Pastries from the past")},()=>
    
    {Game.Has("Kitten helpers")&&Game.Has("Kitten workers")&&Game.Has("Kitten engineers")&&Game.Has("Kitten overseers")&&Game.Has("Kitten managers")&&Game.Has("Kitten accountants")&&Game.Has("Kitten specialists")&&Game.Has("Kitten experts")&&Game.Has("Kitten consultants")&&Game.Has("Kitten assistants to the regional manager")&&Game.Has("Kitten marketeers")&&Game.Has("Kitten analysts")&&Game.Has("Kitten executives")&&Game.Has("Kitten admins")&&Game.Has("Kitten strategists")&&Game.Has("Kitten angels")&&Game.Has("Fortune #103")&&Game.Win("Purrfection")},()=>
    
    {Game.Has("Future almanacs")&&Game.Has("Seismic magic")&&Game.Has("Quantum electronics")&&Game.Has("Contracts from beyond")&&Game.Has("Paganism")&&Game.Has("Arcane knowledge")&&Game.Has("Fossil fuels")&&Game.Has("Primordial ores")&&Game.Has("Infernal crops")&&Game.Has("Relativistic parsec-skipping")&&Game.Has("Extra physics funding")&&Game.Has("Light magic")&&Game.Has("Gemmed talismans")&&Game.Has("Recursive mirrors")&&Game.Has("Script grannies")&&Game.Has("Perforated mille-feuille cosmos")&&Game.Win("Simple synergy")},()=>
    
    {Game.Has("Rain prayer")&&Game.Has("Asteroid mining")&&Game.Has("Temporal overclocking")&&Game.Has("Printing presses")&&Game.Has("God particle")&&Game.Has("Magical botany")&&Game.Has("Shipyards")&&Game.Has("Gold fund")&&Game.Has("Abysmal glimmer")&&Game.Has("Primeval glow")&&Game.Has("Chemical proficiency")&&Game.Has("Mystical energies")&&Game.Has("Charm quarks")&&Game.Has("Mice clicking mice")&&Game.Has("Tombola computing")&&Game.Has("Infraverses and superverses")&&Game.Win("It's sweet, sweet, synergy")},()=>
    
    {Game.Has("Dragon scale")&&Game.Has("Dragon claw")&&Game.Has("Dragon fang")&&Game.Has("Dragon teddy bear")&&Game.Win("Spike the dragon")},()=>
    
    {Game.Has("Elderwort biscuits")&&Game.Has("Bakeberry cookies")&&Game.Has("Duketater cookies")&&Game.Has("Green yeast digestives")&&Game.Has("Fern tea")&&Game.Has("Ichor syrup")&&Game.Has("Wheat slims")&&Game.Win("All natural, home grown, non GMO, organic, fat free, low carb, gluten free, vegan pastries")},()=>
    
    {Game.bakeryName==="Opti"&&Game.Win("Quite fine")}],m=h;var i="https://hyoretsu.github.io/DarkysCheevosPackage/static/achievements.png",r="https://i.imgur.com/3jNJJNw.png",k=o(()=>
   
    {e("Secret fortune","Purchase the <b>3 secret prestige upgrades</b>.<q>You got more than one ace up your sleeve, huh?",[24,15]),Game.last.order=30600.095000001,Game.last.pool="shadow",
    
    e("Pretty prestige","Purchase <b>15</b> prestige upgrades.",[19,48,r]),Game.last.order=6001.5879999997,
    e("Live and learn","Purchase <b>30</b> prestige upgrades.<q>And never forget.",[19,47,r]),Game.last.order=6001.5879999998,
    e("We will stay with you forever","Purchase <b>60</b> prestige upgrades.<q>Don't reset us.</q>",[19,46,r]),Game.last.order=6001.5879999999,
     
    e("Clicker","Click on the big cookie <b>1,000</b> times.",[11,22]),Game.last.order=1020,
    e("Advanced Clicker","Click on the big cookie <b>10,000</b> times.",[11,23]),Game.last.order=1021,
    e("Expert Clicker","Click on the big cookie <b>25,000</b> times.",[11,24]),Game.last.order=1022,
        
    e("Heavenly","Reach prestige level <b>100</b>.",[19,7]),Game.last.order=30010,
    e("Transcendent","Reach prestige level <b>10,000</b>.",[18,7]),Game.last.order=30010.000001,
    e("Higher energy state","Reach prestige level <b>1 million</b>.",[17,7]),Game.last.order=30010.000002,
    e("Omniverse","Reach prestige level <b>100 million</b>.",[16,7]),Game.last.order=30010.000003,
    e("The Ascendant","Reach prestige level <b>10 billion</b>.",[15,7]),Game.last.order=30010.000004,
        
    e("Getting fancy","Purchase <b>all fancy biscuits</b>.",[21,8]),Game.last.order=21101,
    e("You wanna be popular?","Purchase <b>all popular biscuits</b>.",[20,9]),Game.last.order=21103,
    e("Emmanuel Macaron","Purchase <b>all macarons</b>.",[20,8]),Game.last.order=21102,
    e("Rich butterfingers","Purchase <b>all rich butter cookies</b>.",[21,9]),Game.last.order=21104,
    e("Bake me, maybe?","Purchase <b>all maybe cookies</b>.",[25,29]),Game.last.order=21106,
    e("Burger Clicker","Purchase <b>all not cookies</b>.<q>Shoutout to the old Idle Game Maker!</q>",[26,29]),Game.last.order=21107,
    e("Pastries from the past","Purchase <b>all pastries</b>.",[27,29]),Game.last.order=21105,
        
    e("Purrfection","Purrchase <b>every kitten upgrade</b>.<q>Are you sick of these puns yet?</q>",[18,35]),Game.last.order=10000.466,
        
    e("Simple synergy","Purchase <b>all Synergy I upgrades</b>.<q>It's ours for the baking.</q>",[9,20]),Game.last.order=6001.5879999995,
    e("It's sweet, sweet, synergy","Purchase <b>all Synergy II upgrades</b>.",[9,29]),Game.last.order=6001.5879999996,
        
    e("Spike the dragon","Purchase <b>all dragon upgrades</b>.<q>Keep an eye on your gems.</q>",[30,12]),Game.last.order=21109,
    e("All natural, home grown, non GMO, organic, fat free, low carb, gluten free, vegan pastries","Purchase <b>Are you just eating ice?</b>.<q>feefef</q>",[23,25]),Game.last.order=61515.383,
   
    e("Quite fine","Name yourself <b>Opti</b>.<q>Is the CpS penalty too much?</q>",[2,12,'https://raw.githubusercontent.com/Boonch342/MinorGraphicsCC/refs/heads/main/Opti-Face.png']),Game.last.order=30201,Game.last.pool="shadow"},"createHook"),l=k;var p=o(()=>{let s=document.createElement("style");s.textContent=".darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}",document.head.appendChild(s),Game.crate=new Function(`return ${Game.crate.toString().split("shadow';").join(` shadow';
if (me.darky === 1) classes+=' darky'; //Darky's achievement package injection`).split("mysterious?").join("mysterious? (me.darky === 1) ? 'background-image:url(\\'https://i.imgur.com/JKKvixm.png\\')'/*Darky's achievement package injection*/ : ")}`)(),Game.crateTooltip=new Function(`return ${Game.crateTooltip.toString().split("if (mysterious) icon=[0,7];").join("if (mysterious) icon=[0,7]; if (mysterious && me.darky === 1) icon = [1, 4, 'https://i.imgur.com/AWmeHiO.png']")}`)()},"overrides"),c=p;var f=o(()=>{c(),Game.registerHook("check",m),l()},"init"),G=f;var H=o(s=>{JSON.parse(s).unlockedAchievs.forEach(t=>{Game.Achievements[t].won=1})},"load"),d=H;var v=o(()=>{let s={unlockedAchievs:[]};return Object.values(Game.AchievementsById).forEach(a=>{a.darky&&a.won&&s.unlockedAchievs.push(a.name)}),JSON.stringify(s)},"save"),u=v;var y={init:G,save:u,load:d,Achievement:e};Game.registerMod("Darkys Achievement Package",y);})();
//# sourceMappingURL=main.js.map
