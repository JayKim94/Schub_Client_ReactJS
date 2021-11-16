export class AudioResource {
  private audio: HTMLAudioElement;

  constructor(src: string) {
    const data = require(src);
    this.audio = new Audio(data);
  }

  play(fadeIn: boolean = false): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.play();
  }

  setVolume(volume: number) {
    this.audio.volume = volume;
  }

  _fadeIn() {
    let v = 0;

    function animate() {

    }
  }
}