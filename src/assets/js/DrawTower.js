export class DrawTower {
    constructor(ctx, towerPoint) {
        this.ctx = ctx;
        this.towerPoint = towerPoint;
        this.width = 20;
        this.height = 40;
        this.point = {
            x: towerPoint['x'],
            y: towerPoint['y']
        }
    }

    render() {
        this.drawTangentTower();
    }

    drawTangentTower() {
        let {x, y} = this.point;
        this.ctx.moveTo(x - this.width / 2, y);
        this.ctx.lineTo(x + this.width / 2, y);
        this.ctx.stroke();
        this.ctx.moveTo(x, y - 10);
        this.ctx.lineTo(x, y + this.height - 10);
        this.ctx.stroke();
    }

}
