import { forbidden } from '@hapi/boom';

export const checkRoles = (...roles) => {
  return (req, _, next) => {
    // Obtener el rol del usuario desde el token decodificado
    const user = req.sub;

    // Verificar si el rol del usuario está en la lista de roles permitidos
    if (roles.includes(user.role)) {
      next(); // El usuario tiene el rol permitido, continuar con el siguiente middleware
    } else {
      // El usuario no tiene el rol permitido, enviar un error "forbidden"
      next(forbidden('Se requieren permiso de administrador'));
    }
  };
};
