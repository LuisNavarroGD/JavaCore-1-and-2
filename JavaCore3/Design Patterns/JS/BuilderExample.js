class Form {
    constructor(controls, action) {
        this.controls = controls;
        this.action = action;
    }

    getContent() {
        return `<form method="post" action="${this.action}">
            ${this.controls.reduce((ac, c) => {
                return ac + `<div>
                ${ this.getLabel(c) }
                ${ this.getInput(c) }
                </div>`
            }, "")}
            <button type="submit">Submit</button>
            </form>`
    }

    getLabel(control) {
        return `<label>${control.text}</label>`;
    }

    getInput(control) {
        return `<input type="${control.type}" name="${control.name}"/>`;
    }
}

class FormBuilder{
    constructor() {
        this.reset();
    }

    reset() {
        this.controls = [];
        this.action = "";
    }

    setAction(action) {
        this.action = action;
        return this;
    }

    setText(name, text) {
        this.controls.push({
            name: name,
            text: text,
            type: "text"
        });
        return this;
    }

    addControl(control) {
        this.controls.push(control);
        return this;
    }

    build() {
        const frm = new Form(this.controls, this.action);
        this.reset();
        return frm;
    }
}

class FormDirector {
    constructor(formBuilder) {
        this.setBuilder(formBuilder);
    }

    setBuilder(formBuilder) {
        this.formBuilder = formBuilder;
    }

    createPeopleForm() {
        this.formBuilder.reset();
        this.formBuilder.setText("firstName", "First Name")
            .setText("lastName", "Last Name")
            .addControl({
                name: "age",
                text: "Age",
                type: "number"
            });
    }
}

const director = new FormDirector(new FormBuilder());
director.createPeopleForm();

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder.setAction("add.php")
    .setText("firstName", "First Name")
    .setText("lastName", "Last Name")
    .addControl({
        name: "age",
        text: "Age",
        type: "number"
    })
    .build();

    console.log(formPeople);