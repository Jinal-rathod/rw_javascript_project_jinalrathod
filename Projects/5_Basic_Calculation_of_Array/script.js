{
    let numbers = [10, 20, 30, 40, 50];
    console.log("📊 Numbers:", numbers);

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("💰 Sum:", sum);

    let average = sum / numbers.length;
    console.log("📈 Average:", average);

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) max = numbers[i];
    }
    console.log("🏆 Maximum:", max);

    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) min = numbers[i];
    }
    console.log("📉 Minimum:", min);

    console.log("🔢 Total Elements:", numbers.length);

    let reversed = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }
    console.log("🔄 Reversed:", reversed);

    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) evens.push(numbers[i]);
    }
    console.log("⚡ Even Numbers:", evens);

    let odds = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) odds.push(numbers[i]);
    }
    console.log("🌙 Odd Numbers:", odds);

    let squares = [];
    for (let i = 0; i < numbers.length; i++) {
        squares.push(numbers[i] * numbers[i]);
    }
    console.log("🟩 Squares:", squares);

    let sortedAsc = [...numbers].sort((a, b) => a - b);
    console.log("⬆️ Sorted Ascending:", sortedAsc);

    let sortedDesc = [...numbers].sort((a, b) => b - a);
    console.log("⬇️ Sorted Descending:", sortedDesc);

}