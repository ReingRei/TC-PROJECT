import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { CardapioModule } from './cardapio/cardapio.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { HttpModule } from '@nestjs/axios';
import { DialogflowModule } from './dialogflow/dialogflow.module';

@Module({
  imports: [WhatsappModule, CardapioModule, CarrinhoModule, DialogflowModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
