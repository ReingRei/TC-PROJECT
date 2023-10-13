import { Injectable } from "@nestjs/common";

@Injectable()
export class DialogflowService {
    API_KEY = "AIzaSyCKkCvZsCGEVVrBdpWJ3XGG1KtTAPhhmco"; // Chave da API
    PROJECT_ID = 1; //o ID do projeto do Google Cloud
    AGENT_ID = 1; //seu ID de agente
    REGION_ID = 1; //o ID da sua região
    SESSION_ID = 1; //seu ID de sessão
    END_USER_INPUT = 1; //a entrada do usuário final

    constructor() { }

    analisarMensagem(mensagem: string) {
        const url = `https://${this.REGION_ID}-dialogflow.googleapis.com/v3/projects/${this.PROJECT_ID}/locations/${this.REGION_ID}/agents/${this.AGENT_ID}/sessions/${this.SESSION_ID}:detectIntent`
    }
}