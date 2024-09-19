const args = process.argv;
const command = args[2];


switch(command) {
  case "echo":
    console.log(args[3]);
    break;
  case "match":
    const word = args[3];
    const regex = new RegExp(args[4]);
    console.log(regex.test(word));
    break;
  default:
    console.log("[ERROR] Unknown command");
    break;
}
