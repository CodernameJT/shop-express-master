import { writeFileSync } from 'fs';
import { randomBytes } from 'crypto';

const generateMockProducts = (count) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      id: randomBytes(12).toString('hex'),
      title: `Product ${i + 1}`,
      photo: '/images/default.png',
      category: 'default',
      price: 1,
      stock: 1
    });
  }
  return products;
};

const mockProducts = generateMockProducts(40);
writeFileSync('src/data/files/products.json', JSON.stringify(mockProducts, null, 2));