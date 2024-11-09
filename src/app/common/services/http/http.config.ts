import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

const MESSAGE = 'Se ha producido un error al procesar la solicitud. Por favor, inténtelo más tarde.';

const handleError = (e: HttpErrorResponse) => {

  const response = {
    success: false,
    message: MESSAGE,
    status: 0,
    timeLapse: '0.01 segundo',
    error: e.error
  };

  // Solicitud realizada correctamente, pero rechazada
  if (e.status && e.error && e.error.message) {
    response.success = e.error.success;
    response.message = e.error.message;
    response.status = e.status;
  } else if (e.status && e.error && e.error.statusCode) { // Joi validation
    response.success = e.ok;
    response.status = e.status;
  } else if (e.status && e.error && e.message) { // Servidor
    response.success = e.ok;
    response.status = e.status;
  }
  return throwError(response);
};

export const config = {
  handleError
};
