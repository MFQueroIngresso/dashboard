import { executeQueryBdAll } from "../../src/libs/db";

export default async function handler(req, res) {
  const {
    body: { login, password },
  } = req;

  try {
    const result = await executeQueryBdAll({
      query: `
        SELECT * FROM ticketsl_promo.usuario t 
        WHERE t.LOGIN = '${login}' AND t.SENHA = '${password}'
      `,
    });

    return res.status(200).json({ result });
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}
