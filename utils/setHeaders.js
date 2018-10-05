export const setHJson=(i,method,b)=>{
  i = {
    method,
    mode:'cors',
    headers:{
      "Content-Type":"application/json",
      // "Authorization":`JWT ${sessionStorage.getItem('ses_tok')}`
    }
  }
  if(b)i.body=JSON.stringify(b)
  return i
}

export const fetchStatus=(response)=>{
  if(!response.ok){
    sessionStorage.setItem('networkError',response.toString())
    console.log(response)
    // return Promise.reject(new Error(response.statusText))
    return new Error(response.statusText)
    // return response.statusText.json()
  }
  return response.json()
}
