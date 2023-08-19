import logging

logger logging.getLogger(__name___)
try:
  send_email()
except ConnectionError as exc:
  logger.error(f"Cannot send email {exc}")