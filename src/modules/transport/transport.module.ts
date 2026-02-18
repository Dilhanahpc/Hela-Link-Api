import { Module } from '@nestjs/common';
import { TransportService } from './transport.service';
import { TransportController } from './transport.controller';
import { TransportGateway } from './transport.gateway';

@Module({
  providers: [TransportService, TransportGateway],
  controllers: [TransportController]
})
export class TransportModule {}
