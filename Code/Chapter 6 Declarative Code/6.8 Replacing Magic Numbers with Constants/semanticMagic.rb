# Storing magnitudes without units is another smell
class PhysicsConstants
   LIGHT_SPEED = 299792458.freeze
end

def energy(mass)
    mass * PhysicsConstants::LIGHT_SPEED ** 2
end