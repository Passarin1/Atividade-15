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