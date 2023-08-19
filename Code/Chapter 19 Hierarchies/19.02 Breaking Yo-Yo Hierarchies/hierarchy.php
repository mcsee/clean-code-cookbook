<?

abstract class Controller {

}

class BaseController extends Controller {

}

class SimpleController extends BaseController {

}

class ControllerBase extends SimpleController {

}

class LoggedController extends ControllerBase {

}

class RealController extends LoggedController {

}
