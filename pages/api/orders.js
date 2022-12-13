import executeQuery from "../../src/libs/db";

export default async function handler(req, res) {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM lltckt_order",
    });

    const lessResult = result.filter((i, idx) => idx < 200);
    return res.status(200).json(lessResult);
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}
