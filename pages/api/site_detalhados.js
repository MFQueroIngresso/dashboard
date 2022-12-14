import executeQuery, { executeQueryBdPromo } from "../../src/libs/db";

/**
 * eve_cod é a identificação do evento na api de EVENTOS.
 * uma listagem de ingressos, precisa saber de qual evento se refere.
 * Então no resultado dessa api, precisa dizer se eve_cod(selecionado) === cla_evento, exibir o item.
 */

export default async function handler(req, res) {
  try {
    const dbprefix = "lltckt_";
    const resultLoja = await executeQuery({
      query: `
        SELECT * FROM
            ${dbprefix}order o
                INNER JOIN
            ${dbprefix}customer c ON (c.customer_id = o.customer_id)
                INNER JOIN
            ${dbprefix}address a ON (a.address_id = c.address_id)
                INNER JOIN
            ${dbprefix}cidades ci ON (ci.idcity = a.city)
                INNER JOIN
            ${dbprefix}zone z ON (z.zone_id = a.zone_id)
                INNER JOIN
            ${dbprefix}category_description cd ON (cd.category_id = o.category_id)
            INNER JOIN
            ${dbprefix}order_product op ON (op.order_id = o.order_id)
            INNER JOIN
            ${dbprefix}product p ON (p.product_id = op.product_id)
            INNER JOIN
            ticketsl_promo.tbl_classes_ingressos cat ON (cat.cla_cod = p.classId)
                LEFT JOIN
            ${dbprefix}order_status os ON (os.order_status_id = o.order_status_id)
        LIMIT 200
      `,
    });
    const lessResult = resultLoja.filter((i, idx) => idx < 200);
    return res.status(200).json(lessResult);
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}
