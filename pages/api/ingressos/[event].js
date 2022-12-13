import { executeQueryBdPromo } from "../../../src/libs/db";

/**
 * Nessa API de eventos, precisa saber de qual cliente ou empresa se refere.
 * Posso ver a montagem disso no código antigo.
 * Porque daí é só conectar isso com LOGIN.
 */

export default async function handler(req, res) {
  try {
    const result = await executeQueryBdPromo({
      query: `
        SELECT * FROM tbl_ingressos ing
        WHERE ing_evento = ${req.query.event}
      `,
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}
