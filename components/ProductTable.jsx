import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
      return;
    }

    if (inStockOnly && !product.inStock) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );

      lastCategory = product.category;
    }

    rows.push(<ProductRow product={product} key={product.id} />);
  });

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>
            Name
          </th>
          <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>
            Price
          </th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;