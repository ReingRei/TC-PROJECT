import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private _http: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async enviarMensagem() {
    await this._http.post(`https://graph.facebook.com/v17.0/112559505208829/messages`,
      {
        messaging_product: 'whatsapp',
        to: +5517991781668,
        text: {
          preview_url: false,
          body: 'Funcionoooou!'
      }
      },
      {
        headers: {
          Authorization: 'Bearer EAANjGI7G8RkBOyfZAd7ysx15dRkLZCKu468DGcxtLXp5jLHmO3h2mPskffAvxRU40ZCJgXKCsHZAmzx6AJ7XIj84QTISyTlOmshND7KZBjDaZCIiZBonKYpp4lsreooYSx525mRZAmdhK4rficKX7O1WTyR1ZAhdtFZB7kO6PeiLyaf6841JREJXlyKGofrK3F9LmHcigjiVZBjwEMSetsZD'
          , "Content-Type": 'application/json'
        }
      }
    ).toPromise().then((res) => console.log(res.data)).catch((e) => console.log(e.response))
  }
}
