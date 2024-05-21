Game.registerMod("Unfun Facts News Ticker",{//this string needs to match the ID provided in your info.txt
  init:function(){
      let MOD = this;
      MOD.OriginalTickerDraw = Game.TickerDraw
      function choose(arr) {return arr[Math.floor(Math.random() * arr.length)];}
      var list=
      [
        'Unfun Fact : Bunnies actually have the ability to scream, but they will only scream if they feel they are about to die.',
        'Unfun Fact : A Rat King happens when multiple rats become congealed together in a tangle of tails, dirt, hair and blood.',
        'Unfun Fact : The world record for most kidney stones passed is 6,504 by Don Winfield.',
        'Unfun Fact : The largest kidney stone ever removed was 20cm long and weighed 4.4 pounds.',
        'Unfun Fact : If we held a minute of silence for every victim of the holocaust, we would be silent for eleven and a half years.',
        'Unfun Fact : They couldnt give the firefighters from Chernobyl morphine, because their veins were literally melting.',
        'Unfun Fact : A lions tongue is so rough it can lick your skin off.',
        'Unfun Fact : The rescue dogs from ground zero on 9/11 developed PTSD and needed therapy afterwards because there were so few survivors and so many dead recovered that they thought theyd screwed everything up and done a bad job.',        'Moths will vibrate their genitals as a way to prevent bats from locating them.',
        'Unfun Fact : Nutmeg was used as a hallucinogenic before modern drugs. It can also kill you if more than a tablespoon is eaten at once.',
        'Unfun Fact : If you die while late into a pregnancy the build up of bodily gases can push the dead fetus out of your body. Its called postmortem fetal extrusion.',
        'Unfun Fact : Anne Franks diary included lots of masturbation that later got cut out.',      
        'Unfun Fact : When a male lion takes over a pride he will engage in infanticide and kill (and/or eat) all of the cubs that the previous male breed.',
        'Unfun Fact : Veterinarians that put down sick pets will say that the owner often chooses not to be in the room, leaving the pet frantically searching for its owner in the last minutes of their life.',
        'Unfun Fact : America has 5% of the worlds population, but 25% of all prisoners in the world.',
        'Unfun Fact : Homosexuals in concentration camp during WWII werent recognised as victims after the war ended, and some of them were even re-arrested with their years in camps during the war only subtracted form their sentence.',
        'Unfun Fact : Over 300 people are believed to have jumped from the World Trade Center on 9/11. One of the falling bodies killed a fireman at the scene.',
        'Unfun Fact : Most people with an autoimmune disease have several more.',
        'Unfun Fact : If you show symptoms of rabies, your chances of dying are 99.9%.',
        'Unfun Fact : FOP is a disorder that causes your body to replace your muscle tissue with bone over time. There is no cure for it.',
        'Unfun Fact : If youre attacked by a brown bear, it wont necessarily try to kill you like other predators would. It just starts eating.',
        'Unfun Fact : There are more prisons in the United states than there are colleges. And prisons have inmate quotas to meet.',
        'Unfun Fact : Insect populations have decreased by 80% since the 1980s.',
        'Unfun Fact : The youngest girl to ever give birth was 5 years, 7 months, and 21 days old.',
        'Unfun Fact : The first five people who stopped applauding at Stalins 1938 presidium were sent to the Gulag for ten years; their crime was that they stopped applauding.',
        'Unfun Fact : Rabbits eat their babies if stressed enough.',
        'Unfun Fact : You can die from Alzheimers due to the brain forgetting how to swallow or breathe.',
        'Unfun Fact : Brain activity has been recorded for up to ten minutes after death. What is that person experiencing during those last minutes of life?.',
        'Unfun Fact : Whales and Dolphins die by not having enough energy to surface for air, so they slowly sink into the depths of the ocean and suffocate.',
        'Unfun Fact : It was legal to mail children in packages via the USPS from 1913 to 1920.',
        'Unfun Fact : Criminals that are considered unattractive usually receive a 50% longer jail time than attractive criminals.',
        'Unfun Fact : Human flesh is not flammable, however if it gets too hot it boils and emits a gas that is flammable. which, if ignited, will melt through you like candle wax: '
      ];
      
      Game.TickerDraw = function() {
          var ticker = [choose(list),Game.Ticker,Game.Ticker];
          Game.Ticker = choose(ticker);
          MOD.OriginalTickerDraw();
      }
  },
save:function(){
  //use this to store persistent data associated with your mod
},
load:function(str){
  //do stuff with the string data you saved previously
},
});
