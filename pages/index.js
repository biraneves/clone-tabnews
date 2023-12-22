function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "300px",
          border: "solid 1px #bbb",
          borderRadius: "5px",
          backgroundColor: "#eee",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Em breve</h1>
        <p style={{ textAlign: "center", fontSize: "24px" }}>
          algo legal aqui para você!
        </p>
        <p style={{ textAlign: "center" }}>
          <a href="https://github.com/biraneves">
            https://github.com/biraneves
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
