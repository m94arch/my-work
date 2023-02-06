class TaskBlog {
  id;
  title;
  Publisher;
  description;
  categoryDate;
  categoryId;
  categoryName;
  constructor(id, title, Publisher, description, categoryId, categoryName ,categoryDate) {
    this.id = id;
    this.title = title;
    this.Publisher = Publisher;
    this.description = description;
    this.categoryDate = categoryDate;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
   
  }
}

export default TaskBlog;
