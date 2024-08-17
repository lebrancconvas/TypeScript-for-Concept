import { Binary } from "./libs";

const bin1 = new Binary([1, 0, 1]);

const bin2 = new Binary([1, 0, 0, 1, 1]);

console.log(bin1.xor(bin2));

