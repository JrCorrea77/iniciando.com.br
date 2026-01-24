function status(request, response) {
  response.status(200).json({ status: 'Teste adicionando arquivo status.js' });

}

export default status;