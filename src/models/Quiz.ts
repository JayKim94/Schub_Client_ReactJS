import { random } from "../shared/utils";

/**
 * Constants
 */
const ADD: string = '+';
const SUBTRACT: string = '-';
const MULTIPLY: string = '*';
const DIVIDE: string = '÷';

export class Quiz {
  public leftNumber: number;
  public rightNumber: number;
  public operator: string;

  constructor(
  ) {
    this.leftNumber = random(1, 9);
    this.rightNumber = random(1, 9);
    this.operator = ADD;
  }

  /**
   * Checks the answer and generates next quiz.
   * Returns false immediately, if the input is not a match.
   * @param userInput The value entered by the player
   * @returns True if the input matches the result, otherwise false
   */
  public next(userInput: string): boolean {
    const result = this._getResult();

    /**
     * Wrong
     */
    if (!result || Number(userInput) !== result) {
      return false;
    }
    const roll = Math.random();
    this.leftNumber = result as number;
    /**
     * Under_10
     */
    if (this.leftNumber < 10) {
      const chanceMultiply = .55;

      if (roll < chanceMultiply) {
        this.operator = MULTIPLY;
        this.rightNumber = random(2, 5);
      } else {
        this.operator = ADD;
        this.rightNumber = random(3, 9);
      }

      return true;
    }
    /**
     * Under_20
     */
    if (this.leftNumber < 20) {
      const roll = Math.random();
      // 35%
      if (roll < .35) {
        if (roll < .15 && this.leftNumber % 3 === 0) {
          this.operator = DIVIDE;
          this.rightNumber = 3;
        } else {
          this.operator = MULTIPLY;
          this.rightNumber = random(2, 3);
        }
      }
      // 35%
      else if (roll < .70) {
        this.operator = ADD;
        this.rightNumber = random(2, 9);
      }
      // 30%
      else {
        this.operator = SUBTRACT;
        this.rightNumber = random(2, 9);
      }
    }
    /**
     * Under_30
     */
    if (this.leftNumber < 30) {
      const roll = Math.random();

      // 25%
      if (roll < .25 && this.leftNumber % 3 === 0) {
        this.operator = DIVIDE;
        this.rightNumber = 3;
      }
      // 40%
      else if (roll < .65) {
        this.operator = ADD;
        this.rightNumber = random(3, 9);
      }

      return true;
    }
    /**
     * Under_50
     */
    if (this.leftNumber < 50) {
      const roll = Math.random();

      // 25%
      if (roll < .25 && this.leftNumber % 5 === 0) {
        this.operator = DIVIDE;
        this.rightNumber = 5;
      }
      // 35%
      else if (roll < .60) {
        this.operator = ADD;
        this.rightNumber = random(5, 9);
      }
      // 40%
      else {
        this.operator = SUBTRACT;
        this.rightNumber = random(5, 9);
      }

      return true;
    }
    /**
     * Over_50
     */
    // 55%
    if (roll < .55 && this.leftNumber % 3 === 0) {
      this.operator = DIVIDE;
      this.rightNumber = 3;
    }
    else if (roll < .55 && this.leftNumber % 5 === 0) {
      this.operator = DIVIDE;
      this.rightNumber = 5;
    }
    // 45%
    else {
      this.operator = SUBTRACT;
      this.rightNumber = random(5, 9);
    }

    return true;
  }

  private _getResult() {
    switch (this.operator) {
      case ADD:
        return this.leftNumber + this.rightNumber;
      case SUBTRACT:
        return this.leftNumber - this.rightNumber;
      case MULTIPLY:
        return this.leftNumber * this.rightNumber;
      case DIVIDE:
        return this.leftNumber / this.rightNumber;
      default:
        return null;
    }
  }
}