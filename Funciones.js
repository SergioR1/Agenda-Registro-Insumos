const HOJA = SpreadsheetApp.openById('1svdOstuMkQ60Fl6LdJPo65xqwy8NcJygzXSLEYgKQ1Q').getActiveSheet();

function doGet(datos) {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Registro Insumos hemodinamia');
}

function doPost(datos) {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Registro Insumos hemodinamia');
}

function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerInsumos() {
    return HOJA.getDataRange().getValues();
}

function insertarInsumo(Referencia, Descripción, Precio2023, Proveedor, RegistroInvima) {
    HOJA.appendRow([Referencia, Descripción, Precio2023, Proveedor, RegistroInvima]);
}
