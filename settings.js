var PiecSettings = PiecSettings || {};

PiecSettings.version = "-";

PiecSettings.autoPlay = {
    activateAfter: 4000,
}

PiecSettings.hitToStore = 0; // no hitToStore function, set it as 0;

PiecSettings.closeButtonTimer = true;

//////// DEFAULT SETTINGS FOR SLOT GAMES ////////

PiecSettings.winlinePalette = [0xfdf9c6, 0xf3d868, 0xc98e43, 0xff8247, 0xfaed60, 0xeba22c]; //Colours used by the winlines
PiecSettings.fontColor = "#ffffff"; //Remove empty if you want to use the default golden gradient
PiecSettings.fontFamily = "Contemporary"; //Make sure that this font is on the css and that there is a div that uses it. (preload-font div)

PiecSettings.tooltip = { // Tooltip overlays the grid-background
    src: 'dark_overlay.png',
    firstHandPosition: [1,1],
    secondHandPosition: [2,1]
};

/////// SET THE AUTOPLAY AND ALWAYS END UP VICTORY //////

PiecSettings.alwaysWin = false;

/////// FINAL OVERLAY SCREEN SETTINGS ///////

PiecSettings.finalOverlay = {
    color: 0x000000,
    alpha: 0.6,
    delay: 3000,
};

var enemy_PosX = 1.05, character_PosX = -.05;
var enemy_PosY = 0.65, character_PosY = 0.7;
var soldier_Scale_Portrait = .2, soldier_Scale_Landscape = .4,
enemy_Scale_Landscape = .4;

PiecSettings.characterSettings = [
    { //SOLDIER BACK
        idleAnimIndex:3, //index of animation in pngAnimations array
        attackAnimIndex:4,
        dieAnimIndex: 5,

        enemy: false,

        lifeBarYPos: -0.4, // The bigger this value, the higher
        // icon: 'blue-icon', // Will appear next to the life bar

        scaleLandscape: enemy_Scale_Landscape , //scale as factor of height for landscape
        scalePortrait: soldier_Scale_Portrait, //scale as factor of height for portrait
        xPos: character_PosX +0.05, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: character_PosY - 0.15, //yPos as percentile of total screen height
  
        posXLandscapeOffset: .15,
        posYLandscapeOffset: .65,
    },
    { //ENEMY BACK
        idleAnimIndex:6, //index of animation in pngAnimations array
        attackAnimIndex:7,
        dieAnimIndex:8,

        enemy: true,

        lifeBarYPos: -.4, // The bigger this value, the higher
        // icon: 'purple-icon', // Will appear next to the life bar

        scaleLandscape: enemy_Scale_Landscape , //scale as factor of height for landscape
        scalePortrait: .25, //scale as factor of height for portrait
        xPos: enemy_PosX + 0.05, //anchor is not 0.5,0.5. xPos as a percentile of total screen width
        yPos: enemy_PosY - 0.15, //yPos as percentile of total screen height
        flipped: true,

        posXLandscapeOffset: .8,
        posYLandscapeOffset: .55,
    },
    { //CAR
        idleAnimIndex:0, //index of animation in pngAnimations array
        attackAnimIndex:1,
        dieAnimIndex: 2,

        enemy: false,

        lifeBarYPos: .01, // The bigger this value, the higher
        // icon: 'blue-icon', // Will appear next to the life bar

        scaleLandscape: enemy_Scale_Landscape , //scale as factor of height for landscape
        scalePortrait: .2, //scale as factor of height for portrait
        xPos: character_PosX, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: character_PosY, //yPos as percentile of total screen height
        posXLandscapeOffset: .1,
        posYLandscapeOffset: .85,
    },
    { //ENEMY MID
        idleAnimIndex:6, //index of animation in pngAnimations array
        attackAnimIndex:7,
        dieAnimIndex:8,

        enemy: true,

        lifeBarYPos: -.5, // The bigger this value, the higher
        // icon: 'death-icon', // Will appear next to the life bar

        scaleLandscape: enemy_Scale_Landscape , //scale as factor of height for landscape
        scalePortrait: .25, //scale as factor of height for portrait
        xPos: enemy_PosX , //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: enemy_PosY, //yPos as percentile of total screen height

        flipped: true,
        posXLandscapeOffset: .9,
        posYLandscapeOffset: .65,
    },
    { //ENEMY UP
        idleAnimIndex:6, //index of animation in pngAnimations array
        attackAnimIndex:7,
        dieAnimIndex:8,

        enemy: true,

        lifeBarYPos: -.5, // The bigger this value, the higher
        // icon: 'death-icon', // Will appear next to the life bar

        scaleLandscape: enemy_Scale_Landscape , //scale as factor of height for landscape
        scalePortrait: .25, //scale as factor of height for portrait
        xPos: enemy_PosX + 0.05, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: enemy_PosY + 0.15, //yPos as percentile of total screen height
        

        flipped: true,
        posXLandscapeOffset: .8,
        posYLandscapeOffset: .85,
    },
    { //SOLDIER FRONT
        idleAnimIndex:3, //index of animation in pngAnimations array
        attackAnimIndex:4,
        dieAnimIndex: 5,

        enemy: false,

        lifeBarYPos: -0.4, // The bigger this value, the higher
        // icon: 'blue-icon', // Will appear next to the life bar

        scaleLandscape: enemy_Scale_Landscape , //scale as factor of height for landscape
        scalePortrait: soldier_Scale_Portrait, //scale as factor of height for portrait
        xPos: character_PosX, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: character_PosY + 0.15, //yPos as percentile of total screen height
  
        posXLandscapeOffset: .2,
        posYLandscapeOffset: .95,
    }
];

