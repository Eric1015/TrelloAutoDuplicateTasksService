
import { Handler } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
import { TrelloAPIController } from './controller/trelloAPI';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});

const trelloAPIController = new TrelloAPIController(
  process.env.TRELLO_API_KEY, 
  process.env.TRELLO_TOKEN
)

const sourceListId = "60094019d16fe85701cb7ddf"
const targetListId = "5d23e51bffad9f7e81590baa"

export const testTrelloAPIHandler: Handler = async () => {
  // just for testing.
}

export const populateWeekendTasksHandler: Handler = async () => {
  const sourceCards = await trelloAPIController.getCardsOnList(sourceListId);
  const promises = sourceCards.map((card) => trelloAPIController.createCard({
    idList: targetListId,
    name: card.name,
    desc: card.desc,
    pos: 'bottom',
  }));
  await Promise.all(promises).catch((err) => {
    const res = {
      statusCode: 400,
      body: JSON.stringify({ message: err }),
    };
    console.error(res);
    return res;
  })
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "Successful" }),
  };
  console.log(response);
  return response;
}
