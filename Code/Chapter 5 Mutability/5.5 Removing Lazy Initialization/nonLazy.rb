class Employee
  attr_reader :emails, :voice_mails

  def initialize
    @emails = []
    @voice_mails = []
  end
end
# We can also inject a design pattern to externally deal
# with voice_mails so we can mock it in our tests