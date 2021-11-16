/**
 * Loads the audio file to an audio element from the given source string
 * and provides functionalities to control and configure the audio element
 */
export class AudioResource {
  private audio: HTMLAudioElement;

  constructor(src: string) {
    const data = require(src);
    this.audio = new Audio(data);
  }

  /**
   * Starts the playback of the audio file
   * @param fadeIn Apply a fade-in effect if given true (default: false)
   */
  public play(fadeIn: boolean = false): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.play();
  }

  /**
   * Sets the volume for the audio file
   * @param volume A value between 0 and 1
   */
  public setVolume(volume: number): void {
    this.audio.volume = volume;
  }

  private _fadeIn(): void {
    let v = 0;

    function animate() {

    }
  }
}