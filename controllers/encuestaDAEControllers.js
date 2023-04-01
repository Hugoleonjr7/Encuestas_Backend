const saludar = (req,res)=>{
    res.json({
        saludo: "Enviando nuestro primer mensaje al cliente"
    })
};

module.exports=saludar;