import { evaluacionFormativa } from "./evaluacionFormativa";
import { inclusion } from "./inclusion";
import { nuevaEscuelaMexicana } from "./nuevaEscuelaMexicana";
import { planeacionDidactica } from "./planeacionDidactica";

export const reactivos = [
  ...evaluacionFormativa,
  ...inclusion,
  ...nuevaEscuelaMexicana,
  ...planeacionDidactica,
];