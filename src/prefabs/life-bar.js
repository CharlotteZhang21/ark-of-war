  import * as Util from '../utils/util';
  import * as CustomPngSequencesRenderer from '../utils/custom-png-sequences-renderer.js';
  import Character from '../prefabs/character';
class LifeBar extends Phaser.Group{
	constructor(game, icon = "", enemy = false, amount){
		super(game);
		this.createLifeBar(enemy, amount);
		this.amount = (amount!=null)? amount : 100;
		this.initialWidth;
		if (icon != "")
			this.createIcon(icon);

	}

	// setCta(cta) {
	// 	this.cta = cta;
	// }

	createIcon(iconName){

		var icon = this.game.add.sprite(0,0,iconName);
		this.add(icon);
		icon.anchor.set(0.5);
		icon.x = (-1) * icon.width/2 * 1.5;
		icon.y = this.initialHeight/2;
		icon.scale.y = this.initialHeight / icon.height * 2;
		icon.scale.x = icon.scale.y ;
	}

	createLifeBar(enemy, amount) {
		var barBg = this.game.add.sprite(0,0,'bar-bg');
		this.add(barBg);

		var barFill = 'bar-fill';
		if(enemy){
			barFill = 'enemy-bar-fill';
		}

		var barFilling = this.game.add.sprite(0,0, barFill);
		this.add(barFilling);

		barFilling.x = this.width/100;
		barFilling.y = this.height/100 * 7;

		
		barFilling.x = this.width/100;
		barFilling.y = this.height/100 * 7;

		barFilling.scale.x = (this.width - this.width/100 * 2) / barFilling.width;
		barFilling.scale.y = barBg.height / barFilling.height * .85;

		this.fullWidthFilling = barFilling.scale.x;

		if(amount == 0){

			barFilling.scale.x = 0;
		}
		this.initialWidth = this.width;
		this.initialHeight = this.height;

		this.barFilling = barFilling;
	}

	decreaseLifeBar(value) {

		var scaleTween = this.game.add.tween(this.barFilling.scale).to(
			{x:this.fullWidthFilling * (this.amount/100)}, 300, Phaser.Easing.Quadratic.InOut, true, 0);
		
		
	}

	increaseLifeBar(value, duration) {

		console.log("increase: " + value);
		this.amount += value;
		this.amount = this.amount < 100 ? this.amount: 100;

		var d = duration ? duration : 300;

		var scaleTween = this.game.add.tween(this.barFilling.scale).to(
			{x:this.fullWidthFilling * (this.amount/100)}, d, Phaser.Easing.Quadratic.InOut, true, 0);

		
	}

	decreaseLifeBarWithDelay(value, delay) {
		if (this.amount - value > 0)
			this.amount -= value;
		else{
			this.amount = 0;
		}
		this.game.time.events.add(delay, function() {
			this.decreaseLifeBar(value);
		}, this);
	}

}

export default LifeBar;