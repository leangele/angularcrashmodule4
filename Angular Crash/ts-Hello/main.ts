
import { Point } from "./point"
import { Like } from "./Like"

let point = new Point(5, 50);
point.draw();
point.x = 10
let x = point.x;

let like = new Like(50, false);
like.addLike()
let count = like.countLike;
let isLiked = like.isLiked;