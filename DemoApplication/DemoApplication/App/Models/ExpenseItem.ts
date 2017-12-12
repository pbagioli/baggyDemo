module Models {

    export class ExpenseItem {


        constructor(public name: string, public type: string, public amount: number, public startDate: Date, public endDate: Date = null) {

        }

    }

}
