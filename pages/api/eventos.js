import excuteQuery, { executeQueryBdPromo } from "../../src/libs/db";

export default async function handler(req, res) {
  try {
    const result = await executeQueryBdPromo({
      query: `
        SELECT * FROM
          tbl_eventos eve
      `,
    });
    /**
     * Nessa API de eventos, precisa saber de qual cliente ou empresa se refere.
     * Posso ver a montagem disso no código antigo.
     * Porque daí é só conectar isso com LOGIN.
     */
    const lessResult = result.filter((i, idx) => idx <= 200);
    return res.status(200).json(lessResult);
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}