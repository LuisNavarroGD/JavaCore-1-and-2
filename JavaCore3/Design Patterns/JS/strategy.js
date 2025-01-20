class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax, discount = 0) {
    this.tax = tax;
    this.discount = discount; // Define el descuento
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

class ForeignSaleStrategy {
  calculate(amount) {
    return amount * this.getDollarPrice();
  }

  getDollarPrice() {
    return 20; // Precio del dólar fijo
  }
}

// Estrategias
const regularSale = new RegularSaleStrategy(0.16, 2); // Impuesto y descuento opcional
const discountSale = new DiscountSaleStrategy(0.16, 3); // Impuesto y descuento
const foreignSale = new ForeignSaleStrategy();

// Contexto
const sale = new SaleContext(regularSale);
console.log("Venta Regular:", sale.calculate(10)); // Venta regular

// Cambiar estrategia a descuento
sale.setStrategy(discountSale);
console.log("Venta con Descuento:", sale.calculate(10)); // Venta con descuento

// Cambiar estrategia a venta extranjera
sale.setStrategy(foreignSale);
console.log("Venta Extranjera:", sale.calculate(10)); // Venta extranjera

class InfoContext {
    constructor(strategy, data, table) {
      this.setStrategy(strategy);
      this.data = data;
      this.table = table;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    show() {
      this.strategy.show(this.data, this.table);
    }
}

class Liststrategy{
    show(data, table) {
        table.innerHTML = "";
        data.forEach((product) => {
            table.innerHTML += `<div>${product.name}</div>`;
        });
    }
}

