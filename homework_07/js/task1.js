let a= prompt("Enter digit, please");
		let stringg = '';
		let counter=1;
    if ((a<=0) || (a>=20) || (a.toString().includes('.'))){
      console.log("console.error ('Incorrect!')")
    } else
		for(let j = 1; j <= a; j++)
    	{
    		for(let k=a;k>=counter;k--){
    			stringg+='  ';
    		}
        	for(let i = j; i >= 1 ; i--)
        	{
	            stringg += '[~] ';
        	}
        	stringg += '\n';
        	counter++;
    	}
    	console.log(stringg);
