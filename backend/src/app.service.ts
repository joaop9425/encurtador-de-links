import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  urls = [];

  constructor() {}

  getHello(): string {
    console.log(this.urls);
    return 'Hello World!';
  }

  generatorShort() {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += alpha.charAt(Math.floor(Math.random() * alpha.length));
    }
    return result.toUpperCase();
  }

  shortener(url, ip) {
    if (!url) return 'Informe uma URL a ser encurtada.';

    // Verifica se a URL já existe e retorna o short correspondente
    const existingEntry = this.urls.find((urlx) => urlx.url === url);
    if (existingEntry) {
      return existingEntry.short;
    }

    const generateUniqueShort = () => {
      const short = this.generatorShort();
      const isDuplicate = this.urls.some((urlx) => urlx.short === short);

      if (isDuplicate) {
        // Recursivamente chama a função para gerar um novo código
        return generateUniqueShort();
      }
      return short;
    };

    const uniqueShort = generateUniqueShort();
    this.urls.push({ url, short: uniqueShort, ip });
    return { url, short: uniqueShort };
  }

  backToUrl(url: string) {
    url = url.replace(/\//g, '');

    const returnUrl = this.urls.filter((urlx) =>
      urlx.short === url ? urlx.url : null,
    );

    if (returnUrl.length === 0) {
      return 'URL não encurtada !';
    }

    return returnUrl[0].url;
  }
}
