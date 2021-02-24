import ProductAPI from "../api/productAPI";
import { reRender, $} from '../utils.js';

const ListProduct = {
    async render(){
        const { data : product } = await ProductAPI.getAll();


        return /*html*/`
          <div class="col-sm-9">
          <div class="table-responsive">
              <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th width="200">Action</th>
              <!-- <th>Header</th>
              <th>Header</th> -->
            </tr>
          </thead>
          <tbody>
            ${product.map( (product, index) => {
                return `
                    <tr>
                        <td>${index}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            <a href="/#/product/${product.id}/edit" class="btn btn-primary">Update</a>
                            <button type="button" class="btn btn-danger bnt-remove" data-id="${product.id}">Remove</button>
                        </td>
                        <td>text</td>
                  </tr>
                `
            }).join("")
        }
            
          </tbody>
        </table>
        </div>
          </div>
        `
    },
    async afterRender(){
      const btns = $('#list-products .btn');
      console.log(btns);
      btns.forEach( btn => {
        const id = btn.dataset.id;
        btn.addEventListener('click', function(){
          const question = confirm('Bạn có chắc muốn xóa không ?')
          ProductAPI.remove(id);
          reRender(ListProduct, '#list-products');

        })
      })
    }
}
export default ListProduct;