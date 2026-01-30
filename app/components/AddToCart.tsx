"use client";

const AddToCart = () => {
  return (
    <div>
      <button className="btn btn-warning"
        onClick={() => {
          alert("Product has been added to cart successfully!");
        }}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
