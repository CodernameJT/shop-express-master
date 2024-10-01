// src/data/products.manager.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'products.json');

class ProductManager {
  create(data) {
    const products = this.read();
    const newProduct = { id: Date.now(), ...data };
    products.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    return newProduct;
  }

  read() {
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const data = fs.readFileSync(filePath, 'utf-8');
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
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    return products[index];
  }

  destroy(id) {
    const products = this.read();
    const newProducts = products.filter(product => product.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(newProducts, null, 2));
    return products.length !== newProducts.length;
  }
}

export default ProductManager;