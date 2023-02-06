class Task {
    Id;
    name;
    CategoryId;
    CategoryName;
    details;
    startDate;
    endDate;
    status
    constructor(  Id, name , CategoryId, CategoryName,  details,  startDate, endDate,status){
       
        this.Id=Id;
        this.name=name;
        this.CategoryId=CategoryId;
        this.CategoryName=CategoryName;
        this.details=details;
        this.startDate=startDate;
        this.endDate=endDate;
        this.status=status;

    }

}
export default Task;