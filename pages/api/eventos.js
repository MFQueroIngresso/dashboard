import { executeQueryBdAll } from "../../src/libs/db";

export default async function handler(req, res) {
  try {
    const resultEvents = await executeQueryBdAll({
      query: `
        SELECT 
          eve_cod, eve_nome, eve_local, eve_cidade, eve_data, eve_cliente
        FROM ticketsl_promo.tbl_eventos
        WHERE eve_cliente = 92
      `,
    });
    const resultTickets = await executeQueryBdAll({
      query: `
        SELECT 
          ing_evento, ing_valor, ing_data_compra
        FROM ticketsl_promo.tbl_ingressos ing
        WHERE ing_status = 1
      `,
    });

    const eventsWithTickets = resultEvents.map((event) => {
      return {
        ...event,
        ingressos: resultTickets.filter((ticket) => {
          return event.eve_cod === ticket.ing_evento;
        }),
      };
    });

    return res.status(200).json(eventsWithTickets);
  } catch (error) {
    return res.status(200).json({ erro: true });
  }
}
