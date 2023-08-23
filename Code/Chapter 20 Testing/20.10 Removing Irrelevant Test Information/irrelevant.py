def test_formula_1_race():
    # Setup
    racers = [
        {"name": "Lewis Hamilton", 
         "team": "Mercedes", 
         "starting_position": 1, 
         "car_color": "Silver", 
         "car_model": "W12"},
        {"name": "Max Verstappen", 
         "team": "Red Bull",
         "starting_position": 2,
         "car_color": "Red Bull", 
         "car_model": "RB16B"},
        {"name": "Sergio Perez",
         "team": "Red Bull", 
         "starting_position": 3, 
         "car_color": "Red Bull", 
         "car_model": "RB16B"},
        {"name": "Lando Norris",
         "team": "McLaren", "starting_position": 4,
         "car_color": "Papaya Orange",
         "car_model": "MCL35M"},
        {"name": "Valtteri Bottas", 
         "team": "Mercedes", 
         "starting_position": 5, 
         "car_color": "Silver",
         "car_model": "W12"},
    ]

    # Exercise
    winner = simulate_formula_1_race(racers)

    # Test
    assert winner == "Lewis Hamilton"
    
    # This is all irrelevant to winner asserting
    assert racers[0]["car_color"] == "Silver"
    assert racers[1]["car_color"] == "Red Bull"
    assert racers[2]["car_color"] == "Red Bull"
    assert racers[3]["car_color"] == "Papaya Orange"
    assert racers[4]["car_color"] == "Silver"
    assert racers[0]["car_model"] == "W12"
    assert racers[1]["car_model"] == "RB16B"
    assert racers[2]["car_model"] == "RB16B"
    assert racers[3]["car_model"] == "MCL35M"
    assert racers[4]["car_model"] == "W12"
