export const questions = [
  {key:'activity', title:'¿Qué actividad quieres explorar?', hint:'Elige un escenario ficticio para practicar.', options:['Servicios por mi cuenta','Ventas o pequeño negocio','Trabajo mediante plataformas','Todavía estoy explorando']},
  {key:'experience', title:'¿Qué tanto conoces estos temas?', hint:'Adaptaremos el siguiente paso a tu experiencia.', options:['Estoy empezando desde cero','Conozco un poco, pero tengo dudas','Ya organizo mis movimientos']},
  {key:'goal', title:'¿Con qué te gustaría empezar?', hint:'Puedes cambiar esta preferencia después.', options:['Entender las palabras fiscales','Organizar mis comprobantes','Revisar mis pendientes']}
];
export function recommendation(profile) {
  if(profile.goal==='Organizar mis comprobantes') return {page:'importar',title:'Empieza con un comprobante de práctica',text:'Descarga el XML ficticio, revisa su fecha y monto y confirma el movimiento. Después puedes importar tus ejemplos CSV o Excel.'};
  if(profile.goal==='Revisar mis pendientes') return {page:'revision',title:'Entiende cada aviso',text:'Revisa los detalles de tus movimientos. El semáforo muestra avisos de esta demo, sin diagnosticar adeudos ni obligaciones reales.'};
  return {page:'guia',title:'Empieza por lo esencial',text:'Recorre la guía a tu ritmo. Después puedes preguntar al asistente qué significa un folio, un régimen o una declaración.'};
}
