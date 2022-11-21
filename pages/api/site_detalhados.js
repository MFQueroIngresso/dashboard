import { executeQueryBdPromo } from "../../src/libs/db";

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

    const lessResult = result.filter((i, idx) => idx < 200);
    return res.status(200).json(lessResult);
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}
