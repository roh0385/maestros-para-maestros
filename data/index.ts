import { evaluacionFormativa } from "./evaluacion-formativa";
import { inclusion } from "./inclusion";
import { nuevaEscuelaMexicana } from "./nuevaEscuelaMexicana";
import { planeacionDidactica } from "./planeacionDidactica";

export const reactivos = [
  ...evaluacionFormativa,
  ...inclusion,
  ...nuevaEscuelaMexicana,
  ...planeacionDidactica,
].map((reactivo, index) => ({
  ...reactivo,
  id: index + 1,
}));