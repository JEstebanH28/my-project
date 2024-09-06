import db from '../../../../lib/db';

export async function GET(req, { params }) {
  const splitUrl = req.url.split("/")
  const pid = params.pid

  try {
    const [rows] = await db.query('SELECT * FROM Usuarios WHERE id = ?', [pid]);
    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Usuario no encontrado' }), { status: 404 });
    }
    return new Response(JSON.stringify(rows[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error obteniendo el usuario' }), { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const splitUrl = req.url.split("/")
  const pid = params.pid
  const { nombre, email, ciudad } = await req.json();

  try {
    const [result] = await db.query('UPDATE Usuarios SET nombre = ?, email = ?, ciudad = ? WHERE id = ?', [nombre, email, ciudad, pid]);
    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ error: 'Usuario no encontrado' }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: 'Usuario actualizado' }), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Error actualizando el usuario' }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const splitUrl = req.url.split("/")
  const pid = params.pid

  try {
    const [result] = await db.query('DELETE FROM Usuarios WHERE id = ?', [pid]);
    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ error: 'Usuario no encontrado' }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: 'Usuario eliminado' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error eliminando el usuario' }), { status: 500 });
  }
}
