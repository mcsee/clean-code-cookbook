if (runtimeEnvironment->traceDebug()) {
  printf("trace message");
}

## even better with polymorphism and we avoid annoying ifs

runtimeEnvironment->traceDebug("trace message");
