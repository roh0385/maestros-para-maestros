import { evaluacionFormativa } from "./evaluacion-formativa";
import { inclusion } from "./inclusion";
import { nuevaEscuelaMexicana } from "./nuevaEscuelaMexicana";
import { planeacionDidactica } from "./planeacionDidactica";
import { reactivosIntegradores } from "./reactivosIntegradores";

export const reactivos = [
  ...evaluacionFormativa,
  ...inclusion,
  ...nuevaEscuelaMexicana,
  ...planeacionDidactica,
  ...reactivosIntegradores,
].map((reactivo, index) => ({
  ...reactivo,
  id: index + 1,
}));