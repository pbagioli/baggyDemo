module Concur {

    
    export class ExpenseController {
        public static $inject = ['$scope', '$animate', '$location'];
        public person: any;
        public report: Models.ExpenseReport;
        public dt: Date = new Date();
        public toDate: Date = new Date();
        public minDate: any;
        public maxDate: any;
        public expense: any;
        public modalStage: string = "menu";
        public valuationStartDate: any;
        public valuationEndDate: any;
        public expenseDate: any;
        public valuationStartDatePickerIsOpen: any;
        public valuationEndDatePickerIsOpen: any;
        public expensePickerIsOpen: any;
        public format: any;
        public totalCharges: number;
        public currentState: number;

        constructor(private $scope, private $animate, private $location) {
            this.currentState = 6;
            this.valuationStartDate = new Date();
            this.valuationEndDate = new Date();
            this.valuationEndDatePickerIsOpen = false;
            this.person = {
                name: "Bagman",
                bank: { name: "Wells Fargo" },
                account: 123456789,
                route: 987654321
            };

            var hotelItem = new Models.ExpenseItem("Luxor Hotel",
                "Lodging",
                345.17,
                new Date(2015, 8, 15),
                new Date(2015, 8, 21));
            var rentalCar = new Models.ExpenseItem("Hertz Rental",
                "Rental Car",
                205.12,
                new Date(2015, 8, 15),
                new Date(2015, 8, 21));
            var breakfast1 = new Models.ExpenseItem("Breakfast", "Meal", 23.07, new Date(2015, 8, 15));
            var breakfast2 = new Models.ExpenseItem("Lunch", "Meal", 23.07, new Date(2015, 9, 15));
            var breakfast3 = new Models.ExpenseItem("Dinner", "Meal", 23.07, new Date(2015, 10, 15));
            var breakfast4 = new Models.ExpenseItem("Breakfast", "Meal", 23.07, new Date(2015, 11, 15));
            var breakfast5 = new Models.ExpenseItem("Lunch", "Meal", 23.07, new Date(2015, 12, 15));
            var breakfast6 = new Models.ExpenseItem("Dinner", "Meal", 23.07, new Date(2015, 13, 15));

            this.report = new Models.ExpenseReport(null,
               null,
                null,
                null,
                null);
            this.report.addExpense(breakfast1);
            this.report.addExpense(breakfast2);
            this.report.addExpense(breakfast3);
            this.report.addExpense(breakfast4);
            this.report.addExpense(breakfast5);
            this.report.addExpense(breakfast6);
            this.report.addExpense(rentalCar);
            this.report.addExpense(hotelItem);
        }

        public nextState(): void {
            this.currentState = this.currentState + 1;
        }

        public previousState(): void {
            this.currentState = this.currentState - 1;
        }


        public remove(item: Models.ExpenseItem) {
            this.report.removeItems(item); 
            
        }
        public changeModalStage(modalStage: string) {
            this.modalStage = modalStage;
        }

        public addExpense() {
            this.modalStage = 'menu';
            this.report.addExpense(new Models.ExpenseItem('Meal',
                this.expense.type,
                this.expense.amount,
                this.expense.date));
          
            this.expense = {};
            toastr.success("Added Expense");
            $("#addExpenseButton").removeClass("animated pulse animate-twice");
        }

        public valueSelected() {

            if (!this.expense.date || !this.expense.amount || !this.expense.city)
                $("#addExpenseButton").removeClass("animated pulse animate-twice");
            else
               $("#addExpenseButton").addClass("animated pulse animate-twice");
        }

        public click(newState: number) {
            if (this.currentState < newState) {
                return;
            }
            this.currentState = newState;
        }

        public goHome() {
            this.$location.path("/concur");
        }
    }

}
app.registerController("Concur.ExpenseController", Concur.ExpenseController);
app.registerRoute('/expense', "Concur.ExpenseController as vm", 'app/Concur/expense.html');
 