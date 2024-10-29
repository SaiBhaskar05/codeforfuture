var a = document.getElementById("but");
var links = [
    "https://leetcode.com/problems/add-two-numbers/description/",
    "https://leetcode.com/problems/can-place-flowers/description/?envType=problem-list-v2&envId=array&status=TO_DO&difficulty=EASY",
    "https://leetcode.com/problems/degree-of-an-array/description/?envType=problem-list-v2&envId=array&status=TO_DO&difficulty=EASY",
    "https://leetcode.com/problems/transpose-matrix/description/?envType=problem-list-v2&envId=array&status=TO_DO&difficulty=EASY",
    "https://leetcode.com/problems/check-if-n-and-its-double-exist/description/?envType=problem-list-v2&envId=binary-search&status=TO_DO&difficulty=EASY",
    "https://leetcode.com/problems/ugly-number/description/?envType=problem-list-v2&envId=math",
    "https://leetcode.com/problems/valid-palindrome/description/?envType=problem-list-v2&envId=two-pointers",
    "https://leetcode.com/problems/valid-anagram/description/?envType=problem-list-v2&envId=string",
    "https://leetcode.com/problems/fair-candy-swap/description/?envType=problem-list-v2&envId=array&difficulty=EASY&status=TO_DO"
];

// Function to update the link every 24 hours
function updateLink() {
    const lastUpdate = localStorage.getItem("lastUpdate");
    const now = new Date().getTime();

    // Retrieve used links or initialize it
    let usedLinks = JSON.parse(localStorage.getItem("usedLinks")) || [];

    // Check if 24 hours have passed
    if (!lastUpdate || now - lastUpdate > 24 * 60 * 60 * 1000) {
        // Filter out used links to get available links
        let availableLinks = links.filter(link => !usedLinks.includes(link));

        // If no available links left, reset used links
        if (availableLinks.length === 0) {
            usedLinks = []; // Reset used links to allow all to be available again
            availableLinks = [...links]; // Repopulate available links
        }

        // Select a random link that is not in usedLinks
        const randomLink = availableLinks[Math.floor(Math.random() * availableLinks.length)];
        a.href = randomLink;

        // Add the selected link to usedLinks
        usedLinks.push(randomLink);
        localStorage.setItem("usedLinks", JSON.stringify(usedLinks)); // Store back to localStorage

        // Save the timestamp for the last update
        localStorage.setItem("lastUpdate", now);
    } else {
        // Use the last saved link if within 24 hours
        a.href = localStorage.getItem("lastLink");
    }
}

// Call the function on page load
window.onload = updateLink;