import { AudioResource } from "./AudioResource";

/**
 * Static class that fetches and contains essential resource files
 */
export abstract class ResourcePack {
  public static sounds: {
    background: AudioResource,
    correct: AudioResource,
    wrong: AudioResource,
    levelup: AudioResource,
    countdown: AudioResource,
  } = {
      background: new AudioResource('../resources/background_music.mp3'),
      correct: new AudioResource('../resources/correct.wav'),
      wrong: new AudioResource('../resources/wrong.mp3'),
      levelup: new AudioResource('../resources/level_up.mp3'),
      countdown: new AudioResource('../resources/count.wav'),
    };

  public static images: {
    rocket: NodeRequire
  } = {
      rocket: require('../resources/rocket.svg')
    };
}