
export const handleResponse = function(asyncResponse){
  return asyncResponse
      .then(
          function(response){
              
              if(response.ok){
                  return response;
              }
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
          },
          function(error){
              var errorF = new Error(error.message);
              throw errorF;
          }
      )
      .then(response => response.json())
}


export const request = function(url){
  return handleResponse(fetch(url));
}