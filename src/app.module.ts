import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { CommonModule } from './common/common.module';
import { AttractionsModule } from './modules/attractions/attractions.module';
import { HotelsModule } from './modules/hotels/hotels.module';
import { TransportModule } from './modules/transport/transport.module';
import { BookingsModule } from './modules/bookings/bookings.module';

@Module({
  imports: [CoreModule, CommonModule, AttractionsModule, HotelsModule, TransportModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
