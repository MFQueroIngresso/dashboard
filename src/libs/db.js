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
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}

const db_promo = mysql({
  config: {
    host: "dbhmlrestqueroingressos.cbx85spjjr5c.us-east-1.rds.amazonaws.com",
    port: "3306",
    database: "ticketsl_promo",
    user: "admin",
    password: "PAAIO21Ca&a2",
  },
});

export async function executeQueryBdPromo({ query, values }) {
  try {
    const results = await db_promo.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
