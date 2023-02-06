let Notificationrow =(props)=>{
    return <article>
    <div>
      <img src="images/avatar.png" alt="" />
    </div>
    <div>
      <span>{props.tasks.Publisher}</span>
  
      <div>
        <span>{props.tasks.categoryName}</span>
      
        <span>{props.tasks.categoryDate}</span>
      </div>
      <p>
      {props.tasks.description}
      </p>
    </div>
  </article>

}
export default Notificationrow;