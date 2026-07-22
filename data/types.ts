export type Reactivo = {
  id: number;

  // Clasificación oficial
  area?: string;
  tema: string;
  subtema: string;

  // Características del reactivo
  nivel: string;
  tipo?: string;

  // Contenido
  caso: string;
  pregunta: string;
  opciones: string[];

  // La posición comienza en 0:
  // 0 = A, 1 = B, 2 = C
  respuestaCorrecta: number;

  // Retroalimentación
  explicacion: string;
  porQueNo?: string[];

  // Sustento
  fundamento: string;
  bibliografia?: string;
};