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
