
function testFilter() {
  //llamo a la hoja activa
  var hoja = SpreadsheetApp.getActiveSheet();

  //traer la ùltima fila
  var lastRow=hoja.getLastRow();
  //traer la ùltima columna
  var lastColumn=hoja.getLastColumn();


                        //hoja.getRange(fila inicio, columna inicio, alto, ancho)
  var datos_originales= hoja.getRange(1,1,lastRow,lastColumn).getValues();

  //hacer el filtro mediante ciertas condiciones
  var datos_filtrados= datos_originales.filter(function(item){
    return item[0]=="ARMANDO" || item[0]=="SAYRA" || item[0]=="Uno";
  });

/*
//ver los datos en consola
  console.log(datos_filtrados);
*/

/***********************hacer la suma
var suma = 0
for (i=1;i<=datos_filtrados.length-1;i++) {
  //var suma_total_dos= suma_total_dos+ datos_filtrados[i][1]
  columna=1;
  var valorASumar= datos_filtrados[i][columna];
  var suma = suma + valorASumar;
}

console.log(suma)
 ***********************************************/

//Pegar los datos en la hoja     //hoja.getRange(fila inicio, columna inicio, alto, ancho)
  var rangoAPegar= hoja.getRange(14,1, datos_filtrados.length,datos_filtrados[0].length);
  rangoAPegar.setValues(datos_filtrados)

//Pegar en un documento
  var idDocumento= "1Z7N1TkfBWZDF2WFTWtPkEGVwPXKLOYIClhtrtG1pMEI";
  var documentoAPegar=DocumentApp.openById(idDocumento);
  
/*
// pega los valores pero hasta el final
documentoAPegar.getBody().appendTable(datos_filtrados);
*/

  documentoAPegar.getBody().insertTable(5,datos_filtrados)

};

/*
//ejercicio ver diferencia entre setText y appendText
documentoAPegar.getChild(5).asParagraph().setText("nama");
documentoAPegar.getChild(5).asParagraph().appendText("fhgdasfd");

*/









