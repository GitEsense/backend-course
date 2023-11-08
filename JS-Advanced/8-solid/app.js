'use strict';

/*
    Title: SOLID - домашнее задание
    Description: 
        Спроектируйте класс Billing со свойством amount и методом
        calculateTotal для расчёта счёта. Сделайте разный calculateTotal для
        разных типов:
        -   fixBilling - где нужно вернуть amount как результат
        -   hourBilling - который считает amount * число часов
        -   itemBilling - где считается amount * число элементов

        Соблюдайте принцип открытости / закрытости!
*/

class Billing {
    amount = 100;
    calculateTotal() {}
}

class FixBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }
}
class HourBilling extends Billing {
    constructor(hour) {
        super();
        this.hour = hour;
    }
    calculateTotal() {
        return this.amount * this.hour;
    }
}
class ItemBilling extends Billing {
    constructor(items) {
        super();
        this.items = items;
    }
    calculateTotal() {
        return this.amount * this.items.length;
    }
}

const elems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const hour = 24;
const billingArray = [new FixBilling(), new HourBilling(hour), new ItemBilling(elems)];

for (const billing of billingArray) {
    console.log(billing.calculateTotal());
}
