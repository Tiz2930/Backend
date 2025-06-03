import { Injectable } from '@nestjs/common';

export interface iTrack {
  id: number,
  title: string,
  duration: number,
  artist: string
}

export const tracks: iTrack[] = [
  {
    id: 1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
  },
  {
    id: 1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
  },
  {
    id: 1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
  },
  {
    id: 1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
  },
  {
    id: 1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
  },
  {
    id: 1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
  },
  {
    id: 1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
  },
  {
    id: 1,
    title: "cancion 1",
    duration: 120,
    artist: "interprete 1"
  }
]

@Injectable()
export class AppService {
  getTracks(): iTrack[] {
    return tracks;
  }
}
