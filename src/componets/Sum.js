const Sum = ({ basketList }) => {
  const totalPrise = () => {
    const c = basketList.reduce((sum, current) => {
      return sum + current.price;
    }, 0);
    return c;
  };
  return (
    <div style={{ marginLeft: "10%" }}>
      <h2>Total prise: {totalPrise()}$ </h2>
    </div>
  );
};

export default Sum;
