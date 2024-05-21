function magic8Ball() {
    const magic8BallMessages = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];
    const randomMessage = magic8BallMessages[Math.floor(Math.random() * magic8BallMessages.length)];
    PlaySound('snd/tick.mp3');
    Game.Notify('Magic 8 Ball', randomMessage, [0, 8]);
}

Game.registerMod("magic8ball button", {
    init: function() {
        // Copy vanilla code for menu updating into a new function
        var oldUpdateMenu = Game.UpdateMenu.bind({});

        // Overwrite the old function with my code, but run the copied vanilla code as well, as to preserve functionality
        Game.UpdateMenu = () => {
            oldUpdateMenu();
            if (Game.onMenu == 'prefs') {
                let listings = document.getElementsByClassName('listing');
                listings[listings.length - 1].innerHTML += '<a class="option" onclick="magic8Ball()">Magic 8 Ball</a><label>(Get a random prediction!)</label><br>';
            }
        }
    }
});
