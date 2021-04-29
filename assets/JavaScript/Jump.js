// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        _direction: 1,
        namePokemon: "Normal Bunny",
        _time: 0,
    },

    jump(dt){
        if(this.node.y >= 550) this._direction = -1;
        if(this.node.y < 300) {
            this._direction = 1;
        }
        this.node.y += 600 * this._direction * dt;
    },

    start () {
        cc.log(this.namePokemon + ": Jump Jump!")
    },

    update (dt) {
        this._time += 1;
        this.jump(dt);
    },
});
