import * as Utils from '../utils/util';

class Hero extends Phaser.Group {
	constructor(game) {
		super(game);

		this.container = document.getElementById("heroes");
		var containerWidth = this.container.offsetWidth * window.devicePixelRatio;
		var containerHeight = this.container.offsetHeight * window.devicePixelRatio;
		var containerX = this.container.getBoundingClientRect().left * window.devicePixelRatio;
		var containerY = this.container.getBoundingClientRect().top * window.devicePixelRatio;


		this.hero = this.game.add.sprite(0, 0, 'hero');
		this.hero.anchor.set(0.5, 0.5);
		this.add(this.hero);
		if (this.game.global.windowHeight < this.game.global.windowWidth) {
			//landscape
			
			this.initialheroWidth = this.hero.width;
			this.initialheroHeight = this.hero.height;

		} else {
			//portrait
			
			this.initialheroWidth = this.hero.width;
			this.initialheroHeight = this.hero.height;
		}
		
		this.hero.scale.x = containerWidth / this.initialheroWidth;
		this.initialheroScale = this.hero.scale.x;
		this.hero.scale.y = this.hero.scale.x;
		this.hero.x = containerX + this.hero.width/2;
		this.hero.y = containerY + this.hero.height/2;
		this.alpha = 0;

	}

	fitInContainer() {
		this.container = document.getElementById("hero");
		this.containerWidth = this.container.offsetWidth * window.devicePixelRatio;
		this.containerHeight = this.container.offsetHeight * window.devicePixelRatio;
		var containerX = this.container.getBoundingClientRect().left * window.devicePixelRatio + this.containerWidth/2;
		var containerY = this.container.getBoundingClientRect().top * window.devicePixelRatio + this.containerHeight /2;

		this.x = containerX;
		this.y = containerY;

		this.scale.x = this.containerWidth/this.button.width;
		this.scale.y = this.scale.x;
	}

	//Animates from "hero" container to "final-hero" container
	animate(lose) {

		var newScale = this.hero.scale.x;
		this.alpha = 1;
		this.hero.scale.x = 0;
		this.hero.scale.y = 0;
		if(!lose)
 			var scaleTween = this.game.add.tween(this.hero.scale).to({x: [newScale, newScale*1.3, newScale*1.2], y: [newScale, newScale*1.3, newScale* 1.2]}, 1000, Phaser.Easing.Quadratic.InOut, true, 0);
		
	}
}

export default Hero;