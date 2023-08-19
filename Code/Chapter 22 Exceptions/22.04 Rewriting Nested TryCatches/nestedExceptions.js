try {
    transaction.commit();
} catch (e) {
    logerror(e);
    if (e instanceOf DBError) {
      try {
          transaction.rollback();
      } catch (e) {
          doMoreLoggingRollbackFailed(e);
      }
    }
}

// Nested Try catchs
// Exception cases are
// more important than happy path
// We use exceptions as control flow