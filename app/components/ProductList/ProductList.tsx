interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductResponse {
  products: Product[];
  total: number;
}

const ProductList = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data: ProductResponse = await res.json();
  const products: Product[] = data.products;
  return (
    <main>
      <h1>Product List</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ProductList;
