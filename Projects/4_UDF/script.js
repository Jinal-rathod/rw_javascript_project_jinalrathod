// User Defined Functions (UDF) Project - Food Ordering System

{
    function showMenu() {
        console.log("\n===== 🍔 Food Menu =====");
        console.log("1. Pizza - ₹250");
        console.log("2. Burger - ₹120");
        console.log("3. Pasta - ₹180");
        console.log("4. Cold Drink - ₹60");
        console.log("5. Exit");
    }

    function getPrice(choice) {
        switch (choice) {
            case 1: return 250;
            case 2: return 120;
            case 3: return 180;
            case 4: return 60;
            default: return 0;
        }
    }

    function startOrdering() {
        let total = 0;
        let choice;

        do {
            showMenu();
            choice = parseInt(prompt("Enter your choice (1-5): "));

            if (choice >= 1 && choice <= 4) {
                let price = getPrice(choice);
                total += price;
                console.log(`Added Item! Current Bill = ₹${total}`);
            } else if (choice !== 5) {
                console.log("Invalid choice! Please try again.");
            }
        } while (choice !== 5);

        console.log(`\n===== Final Bill: ₹${total} =====`);
        console.log("== Thank you for ordering! ==");
    }

    startOrdering();
}