import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsappModule } from './whatsapp/whatsapp.module';
import { CardapioModule } from './cardapio/cardapio.module';

@Module({
  imports: [WhatsappModule, CardapioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
