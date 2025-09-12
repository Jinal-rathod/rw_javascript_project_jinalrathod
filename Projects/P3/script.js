// Food Store Menu Program 

{
    let choice;

    do {
        choice = prompt(` 
            -------------------------------------
            === Welcome to Food Store ===
            -------------------------------------\n 
            1. Pizza - $10
            2. Burger - $5 
            3. Pasta - $7 
            4. Sandwich - $4 
            5. Fries - $3
            6. Coffee - $2
            7. Juice - $3
            8. Ice Cream - $6
            9. Exit
            Enter your choice (1-9):`);

        switch (choice) {
            case "1":
                console.log("🍕 You ordered Pizza. Price: $10");
                break;
            case "2":
                console.log("🍔 You ordered Burger. Price: $5");
                break;
            case "3":
                console.log("🍝 You ordered Pasta. Price: $7");
                break;
            case "4":
                console.log("🥪 You ordered Sandwich. Price: $4");
                break;
            case "5":
                console.log("🍟 You ordered Fries. Price: $3");
                break;
            case "6":
                console.log("☕ You ordered Coffee. Price: $2");
                break;
            case "7":
                console.log("🧃 You ordered Juice. Price: $3");
                break;
            case "8":
                console.log("🍨 You ordered Ice Cream. Price: $6");
                break;
            case "9":
                console.log("👋 Thank you for visiting Food Store!");
                break;
            default:
                console.log("❌ Invalid choice! Please try again.");
        }

    } while (choice !== "9");

    
}