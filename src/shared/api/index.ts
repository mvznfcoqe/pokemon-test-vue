import { ofetch } from "ofetch";

export const pokeApi = ofetch.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
