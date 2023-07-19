class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {

        let distanceX = point1.x - point2.x;
        let distanceY = point1.y - point2.y;

        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }
}
