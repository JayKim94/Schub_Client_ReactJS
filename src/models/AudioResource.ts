export class AudioResource {
  private audio: HTMLAudioElement;

  constructor(src: string) {
    this.audio = new Audio(src);
  }

  play(fadeIn: boolean = false): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.play();
  }

  _fadeIn() {
    let v = 0;

    function draw() {

    }
  }
}