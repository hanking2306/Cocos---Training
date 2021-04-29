(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/JavaScript/ScaleTeam.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f330c292ppB+KU/0AdwOOpK', 'ScaleTeam', __filename);
// JavaScript/ScaleTeam.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var skew = require('Jump');
cc.Class({
    extends: skew,

    properties: {
        _timeIdle: 0,
        nameRabbitTeam: "Red Bunny"
    },

    skewTeam: function skewTeam() {
        if (this._timeIdle < 30) {
            this.node.skewX -= 1.5;
        } else if (this._timeIdle < 60) {
            this.node.skewX += 2.5;
        } else {
            this.node.skewX -= 1;
        }
    },
    start: function start() {
        cc.log(this.nameRabbitTeam + ": Skew!");
    },
    update: function update(dt) {
        this._timeIdle += 1;
        if (this._timeIdle <= 90) {
            this.skewTeam();
        } else if (this._timeIdle > 150) {
            this._timeIdle = 0;
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ScaleTeam.js.map
        