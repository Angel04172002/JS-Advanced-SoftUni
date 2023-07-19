function getTickets(ticketDescriptions, sortingCriteria) {

    const tickets = [];

    const sortingCriterias = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status)
    };

    ticketDescriptions.forEach(x => {

        let [destination, price, status] = x.split('|');
        price = Number(price);
        const ticket = { destination, price, status };
        tickets.push(ticket);
    });

    return tickets.sort(sortingCriterias[sortingCriteria]);
}
