import { Increment } from "k6/x/increment";

export let options = {
    vus: 5,
    iterations: 21,
}

let counter = new Increment(10);

export default function() {
    console.log(counter.next(), __VU, __ITER);
}
