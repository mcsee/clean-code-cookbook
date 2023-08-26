if (runtimeEnvironment->traceDebug()) {
  printf("trace message");
}

// even better with polymorphism and you avoid annoying ifs

runtimeEnvironment->traceDebug("trace message");