<?

interface ControllerInterface {}

abstract class Controller implements ControllerInterface {}
final class LoggedControllerDecorator implements ControllerInterface { }
final class RealController implements ControllerInterface {}