PiecSettings.playerCharacters = [0,2,5];
PiecSettings.nonPlayerCharacters = [1,3,4];

PiecSettings.battleScript = [
    [ //new interaction
        {a: "attack", from: 3, to: 2, delay:1000, damage: 10}, //damange is in % of total health
        {a: "attack", from: 4, to: 5,delay:100, damage: 10},
        {a: "attack", from: 1, to: 0, delay: 100, damage: 10},
    ],                                           //"a" is an action, "from" specifies the id of the attacker, "to" is optional, and specifies who is attacked
        //delay specifies the delay from the previous action. 0 to play both together
        //"a" can be "attack" "attackAndFly", "interaction" 
    [ //new interaction. After the above block, the player needs to tap the screen to continue
        {a: "attack", from: 0, to: 1, delay: 500, damage: 20, effect:"shake"},
        {a: "attack", from: 5, to: 4, delay: 500, damage: 20, effect:"shake"}
    ],
    [
        {a: "attack", from: 2, to: 3, delay: 500, damage: 20 , effect:"shake"}
    ],
    [
        {a: "attack", from: 1, to: 0,delay: 300, damage: 10},
        {a: "attack", from: 3, to: 2, delay: 300,damage: 10},
        {a: "attack", from: 4, to: 5, delay: 300, damage: 10}
    ],
    [
        {a: "attack", from: 2, to: 3, delay: 500, damage: 100, effect:"shake-big"},
        {a: "attack", from: 5, to: 4, delay: 500, damage: 10, effect:"shake"},
        {a: "attack", from: 0, to: 1,  delay: 500, damage: 20 , effect:"shake"}
    ]
];

//if no reaction then run this script
PiecSettings.enemyAttackScript = [
    [
        {a: "attack", from: 1, to: 0, delay: 500, damage: 100, effect:"shake-big"},
        {a: "attack", from: 3, to: 2, delay: 100, damage: 100, effect:"shake-big"},
        {a: "attack", from: 4, to: 5, delay: 100, damage: 100, effect:"shake-big"}
    ]

];

PiecSettings.pngAnimations = [
    {//0
        src: 'car_idle.png',
        spriteWidth: 1834/7,
        spriteHeight: 756/3,
        spriteNumber: 20,
        loops: 0,
        delay: 0,
        fps: 10,
        isReversed: false,
    },
    {//1
        src: 'car_attack.png',
        spriteWidth: 1764/3,
        spriteHeight: 2016/8,
        spriteNumber: 24,
        loops: 1,
        delay: 0,
        fps: 10,
        scale: 2.7,
        isReversed: false,
    },
    {//2
        src: 'car_dead.png',
        spriteWidth: 786/3,
        spriteHeight: 1008/3,
        spriteNumber: 9,
        loops: 1,
        delay: 0,
        fps: 10,
        isReversed: false,
        persistent: true,
    },
    {//3
        src: 'blue_idle.png',
        spriteWidth: 786/3,
        spriteHeight: 1008/4,
        spriteNumber: 11,
        loops: 0,
        delay: 0,
        fps: 10,
        isReversed: false,
    },
    {//4
        src: 'blue_attack.png',
        spriteWidth: 2036/4,
        spriteHeight: 1260/5,
        spriteNumber: 18,
        loops: 1,
        delay: 0,
        fps: 10,
        scale: 2.5,
        isReversed: false,
        // persistent: true,
    },
    {//5
        src: 'blue_dead.png',
        spriteWidth: 1834/7,
        spriteHeight: 756/3,
        spriteNumber: 21,
        loops: 1,
        delay: 0,
        fps: 10,
        isReversed: false,
        persistent: true,
    },
    {//6
        src: 'enemy_idle.png',
        spriteWidth: 786/3,
        spriteHeight: 1008/4,
        spriteNumber: 12,
        loops: 0,
        delay: 0,
        fps: 10,
        isReversed: false,
        // persistent: true,
        // aligned: "middle", //aligned to bottom of character
    },
    {//7
        src: 'enemy_attack.png',
        spriteWidth: 1665/3,
        spriteHeight: 1764 /7,
        spriteNumber: 21,
        loops: 1,
        delay: 0,
        fps: 10,
        scale: 1.34,
        isReversed: false,
    },
    {//8
        src: 'enemy_dead.png',
        spriteWidth: 786/3,
        spriteHeight: 1512/6,
        spriteNumber: 18,
        loops: 1,
        delay: 0,
        fps: 10,
        scale: .9,
        isReversed: false,
    },
    
];