const Prueba = ({ producto }) => {
  console.log(producto);

  return <p>{producto.nombre_producto}</p>;
};

export async function getServerSideProps(context) {
  const res = await fetch(`https://acacompro.co/api/producto/PA0032PAA1410`);
  const data = await res.json();
  const producto = data.result;
  if (!producto) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      producto,
    }, // will be passed to the page component as props
  };
}

export default Prueba;
