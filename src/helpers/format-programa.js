const formatPrograma = programas => programas.map(programa => ({
  key: programa._id,
  nome: {
    editable: false,
    value: programa.nome,
  },
  descricao: {
    editable: false,
    value: programa.descricao,
  },
}));

export default formatPrograma;
