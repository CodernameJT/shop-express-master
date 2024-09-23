import { join } from 'path';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { randomBytes } from 'crypto';

const filePath = join(__dirname, 'files', 'products.json');

class ProductManager {
  create(data) {
    const products = this.read();
    const newProduct = { id: randomBytes(12).toString('hex'), ...data };
    products.push(newProduct);
    writeFileSync(filePath, JSON.stringify(products, null, 2));
    return newProduct;
  }

  read() {
    if (!existsSync(filePath)) {
      return [];
    }
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  readOne(id) {
    const products = this.read();
    return products.find(product => product.id === id);
  }

  update(id, data) {
    const products = this.read();
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
      return null;
    }
    products[index] = { ...products[index], ...data };
    writeFileSync(filePath, JSON.stringify(products, null, 2));
    return products[index];
  }

  destroy(id) {
    const products = this.read();
    const newProducts = products.filter(product => product.id !== id);
    writeFileSync(filePath, JSON.stringify(newProducts, null, 2));
    return products.length !== newProducts.length;
  }
}

export default new ProductManager();