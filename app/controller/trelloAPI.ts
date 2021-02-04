import axios, { AxiosInstance } from "axios";
import { Card } from "../model";

interface CreateCardParams {
  idList: string,
  name: string,
  desc: string,
  pos: "top" | "bottom"
}

export class TrelloAPIController {
  private apiKey: string;
  private token: string;
  private http: AxiosInstance;

  constructor(apiKey: string, token: string) {
    this.apiKey = apiKey;
    this.token = token;
    this.http = axios.create({
      baseURL: 'https://api.trello.com/1',
    })
  }

  async getBoardById(id: string) {
    const res = await this.http.get(`/boards/${id}?key=${this.apiKey}&token=${this.token}`);
    console.log(res.data);
  }
  
  async getListsOnBoard(boardId: string) {
    const res = await this.http.get(`/boards/${boardId}/lists?key=${this.apiKey}&token=${this.token}`);
    console.log(res.data);
  }

  async getCardsOnList(listId: string): Promise<Card[]> {
    const res = await this.http.get(`/list/${listId}/cards?key=${this.apiKey}&token=${this.token}`);
    console.log(res.data);
    const cards: Card[] = res.data.map((card) => ({
      id: card.id,
      name: card.name,
      desc: card.desc,
      idBoard: card.idBoard,
      subscribed: card.subscribed,
    }));
    return cards;
  }

  async createCard(params: CreateCardParams) {
    const res = await this.http.post(`/cards?key=${this.apiKey}&token=${this.token}`, {
      idList: params.idList,
      name: params.name,
      desc: params.desc,
      pos: params.pos
    });
    console.log(res.data);
  }
}