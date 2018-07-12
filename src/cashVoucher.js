export default class CashVoucher {
    constructor() {
        this.items = {};
    }

    get list() {
        let list = [];
        for(let itemName in this.items) {
            let item = this.items[itemName];
            list.push({
                name: itemName,
                quantity: item.quantity,
                cost: item.cost,
                totalCost: item.cost * item.quantity
            });
        }
        return list;
    }

    addItem(name, cost, quantity = 1) {
        if (this.items[name]) return this.items;
        this.items[name] = { cost, quantity };
        return this.items;
    }

    incrementItem(name, quantity) {
        if (!this.items[name]) return this.items;
        this.items[name].quantity += quantity;
        return this.items;
    }

    decrementItem(name, quantity) {
        if (!this.items[name]) return this.items;
        this.items[name].quantity -= quantity;
        if (this.items[name].quantity <= 0) this.removeItem(name)
        return this.items;
    }

    removeItem(name) {
        delete this.items[name];
        return this.items;
    }

    totalItems() {
        return Object.keys(this.items).length;
    }

    totalCost() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.totalCost;
        return this.list.reduce(reducer, 0);
    }
}