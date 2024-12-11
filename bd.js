//bd.js
async function selectUsuario(id) {
    const client = await connect();
    const query = "SELECT * FROM usuario WHERE id = $1";
    const usuario = [id];
    const res = await client.query(query, usuario);
    client.release();
    return res.rows;
  }
  //bd.js
export { selectUsuarios, selectUsuario };

//bd.js
async function insertUsuario(data) {
    const client = await connect();
    const query = "INSERT INTO usuario (nome,senha,email) VALUES ($1,$2,$3) ";
    const usuario = [data.nome, data.senha, data.email];
    await client.query(query, usuario);
    client.release();
  }
  //bd.js
export { selectUsuarios, selectUsuario, insertUsuario };