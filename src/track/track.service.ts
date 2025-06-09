import { Injectable } from '@nestjs/common';
import { promises } from 'dns';
import { Track } from './track.interface';

const base_url = "http://localhost:3030/tracks";

@Injectable()
export class TrackService {
    async getTracks(): Promise<Track[]> {
        const res = await fetch(base_url);
        const parsed = await res.json();
        return parsed;
    }
}
