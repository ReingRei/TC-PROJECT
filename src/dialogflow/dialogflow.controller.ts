import { Controller, Query, Get } from "@nestjs/common";
import { DialogflowService } from "./dialogflow.service";

@Controller('dialogflow')
export class DialogflowController {
    constructor(private _dialogflowService: DialogflowService) { }
}