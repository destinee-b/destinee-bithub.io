document.addEventListener("DOMContentLoaded", () => {
    const schedule = {
        january: [
            { date: "January 10, 2024", location: "Winter Festival", time: "1:00 PM - 5:00 PM" },
            { date: "January 15, 2024", location: "Community Hall", time: "12:00 PM - 4:00 PM" },
        ],
        february: [
            { date: "February 5, 2024", location: "City Mall", time: "2:00 PM - 6:00 PM" },
            { date: "February 14, 2024", location: "Valentine's Market", time: "11:00 AM - 3:00 PM" },
        ],
        march: [
            { date: "March 12, 2024", location: "Spring Fest", time: "10:00 AM - 2:00 PM" },
            { date: "March 20, 2024", location: "Farmers' Market", time: "3:00 PM - 7:00 PM" },
        ],
        april: [
            { date: "April 8, 2024", location: "Town Square", time: "12:00 PM - 5:00 PM" },
            { date: "April 22, 2024", location: "Earth Day Fair", time: "10:00 AM - 2:00 PM" },
        ],
        july: [
            { date: "July 1, 2024", location: "Main Street Market", time: "12:00 PM - 4:00 PM" },
            { date: "July 5, 2024", location: "City Park", time: "2:00 PM - 6:00 PM" },
            { date: "July 8, 2024", location: "Community Fairgrounds", time: "11:00 AM - 3:00 PM" },
        ],
    };

    const monthSelect = document.getElementById("month-select");
    const locationsTableBody = document.querySelector(".locations-table tbody");

    function updateTable(month) {
        locationsTableBody.innerHTML = "";

        if (schedule[month]) {
            schedule[month].forEach(entry => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${entry.date}</td>
                    <td>${entry.location}</td>
                    <td>${entry.time}</td>
                `;
                locationsTableBody.appendChild(row);
            });
        } else {
            const row = document.createElement("tr");
            row.innerHTML = `<td colspan="3" style="text-align: center;">No locations scheduled for this month.</td>`;
            locationsTableBody.appendChild(row);
        }
    }

    monthSelect.addEventListener("change", () => {
        updateTable(monthSelect.value);
    });
    updateTable("january");
});
