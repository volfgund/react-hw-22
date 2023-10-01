import "./CourseCard.css" ;
const CourseCard = ({ course }) => {
    const {
      image,
      level,
      title,
      user,
      rating,
      students,
      modules,
      duration,
      isMyCource,
      finishedModules,
    } = course;
  
    return (
      <div className="card">
        <div className="image__container">
          <img src={image} alt="" />
          <div className="level">{level}</div>
        </div>
        <h3 className="card__title">{title}</h3>
        <div className="card__info">
          <div className="user">
            <img src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
          </div>
          <div className="rating">
            <p>{rating}</p>
          </div>
        </div>
  
        {isMyCource ? (
          <div>
            <progress value={finishedModules} max={modules}>
              {((finishedModules / modules) * 100).toFixed(2)}%
            </progress>
            <div className="card__info">
              <p>
                {finishedModules} / {modules} Modules
              </p>
              <div>
                {((finishedModules / modules) * 100).toFixed(2)} %
              </div>
            </div>
          </div>
        ) : (
          <div className="card__info">
            <div>{students} Student</div>
            <div>{modules} Modules</div>
            <div>{(duration / 3600).toFixed(2)}h</div>
          </div>
        )}
      </div>
    );
  };
  
  export default CourseCard;