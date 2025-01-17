// /studio/schemaTypes/product.ts this will be the path
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'Discoutprice',
        title: 'Discout Price',
        type: 'number',
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Electronics', value: 'electronics' },
            { title: 'Clothing', value: 'clothing' },
            { title: 'Home', value: 'home' },
          ],
        },
      },
      {
        name: 'ratings',
        title: 'ratigs',
        type: 'number',
      },
      {
        name: 'stockQuantity',
        title: 'Stock Quantity',
        type: 'number',
      },
    ],
  };
  