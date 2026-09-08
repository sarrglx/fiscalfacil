import {normalizeRows} from './domain.js';

// Formato propio de demostración. No interpreta ni valida CFDI oficiales.
export function parseDemoXml(text) {
  if(/<!DOCTYPE|<!ENTITY/i.test(text)) throw Error('Este XML contiene declaraciones no admitidas. Usa el ejemplo de FiscalFácil.');
  const doc=new DOMParser().parseFromString(text,'application/xml');
  if(doc.querySelector('parsererror')) throw Error('No se pudo leer el XML: revisa que sus etiquetas estén completas.');
  const root=doc.documentElement;
  if(root.tagName!=='FiscalFacilDemo'||root.getAttribute('version')!=='1'||root.getAttribute('ficticio')!=='true') throw Error('Solo admitimos XML ficticios de FiscalFácil. Descarga el ejemplo; los CFDI oficiales aún no están disponibles.');
  if([...root.children].some(n=>n.tagName!=='Movimiento')) throw Error('El XML contiene una sección desconocida. Usa el formato de ejemplo.');
  return normalizeRows([...root.children].map(n=>{
    if(n.children.length) throw Error('Cada Movimiento debe contener únicamente atributos.');
    const row={};for(const key of ['fecha','concepto','tipo','monto','folio']) if(n.hasAttribute(key))row[key]=n.getAttribute(key);
    return row;
  }));
}
