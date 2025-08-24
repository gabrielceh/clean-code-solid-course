(() => {
	//* Aplicar el principio de responsabilidad única
	//* Priorizar la composición frente a la herencia

	// type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

	// class HtmlElement {
	// 	constructor(public id: string, public type: HtmlType) {}
	// }

	// class InputAttributes extends HtmlElement {
	// 	constructor(public value: string, public placeholder: string, id: string) {
	// 		super(id, 'input');
	// 	}
	// }

	// class InputEvents extends InputAttributes {
	// 	constructor(value: string, placeholder: string, id: string) {
	// 		super(value, placeholder, id);
	// 	}

	// 	setFocus() {}
	// 	getValue() {}
	// 	isActive() {}
	// 	removeValue() {}
	// }

	// //? Idea para la nueva clase InputElement

	// const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');

	// console.log({ nameField });

	type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

	class HtmlElement {
		constructor(public id: string, public type: HtmlType) {}
	}

	class InputAttributes {
		constructor(public value: string, public placeholder: string) {}
	}

	class InputEvents {
		constructor() {}

		setFocus() {}
		getValue() {}
		isActive() {}
		removeValue() {}
	}

	//? Idea para la nueva clase InputElement
	interface InputElementProps {
		value:       string;
		placeholder: string;
		id:          string;
	}

	class InputElement {
		public input: InputAttributes;
		public events: InputEvents;
		public htmnlElement: HtmlElement;

		constructor({ id, value, placeholder }: InputElementProps) {
			this.input = new InputAttributes(value, placeholder);
			this.events = new InputEvents();
			this.htmnlElement = new HtmlElement(id, 'input');
		}
	}
	

	const nameField = new InputElement({ value: 'Fernando', placeholder: 'Enter first name', id: 'txtName' });
	console.log({ nameField, type: nameField.htmnlElement.type, value: nameField.input.value });
})();
