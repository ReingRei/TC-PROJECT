import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios/dist";
import { lastValueFrom } from "rxjs";

@Injectable()
export class WhatsappService {
    private _token = 'EAANjGI7G8RkBO4o0G1IqDmFYRRYtqvl2bSZCH9gZAEE24Fsb4I9vDRG5FnksQmYAh8WZB4r0VQAjiGorY2ceD7rAZBXsZCQTIWCiiZAwfXipmgdlvURMV4LqEX7TMRQtHqZAzLnclshSGBsfgQfuTorZBpT32fHFvfz5MKXAxNq6nPVZAak9IU30GGGLEe18uENS3yRNcW49TSrlZAnLoksjAZD'

    constructor(
        private _httpService: HttpService
    ) { }

    async enviar() {

        try {
            await lastValueFrom(this._httpService.post(
                'https://graph.facebook.com/v17.0/112559505208829/messages',
                {
                    messaging_product: "whatsapp",
                    recipient_type: "individual",
                    to: "5517991781668",
                    type: "text",
                    text: {
                        preview_url: false,
                        body: "Oi trouxa!!"
                    }
                },
                {
                    headers: {
                        Authorization: `Bearer ${this._token}`, "Content-Type": 'application/json'
                    }
                }
            ))
        return 'Mensagem enviada'
            
        } catch (error) {
            console.log(error)
            return 'Erro ao enviar'
        }


        //         curl -i -X POST `
        //   https://graph.facebook.com/v17.0/112559505208829/messages `
        //   -H 'Authorization: Bearer EAANjGI7G8RkBO4o0G1IqDmFYRRYtqvl2bSZCH9gZAEE24Fsb4I9vDRG5FnksQmYAh8WZB4r0VQAjiGorY2ceD7rAZBXsZCQTIWCiiZAwfXipmgdlvURMV4LqEX7TMRQtHqZAzLnclshSGBsfgQfuTorZBpT32fHFvfz5MKXAxNq6nPVZAak9IU30GGGLEe18uENS3yRNcW49TSrlZAnLoksjAZD' `
        //   -H 'Content-Type: application/json' `
        //   -d '{ \"messaging_product\": \"whatsapp\", \"to\": \"\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }'
    }

}