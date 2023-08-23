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

// Nested Try catches
// Exception cases are more important than the happy path
// You use exceptions as control flow