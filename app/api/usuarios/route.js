// Importamos la conexión a la base de datos desde el archivo 'db.js' en la carpeta 'lib'
import db from '../../../lib/db';

// Función para manejar solicitudes GET
// Esta función es asincrónica porque realiza consultas a la base de datos
export async function GET(req, res) {
  try {
    // Realizamos una consulta SQL para obtener todos los registros de la tabla 'Usuarios'
    const [rows] = await db.query('SELECT * FROM Usuarios');
    
    // Devolvemos los datos obtenidos en formato JSON con un código de estado 200 (éxito)
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (error) {
    // Si ocurre un error, devolvemos una respuesta con un mensaje de error y un código de estado 500 (error del servidor)
    return new Response(JSON.stringify({ error: 'Error obteniendo los usuarios' }), { status: 500 });
  }
}

// Función para manejar solicitudes POST (crear un nuevo usuario)
// Es asincrónica porque interactúa con la base de datos
export async function POST(req) {
  // Extraemos los campos 'nombre', 'email' y 'ciudad' del cuerpo de la solicitud
  const { nombre, email, ciudad } = await req.json();

  // Validamos que 'nombre' y 'email' no estén vacíos. Si faltan, respondemos con un error 400 (solicitud incorrecta)
  if (!nombre || !email) {
    return new Response(JSON.stringify({ error: 'Nombre y Email son obligatorios' }), { status: 400 });
  }

  try {
    // Si los campos son válidos, insertamos un nuevo registro en la tabla 'Usuarios'
    // Si no se especifica la 'ciudad', se asigna el valor por defecto 'Desconocida'
    const result = await db.query('INSERT INTO Usuarios (nombre, email, ciudad) VALUES (?, ?, ?)', [nombre, email, ciudad || 'Desconocida']);
    
    // Respondemos con un mensaje de éxito y el 'userId' del usuario creado, con un estado 201 (creado)
    return new Response(JSON.stringify({ message: 'Usuario creado', userId: result.insertId }), { status: 201 });
  } catch (error) {
    // Si ocurre un error durante la inserción, respondemos con un mensaje de error y un código de estado 500 (error del servidor)
    return new Response(JSON.stringify({ error: 'Error creando el usuario' }), { status: 500 });
  }
}
