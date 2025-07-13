import promptSync from "prompt-sync";
import costumer from "./costumer.mjs";
const prompt = promptSync({ sigint: true });

const costumer1 = new costumer(1000);

let option = "";
while (option !== "4") {
  // console.clear();
  console.log("=== Banking System ===");
  console.log(
    "1) Check Balance\n2) Deposit Money\n3) Withdraw Money\n4) Exit\nChoose option(1-4): "
  );
  option = prompt("> ");
  switch (option) {
    case "1": // Check Balance
      console.log(`Current balance: $${costumer1.getBalance()}`);
      break;
    case "2": // Deposit Money
      const depositAmount = prompt("Enter amount to deposit: $");
      costumer1.depositMoney(parseInt(depositAmount));
      console.log(`New balance: $${costumer1.getBalance()}`);
      break;
    case "3": // Withdraw Money
      const withdrawAmount = prompt("Enter amount to withdraw: $");
      costumer1.withdrawMoney(parseInt(withdrawAmount));
      console.log(`Current balance: $${costumer1.getBalance()}`);
      break;
    case "4": // Exit
      console.log("Exiting the banking system.");
      break;
    default:
      console.log("Invalid option.");
      break;
  }
}
