const products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' },
    { id: 103, name: 'Tablet' }
  ];
  const findProductById=(products,Id)=>{
    return products.find(product=>product.id===Id)
  }
  console.log(findProductById(products, 102))