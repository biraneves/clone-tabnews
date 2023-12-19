function status(request, response) {
  response.status(200).json({ chave: "O Curso.dev é demais!" });
}

export default status;
