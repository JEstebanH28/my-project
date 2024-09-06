import db from '../../../lib/db';

export async function GET(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM Usuarios');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error obteniendo los usuarios' }), { status: 500 });
  }
}

export async function POST(req) {
  const { nombre, email, ciudad } = await req.json();

  if (!nombre || !email) {
    return new Response(JSON.stringify({ error: 'Nombre y Email son obligatorios' }), { status: 400 });
  }

  try {
    const result = await db.query('INSERT INTO Usuarios (nombre, email, ciudad) VALUES (?, ?, ?)', [nombre, email, ciudad || 'Desconocida']);
    return new Response(JSON.stringify({ message: 'Usuario creado', userId: result.insertId }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error creando el usuario' }), { status: 500 });
  }
}
