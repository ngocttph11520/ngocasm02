import ListProduct from "../components/ListProduct.js";
import SidebarMenu from "../components/SidebarMenu.js";

const AdminProductPage = {
    async render(){
        return /*html*/`
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                ${SidebarMenu.render()}
                </div>
                <div class="col-sm-9">
                <h1 class="h2">Dashboard</h1>
                ${await ListProduct.render()}
                </div>
            </div>
        </div>
           `
    },
    async afterRender(){
        return `${await ListProduct.afterRender()}`
    }
};
export default AdminProductPage;