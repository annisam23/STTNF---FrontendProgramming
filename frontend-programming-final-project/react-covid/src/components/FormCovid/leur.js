else{
    const updateData = tableData.map((data)=>({...data}));

    const  updateData2 = updateData.find(
        (data)=> data.kota === kota
    );

    if(updateData2){
        if(status=== "sembuh"){
            updateData2.sembuh += number;
            updateData2.kasus+= number;
        }else if(status === "meninggal"){
            updateData2.meninggal += number;
            updateData2.kasus+= number;
        }else if(status === "dirawat"){
            updateData2.dirawat += number;
            updateData2.kasus+= number;
        }
    }else {
        if (status === "sembuh") {
        updateData.push(
            {
                kota: kota,
                kasus: number,
                sembuh: number,
                meninggal: 0,
                dirawat: 0,
            });
        } else if (status === "meninggal") {
        updateData.push(
            {
                kota: kota,
                kasus: number,
                sembuh: 0,
                meninggal: number,
                dirawat: 0,
            });
        } else if (status === "dirawat") {
        updateData.push({
                kota: kota,
                kasus: number,
                sembuh: 0,
                meninggal: 0,
                dirawat: number,
            
        });
        }
    }