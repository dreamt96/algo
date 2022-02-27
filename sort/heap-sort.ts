import Fake from "../util/Fake";

export default class HeapSort {
    public static main(): void {
        let arr: Array<number> = Fake.array();
        console.log("input: " + arr);

        let copy1: Array<number> = JSON.parse(JSON.stringify(arr));
        copy1.sort((a, b) => a - b);
        console.log("output wanted: " + copy1)

        let copy2: Array<number> = JSON.parse(JSON.stringify(arr));
        this.sort(copy2);
        console.log("output actually: " + copy2);

        if (JSON.stringify(copy1) === JSON.stringify(copy2)) {
            console.log("success");
        } else {
            console.log("failed");
        }
    }

    public static sort(arr: Array<number>) {
        for (let i = Math.floor(arr.length / 2); i > 0; i--) {
            HeapSort.maxHeapify(arr, i);
        }
    }

    private static maxHeapify(arr: Array<number>, i: number) {
        let l = HeapSort.left(i);
        let r = HeapSort.right(i);
        let largest = 0;

        if (l <= arr.length && arr[l] > arr[i]) {
            largest = l;
        } else {
            largest = i;
        }

        if (r <= arr.length && arr[r] > arr[i]) {
            largest = r;
        } else {
            largest = i;
        }

        function exchange(arr: Array<number>, i1: number, i2) {
            let v1 = arr[i1];
            let v2 = arr[i2];
            arr[i1] = v2;
            arr[i2] = v1;
        }

        if (largest !== i) {
            exchange(arr, i, largest);
            this.maxHeapify(arr, largest);
        }
    }

    private static right(i: number) {
        return 2 * i + 1;
    }

    private static left(i: number): number {
        return 2 * i;
    }
}

