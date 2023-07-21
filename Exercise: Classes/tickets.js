function getTickets(ticketDescriptions, sortingCriteria) {
    
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    return [...ticketDescriptions]
        .map(x => x.split('|'))
        .map(x => new Ticket(x[0], Number(x[1]), x[2]))
        .sort((a, b) => {
            return typeof a[sortingCriteria] === 'number' 
            ? a[sortingCriteria] - b[sortingCriteria] 
            : a[sortingCriteria].localeCompare(b[sortingCriteria]);
        });
}
