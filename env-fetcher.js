import "dotenv/config";
const hello = process.env.HELLO;
console.log(hello);
const hi = hello + ":D";
console.log(hi);

export { hi };
