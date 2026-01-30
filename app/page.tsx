import Link from "next/link";
import ProductCart from "./components/ProductCart";

const page = () => {
  return (
    <main>
      <h1>Xin chào thế giới!!!</h1>
      <Link href="/users">Go to user page</Link>
      <ProductCart />
    </main>
  );
};

export default page;
