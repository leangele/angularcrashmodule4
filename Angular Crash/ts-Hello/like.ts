export class Like {
    constructor(private _countLike?: number, private _isLiked?: boolean) {
    }
    addLike() {
        this._countLike++;
        this._isLiked=true;
    }
    removeLike() {
        this._countLike--;
        this._isLiked=false;
    }
    get countLike(){
        return this._countLike;
    }
    get isLiked(){
        return this._isLiked;
    }
}