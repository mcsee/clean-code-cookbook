import logging

logger logging.getLogger(__name___)
try:
  send_email()
except ConnectionError as exception:
  logger.error("Cannot send email {exception}")