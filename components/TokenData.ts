export const TokenData = async ({chain}: {chain:number | undefined}) =>{

    const res = await fetch(`https://api.1inch.dev/token/v1.2/${chain}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization":  `Bearer wINrkvzrIFDAHM3b9k9DHcR5r13jJoD4` ,
          "accept": "application/json",
        },
      
      });
      const data = await res.json();
      console.log(data);
      return data;
}