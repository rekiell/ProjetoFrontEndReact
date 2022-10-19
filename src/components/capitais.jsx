const response = fetch('api.openweathermap.org')
    .then ((responseData) => {
        return responseData.json();

    })
    .catch(() => {



    })
