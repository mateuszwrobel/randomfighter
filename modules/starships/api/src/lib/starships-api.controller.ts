import { Controller } from '@nestjs/common';
import { StarshipsApiService } from './starships-api.service';

@Controller('starships-api')
export class StarshipsApiController {
  constructor(private starshipsApiService: StarshipsApiService) {}
}
