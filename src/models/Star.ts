import { random } from "../shared/utils";
import { Velocity } from "../types/Types";
``
export default class Star {
  public velocity: Velocity = { x: 0, y: 0 };
  public x: number = 0;
  public y: number = 0;
  public radius: number = 0;
  public color: string = 'rgba(0, 0, 0, 0)';
  public shadow: string = 'rgba(0, 0, 0, 0)';

  private isSpawned: boolean = false;

  constructor(
    private drawWidth: number,
    private drawHeight: number,
    private context: CanvasRenderingContext2D
  ) { }

  /**
   * Updates current velocity and draws itself
   */
  public update(): void {
    this.x -= this.velocity.x;
    this.y -= this.velocity.y;
    this._draw();
  }

  /**
   * Generates itself randomly on the canvas with randomly applied styles
   */
  public spawn(): void {
    if (this.isSpawned) {
      this.respawn();
      return;
    }

    this.isSpawned = true;
    this.x = random(-this.drawWidth, this.drawWidth);
    this.y = random(-this.drawHeight, this.drawHeight);
    this._getRandomStyle();
  }

  /**
   * Relocates itself to the starting line of the canvas(left-end)
   */
  public respawn(): void {
    if (!this.isSpawned) {
      console.warn("Star cannot be respawned if not spawned");
      return;
    }

    this.x = -this.drawWidth;
    this.y = random(-this.drawHeight, this.drawHeight);
    this._getRandomStyle();
  }

  private _draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.shadowBlur = 10;
    this.context.shadowColor = this.shadow;
    this.context.fillStyle = this.shadow;
    this.context.fill();
    this.context.closePath();
  }

  private _getRandomStyle() {
    const hue = random(70, 270);
    const opacity = 0.2 + (Math.random() / 2);

    this.radius = random(1, 2);
    this.color = `rgba(${hue}, 171, 255, ${opacity})`;
    this.shadow = `rgba(${hue}, 171 , 255, 1)`;
  }
}