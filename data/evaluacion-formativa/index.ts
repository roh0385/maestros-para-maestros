import { evidencias } from "./evidencias";
import { retroalimentacion } from "./retroalimentacion";
import { autoevaluacion } from "./autoevaluacion";
import { coevaluacion } from "./coevaluacion";
import { heteroevaluacion } from "./heteroevaluacion";

export const evaluacionFormativa = [
  ...evidencias,
  ...retroalimentacion,
  ...autoevaluacion,
  ...coevaluacion,
  ...heteroevaluacion,
];