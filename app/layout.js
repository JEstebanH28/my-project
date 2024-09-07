// app/layout.js
import './globals.css'; // Importa los estilos globales para aplicarlos en toda la aplicación

// Componente funcional RootLayout que sirve como diseño raíz de la aplicación
export default function RootLayout({ children }) {
  return (
    <html lang="es"> 
      <body>{children}</body> 
    </html>
  );
}
