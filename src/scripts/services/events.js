import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js";

async function getEvents(userName) {
    const response = await fetch(
        `${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`
    );
    const events = await response.json();
    const filteredEvents = events.filter((event) => {
        return event.type === "CreateEvent" || event.type === "PushEvent";
    });
    return filteredEvents;
}

export { getEvents };
