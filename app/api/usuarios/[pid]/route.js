import db from '../../../../lib/db'; // Importa la base de datos desde la ruta especificada

// Controlador para el método GET: Obtiene un usuario por su ID
export async function GET(req, { params }) {
  // Separa la URL en partes (aunque no se utiliza este valor después)
  const splitUrl = req.url.split("/");
  // Obtiene el 'pid' (ID del usuario) desde los parámetros
  const pid = params.pid;

  try {
    // Consulta a la base de datos para obtener los datos del usuario con el ID especificado
    const [rows] = await db.query('SELECT * FROM Usuarios WHERE id = ?', [pid]);
    
    // Si no se encuentra ningún usuario con ese ID, retorna un error 404
    if (rows.length === 0) {
      return new Response(JSON.stringify({ error: 'Usuario no encontrado' }), { status: 404 });
    }
    
    // Si se encuentra el usuario, retorna la información con un estado 200
    return new Response(JSON.stringify(rows[0]), { status: 200 });
    
  } catch (error) {
    // Si ocurre un error durante la consulta, retorna un error 500
    return new Response(JSON.stringify({ error: 'Error obteniendo el usuario' }), { status: 500 });
  }
}

// Controlador para el método PUT: Actualiza los datos de un usuario
export async function PUT(req, { params }) {
  // Separa la URL en partes (aunque no se utiliza este valor después)
  const splitUrl = req.url.split("/");
  // Obtiene el 'pid' (ID del usuario) desde los parámetros
  const pid = params.pid;
  
  // Extrae el nombre, email y ciudad del cuerpo de la petición
  const { nombre, email, ciudad } = await req.json();

  try {
    // Actualiza los datos del usuario en la base de datos
    const [result] = await db.query('UPDATE Usuarios SET nombre = ?, email = ?, ciudad = ? WHERE id = ?', [nombre, email, ciudad, pid]);
    
    // Si no se actualiza ningún registro, el usuario no fue encontrado, retorna un error 404
    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ error: 'Usuario no encontrado' }), { status: 404 });
    }
    
    // Si la actualización es exitosa, retorna un mensaje de éxito con un estado 200
    return new Response(JSON.stringify({ message: 'Usuario actualizado' }), { status: 200 });
    
  } catch (error) {
    // Si ocurre un error durante la actualización, se registra en la consola y retorna un error 500
    console.log(error);
    return new Response(JSON.stringify({ error: 'Error actualizando el usuario' }), { status: 500 });
  }
}

// Controlador para el método DELETE: Elimina un usuario por su ID
export async function DELETE(req, { params }) {
  // Separa la URL en partes (aunque no se utiliza este valor después)
  const splitUrl = req.url.split("/");
  // Obtiene el 'pid' (ID del usuario) desde los parámetros
  const pid = params.pid;

  try {
    // Elimina al usuario de la base de datos con el ID especificado
    const [result] = await db.query('DELETE FROM Usuarios WHERE id = ?', [pid]);
    
    // Si no se elimina ningún registro, el usuario no fue encontrado, retorna un error 404
    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ error: 'Usuario no encontrado' }), { status: 404 });
    }
    
    // Si la eliminación es exitosa, retorna un mensaje de éxito con un estado 200
    return new Response(JSON.stringify({ message: 'Usuario eliminado' }), { status: 200 });
    
  } catch (error) {
    // Si ocurre un error durante la eliminación, retorna un error 500
    return new Response(JSON.stringify({ error: 'Error eliminando el usuario' }), { status: 500 });
  }
}
