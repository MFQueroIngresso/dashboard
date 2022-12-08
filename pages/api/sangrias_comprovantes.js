import { executeQueryBdPromo } from "../../src/libs/db";

export default async function handler(req, res) {
  try {
    const result = await executeQueryBdPromo({
      query: `
          SELECT * FROM tbl_comprovante_sangria eve
        `,
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}
