import excuteQuery, { executeQueryBdAll } from "../../src/libs/db";

/**
 * eve_cod é a identificação do evento na api de EVENTOS.
 * uma listagem de ingressos, precisa saber de qual evento se refere.
 * Então no resultado dessa api, precisa dizer se eve_cod(selecionado) === cla_evento, exibir o item.
 */

export default async function handler(req, res) {
  try {
    const dbprefix = "lltckt_";
    const resultLoja = await executeQueryBdAll({
      query: `
        SELECT * FROM ticketsl_promo.tbl_ingressos t1
        INNER JOIN ticketsl_loja.${dbprefix}order_product_barcode t2 ON
        t2.barcode = t1.ing_cod_barras
        
        INNER JOIN ticketsl_loja.${dbprefix}order_product t3 ON
        t2.order_product_id = t3.order_product_id
        
        INNER JOIN ticketsl_loja.${dbprefix}order t4 ON
        t3.order_id = t4.order_id
        
        INNER JOIN ticketsl_promo.tbl_classes_ingressos t5 ON
        t1.ing_classe_ingresso = t5.cla_cod
        
        WHERE t1.ing_evento = ${4182} ORDER BY t3.order_product_id
      `,
    });
    const lessResult = resultLoja.filter((i, idx) => idx < 200);
    return res.status(200).json(lessResult);
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}
