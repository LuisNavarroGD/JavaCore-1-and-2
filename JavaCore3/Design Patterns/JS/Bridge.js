class EncoderTextAbstraction {

    constructor(encoder) {
        this.encoder = encoder;
    }

    encode(str) {
        return this.encoder.encode(str);
    }

    decode(str) {
        return this.encoder.decode(str);
    }
}

class Base64Encoder {
    encode(str) {
        return btoa(unescape(encodeURIComponent(str)));
    }

    decode(str) {
        return decodeURIComponent(escape(atob(str)));
    }
}

class HTMLCodeImplementor {
    encode(str) {
        return str.split('.').reduce((acc, curr) => {
            return acc + `<p>${curr.trim()}</p>`;
        }, '');
    }

    decode(str) {
        return str.split('</p>').reduce((acc, curr) => {
            return acc + curr.replace('<p>', '').trim() + '. ';
        }, '');
    }
}

const encoder = new EncoderTextAbstraction(new Base64Encoder());
console.log(encoder.encode('peter'));
console.log(encoder.decode('cGV0ZXI='));
