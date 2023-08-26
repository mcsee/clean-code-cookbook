<script type="text/javascript">

  // send a post to a backend
  // backend has domain rules
  // backend has test coverage and richmodels
  // it is more difficult to inject code in a backend
  // Validations will evolve on our backend
  // Business rules and validations are shared with every consumer
  // UI / REST / Tests / Microservices ... etc. etc.
  // No duplicated code
  function checkForm(form)
  {
    const url = "https://<hostname/login";
    const data = {
    };

    const other_params = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : data,
        method : "POST",
        mode : "cors"
    };

    fetch(url, other_params)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Could not reach the API: " +
                    response.statusText);
            }
        }).then(function(data) {
            document.getElementById("message").innerHTML = data.encoded;
        }).catch(function(error) {
            document.getElementById("message").innerHTML = error.message;
        });
    return true;
  }

</script>