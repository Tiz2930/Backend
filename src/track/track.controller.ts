import { Get, Controller } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';

@Controller('track')
export class TrackController {
    constructor(private readonly tracService: TrackService) {}
    @Get()
    get Tracks(): Promise <Track[]>{
        return this.tracService.getTracks();
    }
}
