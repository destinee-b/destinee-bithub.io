function suggestFlavor() {
    const flavors = [
        "Bahama Mama", "BananaBerry", "Fuzzy Navel", "Georgia Peach", "Island Vibe",
        "Mango Tango", "Melonberry", "Mudslide", "Ocean Pacific", "Patriot",
        "Peach Razzmatazz", "Pineapple Orange", "Purple Cow", "Rock N' Roll",
        "Root Beer Float", "Silver Fox", "Snowcream", "Strawberry Margarita",
        "Strawberry Shortcake", "Summer Breeze", "Sunrise", "Tiger's Blood",
        "Volcano", "Wedding Cake", "Wild Berry", "Wild Cherry", "Wild Watermelon",
        "Banana", "Birthday Cake", "Black Cherry", "Blackberry", "Blood Orange",
        "Blue Raspberry", "Blueberry", "Bubblegum", "Cherry", "Coconut",
        "Cotton Candy", "Fresh Lime", "Green Apple", "Lemon", "Mango", "Margarita",
        "Orange", "Peach", "Pineapple", "Pink Lemonade", "Pina Colada",
        "Red Raspberry", "Root Beer", "Strawberry", "Vanilla", "Watermelon"
    ];
    const randomIndex = Math.floor(Math.random() * flavors.length);
    document.getElementById("suggested-flavor").textContent = flavors[randomIndex];
}
