import { Quiz } from "./Quiz";
import { ResourcePack } from "./ResourcePack";

export class Game {
  public quiz: Quiz = new Quiz();

  constructor() {
    ResourcePack.sounds.background.setVolume(0.5);
    ResourcePack.sounds.correct.setVolume(0.25);
  }
}