module CssDemo {

    export class PositioningController {

        public quotation: any = null;

        public circle: Position;
        public rectangle: Position;
        public square: Position;
        public triangle: Position;

        public static $inject = ['DataService'];

        constructor(private ds: Services.DataService) {
            this.circle = new Position();
            this.triangle = new Position();
            this.square = new Position();
            this.rectangle = new Position();
            toastr.success(moment().toString());

        }

        public changePosition(shape: Position, position: string) {
            shape.position = position;
        }

        public getBehavior(position: string) {
            if (position.toUpperCase() === 'STATIC')
                return "Elements render in order, as they appear in the document flow";
            if (position.toUpperCase() === 'ABSOLUTE')
                return "Element is positioned relative to its first positioned (not static) ancestor element";
            if (position.toUpperCase() === 'FIXED')
                return "Element is positioned relative to the browser window";
            if (position.toUpperCase() === 'RELATIVE')
                return "Element is positioned relative to its normal position";
            return "blah";
        }
    }
    export class Position {
        public position: string = "static";
    }
}
app.registerController("CSS.PositioningController", CssDemo.PositioningController);
app.registerRoute('/css/positioning', "CSS.PositioningController as vm", 'app/CSS/positioning.html');
 