type Size = 'S' | 'M' | 'L' | 'XL' | '';

class Product {
	constructor(public name: string = '', public price: number = 0, public size: Size = '') {}

	isProductValid(): boolean {
		for (const key in this) {
			console.log({ key, type: typeof this[key] });
			switch (typeof this[key]) {
				case 'string':
					if (this[key] === '') throw new Error(`${key} is required`);
					break;
				case 'number':
					if (this[key] <= 0) throw new Error(`${key} should be greater than 0`);
					break;
				case 'boolean':
					if (this[key] === null) throw new Error(`${key} is required`);
					break;
				default:
					throw new Error(`${key} is not supported`);
			}
		}

		return true;
	}

	toString() {
		// NO DRY
		// if (this.name === '') throw new Error('Product name is required');
		// if (this.price <= 0) throw new Error('Product price is required');
		// if (this.size === '') throw new Error('Product size is required');

		// DRY
		if (!this.isProductValid()) return;

		return `${this.name} ($${this.price}, ${this.size})`;
	}
}

(() => {
	const bluePlants = new Product('Blue Plants', 10, 'L');
	console.log(bluePlants.toString());
})();
