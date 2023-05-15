import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async excecuteSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=650`,
    );

    // * now we need the name and id. name is easy cause its in results[0]. but id is inside of url of specific pokemon. therefore:

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      // * its -2 because its the second to last index
      const pokemonNum = +segments[segments.length - 2];
      // * after youve done this, then you have:
      console.log({ name, pokemonNum });
    });

    return data.results;
  }
}
