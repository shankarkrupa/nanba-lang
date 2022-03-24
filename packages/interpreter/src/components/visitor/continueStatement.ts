import Visitor from ".";

import RuntimeException from "../../exceptions/runtimeException";
import InterpreterModule from "../../module/interpreterModule";


export default class ContinueStatement implements Visitor {
  visitNode() {
    if (InterpreterModule.getCurrentScope().isLoop()) {
      InterpreterModule.getCurrentScope().setContinueStatement(true);
    } else {
      throw new RuntimeException(`Kha "அடுத்தது நண்பா"?? Loop kidhar hai?`);
    }
  }
}
