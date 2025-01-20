class DocumentContext {
    constructor() {
        this.content = '';
        this.state = new BlankState();
    }

    setState(state) {
        this.state = state;
    }
    
    write(text) {
        this.state.write(this, text);
    }
}

class BlankState{
    write(DocumentContext, text){
        DocumentContext.content = text;
        DocumentContext.setState(new WithContentState());
    }
}

class WithContentState {
    write(DocumentContext, text) {
        DocumentContext.content += ' ' + text;
    }
}

class ApprovedState{
    write(DocumentContext, text){
        console.error('Document already approved');
    }
}

const doc = new DocumentContext();
doc.write('Hello');
console.log(doc.content);
console.log(doc.state);

doc.write('World');
console.log(doc.content);
console.log(doc.state);

doc.setState(new ApprovedState());
console.log(doc.state);
doc.write('!');
console.log(doc.content);

doc.setState(new WithContentState());
console.log(doc.state);
doc.write('!');