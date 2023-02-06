class Product {
  id;
  ProductName;
  ProductId;
  descriptionshort;
  descriptionlonge;
  categoryId;
  categoryName;
  ;
  
  constructor(id, ProductName, ProductId, descriptionshort, descriptionlonge , categoryId, categoryName ) {
    this.id = id;
    this.ProductName = ProductName;
    this.ProductId = ProductId;
    this.descriptionshort = descriptionshort;
    this.descriptionlonge = descriptionlonge;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  
   
  }
}

export default Product;
