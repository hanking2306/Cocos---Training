(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/JavaScript/Rotation.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '43e5bR7cKpCRoCTBusjmIV6', 'Rotation', __filename);
// JavaScript/Rotation.js

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
var rotation = require("Jump");
cc.Class({
    extends: rotation,

    properties: {
        _angleRotate: 180,
        _timeIdle: 0,
        nameBunnny: "Grown Bunny"
    },

    start: function start() {
        cc.log(this.nameBunnny + ": Rotation!");
    },
    Rotation: function Rotation() {
        this.node.angle += 3;
    },
    update: function update(dt) {
        this._timeIdle += 1;
        if (this._timeIdle <= 60) {
            this.Rotation();
        } else if (this._timeIdle > 180) {
            this._timeIdle = 0;
            this._angleRotate += 180;
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
        //# sourceMappingURL=Rotation.js.map
        