import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: "dbhmlrestqueroingressos.cbx85spjjr5c.us-east-1.rds.amazonaws.com",
    port: "3306",
    database: "ticketsl_loja",
    user: "admin",
    password: "PAAIO21Ca&a2",
  },
});

export default async function excuteQuery({ query, values }) {
  console.log("teste", process.env.HOST);
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
