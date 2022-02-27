import Random from "./Random";

export default class Fake {

    static array():Array<number> {
        let length = 20;
        let min = 1;
        let max = 100;

        let arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(Random.num(min, max));
        }
        return arr;
    }
}
