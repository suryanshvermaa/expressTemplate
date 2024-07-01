

exports.testing=async(req,res)=>{
    try {
        console.log('controller is perfectly running');
         res.json('controller is perfectly running')
    } catch (error) {
        res.status(404).json('error in controller')
    }
}