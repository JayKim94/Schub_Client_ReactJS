export class ResourcePack {
  public sounds: {
    background: HTMLAudioElement,
    correct: HTMLAudioElement,
    wrong: HTMLAudioElement,
    levelup: HTMLAudioElement,
  }

  constructor(
  ) {
    const background = require('../resources/background_music.mp3');
    const correct = require('../resources/correct.wav');
    const wrong = require('../resources/wrong.mp3');
    const levelup = require('../resources/level_up.mp3');

    this.sounds = {
      background: new Audio(background),
      correct: new Audio(correct),
      wrong: new Audio(wrong),
      levelup: new Audio(levelup)
    }

    this.sounds.background.volume = 0.5;
    this.sounds.correct.volume = 0.25;
  }
}