def get_balance(address):
    url = "https://blockchain.info/q/addressbalance/" + address
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        return 0       