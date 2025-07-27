//Ex1
function checkLuckyNumber(num) {
  // TODO: Create and return a promise that:
  // 1. Waits 800ms (use setTimeout)
  // 2. Resolves with "Lucky!" if number is divisible by 7
  // 3. Resolves with "Not lucky" for other positive numbers
  // 4. Rejects with Error("Invalid number") if number is negative or zero
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 7 === 0) {
        resolve("Lucky!");
      } else if (num > 0) {
        resolve("Not Lucky");
      } else {
        reject(new Error("Invalid number"));
      }
    }, 800);
  });
}

const result = checkLuckyNumber(147);
result
  .then((r) => console.log(r))
  .catch((e) => {
    console.log(`Error("${e.message}")`);
  });

//Ex2
function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);

    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString(),
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
let totalProcessingTime = 0;

const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 },
];

const promiseArr = [];
files.forEach((f) => {
  const newPromise = processFile(f.name, f.time);
  totalProcessingTime += f.time;
  promiseArr.push(newPromise);
});

Promise.all(promiseArr)
  .then((result) => {
    console.log("\nTotal Processing Time: " + totalProcessingTime + " ms\n");
    result.forEach((p) => {
      console.log("File Name: " + p.filename);
      console.log("File Size: " + p.size);
      console.log("Time of Processing: " + p.processedAt + "\n");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

//Ex3
// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      items.forEach((i) => {
        if (inventory[i].stock === 0) {
          const error = new Error(`${i} is out of stock`);
          reject(error);
        }
      });
      resolve(items);
    }, 500);
  });
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let subtotal = 0;
      items.forEach((i) => {
        subtotal += inventory[i].price * inventory[i].stock;
      });
      const tax = subtotal * 0.8;
      const total = Math.floor(subtotal + tax);
      resolve({ subtotal: subtotal, tax: tax, total: total });
    }, 200);
  });
}

function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random();
      const transactionId = Math.random() * 1000000 + 1000000;
      if (success > 0.1) {
        resolve({
          transactionId: transactionId,
          amount: amount,
          status: "success",
        });
      } else {
        const error = new Error("Error: payment failure");
        reject(error);
      }
    }, 1500);
  });
}

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      items.forEach((i) => {
        inventory[i].stock--;
      });
      resolve(inventory);
    }, 300);
  });
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  // TODO: Implement the complete checkout flow
  return new Promise((resolve, reject) => {
    checkInventory(itemNames)
      .then((r) => {
        return calculateTotal(r);
      })
      .then((amount) => {
        return processPayment(amount.total);
      })
      .then((res) => {
        return updateInventory(itemNames);
      })
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

// Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
