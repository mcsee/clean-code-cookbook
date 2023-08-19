def test_formula_1_race():
    # Setup
    racers = [
        {"name": "Lewis Hamilton", "starting_position": 1},
        {"name": "Max Verstappen", "starting_position": 2},
        {"name": "Sergio Perez", "starting_position": 3},
        {"name": "Lando Norris", "starting_position": 4},
        {"name": "Valtteri Bottas" "starting_position": 5},
    ]

    # Exercise
    winner = simulate_formula_1_race(racers)

    # Test
    assert winner == "Lewis Hamilton"  