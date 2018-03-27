var PiecSettings = PiecSettings || {};

PiecSettings.version = "-";

PiecSettings.autoPlay = {
    activateAfter: 3000,
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

PiecSettings.characterSettings = [
    { //SOLDIER BACK
        idleAnimIndex:4, //index of animation in pngAnimations array
        attackAnimIndex:5,
        // attackEffectAnimIndex:5,

        dieAnimIndex: 7,

        enemy: false,

        lifeBarYPos: .7, // The bigger this value, the higher
        // icon: 'blue-icon', // Will appear next to the life bar

        scaleLandscape: .38, //scale as factor of height for landscape
        scalePortrait: .24, //scale as factor of height for portrait
        xPos: .25, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: .28, //yPos as percentile of total screen height
    },
    { //ENEMY BACK
        idleAnimIndex:8, //index of animation in pngAnimations array
        attackAnimIndex:9,
        dieAnimIndex:11,

        enemy: true,

        lifeBarYPos: .9, // The bigger this value, the higher
        // icon: 'purple-icon', // Will appear next to the life bar

        scaleLandscape: .33, //scale as factor of height for landscape
        scalePortrait: .22, //scale as factor of height for portrait
        xPos: .7, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: .28, //yPos as percentile of total screen height

        flipped: true,
    },
    { //CAR
        idleAnimIndex:0, //index of animation in pngAnimations array
        attackAnimIndex:1,
        // attackEffectAnimIndex:,

        dieAnimIndex: 13,

        enemy: false,

        lifeBarYPos: .6, // The bigger this value, the higher
        // icon: 'blue-icon', // Will appear next to the life bar

        scaleLandscape: .48, //scale as factor of height for landscape
        scalePortrait: .3, //scale as factor of height for portrait
        xPos: .15, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: .42, //yPos as percentile of total screen height
    },
    { //ENEMY BACK
        idleAnimIndex:8, //index of animation in pngAnimations array
        attackAnimIndex:9,
        // attackEffectAnimIndex:8,
        // attackEffectStyle: "cast", // "cast" the attack effect renders on the character casting it, and then it's shooted at the enemies
                                    // "default", the attack renders on the enemy spot.
        dieAnimIndex:11,

        enemy: true,

        lifeBarYPos: .75, // The bigger this value, the higher
        icon: 'death-icon', // Will appear next to the life bar

        scaleLandscape: .38, //scale as factor of height for landscape
        scalePortrait: .23, //scale as factor of height for portrait
        xPos: .85, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: .38, //yPos as percentile of total screen height

        flipped: true,
    },
    { //ENEMY FRONT
        idleAnimIndex:8, //index of animation in pngAnimations array
        attackAnimIndex:9,
        // attackEffectAnimIndex:8,
        // attackEffectStyle: "cast", // "cast" the attack effect renders on the character casting it, and then it's shooted at the enemies
                                    // "default" or leaving it empty, the attack renders on the enemy spot.
        dieAnimIndex:11,

        enemy: true,

        lifeBarYPos: .75, // The bigger this value, the higher
        // icon: 'death-icon', // Will appear next to the life bar

        scaleLandscape: .38, //scale as factor of height for landscape
        scalePortrait: .23, //scale as factor of height for portrait
        xPos: .85, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: .52, //yPos as percentile of total screen height

        flipped: true,
    },
    { //KNIGHT FRONT
        idleAnimIndex:4, //index of animation in pngAnimations array
        attackAnimIndex:5,
        // attackEffectAnimIndex:5,

        dieAnimIndex: 7,

        enemy: false,

        lifeBarYPos: .7, // The bigger this value, the higher
        // icon: 'blue-icon', // Will appear next to the life bar

        scaleLandscape: .38, //scale as factor of height for landscape
        scalePortrait: .24, //scale as factor of height for portrait
        xPos: .25, //anchor is on 0.5,0.5. xPos as a percentile of total screen width
        yPos: .68, //yPos as percentile of total screen height
    }
];

PiecSettings.playerCharacters = [0,2,5];
PiecSettings.nonPlayerCharacters = [1,3,4];

PiecSettings.battleScript = [
    [ //new interaction
        {a: "attack", from: 3, to: 2, delay:300, damage: 9}, //damange is in % of total health
        {a: "attack", from: 4, to: 5,delay:1000, damage: 10},
        {a: "attack", from: 1, to: 0, delay: 1200, damage: 20, effect:"shake"},
    ],                                           //"a" is an action, "from" specifies the id of the attacker, "to" is optional, and specifies who is attacked
        //delay specifies the delay from the previous action. 0 to play both together
        //"a" can be "attack" "attackAndFly", "interaction" 
    [ //new interaction. After the above block, the player needs to tap the screen to continue
        {a: "attack", from: 0, to: 1, delay: 500, damage: 50 , effect:"shake"}
    ],
    [
        {a: "attack", from: 5, to: 4,delay: 500, damage: 50, effect:"shake"}
    ],
    [
        {a: "attack", from: 2, to: 3,  delay: 500, damage: 50}
    ],
    [
        {a: "attack", from: 1, to: 0,delay: 500, damage: 20},
        {a: "attack", from: 3, to: 0, delay: 500,damage: 7},
        {a: "attack", from: 4, to: 5, delay: 500, damage: 7}
    ],
    [
        {a: "attack", from: 2, delay: 500, delay:500, damage: 100, effect:"shake-big"}
    ]
];

//if no reaction then run this script
PiecSettings.enemyAttackScript = [
    [
        {a: "attack", from: 3, to 4, delay: 500, damage: 100, effect:"shake-big"}
    ]

];

PiecSettings.pngAnimations = [
    {//0
        src: 'car_idle.png',
        spriteWidth: 1834/7,
        spriteHeight: 756/3,
        spriteNumber: 21,
        loops: 0,
        delay: 0,
        fps: 10,
        isReversed: false,
    },
    {//1
        src: 'car_attack.png',
        spriteWidth: 1764/3,
        spriteHeight: 3024/12,
        spriteNumber: 36,
        loops: 1,
        delay: 0,
        fps: 10,
        isReversed: false,
    },
    {//2
        src: 'car_hurt.png',
        spriteWidth: 750/3,
        spriteHeight: 767/4,
        spriteNumber: 11,
        loops: 1,
        delay: 0,
        fps: 22,
        isReversed: false,
        persistent: true,
    },
    {//3
        src: 'car_dead.png',
        spriteWidth: 750/3,
        spriteHeight: 767/4,
        spriteNumber: 11,
        loops: 1,
        delay: 0,
        fps: 22,
        isReversed: false,
        persistent: true,
    },
    {//4
        src: 'blue_idle.png',
        spriteWidth: 480/2,
        spriteHeight: 1224/6,
        spriteNumber: 12,
        loops: 0,
        delay: 0,
        fps: 10,
        isReversed: false,
    },
    {//5
        src: 'blue_attack.png',
        spriteWidth: 2036/4,
        spriteHeight: 1512/6,
        spriteNumber: 23,
        loops: 1,
        delay: 0,
        fps: 10,
        isReversed: false,
        // persistent: true,
    },
    {//6
        src: 'blue_hurt.png',
        spriteWidth: 1763/7,
        spriteHeight: 162,
        spriteNumber: 7,
        loops: 1,
        delay: 300,
        fps: 10,
        isReversed: false,
    },
    {//7
        src: 'blue_dead.png',
        spriteWidth: 786/3,
        spriteHeight: 1008/3,
        spriteNumber: 9,
        loops: 1,
        delay: 0,
        fps: 10,
        isReversed: false,
        persistent: true,
    },
    {//8
        src: 'enemy_idle.png',
        spriteWidth: 786/3,
        spriteHeight: 1008/4,
        spriteNumber: 12,
        loops: 1,
        delay: 0,
        fps: 10,
        isReversed: false,
        // persistent: true,
        // aligned: "middle", //aligned to bottom of character
    },
    {//9
        src: 'enemy_attack.png',
        spriteWidth: 660/3,
        spriteHeight: 712/3,
        spriteNumber: 8,
        loops: 1,
        delay: 0,
        fps: 12,
        isReversed: false,
    },
    {//10
        src: 'enemy_hurt.png',
        spriteWidth: 1310/5,
        spriteHeight: 252,
        spriteNumber: 5,
        loops: 0,
        delay: 0,
        fps: 8,
        isReversed: false,
    },
    {//11
        src: 'enemy_dead.png',
        spriteWidth: 700/5,
        spriteHeight: 488/2,
        spriteNumber: 10,
        loops: 0,
        delay: 0,
        fps: 11,
        isReversed: false,
    },
    
];