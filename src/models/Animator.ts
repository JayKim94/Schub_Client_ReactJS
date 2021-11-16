import { Animations } from "./Animations";

export abstract class Animator {
  public static animate(animation: Animations) {
    switch (animation) {
      case Animations.OpeningSequence:
        break;
      case Animations.EndingSequence:
        break;
      case Animations.RocketSmoke:
        break;
      case Animations.RocketFlame:
        break;
      case Animations.RocketFloat:
        break;
      case Animations.RocketStart:
        break;
      case Animations.RocketShake:
        break;
      case Animations.QuizClear:
        break;
      case Animations.QuizNext:
        break;
      case Animations.QuizDrop:
        break;
      case Animations.CountCurrentScore:
        break;
      case Animations.CountPoints:
        break;
      case Animations.CountGauge:
        break;
      case Animations.CountSpeed:
        break;
      case Animations.CountCombo:
        break;
      case Animations.CountLevel:
        break;
      case Animations.CountScoreboard:
        break;
      case Animations.CorrectAnswer:
        break;
      case Animations.WrongAnswer:
        break;
      default:
        break;
    }
  }
}