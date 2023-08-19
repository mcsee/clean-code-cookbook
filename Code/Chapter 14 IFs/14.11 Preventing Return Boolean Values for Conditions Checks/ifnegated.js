function canWeMoveOn() {
  if (work.hasPendingTasks())
    return false;
  else
    return true;
}