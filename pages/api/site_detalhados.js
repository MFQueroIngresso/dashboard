import excuteQuery, { executeQueryBdPromo } from "../../src/libs/db";

export default async function handler(req, res) {
  try {
    const result = await executeQueryBdPromo({
      query: `
        SELECT 
            eve.eve_cod AS codigo,
            UPPER(eve.eve_nome) AS evento,
            eve.eve_data DataEvento,
            eve.eve_local LocalEvento,
            eve.eve_cidade CidadeEvento
        FROM
            tbl_eventos eve
      `,
    });

    const dbprefix = "lltckt_";

    const resultLoja = await excuteQuery({
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
      `,
    });
    const lessResult = resultLoja.filter((i, idx) => idx < 200);
    return res.status(200).json(lessResult);
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}
