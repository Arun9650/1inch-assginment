export const TokenData = async ({chain}: {chain:number | undefined}) =>{

    const res = await fetch(`https://api.1inch.dev/token/v1.2/${chain}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization":  `Bearer ${process.env.NEXT_PUBLIC_1INCH_TOKEN}` ,
          "accept": "application/json",
        },
      
      });
      const data = await res.json();
      console.log(data);
      return data;
}