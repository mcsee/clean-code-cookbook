class Skynet < ActiveRecord::Base
  # dynamically add some attributes based on a configuration file
  YAML.load_file("attributes.yml")["attributes"].each do 
    |attribute|
      attr_accessor attribute
  end
  
  # define some dynamic methods based on a configuration file
  YAML.load_file("protocol.yml")["methods"].each do
    |method_name, method_body|
      define_method method_name do
        eval method_body
    end
  end
end
