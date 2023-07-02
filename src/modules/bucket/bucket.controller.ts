import { Controller, Get } from '@nestjs/common';

@Controller('bucket')
export class BucketController {
  @Get()
  public createBucket() {}

  public deleteBucket() {}

  public listBuckets() {}
}
