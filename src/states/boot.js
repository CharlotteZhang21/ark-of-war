class Boot extends Phaser.State {

    constructor() {
        super();
    }

    preload() {
    }

    init() {

        // setup path for asset folder depending on environment
        PiecSettings.assetsDir = PiecSettings.env === 'dev' ? 'assets/' : '';

        var game = this.game;

        var interactions = 0;

        // custom game events here        
        game.onGameComplete = new Phaser.Signal(); // generic event hook
        game.onCompleteLevel = new Phaser.Signal(); // generic event hook
        game.onInteract = new Phaser.Signal();
        game.onInteractionComplete = new Phaser.Signal();

        if (typeof piec !== 'undefined') {
            // public API methods
            piec.lockGame = function() {

                game.global.locked = true;
            };

            piec.unlockGame = function() {

                game.global.locked = false;
            };

            piec.completeLevel = function() {

                game.onCompleteLevel.dispatch();
            };

            piec.destroyGame = function() {

                game.destroy();
            };

            piec.spin = function() {
                game.onSpin.dispatch();
            };

            piec.onInteract = function() {
                game.onInteract.dispatch();

                interactions++;

                game.time.events.add(3000, function(){

                    if(PiecSettings.hitToStore > 0 && interactions >= PiecSettings.hitToStore)
                        doSomething('download');
                },this)
            }

        }

        piec.restartLevel = function() {

                // game.state.start(game.state.current);


                game.state.start('endcard');

                game.global.restarted = true;

                piec.unlockGame();

                game.global.interaction = 0;

                game.global.isComplete = false;


                // PiecSettings.onGoldUpdate(game.global.gold);

                // game.onGoldUpdated.dispatch(game);

            };

        // stretch game to fit window
        window.onresize = function() {  

            game.scale.setGameSize(document.body.clientWidth * window.devicePixelRatio, document.body.clientHeight * window.devicePixelRatio); 
            game.scale.refresh(); 
            game.state.start('boot', true, false);  
            
        }
    }

    create() {

        this.init();

        this.game.input.maxPointers = 1;

        this.initGlobalVariables();

        this.game.state.start('preloader');

        this.game.onMoveStart = function(game) {

            // increament interactions
            game.global.interactions++;

            if (PiecSettings && PiecSettings.onMoveStart) {
                PiecSettings.onMoveStart(game.global.interactions); // call out externally
            }
        };

        this.game.onMoveComplete = function(game) {

            if (PiecSettings && PiecSettings.onMoveComplete) {
                PiecSettings.onMoveComplete(game.global.moveStats); // call out externally
            }
        };
    }

    initGlobalVariables() {
        this.game.global = {
            reelsSpinCompleted: 0,
            isComplete: false,
        };
    }
}

export default Boot;
