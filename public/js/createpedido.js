function actualizarTotal() {
    var total = 0;
    $.each($(".subtotal"), function(indice, valor) {
        total += Number($(this).text());
    });
    $("#cellTotal").text(total);
}
function doClickAgregarElemento(e) {
    var cantidad = $("#txtCantidad").val();
    var precio = $("#slcComida option[value='" + $("#slcComida").val() + "']").attr("precio");
    var subtotal = cantidad * precio;

    var nombreComida = $("·slcComida option[value='" + $("#slcComida").val() + "']".text())
    var idComida = $("·slcComida option[value='" + $("#slcComida").val() + "']".attr("idComida"))
    
    $("#tblPedido tbody").append(
        "<tr>" +
            "<td>" +
                cantidad + '<input type="hidden" name="cantidades[]" value=' + cantidad + '>' +  
            "</td>" +
            "<td>" +
                nombreComida + 
                nombreComida + '<input type="hidden" name="nombres[]" value=' + nombreComida + '>' +  
                 '<input type="hidden" name="ids[]" value=' + idComida + '>' +  
            "</td>" + 
            "<td>" +
                precio +
                precio + '<input type="hidden" name="precios[]" value=' + precio + '>' +  
            "</td>" +
            '<td class="subtotal">' +
                subtotal + '<input type="hidden" name="subtotales[]" value=' + subtotal + '>' +  
            "</td>" +
            "<td>" +
                '<button type="button" class="btnEliminarElemento btn btn-danger">X</button>' +
            "</td>"
        + "</tr>");
        actualizarTotal();
        $("btnEliminarElemento").unbind("click");
        $(".btnEliminarElemento").click(doClickEliminarElemento);
}

function doClickEliminarElemento(e) {
    
    $(this).parent().parent().remove();
    actualizarTotal();
}



function inicializar() {
    $("#slcComida").select2();

    $("#btnAgregarElemento").click(doClickAgregarElemento);
    actualizarTotal();

}

$(function () {
    inicializar();
});