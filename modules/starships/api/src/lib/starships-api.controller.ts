import { Controller } from '@nestjs/common';
import { StarshipsApiService } from './starships-api.service';

@Controller('entities')
export class StarshipsApiController {
  constructor(private starshipsApiService: StarshipsApiService) {}
}
