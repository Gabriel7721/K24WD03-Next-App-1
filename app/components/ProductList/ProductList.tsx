import styles from "./ProductList.module.css";

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
            <th className={styles.tbl}>ID</th>
            <th className={styles.tbl}>Title</th>
            <th className={styles.tbl}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr className={styles.tr} key={p.id}>
              <td className={styles.tbl}>{p.id}</td>
              <td className={styles.tbl}>{p.title}</td>
              <td className={styles.tbl}>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ProductList;
