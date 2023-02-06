import axios from "axios";
import Category from "../models/Category";

class CategoriesController {
  // CRUD
  // category is model ..
  async create(category) {
    // ?access_token=CREDENTIAL
    let token = localStorage.getItem("token");
    try {
      let response = await axios.post(
        `https://redux-6aad3-default-rtdb.firebaseio.com/categories.json?auth=${token}`,
        {
          name: category.name,
        }
      );
      console.log(response);
      if (response.status == 200) {
        // return true;
        return response.data.name;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async read() {
        let token = localStorage.getItem("token");

    try {
      let response = await axios.get(
        `https://redux-6aad3-default-rtdb.firebaseio.com/categories.json?auth=${token}`
      );
      //   console.log(response.data);
      if (response.data.length != 0) {
        let categories = [];
        for (let key in response.data) {
          let category = new Category();
          category.id = key;
          category.name = response.data[key].name;
          categories.push(category);
        }
        console.log(categories);

        return categories;
      }
      return [];
    } catch (error) {
      return [];
    }
  }
  async update(category) {
    let token = localStorage.getItem("token");

try {
    let response = await axios.put(
      `https://redux-6aad3-default-rtdb.firebaseio.com/categories/${category.id}.json?auth=${token}`,
      {
         name:category.name 
      }
    );
    return true;
} catch (error) {
    return false;
}
  }
  async delete(id) {
    let token = localStorage.getItem("token");

    try {
      let response = await axios.delete(
        `https://redux-6aad3-default-rtdb.firebaseio.com/categories/${id}.json?auth=${token}`
      );
      return true;
    } catch (error) {
        return false;
    }
  }
}

export default CategoriesController;
