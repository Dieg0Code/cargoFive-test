import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 👈 Hace que PrismaService sea global
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 👈 Exporta el servicio par la inyección de dependencias
})
export class PrismaModule {}
