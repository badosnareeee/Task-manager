const Product = require ("../Models/product");

const getAllProductsStatic = async (req,res) => {
    try {
        const product = await Product.find({});
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({msg: error});
    }
}
const createProducts = async (req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({msg: error});
    }
}
const getProducts = async (req,res) => {
    try {
        const {featured, company, name, numericFilters} = req.query;
        const queryObject ={};
        
        if (featured) {
            queryObject.featured = featured === "true" ? true : false;
        }

        if (company) {
            queryObject.company = company
        }

        if (name) {
            queryObject.name = {$regex:name, $options: 'i'}
        }
        if (numericFilters){
            const operatorMap = {
                '>': '$gt',
                '>=': '$gte',
                '=' : '$eq',
                '<' : '$lt',
                '<=' : '$lte'
                        }
                        const regEx = /\b(<|>|>=|=|<|<=)\b/g
                        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
                        const options = ['price','rating']
                        filters = filters.split(',').forEach((item) => {
                            const [field, operator,value] = item.split ('-')
                            if(options.includes(field)){
                                queryObject[field] = {[operator]: Number(value)}
                            }
                        });
        }
        if(sort){
            const sortlist = sort.split(',').join('');
            result = result.sort(sortlist)

        }else{
            result = result.sort('createdA')
        }
        const page =Number(req.query.page) ||1
        const limit = Number (req.query.limit) ||10
        const skip = (page - 1) * limit
        result = result.skip(skip).limit(limit)
        
        let result = Product.find(queryObject);
        const products = await result;
        res.status(200).json({products});
    } catch (error) {
        
    }
}
const updateProducts = async (req,res) => {}
const deleteProducts = async(req,res) => {}

module.exports = {getAllProductsStatic,createProducts,getProducts,updateProducts,deleteProducts}