export default class Random {

    public static num(min:number,max:number):number{
        let rand = Math.random();
        return Math.floor(rand * (max-min) + min);
    }
}
