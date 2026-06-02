function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th
        colSpan="2"
        style={{
          textAlign: "left",
          paddingTop: "0.75rem",
          paddingBottom: "0.25rem",
        }}
      >
        {category}
      </th>
    </tr>
  );
}

export default ProductCategoryRow;