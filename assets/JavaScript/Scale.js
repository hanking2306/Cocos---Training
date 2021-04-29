// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var scale = require('Jump');
cc.Class({
  extends: scale,

  properties: {
    _scale: 0.1,
    _timeIdle: 0,
    nameRabbit: "Red Bunny",
  },

  scaleChange(dt) {
    if (dt <= 20) {
      this.node.scale += 0.15 / 60;
    } else {
      this.node.scale -= 0.05 / 20;
    }
  },

  start() {
    cc.log(this.nameRabbit + ": Scale!");
  },

  update(dt) {
    this._timeIdle += 1;
    if (this._timeIdle <= 60) {
      this.scaleChange(this._timeIdle);
    } else if (this._timeIdle >= 120) {
      this.node.scale = 0.1,
        this._timeIdle = 0
    }
  },
});
