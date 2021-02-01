export class ProductRow {
    public constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly price: number,
        public count: number = 1
    ) { }

    public get cost(): number {
        return this.count * this.price;
    }
}
