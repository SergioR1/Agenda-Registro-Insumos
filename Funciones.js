function doGet()
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Registro Insumos');

}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}