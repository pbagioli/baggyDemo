export class JsonValueConverter {
    toView(value: Object): string {
        return JSON.stringify(value, null, "\t");
    }
}