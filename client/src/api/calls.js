
import axios from "axios";

const Call = async ( Method, Token, Url, Data, ContentType = null ) => {
  return axios({
    method: Method,
    url: Url,
    data: Data,
    headers: { "x-auth-token": Token, "content-type": ContentType == null ? "application/json" : ContentType },
  })
    .then((res) => {
      //console.log(`call token: ${Token}, call method: ${Method}, call url: ${Url}, call data: ${Data}.`);
      // console.log(`call response: ${res.data}`);
      return res;      
    })
    .catch((err) => {
      // console.log(`call token: ${Token}, call method: ${Method}, call url: ${Url}, call data: ${Data.transactionYear}.`);
      // console.log(`call error:`);
      return err;
    });
};

const HttpGet = async ( Token, Url, Data, ContentType ) => {
  return await Call("get", Token, Url, Data, ContentType);
};

const HttpPost = async ( Token, Url, Data, ContentType ) => {
  return await Call("post", Token, Url, Data, ContentType);
};

const HttpPut = async ( Token, Url, Data, ContentType ) => {
  return await Call("put", Token, Url, Data, ContentType);
};

const HttpDelete = async ( Token, Url, Data, ContentType ) => {
  return await Call("delete", Token, Url, Data, ContentType);
};

export { HttpGet, HttpPost, HttpPut, HttpDelete };