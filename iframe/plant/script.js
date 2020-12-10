"use strict";
// Tidier code with webpack and better Typescript in Github
// https://github.com/ste-vg/plant-drawer
console.clear();
var BranchState;
(function (BranchState) {
    BranchState[BranchState["ready"] = 0] = "ready";
    BranchState[BranchState["animating"] = 1] = "animating";
    BranchState[BranchState["ended"] = 2] = "ended";
})(BranchState || (BranchState = {}));
var Branch = /** @class */ (function () {
    function Branch(stage, settings, grid, placeBehind) {
        if (placeBehind === void 0) { placeBehind = null; }
        this.branches = [];
        this.state = BranchState.ready;
        this.branchOut = new Rx.Subject();
        this.thornOut = new Rx.Subject();
        this.flowerOut = new Rx.Subject();
        this.leafOut = new Rx.Subject();
        this.grid = 50; //grid;
        this.stage = stage;
        this.placeBehind = placeBehind;
        settings.width = 2;
        settings.opacity = 1;
        this.state = BranchState.animating;
        var path = this.createLine(settings);
        var branchCount = 2;
        for (var i = 0; i < branchCount; i++) {
            this.createSqwig(i, branchCount, path, JSON.parse(JSON.stringify(settings)));
        }
    }
    Branch.prototype.createSqwig = function (index, total, path, settings) {
        var _this = this;
        var branch = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        branch.setAttribute('d', path);
        branch.style.fill = 'none';
        branch.style.stroke = this.getColor(index);
        branch.style.strokeLinecap = "round";
        settings.length = branch.getTotalLength();
        settings.progress = settings.length;
        branch.style.strokeDasharray = settings.length + ", " + settings.length;
        branch.style.strokeDashoffset = "" + settings.length;
        this.branches.push({ path: branch, settings: settings });
        if (!this.placeBehind)
            this.stage.appendChild(branch);
        else
            this.stage.insertBefore(branch, this.placeBehind.branches[0].path);
        var widthTarget = settings.sections * 0.8;
        TweenMax.set(branch, { x: -index * 2, y: -index * 2 });
        TweenMax.to(settings, settings.sections * 0.4, {
            progress: 0,
            width: widthTarget,
            ease: Power1.easeOut,
            delay: index * (settings.sections * 0.001),
            onUpdate: function () {
                if (index == 0 && settings.sections > 4) {
                    var choice = Math.random();
                    var length = settings.length - settings.progress;
                    var pos = branch.getPointAtLength(length);
                    var sec = Math.ceil((settings.progress / settings.length) * settings.sections) - 2;
                    if (sec < 4)
                        sec = 4;
                    var out = {
                        position: { x: pos.x, y: pos.y },
                        width: widthTarget,
                        sections: sec
                    };
                    if (choice < 0.02)
                        _this.branchOut.next(out);
                    else if (choice < 0.1)
                        _this.thornOut.next(out);
                    else if (choice < 0.2)
                        _this.flowerOut.next(out);
                    else if (choice < 0.4)
                        _this.leafOut.next(out);
                }
            },
            onComplete: function () {
                if (index = total - 1)
                    _this.state = BranchState.ended;
                //branch.remove();
            }
        });
    };
    Branch.prototype.update = function () {
        this.branches.map(function (set) {
            set.path.style.strokeDashoffset = "" + set.settings.progress;
            set.path.style.strokeWidth = set.settings.width + "px";
            //set.path.style.opacity = `${set.settings.opacity}`;
        });
    };
    Branch.prototype.createLine = function (settings) {
        var x = settings.x;
        var y = settings.y;
        var dx = settings.directionX;
        var dy = settings.directionY;
        var path = [
            'M',
            '' + x,
            '' + y
        ];
        var steps = settings.sections;
        var step = 0;
        var getNewDirection = function (direction, goAnywhere) {
            if (!goAnywhere && settings['direction' + direction.toUpperCase()] != 0)
                return settings['direction' + direction.toUpperCase()];
            return Math.random() < 0.5 ? -1 : 1;
        };
        if (steps * 2 > step)
            path.push("Q");
        while (step < steps * 2) {
            step++;
            var stepUp = this.stepUp(step);
            x += (dx * stepUp) * this.grid;
            y += (dy * stepUp) * this.grid;
            if (step != 1)
                path.push(',');
            path.push('' + x);
            path.push('' + y);
            if (step % 2 != 0) {
                dx = dx == 0 ? getNewDirection('x', step > 8) : 0;
                dy = dy == 0 ? getNewDirection('y', step > 8) : 0;
            }
        }
        return path.join(' ');
    };
    Branch.prototype.stepUp = function (step) {
        var r = Math.random() * 10;
        return step / (10 + r);
    };
    Branch.prototype.clear = function () {
        this.branchOut.complete();
        this.thornOut.complete();
        this.leafOut.complete();
        this.flowerOut.complete();
        this.branches.map(function (set) { return set.path.remove(); });
    };
    Branch.prototype.getColor = function (index) {
        var base = ['#646F4B'];
        var greens = ['#6FCAB1']; //, '#5DC4A8', '#4BBD9E', '#3AB795', '#A7CCBA', '#91C0A9', '#86BAA1']
        var chooseFrom = index == 0 ? base : greens;
        return chooseFrom[Math.floor(Math.random() * chooseFrom.length)];
    };
    return Branch;
}());
var Flower = /** @class */ (function () {
    function Flower(stage, position, size, colors) {
        //outer petals
        this.petals = [];
        var petalCount = 8;
        var p = petalCount;
        var rotateAmount = 360 / petalCount;
        var growRotation = (Math.random() * 120) - 60;
        while (p > 0) {
            --p;
            var petal = document.createElementNS("http://www.w3.org/2000/svg", 'path');
            petal.setAttribute('d', this.createPetalPath({ x: 0, y: 0 }, size));
            petal.setAttribute('class', 'petal');
            petal.style.fill = colors.outer;
            petal.style.stroke = 'none';
            this.petals.push(petal);
            var rotate = (rotateAmount * p) + Math.random() * 30;
            TweenMax.set(petal, { scale: 0, x: position.x, y: position.y, rotation: rotate });
            var delay = Math.random();
            TweenMax.to(petal, 1.5, { scale: 1, delay: delay });
            TweenMax.to(petal, 3, { rotation: '+=' + growRotation, delay: delay, ease: Elastic.easeOut });
            stage.appendChild(petal);
        }
        // inner petals
        petalCount = 6;
        p = petalCount;
        rotateAmount = 360 / petalCount;
        while (p > 0) {
            --p;
            var petal = document.createElementNS("http://www.w3.org/2000/svg", 'path');
            petal.setAttribute('d', this.createPetalPath({ x: 0, y: 0 }, size / 2));
            petal.setAttribute('class', 'petal');
            petal.style.fill = colors.inner;
            petal.style.stroke = 'none';
            this.petals.push(petal);
            var rotate = (rotateAmount * p) + Math.random() * 30;
            TweenMax.set(petal, { scale: 0, x: position.x, y: position.y, rotation: rotate });
            TweenMax.to(petal, 6, { scale: 1, rotation: '+=' + growRotation, delay: 1 + Math.random(), ease: Elastic.easeOut });
            stage.appendChild(petal);
        }
    }
    Flower.prototype.createPetalPath = function (p, size) {
        var top = size * 4;
        var middle = size * 1.8;
        var width = size;
        var path = "M " + p.x + " " + p.y + " Q " + (p.x - width) + " " + (p.y + middle) + "  " + p.x + " " + (p.y + top) + " Q " + (p.x + width) + " " + (p.y + middle) + " " + p.x + " " + p.y + " Z";
        return path;
    };
    Flower.prototype.clear = function () {
        this.petals.map(function (petal) { return petal.remove(); });
    };
    return Flower;
}());
var Leaf = /** @class */ (function () {
    function Leaf(stage, position, size) {
        this.leaf = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        this.leaf.setAttribute('d', this.createLeafPath({ x: 0, y: 0 }, size));
        this.leaf.setAttribute('class', 'leaf');
        this.leaf.style.fill = this.getColor();
        this.leaf.style.stroke = 'none';
        var rotate = Math.random() * 360;
        var rotateGrow = (Math.random() * 300) - 150;
        TweenMax.set(this.leaf, { scale: 0, x: position.x, y: position.y, rotation: rotate });
        TweenMax.to(this.leaf, 3, { scale: 1 });
        TweenMax.to(this.leaf, 4, { rotation: rotate + rotateGrow, ease: Elastic.easeOut });
        stage.appendChild(this.leaf);
    }
    Leaf.prototype.createLeafPath = function (p, size) {
        var top = size * (3 + Math.random() * 2);
        var middle = size * (1 + Math.random());
        var width = size * (1.5 + Math.random() * 0.5);
        var path = "M " + p.x + " " + p.y + " Q " + (p.x - width) + " " + (p.y + middle) + "  " + p.x + " " + (p.y + top) + " Q " + (p.x + width) + " " + (p.y + middle) + " " + p.x + " " + p.y + " Z";
        return path;
    };
    Leaf.prototype.getColor = function () {
        var greens = ['#00A676', '#00976C', '#008861', '#007956'];
        return greens[Math.floor(Math.random() * greens.length)];
    };
    Leaf.prototype.clear = function () {
        this.leaf.remove();
    };
    return Leaf;
}());
var Thorn = /** @class */ (function () {
    function Thorn(stage, position, size) {
        this.thorn = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        this.thorn.setAttribute('d', this.createThornPath({ x: 0, y: 0 }, size));
        this.thorn.setAttribute('class', 'thorn');
        this.thorn.style.fill = '#646F4B';
        this.thorn.style.stroke = 'none';
        TweenMax.set(this.thorn, { scale: 0, x: position.x, y: position.y, rotation: Math.random() * 360 });
        TweenMax.to(this.thorn, 3, { scale: 1 });
        stage.appendChild(this.thorn);
    }
    Thorn.prototype.createThornPath = function (p, w) {
        var path = "M " + p.x + " " + p.y + " Q " + (p.x - w / 2) + " " + p.y + "  " + (p.x - w / 2) + " " + (p.y + w / 4) + " L " + p.x + " " + (p.y + w * 2) + " L " + (p.x + w / 2) + " " + (p.y + w / 4) + " Q " + (p.x + w / 2) + " " + p.y + " " + p.x + " " + p.y + " Z";
        return path;
    };
    Thorn.prototype.clear = function () {
        this.thorn.remove();
    };
    return Thorn;
}());
var App = /** @class */ (function () {
    function App(container, downloadButton) {
        var _this = this;
        this.branches = [];
        this.thorns = [];
        this.flowers = [];
        this.leaves = [];
        this.width = 600;
        this.height = 600;
        this.grid = 40;
        this.container = container;
        this.downloadButton = downloadButton;
        this.svg = document.getElementById('stage');
        this.branchGroup = document.getElementById('branchGroup');
        this.thornGroup = document.getElementById('thornGroup');
        this.leafGroup = document.getElementById('leafGroup');
        this.flowerGroup = document.getElementById('flowerGroup');
        this.onResize();
        this.tick();
        Rx.Observable.fromEvent(this.downloadButton, 'click')
            .map(function (mouseEvent) { mouseEvent.preventDefault(); })
            .subscribe(function () { return _this.download(); });
        Rx.Observable.fromEvent(this.container, 'click')
            .map(function (mouseEvent) {
            mouseEvent.preventDefault();
            return {
                x: mouseEvent.clientX,
                y: mouseEvent.clientY
            };
        })
            .subscribe(function (position) {
            _this.clearOld();
            _this.startBranch(16, position, true);
        });
        this.startBranch(16, { x: this.width / 2, y: this.height / 2 }, true);
        Rx.Observable.fromEvent(window, "resize").subscribe(function () { return _this.onResize(); });
    }
    App.prototype.clearOld = function () {
        this.branches.map(function (branch) {
            branch.clear();
        });
        this.thorns.map(function (thorn) { return thorn.clear(); });
        this.flowers.map(function (flower) { return flower.clear(); });
        this.leaves.map(function (leaf) { return leaf.clear(); });
        TweenMax.killAll();
        this.branches = [];
        this.thorns = [];
        this.flowers = [];
        this.leaves = [];
    };
    App.prototype.startBranch = function (sections, position, setColors) {
        var _this = this;
        if (setColors === void 0) { setColors = false; }
        if (setColors) {
            this.flowerColors = {
                outer: this.getColor(),
                inner: this.getColor()
            };
        }
        var dx = Math.random();
        if (dx > 0.5)
            dx = dx > 0.75 ? 1 : -1;
        else
            dx = 0;
        var dy = 0;
        if (dx == 0)
            dx = Math.random() > 0.5 ? 1 : -1;
        var settings = {
            x: position.x,
            y: position.y,
            directionX: dx,
            directionY: dy,
            sections: sections
        };
        var newBranch = new Branch(this.branchGroup, settings, this.grid / 2 + Math.random() * this.grid / 2, this.branches.length > 1 ? this.branches[this.branches.length - 2] : null);
        newBranch.branchOut.debounceTime(200).subscribe(function (out) { return _this.startBranch(out.sections, out.position); });
        newBranch.thornOut.debounceTime(100).subscribe(function (out) { return _this.thorns.push(new Thorn(_this.thornGroup, out.position, out.width)); });
        newBranch.flowerOut.debounceTime(300).subscribe(function (out) { return _this.flowers.push(new Flower(_this.flowerGroup, out.position, out.width, _this.flowerColors)); });
        newBranch.leafOut.debounceTime(50).subscribe(function (out) { return _this.leaves.push(new Leaf(_this.leafGroup, out.position, out.width)); });
        this.branches.push(newBranch);
    };
    App.prototype.onResize = function () {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.svg.setAttribute('width', String(this.width));
        this.svg.setAttribute('height', String(this.height));
    };
    App.prototype.tick = function () {
        var _this = this;
        var step = this.branches.length - 1;
        while (step >= 0) {
            if (this.branches[step].state != BranchState.ended) {
                this.branches[step].update();
            }
            --step;
        }
        requestAnimationFrame(function () { return _this.tick(); });
    };
    App.prototype.download = function () {
        var a = document.createElement('a'), xml, ev;
        a.download = 'my-amazing-plant(by ste.vg).svg';
        xml = (new XMLSerializer()).serializeToString(this.svg);
        a.href = 'data:application/octet-stream;base64,' + btoa(xml);
        ev = document.createEvent("MouseEvents");
        ev.initMouseEvent("click", true, false, self, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(ev);
    };
    App.prototype.getColor = function () {
        var offset = Math.round(Math.random() * 100);
        var r = Math.sin(0.3 * offset) * 100 + 155;
        var g = Math.sin(0.3 * offset + 2) * 100 + 155;
        var b = Math.sin(0.3 * offset + 4) * 100 + 155;
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    };
    App.prototype.componentToHex = function (c) {
        var hex = Math.round(c).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    return App;
}());
var container = document.getElementById('app');
var downlaodButton = document.getElementById('download-button');
var app = new App(container, downlaodButton);