const reviews = [
    { text: "The best shaved ice I’ve ever had!", author: "Marie Smith" },
    { text: "A refreshing treat on a hot day.", author: "John Cooke" },
    { text: "My kids love all the fun flavors!", author: "Mary Marie" },
    { text: "Great service and even better flavors.", author: "Michael Brown" },
    { text: "The most delicious and creative flavors I’ve tried!", author: "Sarah Davis" },
    { text: "Perfect for summer parties and family gatherings.", author: "Chris Wilson" },
    { text: "I can’t get enough of the Strawberry Shortcake flavor!", author: "Amanda Martinez" },
    { text: "Affordable, delicious, and always served with a smile.", author: "David Garcia" },
    { text: "Every visit feels like a mini vacation.", author: "Jessica Miller" },
    { text: "The Tiger's Blood flavor is my absolute favorite!", author: "Daniel Thompson" }
];

const randomIndex = Math.floor(Math.random() * reviews.length);
const review = reviews[randomIndex];

document.getElementById("review-text").textContent = `"${review.text}"`;
document.getElementById("review-author").textContent = `- ${review.author}`;
