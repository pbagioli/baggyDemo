module Models {

    export class ExpenseReport {
       public items: ExpenseItem[] = null;
       public total: number = 0;
        constructor(public name: string, public costCenter: string,  public description: string, public startDate: Date, public endDate: Date) {
            this.items = [];
        }

        addExpense(expenseItem: ExpenseItem) {
            this.items.push(expenseItem);
            this.totalItems();

        }

        removeItems(expenseItem: ExpenseItem) {
            this.items = Enumerable.From(this.items).Where((i: Models.ExpenseItem) => i.name != expenseItem.name || i.amount != expenseItem.amount || i.startDate != expenseItem.startDate).ToArray();
            this.totalItems();
        }

        public totalItems() {
            this.total = +Enumerable.From(this.items).Sum((i: Models.ExpenseItem) => i.amount).toFixed(2);
        }
    }

}
