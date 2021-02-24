import ProductAPI from '../api/productAPI.js';
import {  $ } from '../utils.js';

const ProductAddPage = {
    render(){
        return /*html*/`
           


<div class="container">
  <div class="row">
  <form id="form-add">
                <h1>Thêm sản Phẩm </h1>
            <div class="form-group">
                
            <label for="inputPassword5" class="form-label">Product Name</label>
                <input type="text" id="product-name" class="form-control" aria-describedby="passwordHelpBlock">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input type="number" class="form-control" id="price" placeholder="Giá tiền">
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Mô ta</label>
            <textarea class="form-control" rows="3">Mô tả</textarea>
            </div>
            <div class="form-group">
                <label for="exampleInputFile">Hình ảnh</label>
                <input type="file" id="exampleInputFile">
                <p class="help-block">Example block-level help text here.</p>
            </div>
            <div class="checkbox">
                <label>
                <input type="checkbox"> Check me out
                </label>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
         </form>
  </div>
</div>

          
            `
    },
    afterRender(){
        // ProductApi.add()
        $('#form-add').addEventListener('submit', e =>{
            e.preventDefault();
            const product = {
                id: 112,
                name: $('#product-name').value
            }
            console.log(product);
            ProductAPI.add(product);
            
        })
    }
}
export default ProductAddPage;